/* Arabic Grammar Lab — shared app logic */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const AR = /[؀-ۿ]/;
  const store = {
    get(k, d) { try { const v = localStorage.getItem('ag_' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('ag_' + k, JSON.stringify(v)); } catch (e) { } }
  };

  /* ---------------- language ---------------- */
  const urlLang = new URLSearchParams(location.search).get('lang');
  let lang = urlLang || store.get('lang', null) || ((navigator.language || 'ko').slice(0, 2));
  if (!window.I18N[lang]) lang = 'en';
  const T = k => { const d = window.I18N[lang] || {}; if (Object.prototype.hasOwnProperty.call(d, k)) return d[k]; return window.I18N.en[k] != null ? window.I18N.en[k] : k; };
  if (urlLang && window.I18N[urlLang]) store.set('lang', urlLang);
  const tx = o => { if (o == null) return ''; if (typeof o === 'string') return o; return o[lang] || (lang === 'ko' ? o.ko : o.en) || o.en || o.ko || ''; };
  const rich = s => String(s).replace(/\[\[(.+?)\]\]/g, (m, a) => `<span class="arw" lang="ar" data-say="${esc(a)}">${a}</span>`);
  const plain = s => String(s).replace(/\[\[(.+?)\]\]/g, '$1').replace(/<[^>]+>/g, '');

  /* ---------------- audio ---------------- */
  const VOICES = { m: 'hamed', f: 'zariyah' };
  let voice = store.get('voice', 'm'), speed = store.get('speed', 1);
  let manifest = null;
  const norm = s => String(s).normalize('NFC').replace(/[\s ]+/g, ' ').trim();
  function hkey(s) { let h = 0x811c9dc5; for (const ch of norm(s)) { h ^= ch.codePointAt(0); h = Math.imul(h, 0x01000193) >>> 0; } return ('0000000' + h.toString(16)).slice(-8); }
  const manifestReady = fetch('audio/manifest.json', { cache: 'no-cache' }).then(r => r.ok ? r.json() : null).then(j => { manifest = j; }).catch(() => { });
  let current = null, currentEl = null;
  function stopAudio() {
    if (current) { try { current.pause(); } catch (e) { } current = null; }
    if (window.speechSynthesis) speechSynthesis.cancel();
    if (currentEl) currentEl.classList.remove('playing'); currentEl = null;
  }
  let synthVoice = null;
  function pickSynthVoice() {
    if (!window.speechSynthesis) return null;
    const vs = speechSynthesis.getVoices().filter(v => /^ar/i.test(v.lang));
    if (!vs.length) return null;
    const want = voice === 'f' ? /zariyah|salma|laila|amina|hoda|mariam|fatima|female|sana|rana/i : /hamed|shakir|maged|majed|naayf|tarik|hamdan|male|omar|bassel/i;
    const score = v => (/natural|neural|online/i.test(v.name) ? 8 : 0) + (/google/i.test(v.name) ? 5 : 0) + (want.test(v.name) ? 3 : 0) + (/sa|ae|eg|001/i.test(v.lang) ? 1 : 0);
    return vs.sort((a, b) => score(b) - score(a))[0];
  }
  if (window.speechSynthesis) { speechSynthesis.onvoiceschanged = () => { synthVoice = pickSynthVoice(); }; synthVoice = pickSynthVoice(); }
  function speakSynth(text, el, rate) {
    if (!window.speechSynthesis) { toast('🔇'); return; }
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'ar-SA'; synthVoice = synthVoice || pickSynthVoice(); if (synthVoice) { u.voice = synthVoice; u.lang = synthVoice.lang; }
    u.rate = 0.9 * rate;
    u.onend = u.onerror = () => { if (currentEl === el && el) el.classList.remove('playing'); };
    speechSynthesis.speak(u);
  }
  async function speak(text, el, opts = {}) {
    if (!text) return;
    const same = currentEl && currentEl === el;
    stopAudio(); if (same && !opts.force) return;
    if (el) { el.classList.add('playing'); currentEl = el; }
    await manifestReady;
    const rate = opts.slow ? Math.min(speed, 0.7) : speed;
    const k = hkey(text), v = VOICES[voice];
    if (manifest && manifest.files && manifest.files[v] && manifest.files[v][k]) {
      const a = new Audio(`audio/${v}/${k}.mp3`); a.playbackRate = rate; a.preservesPitch = true; current = a;
      a.onended = () => { if (el) el.classList.remove('playing'); if (current === a) current = null; };
      a.onerror = () => { current = null; speakSynth(text, el, rate); };
      a.play().catch(() => speakSynth(text, el, rate));
    } else speakSynth(text, el, rate);
  }
  document.addEventListener('click', e => {
    const s = e.target.closest('[data-say]');
    if (s && !s.closest('.opt') && !s.closest('.tile')) { e.preventDefault(); speak(s.dataset.say, s.classList.contains('play') || s.classList.contains('arw') || s.classList.contains('speak') ? s : null, { slow: s.dataset.slow === '1' }); }
  });
  const ICON_PLAY = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1A9 9 0 0 0 14 3.2z"/></svg>';
  const playBtn = (text, cls = '') => `<button class="play ${cls}" data-say="${esc(text)}" title="${esc(T('play'))}" aria-label="${esc(T('play'))}">${ICON_PLAY}</button>`;
  const slowBtn = text => `<button class="play sm slow" data-say="${esc(text)}" data-slow="1" title="${esc(T('slow'))}">0.7×</button>`;

  /* ---------------- toast ---------------- */
  let tt;
  function toast(m) { let d = $('.toast'); if (!d) { d = document.createElement('div'); d.className = 'toast'; document.body.appendChild(d); } d.textContent = m; d.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => d.classList.remove('show'), 2200); }

  /* ---------------- top bar ---------------- */
  function topbar(extra = '') {
    const opts = window.LANGS.map(l => `<option value="${l.code}" ${l.code === lang ? 'selected' : ''}>${l.name}</option>`).join('');
    return `<header class="topbar"><div class="wrap">
      <a class="brand" href="index.html"><span class="logo">ع</span><span class="t">${esc(T('siteTitle'))}</span></a>
      <div class="spacer"></div>${extra}
      <div class="lang-wrap" style="position:relative">
        <button class="tb-btn" id="setBtn" aria-label="${esc(T('settings'))}">🔊 <span class="hide-sm">${esc(T('voice'))}</span></button>
        <div class="settings-pop" id="setPop">
          <h4>${esc(T('settings'))}</h4>
          <label>${esc(T('voice'))}</label>
          <div class="seg" id="segVoice"><button data-v="m">${esc(T('male'))}</button><button data-v="f">${esc(T('female'))}</button></div>
          <label>${esc(T('speed'))}</label>
          <div class="seg" id="segSpeed"><button data-s="0.7">0.7×</button><button data-s="0.85">0.85×</button><button data-s="1">1×</button></div>
          <div class="note">🎧 ${esc(T('audioNote'))}</div>
        </div>
      </div>
      <div class="lang-wrap"><span class="globe">🌐</span><select id="langSel" aria-label="${esc(T('language'))}">${opts}</select></div>
    </div></header>${T('contentNote') ? `<div class="content-note">${esc(T('contentNote'))}</div>` : ''}`;
  }
  function bindTopbar() {
    $('#langSel').addEventListener('change', e => { store.set('lang', e.target.value); const u = new URL(location.href); u.searchParams.delete('lang'); location.href = u.toString(); });
    const pop = $('#setPop');
    $('#setBtn').addEventListener('click', e => { e.stopPropagation(); pop.classList.toggle('open'); });
    document.addEventListener('click', e => { if (!e.target.closest('#setPop')) pop.classList.remove('open'); });
    const paint = () => { $$('#segVoice button').forEach(b => b.classList.toggle('on', b.dataset.v === voice)); $$('#segSpeed button').forEach(b => b.classList.toggle('on', +b.dataset.s === +speed)); };
    $$('#segVoice button').forEach(b => b.onclick = () => { voice = b.dataset.v; store.set('voice', voice); synthVoice = pickSynthVoice(); paint(); speak('مَرْحَبًا', null, { force: true }); });
    $$('#segSpeed button').forEach(b => b.onclick = () => { speed = +b.dataset.s; store.set('speed', speed); paint(); });
    paint();
    document.documentElement.lang = lang;
  }

  /* ---------------- parts ---------------- */
  const PARTS = [[1, 8], [9, 10], [11, 20], [21, 22], [23, 29], [30, 31], [32, 38]];
  const scores = () => store.get('scores', {});

  /* ================= INDEX PAGE ================= */
  function initIndex() {
    const idx = window.CH_INDEX || [];
    document.title = T('siteTitle') + ' · Arabic Grammar';
    const sc = scores();
    const totalPts = idx.reduce((a, c) => a + c.points, 0);
    const doneCh = idx.filter(c => sc[c.id]).length;
    const avg = doneCh ? Math.round(idx.reduce((a, c) => a + (sc[c.id] ? sc[c.id].best : 0), 0) / idx.length) : 0;
    const last = store.get('last', null);
    document.body.innerHTML = topbar() + `
    <section class="hero"><div class="wrap">
      <p class="big-ar" lang="ar">قَوَاعِدُ اللُّغَةِ الْعَرَبِيَّةِ</p>
      <h1>${esc(T('siteTitle'))}</h1>
      <p class="sub">${esc(T('siteSub'))}</p>
      <p class="lead">${esc(T('heroLead'))}</p>
      <div class="stats">
        <div class="stat"><b>${idx.length}</b><small>${esc(T('chapters'))}</small></div>
        <div class="stat"><b>${totalPts}</b><small>${esc(T('exercises'))} (${esc(T('points'))})</small></div>
        <div class="stat"><b>${doneCh}/${idx.length}</b><small>${esc(T('progress'))}</small></div>
      </div>
      <div class="progress-line"><i style="width:${Math.round(doneCh / Math.max(1, idx.length) * 100)}%"></i></div>
      <div class="hero-actions">
        ${last ? `<a class="btn btn-gold" href="chapter.html?c=${last}">▶ ${esc(T('continueBtn'))} · ${last}</a>` : ''}
        <a class="btn ${last ? 'btn-ghost' : 'btn-gold'}" href="chapter.html?c=1">${esc(T('startBtn'))}</a>
      </div>
    </div></section>
    <main class="wrap">
      <div class="searchbar"><input id="q" type="search" placeholder="${esc(T('search'))}" autocomplete="off"></div>
      <div id="list"></div>
      <footer>📘 Mohammed Sawaie, <i>Fundamentals of Arabic Grammar</i> (Routledge, 2014) · ${esc(T('footer'))}<br>🎧 ${esc(T('audioNote'))} · 다인원격평생교육직업학원 · 후안샘</footer>
    </main>`;
    bindTopbar();
    const render = q => {
      q = (q || '').trim().toLowerCase();
      let html = '', any = false;
      PARTS.forEach(([a, b], pi) => {
        const chs = idx.filter(c => c.id >= a && c.id <= b && (!q || (c.id + ' ' + c.ar + ' ' + c.title.ko + ' ' + c.title.en + ' ' + c.summary.ko + ' ' + c.summary.en + ' ' + (c.kw || []).join(' ')).toLowerCase().includes(q)));
        if (!chs.length) return; any = true;
        html += `<section class="part"><div class="part-head"><span class="pn">Part ${pi + 1}</span><h2>${esc(T('part' + (pi + 1)))}</h2><span class="range">${a}–${b}</span></div><div class="grid">` +
          chs.map(c => { const s = sc[c.id]; const p = s ? s.best : 0; return `<a class="ch-card" href="chapter.html?c=${c.id}">
            <div class="top"><span class="ch-num">${esc(T('chLabel').replace('{n}', c.id))}</span>${s ? `<div class="ring" style="--p:${p}"><span>${p}%</span></div>` : `<span class="badge">${esc(T('notStarted'))}</span>`}</div>
            <div class="ar-title" lang="ar">${c.ar}</div>
            <h3>${esc(tx(c.title))}</h3><p>${esc(tx(c.summary))}</p>
            <div class="meta"><span>📄 ${esc(T('pages'))} ${c.pages}</span><span>✍️ ${c.points} ${esc(T('points'))}</span></div></a>`; }).join('') + `</div></section>`;
      });
      $('#list').innerHTML = any ? html : `<div class="empty">${esc(T('noResult'))}</div>`;
    };
    render(''); $('#q').addEventListener('input', e => render(e.target.value));
  }

  /* ================= CHAPTER PAGE ================= */
  function initChapter() {
    const n = parseInt(new URLSearchParams(location.search).get('c') || '1', 10);
    const s = document.createElement('script');
    s.src = `data/ch${String(n).padStart(2, '0')}.js`;
    s.onload = () => renderChapter(n, window.CH[n]);
    s.onerror = () => { document.body.innerHTML = topbar() + `<main class="wrap"><div class="empty">Chapter ${n} not found. <a href="index.html">${esc(T('home'))}</a></div></main>`; bindTopbar(); };
    document.head.appendChild(s);
  }

  function cellHtml(c, isHead) {
    if (typeof c === 'string') { if (AR.test(c) && !isHead) return `<td class="arc" lang="ar" data-say="${esc(c)}">${c}</td>`; return isHead ? `<th>${rich(c)}</th>` : `<td>${rich(c)}</td>`; }
    return isHead ? `<th>${rich(tx(c))}</th>` : `<td>${rich(tx(c))}</td>`;
  }
  const TYPE_LABEL = { mc: 'Multiple choice', tf: 'True / False', order: 'Word order', match: 'Matching', listen: 'Listening 🎧' };

  function renderChapter(n, C) {
    if (!C) return;
    store.set('last', n);
    const idx = window.CH_INDEX || [];
    const prev = idx.find(c => c.id === n - 1), next = idx.find(c => c.id === n + 1);
    document.title = `${n}. ${tx(C.title)} · ${T('siteTitle')}`;
    const totalPts = C.exercises.reduce((a, s) => a + (s.type === 'match' ? s.items.reduce((x, it) => x + it.pairs.length, 0) : s.items.length), 0);

    const secs = C.sections.map((s, i) => `
      <article class="sec" id="s${i}">
        <h2><span class="no">${esc(s.no || '')}</span>${rich(tx(s.title))}</h2>
        <div class="body">${rich(tx(s.body))}</div>
        ${s.table ? `<div class="tbl-wrap"><table class="para"><thead><tr>${s.table.head.map(h => cellHtml(h, true)).join('')}</tr></thead><tbody>${s.table.rows.map(r => `<tr>${r.map(c => cellHtml(c)).join('')}</tr>`).join('')}</tbody></table></div>` : ''}
        ${s.examples && s.examples.length ? `<div class="ex-list">${s.examples.map(e => `
          <div class="ex">${playBtn(e.ar)}<div class="txt">
            <div class="arline" lang="ar">${e.ar}</div>
            ${e.tr ? `<div class="tr">${esc(e.tr)}</div>` : ''}
            <div class="mean">${esc(tx(e))}</div>
            ${e.note ? `<div class="note">💡 ${rich(tx(e.note))}</div>` : ''}
          </div>${slowBtn(e.ar)}</div>`).join('')}</div>` : ''}
        ${s.tip ? `<div class="tipbox"><b>💡 ${esc(T('tip'))}</b> · ${rich(tx(s.tip))}</div>` : ''}
      </article>`).join('');

    const vocab = (C.vocab || []).map(v => `<div class="vcard"><div class="in">
        <div class="f">${playBtn(v.ar, 'sm')}<div class="w" lang="ar">${v.ar}</div>${v.tr ? `<div class="t">${esc(v.tr)}</div>` : ''}</div>
        <div class="b">${esc(tx(v))}${lang !== 'en' ? `<small>${esc(v.en)}</small>` : ''}</div></div></div>`).join('');

    document.body.innerHTML = topbar() + `
    <section class="hero ch-hero"><div class="wrap">
      <div class="crumb"><a href="index.html">← ${esc(T('home'))}</a></div>
      <span class="num">${esc(T('chLabel').replace('{n}', n))}</span> <span style="opacity:.8;font-size:13px;margin-left:6px">📄 ${esc(T('pages'))} ${esc(C.pages || '')}</span>
      <p class="big-ar" lang="ar"><span class="speak" data-say="${esc(C.ar)}" style="cursor:pointer">${C.ar}</span></p>
      <h1>${esc(tx(C.title))}</h1>
      <p class="lead" style="margin-bottom:0">${rich(tx(C.summary))}</p>
      <div class="goals">${(C.goals || []).map(g => `<div class="goal"><span>${rich(tx(g))}</span></div>`).join('')}</div>
    </div></section>
    <nav class="tabs"><div class="wrap">
      <button class="tab on" data-p="lesson">📘 ${esc(T('lesson'))}</button>
      <button class="tab" data-p="vocab">🗂 ${esc(T('vocab'))}<span class="cnt">${(C.vocab || []).length}</span></button>
      <button class="tab" data-p="practice">✍️ ${esc(T('practice'))}<span class="cnt">${totalPts}</span></button>
      <div class="toggles">
        <label class="tg"><input type="checkbox" id="tgTr" checked> ${esc(T('showTr'))}</label>
        <label class="tg"><input type="checkbox" id="tgMean" checked> ${esc(T('showMeaning'))}</label>
      </div>
    </div></nav>
    <main class="wrap">
      <div class="panel on" id="p-lesson"><div class="layout">
        <aside class="toc"><b>${esc(T('toc'))}</b>${C.sections.map((s, i) => `<a href="#s${i}"><span>${esc(s.no || '')}</span>${esc(plain(tx(s.title)))}</a>`).join('')}</aside>
        <div>${secs}<div style="text-align:center;margin:10px 0 0"><button class="btn btn-teal" data-go="practice">✍️ ${esc(T('practice'))} →</button></div></div>
      </div></div>
      <div class="panel" id="p-vocab"><p class="hint">${esc(T('flipHint'))}</p><div class="vgrid">${vocab}</div></div>
      <div class="panel" id="p-practice">
        <div class="scorebar"><div><div class="lbl">${esc(T('chapterScore'))}</div><div class="big" id="totScore">– / ${totalPts}</div></div>
          <div class="msg" id="totMsg"></div>
          <div class="actions"><button class="btn btn-teal btn-sm" id="gradeAll" title="${esc(T('checkAllHint'))}">✅ ${esc(T('checkAll'))}</button><button class="btn btn-line btn-sm" id="resetAll">↺ ${esc(T('resetAll'))}</button></div></div>
        <div id="sets"></div>
      </div>
      <div class="chnav">
        ${prev ? `<a class="p" href="chapter.html?c=${prev.id}"><small>← ${esc(T('prev'))}</small>${prev.id}. ${esc(tx(prev.title))}</a>` : '<span style="flex:1"></span>'}
        ${next ? `<a class="n" href="chapter.html?c=${next.id}"><small>${esc(T('next'))} →</small>${next.id}. ${esc(tx(next.title))}</a>` : '<span style="flex:1"></span>'}
      </div>
      <footer>📘 Mohammed Sawaie, <i>Fundamentals of Arabic Grammar</i> (Routledge, 2014) · ${esc(T('footer'))}</footer>
    </main>`;
    bindTopbar();

    // tabs
    const show = p => { $$('.tab').forEach(t => t.classList.toggle('on', t.dataset.p === p)); $$('.panel').forEach(x => x.classList.toggle('on', x.id === 'p-' + p)); history.replaceState(null, '', `?c=${n}#${p}`); window.scrollTo({ top: $('.tabs').offsetTop - 60 > window.scrollY ? window.scrollY : $('.tabs').offsetTop - 59 }); };
    $$('.tab').forEach(t => t.onclick = () => show(t.dataset.p));
    $$('[data-go]').forEach(b => b.onclick = () => show(b.dataset.go));
    if (/practice|vocab/.test(location.hash)) show(location.hash.slice(1));
    // toggles
    const trOn = store.get('tr', true), meanOn = store.get('mean', true);
    $('#tgTr').checked = trOn; $('#tgMean').checked = meanOn;
    document.body.classList.toggle('no-tr', !trOn); document.body.classList.toggle('no-mean', !meanOn);
    $('#tgTr').onchange = e => { store.set('tr', e.target.checked); document.body.classList.toggle('no-tr', !e.target.checked); };
    $('#tgMean').onchange = e => { store.set('mean', e.target.checked); document.body.classList.toggle('no-mean', !e.target.checked); };
    document.addEventListener('click', e => { const m = e.target.closest('.mean'); if (m) m.classList.toggle('reveal'); const v = e.target.closest('.vcard'); if (v && !e.target.closest('.play')) v.classList.toggle('flip'); });

    buildExercises(n, C, totalPts);
  }

  /* ---------------- exercises ---------------- */
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  const optLabel = o => typeof o === 'string' ? o : tx(o);
  const isArOpt = o => typeof o === 'string' && AR.test(o);
  const fillBlank = (ar, ans) => ar.replace(/_{2,}/, ans);

  function buildExercises(n, C, totalPts) {
    const host = $('#sets');
    const state = C.exercises.map(() => ({ checked: false, score: 0, total: 0 }));
    host.innerHTML = C.exercises.map((set, si) => `
      <section class="set" id="set${si}" data-si="${si}">
        <div class="set-head"><div class="n">${si + 1}</div><div><h3>${rich(tx(set.title))}</h3><div class="instr">${rich(tx(set.instr))}</div></div><span class="type">${TYPE_LABEL[set.type]}</span></div>
        <div class="items"></div>
        <div class="set-foot"><button class="btn btn-teal btn-sm chk">✅ ${esc(T('check'))}</button><button class="btn btn-line btn-sm rst" style="display:none">↺ ${esc(T('retry'))}</button><span class="res"></span></div>
      </section>`).join('');
    C.exercises.forEach((set, si) => renderSet(si));

    function renderSet(si) {
      const set = C.exercises[si], box = $(`#set${si} .items`);
      let q = 0;
      box.innerHTML = set.items.map((it, ii) => {
        q++;
        let h = '';
        if (set.type === 'mc' || set.type === 'listen') {
          const hasBlank = it.ar && /_{2,}/.test(it.ar);
          if (it.prompt) h += `<div class="q-prompt">${rich(tx(it.prompt))}</div>`;
          if (set.type === 'listen') h += `<div class="listen-box">${playBtn(it.ar)}${slowBtn(it.ar)}<span class="hint" style="margin:0">${esc(T('listenAgain'))}</span></div>`;
          else if (it.ar) h += `<div class="q-ar" lang="ar"><span>${hasBlank ? esc(it.ar).replace(/_{2,}/, '<span class="blank">&nbsp;?&nbsp;</span>') : it.ar}</span>${hasBlank ? '' : playBtn(it.ar, 'sm')}</div>`;
          h += `<div class="opts">${it.options.map((o, oi) => `<button class="opt ${isArOpt(o) ? 'arop' : ''}" data-oi="${oi}" ${isArOpt(o) ? 'lang="ar"' : ''}>${isArOpt(o) ? o : rich(optLabel(o))}</button>`).join('')}</div>`;
        } else if (set.type === 'tf') {
          if (it.ar) h += `<div class="q-ar" lang="ar"><span>${it.ar}</span>${playBtn(it.ar, 'sm')}</div>`;
          h += `<div class="q-prompt">${rich(tx(it.prompt))}</div><div class="opts tf"><button class="opt" data-oi="1">⭕ ${esc(T('tTrue'))}</button><button class="opt" data-oi="0">❌ ${esc(T('tFalse'))}</button></div>`;
        } else if (set.type === 'order') {
          const tiles = shuffle(it.words.map((w, wi) => ({ w, wi })));
          h += `<div class="order-meaning">💬 ${esc(tx(it))}</div><div class="order-ans" lang="ar"></div><div class="order-bank" lang="ar">${tiles.map(t => `<button class="tile" data-w="${esc(t.w)}" data-wi="${t.wi}">${t.w}</button>`).join('')}</div>
            <div style="margin-top:8px"><button class="btn btn-line btn-sm oclear">⌫ ${esc(T('clear'))}</button> <span class="hint">${esc(T('tapToBuild'))}</span></div>`;
        } else if (set.type === 'match') {
          const rights = shuffle(it.pairs.map((p, pi) => ({ pi, label: optLabel(p[1]) })));
          h += it.pairs.map((p, pi) => `<div class="match-row" data-pi="${pi}"><span class="ml" lang="ar" data-say="${esc(p[0])}">🔈 ${p[0]}</span><select><option value="">${esc(T('choose'))}</option>${rights.map(r => `<option value="${r.pi}">${esc(plain(r.label))}</option>`).join('')}</select><span class="fix"></span></div>`).join('');
        }
        h += `<div class="feedback"></div>`;
        return `<div class="item" data-ii="${ii}"><div class="qn">${q}</div><div class="qbody">${h}</div></div>`;
      }).join('');
      // interactions
      $$('.item', box).forEach(itemEl => {
        $$('.opt', itemEl).forEach(b => b.onclick = () => { if (itemEl.classList.contains('locked')) return; $$('.opt', itemEl).forEach(x => x.classList.remove('sel')); b.classList.add('sel'); const bl = $('.blank', itemEl); if (bl) { bl.textContent = b.textContent; } });
        const ans = $('.order-ans', itemEl), bank = $('.order-bank', itemEl);
        if (ans) {
          bank.addEventListener('click', e => { const t = e.target.closest('.tile'); if (!t || t.classList.contains('used') || itemEl.classList.contains('locked')) return; t.classList.add('used'); const c = t.cloneNode(true); c.classList.remove('used'); c.dataset.src = t.dataset.wi; ans.appendChild(c); });
          ans.addEventListener('click', e => { const t = e.target.closest('.tile'); if (!t || itemEl.classList.contains('locked')) return; const src = $(`.tile[data-wi="${t.dataset.src}"]`, bank); if (src) src.classList.remove('used'); t.remove(); });
          $('.oclear', itemEl).onclick = () => { if (itemEl.classList.contains('locked')) return; ans.innerHTML = ''; $$('.tile', bank).forEach(t => t.classList.remove('used')); };
        }
      });
      const sec = $(`#set${si}`);
      $('.chk', sec).onclick = () => { checkSet(si); updateTotal(true); };
      $('.rst', sec).onclick = () => { state[si] = { checked: false, score: 0, total: 0 }; renderSet(si); $('.chk', sec).style.display = ''; $('.rst', sec).style.display = 'none'; $('.res', sec).textContent = ''; $('.res', sec).className = 'res'; updateTotal(false); };
    }

    function feedback(itemEl, ok, html) { const f = $('.feedback', itemEl); f.className = 'feedback show ' + (ok ? 'ok' : 'no'); f.innerHTML = html; itemEl.classList.add(ok ? 'ok' : 'no', 'locked'); }

    function checkSet(si) {
      const set = C.exercises[si], sec = $(`#set${si}`);
      let score = 0, total = 0, unans = 0;
      $$('.item', sec).forEach(itemEl => {
        const it = set.items[+itemEl.dataset.ii];
        const exp = it.explain ? `<div style="margin-top:4px">📝 ${rich(tx(it.explain))}</div>` : '';
        if (set.type === 'mc' || set.type === 'listen' || set.type === 'tf') {
          total++;
          const sel = $('.opt.sel', itemEl); const correctIdx = set.type === 'tf' ? (it.answer ? 1 : 0) : it.answer;
          const chosen = sel ? +sel.dataset.oi : -1; if (!sel) unans++;
          const ok = chosen === correctIdx; if (ok) score++;
          $$('.opt', itemEl).forEach(b => { if (+b.dataset.oi === correctIdx) b.classList.add('right'); else if (b === sel) b.classList.add('wrong'); });
          let extra = '';
          if (set.type !== 'tf') {
            const ansOpt = it.options[it.answer];
            if (it.ar && /_{2,}/.test(it.ar) && isArOpt(ansOpt)) { const full = fillBlank(it.ar, ansOpt); const bl = $('.blank', itemEl); if (bl) bl.textContent = ansOpt; extra = `<div style="display:flex;gap:10px;align-items:center;justify-content:flex-end;margin-top:6px"><span class="fa" lang="ar">${full}</span>${playBtn(full, 'sm')}</div>`; }
            else if (set.type === 'listen') extra = `<div style="display:flex;gap:10px;align-items:center;justify-content:flex-end;margin-top:6px"><span class="fa" lang="ar">${it.ar}</span></div>`;
          }
          feedback(itemEl, ok, `<b>${ok ? '✔ ' + esc(T('correct')) : (sel ? '✘ ' + esc(T('incorrect')) : '— ' + esc(T('unanswered')))}</b>${!ok && set.type !== 'tf' ? ` · ${esc(T('correctAnswer'))}: <b ${isArOpt(it.options[it.answer]) ? 'class="fa" lang="ar"' : ''}>${isArOpt(it.options[it.answer]) ? it.options[it.answer] : rich(optLabel(it.options[it.answer]))}</b>` : ''}${!ok && set.type === 'tf' ? ` · ${esc(T('correctAnswer'))}: <b>${esc(it.answer ? T('tTrue') : T('tFalse'))}</b>` : ''}${extra}${exp}`);
        } else if (set.type === 'order') {
          total++;
          const ans = $('.order-ans', itemEl); const built = $$('.tile', ans).map(t => t.dataset.w).join(' ');
          const target = it.words.join(' '); if (!built) unans++;
          const ok = built === target; if (ok) score++;
          ans.classList.add(ok ? 'right' : 'wrong');
          feedback(itemEl, ok, `<b>${ok ? '✔ ' + esc(T('correct')) : (built ? '✘ ' + esc(T('incorrect')) : '— ' + esc(T('unanswered')))}</b><div style="display:flex;gap:10px;align-items:center;justify-content:flex-end;margin-top:6px"><span class="fa" lang="ar">${target}</span>${playBtn(target, 'sm')}</div>`);
        } else if (set.type === 'match') {
          let ok = 0;
          $$('.match-row', itemEl).forEach(r => { total++; const pi = +r.dataset.pi; const sel = $('select', r); if (sel.value === '') unans++; const good = sel.value !== '' && +sel.value === pi; if (good) { ok++; score++; } sel.classList.add(good ? 'right' : 'wrong'); sel.disabled = true; if (!good) $('.fix', r).textContent = '→ ' + plain(optLabel(it.pairs[pi][1])); });
          feedback(itemEl, ok === it.pairs.length, `<b>${ok} / ${it.pairs.length}</b>`);
        }
      });
      state[si] = { checked: true, score, total };
      $('.chk', sec).style.display = 'none'; $('.rst', sec).style.display = '';
      const r = $('.res', sec); r.textContent = `${T('setScore')}: ${score} / ${total}` + (unans ? ` · ${T('unanswered')} ${unans}` : ''); r.className = 'res' + (score === total ? ' ok' : '');
    }

    function updateTotal(save) {
      const checked = state.filter(s => s.checked);
      if (!checked.length) { $('#totScore').textContent = `– / ${totalPts}`; $('#totMsg').textContent = ''; return; }
      const sc = checked.reduce((a, s) => a + s.score, 0);
      const pct = Math.round(sc / totalPts * 100);
      $('#totScore').textContent = `${sc} / ${totalPts} (${pct}%)`;
      const all = checked.length === state.length;
      $('#totMsg').textContent = all ? (pct === 100 ? T('perfect') : pct >= 80 ? T('good') : pct >= 60 ? T('keepGoing') : T('tryAgain')) : `${checked.length} / ${state.length}`;
      if (save && all) { const S = scores(); const prevBest = S[n] ? S[n].best : 0; S[n] = { best: Math.max(prevBest, pct), last: pct, ts: Date.now() }; store.set('scores', S); toast(`${T('yourScore')}: ${pct}% · ${T('saved')}`); }
    }

    $('#gradeAll').onclick = () => { C.exercises.forEach((s, si) => { if (!state[si].checked) checkSet(si); }); updateTotal(true); $('.scorebar').scrollIntoView({ behavior: 'smooth', block: 'center' }); };
    $('#resetAll').onclick = () => { if (!confirm(T('confirmReset'))) return; C.exercises.forEach((s, si) => { const sec = $(`#set${si}`); $('.rst', sec).click(); }); };
  }

  window.AG = { initIndex, initChapter, hkey, norm };
})();

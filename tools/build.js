// Builds data/index.js (chapter list for the main page) and audio/texts.json (every Arabic string the site can speak).
// Run: node tools/build.js
const fs = require('fs'), vm = require('vm'), path = require('path');
const ROOT = path.join(__dirname, '..');
const AR = /[؀-ۿ]/;
const norm = s => String(s).normalize('NFC').replace(/[\s ]+/g, ' ').trim();
function hkey(s) { let h = 0x811c9dc5; for (const ch of norm(s)) { h ^= ch.codePointAt(0); h = Math.imul(h, 0x01000193) >>> 0; } return ('0000000' + h.toString(16)).slice(-8); }

const ctx = { window: { CH: {} } };
const index = [], texts = {};
const add = s => { if (typeof s === 'string' && AR.test(s)) { const n = norm(s); if (n) texts[hkey(n)] = n; } };
const addRich = o => { if (!o) return; const vals = typeof o === 'string' ? [o] : Object.values(o); vals.forEach(v => { if (typeof v === 'string') (v.match(/\[\[(.+?)\]\]/g) || []).forEach(m => add(m.slice(2, -2))); }); };

for (let n = 1; n <= 38; n++) {
  const f = path.join(ROOT, 'data', 'ch' + String(n).padStart(2, '0') + '.js');
  if (!fs.existsSync(f)) { console.warn('missing', f); continue; }
  vm.runInNewContext(fs.readFileSync(f, 'utf8'), ctx);
  const C = ctx.window.CH[n];
  let points = 0;
  add(C.ar); addRich(C.summary); (C.goals || []).forEach(addRich);
  C.sections.forEach(s => {
    addRich(s.title); addRich(s.body); addRich(s.tip);
    if (s.table) { s.table.head.forEach(c => typeof c === 'string' ? null : addRich(c)); s.table.rows.forEach(r => r.forEach(c => typeof c === 'string' ? add(c) : addRich(c))); s.table.head.forEach(c => typeof c === 'string' && addRich(c)); }
    (s.examples || []).forEach(e => { add(e.ar); addRich(e.note); });
  });
  (C.vocab || []).forEach(v => add(v.ar));
  C.exercises.forEach(set => {
    addRich(set.title); addRich(set.instr);
    set.items.forEach(it => {
      addRich(it.prompt); addRich(it.explain);
      if (set.type === 'mc' || set.type === 'listen') {
        points++;
        it.options.forEach(o => typeof o === 'string' ? null : addRich(o));
        if (it.ar) {
          if (/_{2,}/.test(it.ar)) { const a = it.options[it.answer]; if (typeof a === 'string' && AR.test(a)) add(it.ar.replace(/_{2,}/, a)); }
          else add(it.ar);
        }
      } else if (set.type === 'tf') { points++; if (it.ar) add(it.ar); }
      else if (set.type === 'order') { points++; add(it.words.join(' ')); }
      else if (set.type === 'match') { points += it.pairs.length; it.pairs.forEach(p => { add(p[0]); if (typeof p[1] !== 'string') addRich(p[1]); }); }
    });
  });
  index.push({ id: n, ar: C.ar, title: C.title, summary: { ko: C.summary.ko.replace(/\[\[(.+?)\]\]/g, '$1'), en: C.summary.en.replace(/\[\[(.+?)\]\]/g, '$1') }, pages: C.pages, sets: C.exercises.length, points,
    kw: C.sections.map(s => (s.title.ko + ' ' + s.title.en).replace(/\[\[(.+?)\]\]/g, '$1')).concat((C.vocab || []).map(v => v.ar + ' ' + v.en)) });
}
add('مَرْحَبًا');
fs.writeFileSync(path.join(ROOT, 'data', 'index.js'), 'window.CH_INDEX = ' + JSON.stringify(index) + ';\n');
fs.mkdirSync(path.join(ROOT, 'audio'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'audio', 'texts.json'), JSON.stringify(texts, null, 0));
console.log(`chapters: ${index.length}, points: ${index.reduce((a, c) => a + c.points, 0)}, speakable texts: ${Object.keys(texts).length}`);

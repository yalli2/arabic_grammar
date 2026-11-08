# Arabic Grammar Lab · 아랍어 문법 연구소

Interactive study site for the 38 chapters of *Fundamentals of Arabic Grammar* (Mohammed Sawaie, Routledge 2014), made for Arabic class at KCIS.

- `index.html` — main page with every chapter
- `chapter.html?c=N` — lesson, key words, and exercises with instant scoring
- `data/chNN.js` — chapter content (explanations, examples and exercises written for class)
- `audio/` — native Arabic neural voices (ar-SA Hamed / Zariyah), generated automatically by GitHub Actions (`.github/workflows/audio.yml`) whenever chapter data changes. If an mp3 is missing, the browser's Arabic voice is used instead.

"""Generate native-speaker Arabic neural audio (Microsoft Edge voices) for every text in audio/texts.json.
Runs in GitHub Actions (see .github/workflows/audio.yml). Existing mp3 files are kept, so only new texts are generated.
"""
import asyncio, json, os, sys
import edge_tts

ROOT = os.path.join(os.path.dirname(__file__), '..')
AUD = os.path.join(ROOT, 'audio')
VOICES = {'hamed': 'ar-SA-HamedNeural', 'zariyah': 'ar-SA-ZariyahNeural'}
RATE = '-5%'

texts = json.load(open(os.path.join(AUD, 'texts.json'), encoding='utf-8'))


async def one(sem, voice, key, text, stats):
    out = os.path.join(AUD, voice, key + '.mp3')
    if os.path.exists(out) and os.path.getsize(out) > 500:
        return
    async with sem:
        for attempt in range(4):
            try:
                await edge_tts.Communicate(text, VOICES[voice], rate=RATE).save(out)
                if os.path.getsize(out) > 500:
                    stats['ok'] += 1
                    return
            except Exception as e:  # noqa
                err = e
            await asyncio.sleep(2 + attempt * 3)
        stats['fail'] += 1
        print('FAILED', voice, key, text[:40], file=sys.stderr)
        if os.path.exists(out):
            os.remove(out)


async def main():
    stats = {'ok': 0, 'fail': 0}
    sem = asyncio.Semaphore(int(os.environ.get('TTS_CONCURRENCY', '6')))
    tasks = []
    for v in VOICES:
        os.makedirs(os.path.join(AUD, v), exist_ok=True)
        for k, t in texts.items():
            tasks.append(one(sem, v, k, t, stats))
    print(f'{len(texts)} texts x {len(VOICES)} voices')
    await asyncio.gather(*tasks)
    # remove orphans & write manifest
    manifest = {'voices': VOICES, 'files': {}}
    for v in VOICES:
        have = {}
        for f in os.listdir(os.path.join(AUD, v)):
            k = f[:-4]
            if k in texts:
                have[k] = 1
            else:
                os.remove(os.path.join(AUD, v, f))
        manifest['files'][v] = have
    json.dump(manifest, open(os.path.join(AUD, 'manifest.json'), 'w'), separators=(',', ':'))
    print('generated', stats)

asyncio.run(main())

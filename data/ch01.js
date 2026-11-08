window.CH = window.CH || {};
window.CH[1] = {
  "id": 1,
  "ar": "نِظَامُ الْفِعْلِ",
  "title": {"ko": "아랍어의 동사 체계", "en": "The verb system in Arabic"},
  "summary": {"ko": "아랍어 동사의 기본 특징(행위자, 시제, 자동사·타동사, 성·수, 태, 동사형 I–X, 법)을 한눈에 살펴봅니다.", "en": "Get an overview of the Arabic verb: the performer, tenses, transitivity, gender and number, voice, verb forms I–X, and moods."},
  "pages": "1–15",
  "goals": [
    {"ko": "동사문과 명사문을 구별하고, 행위자([[فَاعِلٌ]])가 주격임을 이해한다.", "en": "Distinguish verbal and nominal sentences and understand that the performer ([[فَاعِلٌ]]) is nominative."},
    {"ko": "자동사와 타동사를 구별하고, 직접목적어의 대격 어미를 쓸 수 있다.", "en": "Tell intransitive from transitive verbs and use the accusative endings of direct objects."},
    {"ko": "능동태와 수동태, 동사의 성·수 일치를 이해한다.", "en": "Understand active vs. passive voice and how verbs agree in gender and number."},
    {"ko": "동사형 I–X의 패턴과 네 가지 법(직설법·접속법·단축법·명령법)을 알아본다.", "en": "Recognize the patterns of verb Forms I–X and the four moods (indicative, subjunctive, jussive, imperative)."}
  ],
  "sections": [
    {
      "no": "1.1–1.2",
      "title": {"ko": "행위자([[فَاعِلٌ]])와 시제", "en": "The performer ([[فَاعِلٌ]]) and tenses"},
      "body": {
        "ko": "<p>동사로 시작하는 문장을 <b>동사문</b>([[جُمْلَةٌ فِعْلِيَّةٌ]]), 명사로 시작하는 문장을 <b>명사문</b>([[جُمْلَةٌ اسْمِيَّةٌ]])이라고 합니다. 아랍어 동사문은 보통 <b>동사 → 행위자 → 목적어</b> 순서입니다.</p><p>모든 동사에는 행위자 [[فَاعِلٌ]]가 있습니다. 명사일 수도, 대명사일 수도, 동사 안에 숨어 있을 수도 있습니다. 명사 행위자는 항상 <b>주격</b>입니다: 한정 단수는 -u, 비한정 단수는 -un, 쌍수는 [[ـَانِ]], 남성 규칙 복수는 [[ـُونَ]], 여성 규칙 복수는 [[ـَاتُ]]/[[ـَاتٌ]].</p><p>시제는 크게 세 가지입니다. <b>과거</b>(완료된 일), <b>현재</b>(습관·사실·진행, 때로는 미래), <b>미래</b>(현재형 앞에 [[سَـ]]나 [[سَوْفَ]]).</p>",
        "en": "<p>A sentence that starts with a verb is a <b>verbal sentence</b> ([[جُمْلَةٌ فِعْلِيَّةٌ]]); one that starts with a noun is a <b>nominal sentence</b> ([[جُمْلَةٌ اسْمِيَّةٌ]]). The usual order of a verbal sentence is <b>verb → performer → object</b>.</p><p>Every verb has a performer, the [[فَاعِلٌ]]: a noun, a pronoun, or a pronoun hidden inside the verb. A noun performer is always <b>nominative</b>: -u (definite singular), -un (indefinite singular), [[ـَانِ]] (dual), [[ـُونَ]] (masc. sound plural), [[ـَاتُ]]/[[ـَاتٌ]] (fem. sound plural).</p><p>There are three main tenses: <b>past</b> (completed actions), <b>present</b> (habits, facts, ongoing actions, sometimes the future) and <b>future</b> ([[سَـ]] or [[سَوْفَ]] + present).</p>"
      },
      "table": {
        "head": [{"ko": "행위자 종류", "en": "Type of performer"}, {"ko": "주격 어미", "en": "Nominative ending"}, {"ko": "예", "en": "Example"}],
        "rows": [
          [{"ko": "단수 한정", "en": "Singular, definite"}, "-u", "الْمُهَنْدِسُ"],
          [{"ko": "단수 비한정", "en": "Singular, indefinite"}, "-un", "مُهَنْدِسٌ"],
          [{"ko": "쌍수", "en": "Dual"}, "-āni", "مُهَنْدِسَانِ"],
          [{"ko": "남성 규칙 복수", "en": "Masc. sound plural"}, "-ūna", "مُهَنْدِسُونَ"],
          [{"ko": "여성 규칙 복수", "en": "Fem. sound plural"}, "-ātu / -ātun", "مُهَنْدِسَاتٌ"]
        ]
      },
      "examples": [
        {"ar": "وَصَلَ الْمُهَنْدِسُ صَبَاحًا.", "tr": "waṣala l-muhandisu ṣabāḥan.", "ko": "기술자(남)가 아침에 도착했다.", "en": "The engineer (m) arrived in the morning.", "note": {"ko": "동사문: 동사가 맨 앞", "en": "Verbal sentence: the verb comes first"}},
        {"ar": "الْمُهَنْدِسَةُ وَصَلَتْ صَبَاحًا.", "tr": "al-muhandisatu waṣalat ṣabāḥan.", "ko": "기술자(여)는 아침에 도착했다.", "en": "The engineer (f) arrived in the morning.", "note": {"ko": "명사문: 명사가 맨 앞", "en": "Nominal sentence: the noun comes first"}},
        {"ar": "يَشْرَبُ أَبِي الشَّايَ كُلَّ يَوْمٍ.", "tr": "yašrabu abī š-šāya kulla yawmin.", "ko": "아버지는 매일 차를 드신다.", "en": "My father drinks tea every day."},
        {"ar": "سَيُسَافِرُ أَخِي إِلَى الْقَاهِرَةِ غَدًا.", "tr": "sa-yusāfiru akhī ilā l-qāhirati ghadan.", "ko": "형(남동생)은 내일 카이로로 여행을 떠날 것이다.", "en": "My brother will travel to Cairo tomorrow."}
      ],
      "tip": {"ko": "[[سَـ]]는 가까운 미래, [[سَوْفَ]]는 조금 더 먼 미래에 자주 쓰입니다.", "en": "[[سَـ]] is often used for the near future, [[سَوْفَ]] for a more distant future."}
    },
    {
      "no": "1.3",
      "title": {"ko": "자동사와 타동사", "en": "Intransitive and transitive verbs"},
      "body": {
        "ko": "<p><b>자동사</b>([[فِعْلٌ لَازِمٌ]])는 행위자만 있으면 문장이 완성됩니다: [[نَامَ]] '잤다', [[ضَحِكَ]] '웃었다'. 자동사는 흔히 전치사와 함께 쓰이므로 동사와 전치사를 한 세트로 외우는 것이 좋습니다: [[ذَهَبَ إِلَى]] '~에 갔다', [[خَرَجَ مِنْ]] '~에서 나갔다'.</p><p><b>타동사</b>([[فِعْلٌ مُتَعَدٍّ]])는 행위가 다른 대상에게 미치므로 <b>직접목적어</b>([[مَفْعُولٌ بِهِ]])를 가집니다: [[كَتَبَ]] '썼다', [[فَهِمَ]] '이해했다'. 목적어가 문맥상 분명하면 생략하기도 합니다.</p><p>[[أَعْطَى]] '주다', [[مَنَحَ]] '수여하다' 같은 몇몇 동사는 <b>목적어를 두 개</b> 가집니다.</p>",
        "en": "<p>An <b>intransitive verb</b> ([[فِعْلٌ لَازِمٌ]]) needs only a performer: [[نَامَ]] 'he slept', [[ضَحِكَ]] 'he laughed'. Intransitive verbs often go with a preposition, so learn verb + preposition together: [[ذَهَبَ إِلَى]] 'went to', [[خَرَجَ مِنْ]] 'went out of'.</p><p>A <b>transitive verb</b> ([[فِعْلٌ مُتَعَدٍّ]]) carries the action over to something else, so it takes a <b>direct object</b> ([[مَفْعُولٌ بِهِ]]): [[كَتَبَ]] 'wrote', [[فَهِمَ]] 'understood'. The object may be left out when the context makes it clear.</p><p>A few verbs, such as [[أَعْطَى]] 'to give' and [[مَنَحَ]] 'to grant', take <b>two objects</b>.</p>"
      },
      "examples": [
        {"ar": "ضَحِكَ الطِّفْلُ.", "tr": "ḍaḥika ṭ-ṭiflu.", "ko": "아이가 웃었다.", "en": "The child laughed.", "note": {"ko": "자동사", "en": "Intransitive"}},
        {"ar": "خَرَجَ الْمُدِيرُ مِنَ الْمَكْتَبِ.", "tr": "kharaja l-mudīru mina l-maktabi.", "ko": "부장이 사무실에서 나갔다.", "en": "The director went out of the office.", "note": {"ko": "자동사 + 전치사", "en": "Intransitive + preposition"}},
        {"ar": "فَهِمَتِ الطَّالِبَةُ الدَّرْسَ.", "tr": "fahimati ṭ-ṭālibatu d-darsa.", "ko": "여학생이 수업 내용을 이해했다.", "en": "The student (f) understood the lesson.", "note": {"ko": "타동사 + 목적어", "en": "Transitive + object"}},
        {"ar": "أَعْطَتِ الْأُمُّ ابْنَهَا تُفَّاحَةً.", "tr": "aʿṭati l-ummu bnahā tuffāḥatan.", "ko": "엄마가 아들에게 사과 하나를 주었다.", "en": "The mother gave her son an apple.", "note": {"ko": "목적어 두 개", "en": "Two objects"}}
      ]
    },
    {
      "no": "1.4–1.5",
      "title": {"ko": "직접목적어: 명사와 대명사", "en": "Direct objects: nouns and pronouns"},
      "body": {
        "ko": "<p>직접목적어는 항상 <b>대격</b>([[مَنْصُوبٌ]])입니다.</p><ul><li>단수 한정: -a ([[الْكِتَابَ]])</li><li>단수 비한정: -an. 글에서는 끝에 알리프를 붙입니다 ([[كِتَابًا]]). 단, [[ة]]나 [[ء]]로 끝나면 알리프를 쓰지 않습니다 ([[رِسَالَةً]], [[مَاءً]]).</li><li>쌍수: [[ـَيْنِ]] / 남성 규칙 복수: [[ـِينَ]]</li><li>여성 규칙 복수: 파트하가 아니라 <b>카스라</b> ([[ـَاتِ]] / [[ـَاتٍ]])</li></ul><p>목적어가 대명사이면 짧은 <b>접미형</b>이 되어 동사 끝에 붙습니다: [[سَاعَدْتُهُمْ]] '나는 그들을 도왔다', [[رَأَيْتُهَا]] '나는 그녀를 보았다'. 이 접미 대명사는 혼자 쓸 수 없습니다.</p>",
        "en": "<p>A direct object is always <b>accusative</b> ([[مَنْصُوبٌ]]).</p><ul><li>Definite singular: -a ([[الْكِتَابَ]])</li><li>Indefinite singular: -an, written with an extra alif ([[كِتَابًا]]) — but no alif after [[ة]] or [[ء]] ([[رِسَالَةً]], [[مَاءً]]).</li><li>Dual: [[ـَيْنِ]] / masc. sound plural: [[ـِينَ]]</li><li>Fem. sound plural: a <b>kasra</b>, not a fatha ([[ـَاتِ]] / [[ـَاتٍ]])</li></ul><p>When the object is a pronoun, it becomes a short <b>suffix</b> attached to the verb: [[سَاعَدْتُهُمْ]] 'I helped them', [[رَأَيْتُهَا]] 'I saw her'. These suffixes can never stand alone.</p>"
      },
      "table": {
        "head": [{"ko": "목적어 종류", "en": "Kind of object"}, {"ko": "예", "en": "Example"}, {"ko": "어미", "en": "Ending"}],
        "rows": [
          [{"ko": "단수 비한정", "en": "Indefinite singular"}, "قَرَأَ كِتَابًا", "-an"],
          [{"ko": "[[ة]]로 끝나는 비한정", "en": "Indefinite ending in [[ة]]"}, "كَتَبَ رِسَالَةً", "-atan"],
          [{"ko": "쌍수", "en": "Dual"}, "زَارَ مَدِينَتَيْنِ", "-ayni"],
          [{"ko": "남성 규칙 복수", "en": "Masc. sound plural"}, "شَكَرَ الْمُهَنْدِسِينَ", "-īna"],
          [{"ko": "여성 규칙 복수", "en": "Fem. sound plural"}, "دَعَا الْمُعَلِّمَاتِ", "-āti"]
        ]
      },
      "examples": [
        {"ar": "قَرَأَ سَمِيرٌ كِتَابًا جَدِيدًا.", "tr": "qaraʾa samīrun kitāban jadīdan.", "ko": "사미르는 새 책 한 권을 읽었다.", "en": "Samir read a new book."},
        {"ar": "زُرْنَا مَدِينَتَيْنِ فِي الصَّيْفِ.", "tr": "zurnā madīnatayni fī ṣ-ṣayfi.", "ko": "우리는 여름에 두 도시를 방문했다.", "en": "We visited two cities in the summer."},
        {"ar": "دَعَتِ الْمُدِيرَةُ الْمُعَلِّمَاتِ.", "tr": "daʿati l-mudīratu l-muʿallimāti.", "ko": "교장(여)이 여선생님들을 초대했다.", "en": "The principal (f) invited the teachers (f).", "note": {"ko": "여성 복수 목적어 → 카스라", "en": "Fem. plural object → kasra"}},
        {"ar": "سَاعَدْتُهُمْ أَمْسِ.", "tr": "sāʿadtuhum amsi.", "ko": "나는 어제 그들을 도와주었다.", "en": "I helped them yesterday."},
        {"ar": "هَلْ رَأَيْتَهَا فِي السُّوقِ؟", "tr": "hal raʾaytahā fī s-sūqi?", "ko": "너(남) 시장에서 그녀를 봤니?", "en": "Did you (m) see her at the market?"}
      ]
    },
    {
      "no": "1.6–1.7",
      "title": {"ko": "동사의 성(性)과 수(數)", "en": "Gender and number in verbs"},
      "body": {
        "ko": "<p>아랍어 동사는 행위자의 <b>인칭·성·수</b>에 따라 형태가 바뀝니다. 2인칭과 3인칭은 남성·여성을 구별하지만, 1인칭 [[أَنَا]]와 [[نَحْنُ]]은 성 구별이 없습니다. 3인칭 여성 행위자이면 과거형에 [[ـَتْ]]이 붙습니다.</p><p>동사 형태만 봐도 누가 했는지 알 수 있으므로 독립 대명사는 꼭 필요하지 않습니다. 대명사를 쓰면 '<b>바로 내가</b>'처럼 강조가 됩니다.</p><p><b>수 일치</b>: 동사가 행위자 <b>앞</b>에 있으면(동사문) 행위자가 쌍수·복수여도 동사는 <b>단수</b>(성만 일치)입니다. 명사가 동사 <b>앞</b>에 오면(명사문) 동사는 수까지 일치합니다.</p>",
        "en": "<p>Arabic verbs change for the <b>person, gender and number</b> of the performer. Second and third persons distinguish masculine and feminine, but the first-person [[أَنَا]] and [[نَحْنُ]] do not. A third-person feminine performer adds [[ـَتْ]] to the past tense.</p><p>Because the verb form already shows who did the action, an independent pronoun is not needed; adding one gives <b>emphasis</b> ('I myself').</p><p><b>Number agreement</b>: when the verb comes <b>before</b> the performer (verbal sentence), the verb stays <b>singular</b> (it agrees only in gender) even with a dual or plural performer. When the noun comes <b>first</b> (nominal sentence), the verb agrees in number too.</p>"
      },
      "table": {
        "head": [{"ko": "어순", "en": "Word order"}, {"ko": "예", "en": "Example"}, {"ko": "동사", "en": "Verb"}],
        "rows": [
          [{"ko": "동사 + 남성 복수", "en": "Verb + masc. plural"}, "ذَهَبَ الطُّلَّابُ.", {"ko": "단수 남성", "en": "singular masc."}],
          [{"ko": "남성 복수 + 동사", "en": "Masc. plural + verb"}, "الطُّلَّابُ ذَهَبُوا.", {"ko": "복수 남성", "en": "plural masc."}],
          [{"ko": "동사 + 여성 복수", "en": "Verb + fem. plural"}, "ذَهَبَتِ الطَّالِبَاتُ.", {"ko": "단수 여성", "en": "singular fem."}],
          [{"ko": "여성 복수 + 동사", "en": "Fem. plural + verb"}, "الطَّالِبَاتُ ذَهَبْنَ.", {"ko": "복수 여성", "en": "plural fem."}]
        ]
      },
      "examples": [
        {"ar": "كَتَبَتْ مَرْيَمُ رِسَالَةً.", "tr": "katabat maryamu risālatan.", "ko": "마리얌이 편지를 썼다.", "en": "Maryam wrote a letter."},
        {"ar": "أَنَا كَتَبْتُ الرِّسَالَةَ.", "tr": "anā katabtu r-risālata.", "ko": "바로 내가 그 편지를 썼다.", "en": "I (myself) wrote the letter.", "note": {"ko": "[[أَنَا]]는 강조", "en": "[[أَنَا]] adds emphasis"}},
        {"ar": "حَضَرَ الْمُعَلِّمُونَ الِاجْتِمَاعَ.", "tr": "ḥaḍara l-muʿallimūna l-ijtimāʿa.", "ko": "선생님들이 회의에 참석했다.", "en": "The teachers attended the meeting."},
        {"ar": "الْمُعَلِّمُونَ حَضَرُوا الِاجْتِمَاعَ.", "tr": "al-muʿallimūna ḥaḍarū l-ijtimāʿa.", "ko": "선생님들은 회의에 참석했다.", "en": "The teachers attended the meeting.", "note": {"ko": "명사가 앞 → 동사도 복수", "en": "Noun first → plural verb"}}
      ]
    },
    {
      "no": "1.8",
      "title": {"ko": "능동태와 수동태", "en": "Active and passive voice"},
      "body": {
        "ko": "<p><b>능동태</b>에서는 누가 행동했는지(행위자)가 드러납니다. 행위자를 모르거나 밝히고 싶지 않을 때는 <b>수동태</b>([[الْمَبْنِيُّ لِلْمَجْهُولِ]])를 씁니다.</p><p>아랍어 수동태는 조동사 없이 <b>동사 내부의 모음</b>만 바꿉니다.</p><ul><li>과거: u – i – a → [[كَتَبَ]] → [[كُتِبَ]]</li><li>현재: yu – a – u → [[يَكْتُبُ]] → [[يُكْتَبُ]]</li></ul><p>능동문의 목적어(대격)는 수동문에서 <b>주격</b>으로 바뀌어 '행위자 대리'([[نَائِبُ الْفَاعِلِ]])가 됩니다. 이 명사가 여성이면 동사도 여성형이 됩니다.</p>",
        "en": "<p>In the <b>active voice</b> we know who did the action. When the performer is unknown or not mentioned, Arabic uses the <b>passive voice</b> ([[الْمَبْنِيُّ لِلْمَجْهُولِ]]).</p><p>The Arabic passive needs no helping verb; only the <b>internal vowels</b> change:</p><ul><li>Past: u – i – a → [[كَتَبَ]] → [[كُتِبَ]]</li><li>Present: yu – a – u → [[يَكْتُبُ]] → [[يُكْتَبُ]]</li></ul><p>The accusative object of the active sentence becomes <b>nominative</b> in the passive and is called the 'deputy performer' ([[نَائِبُ الْفَاعِلِ]]). If this noun is feminine, the verb becomes feminine as well.</p>"
      },
      "table": {
        "head": [{"ko": "능동", "en": "Active"}, {"ko": "수동", "en": "Passive"}, {"ko": "뜻", "en": "Meaning"}],
        "rows": [
          ["كَتَبَ", "كُتِبَ", {"ko": "썼다 → 쓰였다", "en": "wrote → was written"}],
          ["يَكْتُبُ", "يُكْتَبُ", {"ko": "쓴다 → 쓰인다", "en": "writes → is written"}],
          ["فَتَحَ", "فُتِحَ", {"ko": "열었다 → 열렸다", "en": "opened → was opened"}],
          ["يَفْتَحُ", "يُفْتَحُ", {"ko": "연다 → 열린다", "en": "opens → is opened"}]
        ]
      },
      "examples": [
        {"ar": "فَتَحَ الْحَارِسُ الْبَابَ.", "tr": "fataḥa l-ḥārisu l-bāba.", "ko": "경비원이 문을 열었다.", "en": "The guard opened the door."},
        {"ar": "فُتِحَ الْبَابُ.", "tr": "futiḥa l-bābu.", "ko": "문이 열렸다.", "en": "The door was opened.", "note": {"ko": "[[الْبَابُ]]는 주격(행위자 대리)", "en": "[[الْبَابُ]] is nominative (deputy performer)"}},
        {"ar": "تَنْشُرُ الْجَرِيدَةُ قِصَّةً كُلَّ يَوْمٍ.", "tr": "tanšuru l-jarīdatu qiṣṣatan kulla yawmin.", "ko": "그 신문은 매일 이야기 하나를 싣는다.", "en": "The newspaper publishes a story every day."},
        {"ar": "تُنْشَرُ قِصَّةٌ كُلَّ يَوْمٍ.", "tr": "tunšaru qiṣṣatun kulla yawmin.", "ko": "매일 이야기 하나가 실린다.", "en": "A story is published every day.", "note": {"ko": "[[قِصَّةٌ]]가 여성이므로 [[تُـ]]", "en": "[[قِصَّةٌ]] is feminine, so the verb takes [[تُـ]]"}}
      ]
    },
    {
      "no": "1.9.1",
      "title": {"ko": "I형 동사([[فَعَلَ]])와 그 하위 유형", "en": "Form I verbs ([[فَعَلَ]]) and their subtypes"},
      "body": {
        "ko": "<p>아랍 문법학자들은 [[فَعَلَ]] '하다'를 틀(패턴, [[وَزْنٌ]])로 사용합니다. [[ف]]는 어근의 첫째, [[ع]]는 둘째, [[ل]]는 셋째 자음을 나타냅니다. 세 자음으로 된 기본 동사를 <b>I형</b>이라고 하며, 과거형 [[هُوَ]] 형태는 항상 파트하로 끝납니다. 가운데 모음은 a, i, u 중 하나입니다: [[كَتَبَ]], [[شَرِبَ]], [[كَبُرَ]].</p><p>I형 동사의 하위 유형:</p><ul><li><b>[[و]]로 시작</b>(미달 [[مِثَالٌ]]): [[وَصَلَ]] / [[يَصِلُ]] — 현재형에서 [[و]]가 사라짐</li><li><b>[[ي]]로 시작</b>: [[يَبِسَ]] '마르다' (드묾)</li><li><b>공동동사</b>([[أَجْوَفُ]]): 가운데가 장모음 — [[قَالَ]] / [[يَقُولُ]]</li><li><b>결함동사</b>([[نَاقِصٌ]]): [[ى]]나 [[ا]]로 끝남 — [[مَشَى]], [[دَعَا]]</li><li><b>중복동사</b>([[مُضَعَّفٌ]]): 끝 자음이 겹침 — [[مَرَّ]] / [[يَمُرُّ]]</li></ul><p><b>시작 동사</b>([[أَفْعَالُ الشُّرُوعِ]]) [[بَدَأَ]], [[أَخَذَ]], [[شَرَعَ]]는 과거형으로 쓰고, 그 뒤에 <b>현재형</b> 동사가 와서 '~하기 시작했다'를 뜻합니다.</p>",
        "en": "<p>Arab grammarians use [[فَعَلَ]] 'to do' as a template (pattern, [[وَزْنٌ]]): [[ف]] stands for the 1st root consonant, [[ع]] for the 2nd, [[ل]] for the 3rd. A basic three-consonant verb is <b>Form I</b>; its past [[هُوَ]] form always ends in a fatha. The middle vowel may be a, i or u: [[كَتَبَ]], [[شَرِبَ]], [[كَبُرَ]].</p><p>Subtypes of Form I:</p><ul><li><b>Wāw-initial</b> ([[مِثَالٌ]]): [[وَصَلَ]] / [[يَصِلُ]] — the [[و]] drops in the present</li><li><b>Yāʾ-initial</b>: [[يَبِسَ]] 'to dry up' (rare)</li><li><b>Hollow</b> ([[أَجْوَفُ]]): long vowel in the middle — [[قَالَ]] / [[يَقُولُ]]</li><li><b>Defective</b> ([[نَاقِصٌ]]): ends in [[ى]] or [[ا]] — [[مَشَى]], [[دَعَا]]</li><li><b>Doubled</b> ([[مُضَعَّفٌ]]): last consonant doubled — [[مَرَّ]] / [[يَمُرُّ]]</li></ul><p><b>Verbs of beginning</b> ([[أَفْعَالُ الشُّرُوعِ]]) such as [[بَدَأَ]], [[أَخَذَ]], [[شَرَعَ]] are used in the past and followed by a <b>present-tense</b> verb: 'began to …'.</p>"
      },
      "table": {
        "head": [{"ko": "유형", "en": "Type"}, {"ko": "과거", "en": "Past"}, {"ko": "현재", "en": "Present"}, {"ko": "뜻", "en": "Meaning"}],
        "rows": [
          [{"ko": "규칙(건전)", "en": "Sound"}, "كَتَبَ", "يَكْتُبُ", {"ko": "쓰다", "en": "to write"}],
          [{"ko": "[[و]]로 시작", "en": "Wāw-initial"}, "وَصَلَ", "يَصِلُ", {"ko": "도착하다", "en": "to arrive"}],
          [{"ko": "[[ي]]로 시작", "en": "Yāʾ-initial"}, "يَبِسَ", "يَيْبَسُ", {"ko": "마르다", "en": "to dry up"}],
          [{"ko": "공동동사", "en": "Hollow"}, "قَالَ", "يَقُولُ", {"ko": "말하다", "en": "to say"}],
          [{"ko": "결함동사", "en": "Defective"}, "مَشَى", "يَمْشِي", {"ko": "걷다", "en": "to walk"}],
          [{"ko": "중복동사", "en": "Doubled"}, "مَرَّ", "يَمُرُّ", {"ko": "지나가다", "en": "to pass"}]
        ]
      },
      "examples": [
        {"ar": "وَجَدْتُ الْمِفْتَاحَ تَحْتَ الْكُرْسِيِّ.", "tr": "wajadtu l-miftāḥa taḥta l-kursiyyi.", "ko": "나는 의자 밑에서 열쇠를 찾았다.", "en": "I found the key under the chair."},
        {"ar": "بَدَأَ الطِّفْلُ يَمْشِي.", "tr": "badaʾa ṭ-ṭiflu yamšī.", "ko": "아기가 걷기 시작했다.", "en": "The baby started to walk.", "note": {"ko": "시작 동사(과거) + 현재형", "en": "Verb of beginning (past) + present"}},
        {"ar": "أَخَذَتِ الْبِنْتُ تَضْحَكُ.", "tr": "akhadhati l-bintu taḍḥaku.", "ko": "소녀가 웃기 시작했다.", "en": "The girl began to laugh."},
        {"ar": "شَرَعَ الْعُمَّالُ يَبْنُونَ الْجِسْرَ.", "tr": "šaraʿa l-ʿummālu yabnūna l-jisra.", "ko": "노동자들이 다리를 짓기 시작했다.", "en": "The workers started building the bridge."}
      ]
    },
    {
      "no": "1.9.2–1.9.3",
      "title": {"ko": "파생 동사형 II–X와 4자음 동사", "en": "Augmented Forms II–X and quadriliteral verbs"},
      "body": {
        "ko": "<p>I형에 자음을 겹치거나 접두사·삽입자를 더하면 <b>파생 동사형</b>([[الْأَفْعَالُ الْمَزِيدَةُ]])이 됩니다. 각 형은 대략적인 의미 경향이 있습니다(항상 그런 것은 아님).</p><ul><li><b>II</b> 가운데 자음 겹침 → 사역·강조: [[دَرَسَ]] '공부하다' → [[دَرَّسَ]] '가르치다'</li><li><b>III</b> 장모음 [[ا]] 삽입 → 상대에게 하는 행동: [[سَاعَدَ]]</li><li><b>IV</b> 앞에 [[أَ]] → 사역: [[فَهِمَ]] → [[أَفْهَمَ]] '이해시키다'</li><li><b>V</b> II형 + [[تَـ]] → 재귀: [[تَعَلَّمَ]] '배우다'</li><li><b>VI</b> III형 + [[تَـ]] → 서로: [[تَعَاوَنَ]] '협력하다'</li><li><b>VII</b> [[اِنْـ]] → 저절로 일어남(자동사): [[اِنْكَسَرَ]]</li><li><b>VIII</b> [[اِ]] + 삽입 [[ت]]: [[اِسْتَمَعَ]] '귀 기울이다'. [[ت]]가 주변 소리에 따라 [[د]]·[[ط]]로 변하기도 함: [[اِزْدَحَمَ]], [[اِصْطَادَ]]</li><li><b>IX</b> 색·신체 변화: [[اِحْمَرَّ]] '빨개지다'</li><li><b>X</b> [[اِسْتَـ]] → 요청·여김: [[اِسْتَعْلَمَ]] '문의하다'</li></ul><p><b>4자음 동사</b>: [[تَرْجَمَ]] '번역하다', [[زَلْزَلَ]] '흔들다'처럼 어근이 네 자음입니다.</p>",
        "en": "<p>Doubling a consonant or adding prefixes/infixes to Form I produces the <b>augmented forms</b> ([[الْأَفْعَالُ الْمَزِيدَةُ]]). Each form has a typical (not universal) meaning:</p><ul><li><b>II</b> doubled middle → causative/intensive: [[دَرَسَ]] 'study' → [[دَرَّسَ]] 'teach'</li><li><b>III</b> long [[ا]] → action directed at someone: [[سَاعَدَ]] 'help'</li><li><b>IV</b> prefix [[أَ]] → causative: [[فَهِمَ]] → [[أَفْهَمَ]] 'make understand'</li><li><b>V</b> [[تَـ]] + Form II → reflexive: [[تَعَلَّمَ]] 'learn'</li><li><b>VI</b> [[تَـ]] + Form III → mutual: [[تَعَاوَنَ]] 'cooperate'</li><li><b>VII</b> [[اِنْـ]] → happens by itself (intransitive): [[اِنْكَسَرَ]]</li><li><b>VIII</b> [[اِ]] + infixed [[ت]]: [[اِسْتَمَعَ]] 'listen'; the [[ت]] may become [[د]] or [[ط]]: [[اِزْدَحَمَ]], [[اِصْطَادَ]]</li><li><b>IX</b> colors/physical change: [[اِحْمَرَّ]] 'turn red'</li><li><b>X</b> [[اِسْتَـ]] → asking for / considering: [[اِسْتَعْلَمَ]] 'inquire'</li></ul><p><b>Quadriliteral verbs</b> have four root consonants: [[تَرْجَمَ]] 'translate', [[زَلْزَلَ]] 'shake'.</p>"
      },
      "table": {
        "head": [{"ko": "형", "en": "Form"}, {"ko": "과거 패턴", "en": "Past pattern"}, {"ko": "현재 패턴", "en": "Present pattern"}, {"ko": "예", "en": "Example"}],
        "rows": [
          ["II", "فَعَّلَ", "يُفَعِّلُ", "دَرَّسَ"],
          ["III", "فَاعَلَ", "يُفَاعِلُ", "سَاعَدَ"],
          ["IV", "أَفْعَلَ", "يُفْعِلُ", "أَرْسَلَ"],
          ["V", "تَفَعَّلَ", "يَتَفَعَّلُ", "تَعَلَّمَ"],
          ["VI", "تَفَاعَلَ", "يَتَفَاعَلُ", "تَعَاوَنَ"],
          ["VII", "اِنْفَعَلَ", "يَنْفَعِلُ", "اِنْكَسَرَ"],
          ["VIII", "اِفْتَعَلَ", "يَفْتَعِلُ", "اِسْتَمَعَ"],
          ["IX", "اِفْعَلَّ", "يَفْعَلُّ", "اِحْمَرَّ"],
          ["X", "اِسْتَفْعَلَ", "يَسْتَفْعِلُ", "اِسْتَقْبَلَ"],
          [{"ko": "4자음", "en": "Quadriliteral"}, "فَعْلَلَ", "يُفَعْلِلُ", "تَرْجَمَ"]
        ]
      },
      "examples": [
        {"ar": "تُدَرِّسُ أُمِّي الرِّيَاضِيَّاتِ.", "tr": "tudarrisu ummī r-riyāḍiyyāti.", "ko": "우리 엄마는 수학을 가르치신다.", "en": "My mother teaches mathematics.", "note": {"ko": "II형", "en": "Form II"}},
        {"ar": "تَعَاوَنَ الطُّلَّابُ فِي الْمَشْرُوعِ.", "tr": "taʿāwana ṭ-ṭullābu fī l-mašrūʿi.", "ko": "학생들이 프로젝트에서 서로 협력했다.", "en": "The students cooperated on the project.", "note": {"ko": "VI형", "en": "Form VI"}},
        {"ar": "اِنْكَسَرَ الْكُوبُ.", "tr": "inkasara l-kūbu.", "ko": "컵이 깨졌다.", "en": "The cup broke.", "note": {"ko": "VII형: 행위자 없이 저절로", "en": "Form VII: no outside agent"}},
        {"ar": "اِسْتَقْبَلَتِ الْعَائِلَةُ الضُّيُوفَ.", "tr": "istaqbalati l-ʿāʾilatu ḍ-ḍuyūfa.", "ko": "가족이 손님들을 맞이했다.", "en": "The family welcomed the guests.", "note": {"ko": "X형", "en": "Form X"}},
        {"ar": "تَرْجَمَ الْكَاتِبُ الْقِصَّةَ إِلَى الْكُورِيَّةِ.", "tr": "tarjama l-kātibu l-qiṣṣata ilā l-kūriyyati.", "ko": "작가가 그 이야기를 한국어로 번역했다.", "en": "The writer translated the story into Korean.", "note": {"ko": "4자음 동사", "en": "Quadriliteral"}}
      ],
      "tip": {"ko": "파생형의 현재형 접두 모음: II·III·IV형과 4자음 동사는 [[يُـ]](u), 나머지는 [[يَـ]](a)입니다.", "en": "Present-tense prefix vowel: Forms II, III, IV and quadriliterals use [[يُـ]] (u); the others use [[يَـ]] (a)."}
    },
    {
      "no": "1.10",
      "title": {"ko": "동사의 법(法)", "en": "Verb moods"},
      "body": {
        "ko": "<p><b>법</b>은 문장이 사실을 말하는지, 바람·의도를 나타내는지, 명령하는지를 보여 줍니다. 아랍어에서 법은 <b>현재형에만</b> 있고, 과거형에는 없습니다.</p><ul><li><b>직설법</b>([[الْمَرْفُوعُ]]): 사실·의견을 말할 때. 끝이 -u: [[يَكْتُبُ]]</li><li><b>접속법</b>([[الْمَنْصُوبُ]]): [[أَنْ]], [[لَنْ]], [[كَيْ]] 같은 불변사 뒤. 끝이 -a: [[أَنْ يَكْتُبَ]]</li><li><b>단축법</b>([[الْمَجْزُومُ]]): [[لَمْ]] 뒤(과거 부정), 조건문, 금지. 끝이 수쿤: [[لَمْ يَكْتُبْ]]</li><li><b>명령법</b>([[الْأَمْرُ]]): 2인칭에게 직접 명령: [[اُكْتُبْ]]</li></ul><p>자세한 내용은 뒤의 장(13·15·17장)에서 다룹니다.</p>",
        "en": "<p><b>Mood</b> shows whether a sentence states a fact, expresses a wish or purpose, or gives a command. In Arabic, moods exist <b>only in the present tense</b>; the past tense has none.</p><ul><li><b>Indicative</b> ([[الْمَرْفُوعُ]]): facts and opinions; ends in -u: [[يَكْتُبُ]]</li><li><b>Subjunctive</b> ([[الْمَنْصُوبُ]]): after particles like [[أَنْ]], [[لَنْ]], [[كَيْ]]; ends in -a: [[أَنْ يَكْتُبَ]]</li><li><b>Jussive</b> ([[الْمَجْزُومُ]]): after [[لَمْ]] (past negation), in conditionals and prohibitions; ends in sukun: [[لَمْ يَكْتُبْ]]</li><li><b>Imperative</b> ([[الْأَمْرُ]]): direct commands to 'you': [[اُكْتُبْ]]</li></ul><p>Each mood is covered in detail later (Chapters 13, 15, 17).</p>"
      },
      "table": {
        "head": [{"ko": "법", "en": "Mood"}, {"ko": "아랍어 명칭", "en": "Arabic name"}, {"ko": "예", "en": "Example"}, {"ko": "어미", "en": "Ending"}],
        "rows": [
          [{"ko": "직설법", "en": "Indicative"}, "الْمَرْفُوعُ", "يَكْتُبُ", "-u"],
          [{"ko": "접속법", "en": "Subjunctive"}, "الْمَنْصُوبُ", "أَنْ يَكْتُبَ", "-a"],
          [{"ko": "단축법", "en": "Jussive"}, "الْمَجْزُومُ", "لَمْ يَكْتُبْ", {"ko": "수쿤", "en": "sukun"}],
          [{"ko": "명령법", "en": "Imperative"}, "الْأَمْرُ", "اُكْتُبْ", {"ko": "수쿤", "en": "sukun"}]
        ]
      },
      "examples": [
        {"ar": "تَدْرُسُ أُخْتِي الطِّبَّ.", "tr": "tadrusu ukhtī ṭ-ṭibba.", "ko": "언니(누나)는 의학을 공부한다.", "en": "My sister studies medicine.", "note": {"ko": "직설법", "en": "Indicative"}},
        {"ar": "أُرِيدُ أَنْ أَزُورَ الْمَتْحَفَ.", "tr": "urīdu an azūra l-matḥafa.", "ko": "나는 박물관을 방문하고 싶다.", "en": "I want to visit the museum.", "note": {"ko": "접속법", "en": "Subjunctive"}},
        {"ar": "لَمْ يَحْضُرْ سَامِي الدَّرْسَ أَمْسِ.", "tr": "lam yaḥḍur sāmī d-darsa amsi.", "ko": "사미는 어제 수업에 오지 않았다.", "en": "Sami did not attend the lesson yesterday.", "note": {"ko": "단축법", "en": "Jussive"}},
        {"ar": "اُكْتُبِ اسْمَكَ هُنَا.", "tr": "uktubi smaka hunā.", "ko": "여기에 네 이름을 써라.", "en": "Write your name here.", "note": {"ko": "명령법 (뒤 단어와 이어지며 수쿤 → 카스라)", "en": "Imperative (sukun → kasra before a connecting alif)"}}
      ]
    }
  ],
  "vocab": [
    {"ar": "فِعْلٌ", "tr": "fiʿl", "ko": "동사", "en": "verb"},
    {"ar": "فَاعِلٌ", "tr": "fāʿil", "ko": "행위자(주어)", "en": "performer (subject)"},
    {"ar": "مَفْعُولٌ بِهِ", "tr": "mafʿūl bihi", "ko": "직접목적어", "en": "direct object"},
    {"ar": "فِعْلٌ لَازِمٌ", "tr": "fiʿl lāzim", "ko": "자동사", "en": "intransitive verb"},
    {"ar": "فِعْلٌ مُتَعَدٍّ", "tr": "fiʿl mutaʿaddin", "ko": "타동사", "en": "transitive verb"},
    {"ar": "جُمْلَةٌ فِعْلِيَّةٌ", "tr": "jumla fiʿliyya", "ko": "동사문", "en": "verbal sentence"},
    {"ar": "جُمْلَةٌ اسْمِيَّةٌ", "tr": "jumla ismiyya", "ko": "명사문", "en": "nominal sentence"},
    {"ar": "الْفِعْلُ الْمَاضِي", "tr": "al-fiʿl al-māḍī", "ko": "과거형", "en": "past tense"},
    {"ar": "الْفِعْلُ الْمُضَارِعُ", "tr": "al-fiʿl al-muḍāriʿ", "ko": "현재형", "en": "present tense"},
    {"ar": "الْمَبْنِيُّ لِلْمَجْهُولِ", "tr": "al-mabniyy li-l-majhūl", "ko": "수동태", "en": "passive voice"},
    {"ar": "نَائِبُ الْفَاعِلِ", "tr": "nāʾib al-fāʿil", "ko": "행위자 대리(수동문의 주어)", "en": "deputy performer (passive subject)"},
    {"ar": "وَزْنٌ", "tr": "wazn", "ko": "패턴, 틀", "en": "pattern, measure"},
    {"ar": "مَرْفُوعٌ", "tr": "marfūʿ", "ko": "직설법 / 주격의", "en": "indicative / nominative"},
    {"ar": "مَنْصُوبٌ", "tr": "manṣūb", "ko": "접속법 / 대격의", "en": "subjunctive / accusative"},
    {"ar": "مَجْزُومٌ", "tr": "majzūm", "ko": "단축법의", "en": "jussive"}
  ],
  "exercises": [
    {
      "type": "mc",
      "title": {"ko": "알맞은 형태 고르기", "en": "Choose the correct form"},
      "instr": {"ko": "빈칸에 들어갈 알맞은 형태를 고르세요.", "en": "Choose the correct form for the blank."},
      "items": [
        {"ar": "قَرَأَتِ الطَّالِبَةُ ___ .", "options": ["كِتَابٌ", "كِتَابًا", "كِتَابٍ"], "answer": 1, "explain": {"ko": "직접목적어는 대격입니다. 비한정 단수 대격은 -an([[كِتَابًا]])입니다.", "en": "A direct object is accusative; the indefinite singular accusative ends in -an ([[كِتَابًا]])."}},
        {"ar": "___ الْمُهَنْدِسَاتُ إِلَى الْمَوْقِعِ.", "options": ["وَصَلَتِ", "وَصَلْنَ", "وَصَلُوا"], "answer": 0, "explain": {"ko": "동사가 앞에 오면 복수 행위자라도 동사는 단수입니다. 행위자가 여성이므로 [[وَصَلَتِ]].", "en": "When the verb comes first it stays singular; the performer is feminine, so [[وَصَلَتِ]]."}},
        {"ar": "الطُّلَّابُ ___ الدَّرْسَ.", "options": ["كَتَبَ", "كَتَبَتْ", "كَتَبُوا"], "answer": 2, "explain": {"ko": "명사가 동사 앞에 있으면 동사는 수까지 일치합니다 → 남성 복수 [[كَتَبُوا]].", "en": "When the noun comes first, the verb agrees in number too → masc. plural [[كَتَبُوا]]."}},
        {"ar": "شَكَرَ الْمُدِيرُ ___ .", "options": ["الْمُوَظَّفَاتُ", "الْمُوَظَّفَاتِ", "الْمُوَظَّفَاتَ"], "answer": 1, "explain": {"ko": "여성 규칙 복수가 목적어일 때는 파트하가 아니라 카스라를 씁니다.", "en": "A feminine sound plural object takes a kasra, not a fatha."}},
        {"ar": "رَأَيْتُ ___ فِي الْحَدِيقَةِ.", "options": ["قِطَّانِ", "قِطَّتَانِ", "قِطَّيْنِ"], "answer": 2, "explain": {"ko": "쌍수 목적어는 [[ـَيْنِ]]으로 끝납니다. [[ـَانِ]]은 주격입니다.", "en": "A dual object ends in [[ـَيْنِ]]; [[ـَانِ]] is nominative."}},
        {"prompt": {"ko": "[[فَتَحَ]] '열었다'의 수동형은?", "en": "What is the passive of [[فَتَحَ]] 'he opened'?"}, "options": ["فَاتَحَ", "فُتِحَ", "اِنْفَتَحَ", "يَفْتَحُ"], "answer": 1, "explain": {"ko": "과거 수동형은 모음을 u–i–a로 바꿉니다: [[فُتِحَ]]. [[اِنْفَتَحَ]]는 VII형이라는 다른 동사형입니다.", "en": "The past passive uses the vowels u–i–a: [[فُتِحَ]]. [[اِنْفَتَحَ]] is a different verb (Form VII)."}},
        {"prompt": {"ko": "[[تَعَاوَنَ]] '협력하다'는 몇 형 동사인가요?", "en": "Which form is [[تَعَاوَنَ]] 'to cooperate'?"}, "options": ["Form III", "Form V", "Form VI", "Form VIII"], "answer": 2, "explain": {"ko": "[[تَـ]] + III형([[فَاعَلَ]]) = VI형 [[تَفَاعَلَ]]으로, '서로'의 뜻을 가집니다.", "en": "[[تَـ]] + Form III ([[فَاعَلَ]]) = Form VI [[تَفَاعَلَ]], which expresses mutual action."}},
        {"ar": "أُرِيدُ أَنْ ___ الْعَرَبِيَّةَ.", "options": ["أَتَعَلَّمُ", "أَتَعَلَّمْ", "أَتَعَلَّمَ"], "answer": 2, "explain": {"ko": "[[أَنْ]] 뒤에는 접속법(-a)이 옵니다.", "en": "[[أَنْ]] is followed by the subjunctive (-a)."}},
        {"ar": "لَمْ ___ أَخِي الْبَابَ.", "options": ["يُغْلِقْ", "يُغْلِقُ", "يُغْلِقَ"], "answer": 0, "explain": {"ko": "[[لَمْ]] 뒤에는 단축법(수쿤)이 옵니다.", "en": "[[لَمْ]] is followed by the jussive (sukun)."}}
      ]
    },
    {
      "type": "mc",
      "title": {"ko": "자동사일까, 타동사일까?", "en": "Intransitive or transitive?"},
      "instr": {"ko": "문장의 동사가 자동사인지 타동사인지 고르세요.", "en": "Decide whether the verb in each sentence is intransitive or transitive."},
      "items": [
        {"ar": "جَلَسَ الْجَدُّ عَلَى الْكُرْسِيِّ.", "options": [{"ko": "자동사", "en": "Intransitive"}, {"ko": "타동사", "en": "Transitive"}], "answer": 0, "explain": {"ko": "[[جَلَسَ]]는 목적어 없이 전치사 [[عَلَى]]와 함께 쓰인 자동사입니다.", "en": "[[جَلَسَ]] takes no object; it is used with the preposition [[عَلَى]]."}},
        {"ar": "غَسَلَتْ سَلْمَى السَّيَّارَةَ.", "options": [{"ko": "자동사", "en": "Intransitive"}, {"ko": "타동사", "en": "Transitive"}], "answer": 1, "explain": {"ko": "[[السَّيَّارَةَ]]가 대격 직접목적어이므로 타동사입니다.", "en": "[[السَّيَّارَةَ]] is an accusative direct object, so the verb is transitive."}},
        {"ar": "عَادَ الْمُسَافِرُونَ مِنَ الْمَطَارِ.", "options": [{"ko": "자동사", "en": "Intransitive"}, {"ko": "타동사", "en": "Transitive"}], "answer": 0, "explain": {"ko": "[[عَادَ مِنْ]] '~에서 돌아오다'는 전치사를 쓰는 자동사입니다.", "en": "[[عَادَ مِنْ]] 'return from' is intransitive with a preposition."}},
        {"ar": "اِخْتَارَ الْفَرِيقُ قَائِدًا جَدِيدًا.", "options": [{"ko": "자동사", "en": "Intransitive"}, {"ko": "타동사", "en": "Transitive"}], "answer": 1, "explain": {"ko": "[[قَائِدًا]]가 직접목적어입니다.", "en": "[[قَائِدًا]] is the direct object."}}
      ]
    },
    {
      "type": "tf",
      "title": {"ko": "참일까, 거짓일까?", "en": "True or false?"},
      "instr": {"ko": "각 문장이 맞으면 참, 틀리면 거짓을 고르세요.", "en": "Decide whether each statement is true or false."},
      "items": [
        {"ar": "نَامَ الطِّفْلُ مُبَكِّرًا.", "prompt": {"ko": "이 문장의 동사 [[نَامَ]]는 타동사이다.", "en": "The verb [[نَامَ]] in this sentence is transitive."}, "answer": false, "explain": {"ko": "[[نَامَ]] '잤다'는 목적어가 필요 없는 자동사입니다.", "en": "[[نَامَ]] 'slept' needs no object; it is intransitive."}},
        {"prompt": {"ko": "[[سَاعَدْتُهُمْ]]에서 [[ـهُمْ]]는 직접목적어이다.", "en": "In [[سَاعَدْتُهُمْ]], [[ـهُمْ]] is the direct object."}, "answer": true, "explain": {"ko": "대명사 목적어는 동사 끝에 접미형으로 붙습니다: '나는 그들을 도왔다'.", "en": "Object pronouns are suffixed to the verb: 'I helped them'."}},
        {"prompt": {"ko": "과거형에도 직설법·접속법·단축법의 구별이 있다.", "en": "The past tense also has indicative, subjunctive and jussive forms."}, "answer": false, "explain": {"ko": "법은 현재형에만 있습니다.", "en": "Moods exist only in the present tense."}},
        {"ar": "يُكْتَبُ الدَّرْسُ عَلَى السَّبُّورَةِ.", "prompt": {"ko": "[[الدَّرْسُ]]는 행위자 대리([[نَائِبُ الْفَاعِلِ]])이므로 주격이다.", "en": "[[الدَّرْسُ]] is the deputy performer ([[نَائِبُ الْفَاعِلِ]]), so it is nominative."}, "answer": true, "explain": {"ko": "수동문에서 원래 목적어는 주격이 됩니다.", "en": "In a passive sentence the original object becomes nominative."}},
        {"prompt": {"ko": "[[اِحْمَرَّ]] '빨개지다'는 색 변화를 나타내는 IX형 동사이다.", "en": "[[اِحْمَرَّ]] 'to turn red' is a Form IX verb, a form used for colors."}, "answer": true, "explain": {"ko": "IX형 [[اِفْعَلَّ]]은 주로 색이나 신체 변화를 나타냅니다.", "en": "Form IX [[اِفْعَلَّ]] mainly expresses colors and physical changes."}},
        {"prompt": {"ko": "[[أَنَا]]와 [[نَحْنُ]]에 쓰는 동사는 남성·여성을 구별한다.", "en": "Verbs used with [[أَنَا]] and [[نَحْنُ]] show masculine/feminine gender."}, "answer": false, "explain": {"ko": "1인칭 동사 형태에는 성 구별이 없습니다: [[كَتَبْتُ]]는 남녀 모두 씁니다.", "en": "First-person verb forms have no gender: [[كَتَبْتُ]] is used by both men and women."}}
      ]
    },
    {
      "type": "order",
      "title": {"ko": "문장 만들기", "en": "Build the sentence"},
      "instr": {"ko": "단어 카드를 눌러 올바른 순서로 문장을 만드세요.", "en": "Tap the word tiles to build the sentence in the correct order."},
      "items": [
        {"words": ["شَرِبَ", "الْوَلَدُ", "الْحَلِيبَ"], "ko": "소년이 우유를 마셨다.", "en": "The boy drank the milk."},
        {"words": ["كَتَبَتْ", "الْبِنْتُ", "رِسَالَةً", "طَوِيلَةً"], "ko": "소녀가 긴 편지를 썼다.", "en": "The girl wrote a long letter."},
        {"words": ["أَعْطَى", "الْأَبُ", "ابْنَهُ", "هَدِيَّةً"], "ko": "아버지가 아들에게 선물을 주었다.", "en": "The father gave his son a present."},
        {"words": ["فُتِحَتْ", "نَوَافِذُ", "الْفَصْلِ"], "ko": "교실 창문들이 열렸다.", "en": "The classroom windows were opened."},
        {"words": ["بَدَأَ", "الطُّلَّابُ", "يَكْتُبُونَ"], "ko": "학생들이 쓰기 시작했다.", "en": "The students started writing."}
      ]
    },
    {
      "type": "match",
      "title": {"ko": "짝 맞추기", "en": "Match the pairs"},
      "instr": {"ko": "왼쪽 아랍어와 알맞은 설명을 연결하세요.", "en": "Match each Arabic item with its description."},
      "items": [
        {"pairs": [
          ["دَرَّسَ", {"ko": "II형 – 가르치다", "en": "Form II – to teach"}],
          ["سَاعَدَ", {"ko": "III형 – 돕다", "en": "Form III – to help"}],
          ["أَرْسَلَ", {"ko": "IV형 – 보내다", "en": "Form IV – to send"}],
          ["تَعَلَّمَ", {"ko": "V형 – 배우다", "en": "Form V – to learn"}],
          ["اِسْتَخْدَمَ", {"ko": "X형 – 사용하다", "en": "Form X – to use"}]
        ]},
        {"pairs": [
          ["وَصَلَ", {"ko": "[[و]]로 시작하는 동사", "en": "wāw-initial verb"}],
          ["قَالَ", {"ko": "공동동사", "en": "hollow verb"}],
          ["مَشَى", {"ko": "결함동사", "en": "defective verb"}],
          ["مَرَّ", {"ko": "중복동사", "en": "doubled verb"}],
          ["كَتَبَ", {"ko": "규칙(건전) 동사", "en": "sound verb"}]
        ]}
      ]
    },
    {
      "type": "listen",
      "title": {"ko": "듣고 고르기", "en": "Listen and choose"},
      "instr": {"ko": "아랍어를 듣고 알맞은 답을 고르세요.", "en": "Listen to the Arabic and choose the correct answer."},
      "items": [
        {"ar": "ضَحِكَتِ الْبِنْتُ.", "prompt": {"ko": "무슨 뜻인가요?", "en": "What does it mean?"}, "options": [{"ko": "소녀가 웃었다.", "en": "The girl laughed."}, {"ko": "소녀가 울었다.", "en": "The girl cried."}, {"ko": "소년이 웃었다.", "en": "The boy laughed."}], "answer": 0, "explain": {"ko": "[[ضَحِكَتْ]] '그녀가 웃었다', [[الْبِنْتُ]] '소녀'.", "en": "[[ضَحِكَتْ]] 'she laughed', [[الْبِنْتُ]] 'the girl'."}},
        {"ar": "كُتِبَتِ الرِّسَالَةُ.", "prompt": {"ko": "무슨 뜻인가요?", "en": "What does it mean?"}, "options": [{"ko": "그녀가 편지를 썼다.", "en": "She wrote the letter."}, {"ko": "편지가 쓰일 것이다.", "en": "The letter will be written."}, {"ko": "편지가 쓰였다.", "en": "The letter was written."}], "answer": 2, "explain": {"ko": "[[كُتِبَتْ]]는 u–i 모음의 과거 수동형입니다.", "en": "[[كُتِبَتْ]] is a past passive (vowels u–i)."}},
        {"ar": "سَيَزُورُ جَدِّي الْقَرْيَةَ.", "prompt": {"ko": "무슨 뜻인가요?", "en": "What does it mean?"}, "options": [{"ko": "할아버지가 마을을 방문했다.", "en": "My grandfather visited the village."}, {"ko": "할아버지가 마을을 방문할 것이다.", "en": "My grandfather will visit the village."}, {"ko": "할아버지가 마을에 산다.", "en": "My grandfather lives in the village."}], "answer": 1, "explain": {"ko": "[[سَـ]] + 현재형 = 미래입니다.", "en": "[[سَـ]] + present = future."}},
        {"ar": "لَمْ تَفْهَمِ الطَّالِبَةُ السُّؤَالَ.", "prompt": {"ko": "무슨 뜻인가요?", "en": "What does it mean?"}, "options": [{"ko": "여학생이 질문을 이해했다.", "en": "The student understood the question."}, {"ko": "여학생이 질문을 이해하지 못할 것이다.", "en": "The student will not understand the question."}, {"ko": "여학생이 질문을 이해하지 못했다.", "en": "The student did not understand the question."}], "answer": 2, "explain": {"ko": "[[لَمْ]] + 단축법은 과거의 부정입니다.", "en": "[[لَمْ]] + jussive negates the past."}},
        {"ar": "اِسْتَقْبَلَ", "prompt": {"ko": "들은 동사는 몇 형인가요?", "en": "Which form is the verb you hear?"}, "options": ["Form VIII", "Form X", "Form VII"], "answer": 1, "explain": {"ko": "[[اِسْتَـ]]로 시작하면 X형([[اِسْتَفْعَلَ]])입니다.", "en": "Verbs beginning with [[اِسْتَـ]] are Form X ([[اِسْتَفْعَلَ]])."}}
      ]
    }
  ]
};

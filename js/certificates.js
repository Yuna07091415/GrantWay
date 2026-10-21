// GrantWay - Xalqaro va Milliy Sertifikatlar Tayyorgarlik Bazasi (Test Preparation Hub)
// Ona tili, Koreys tili (TOPIK), Ingliz tili (IELTS, TOEFL, Duolingo), Nemis, Yapon, Turk tillari

const certificatesData = [
  {
    id: "ona-tili",
    badge: "Milliy Sertifikat (BMBA)",
    flag: "🇺🇿",
    category: "national",
    title: {
      uz: "Ona Tili va Adabiyot Milliy Sertifikati",
      en: "Uzbek Language & Literature National Certificate (BMBA)",
      ru: "Национальный сертификат по родному языку и литературе (BMBA)"
    },
    organization: "Bilim va malakalarni baholash agentligi (BMBA / DTM)",
    grantsApplicable: ["O'zbekiston OTMlari (100% maksimal ball)", "El-Yurt Umidi Jamg'armasi"],
    levels: "A+, A, B+, B darajalar",
    description: {
      uz: "O'zbekiston oliy ta'lim muassasalariga kirishda majburiy va mutaxassislik fanlari bo'yicha imtihondan ozod etilib, 100% maksimal ball beruvchi rasmiy davlat sertifikati.",
      en: "Official state certificate in Uzbekistan granting 100% maximum score and entrance exam waiver for Uzbek language & literature at national universities.",
      ru: "Официальный государственный сертификат Узбекистана, дающий 100% максимальный балл при поступлении в вузы по родному языку и литературе."
    },
    examStructure: {
      uz: [
        "1-bo'lim: Matnni tushunish va tahlil qilish (Reading comprehension - 15 ta savol)",
        "2-bo'lim: Leksik-grammatik kompetensiya (Grammatika va adabiyot tahlili - 25 ta savol)",
        "3-bo'lim: Yozma nutq / Insho (Muammoli mavzu bo'yicha 200-250 so'zdan iborat insho)"
      ],
      en: [
        "Section 1: Text analysis & reading comprehension (15 questions)",
        "Section 2: Lexical & grammatical competence (25 questions)",
        "Section 3: Analytical Essay writing (200-250 words)"
      ],
      ru: [
        "Раздел 1: Анализ текста и понимание прочитанного (15 вопросов)",
        "Раздел 2: Лексико-грамматическая компетенция (25 вопросов)",
        "Раздел 3: Аналитическое эссе (200-250 слов)"
      ]
    },
    prepRoadmap: {
      uz: [
        "1-qadam: 5-11-sinf Ona tili va Adabiyot darsliklaridagi barcha qoida va adabiy asarlar tahlilini to'liq takrorlash.",
        "2-qadam: BMBA (DTM) rasmiy axborotnomalaridagi o'tgan yillardagi namunaviy testlarni ishlab, xatolar ustida ishlash.",
        "3-qadam: Insho yozish mezonlari bilan tanishish (kirish, dalillar, xulosa, orfografik va uslubiy xatolarsiz 250 so'z yozish mashqi).",
        "4-qadam: Har haftada kamida 2 ta to'liq variantni vaqt o'lchab (taymer bilan) ishlash."
      ],
      en: [
        "Step 1: Thoroughly review school grammar textbooks (Grades 5-11) and literary analysis.",
        "Step 2: Solve official BMBA past test papers and analyze weak points.",
        "Step 3: Master argumentative essay writing structure with solid literary examples.",
        "Step 4: Practice under timed conditions (mock exams) weekly."
      ],
      ru: [
        "Шаг 1: Повторение школьной программы по грамматике и литературе (5-11 классы).",
        "Шаг 2: Решение демонстрационных вариантов тестов Агентства BMBA прошлых лет.",
        "Шаг 3: Отработка структуры написания эссе с аргументацией и литературными примерами.",
        "Шаг 4: Еженедельные пробные тесты на время с разбором ошибок."
      ]
    },
    freeResources: [
      { name: "my.uzbmb.uz (Rasmiy ro'yxatdan o'tish portali)", url: "https://my.uzbmb.uz/" },
      { name: "BMBA Namunaviy Testlar bazasi", url: "https://uzbmb.uz/" },
      { name: "Ona tili va Adabiyot elektron darsliklar to'plami (Edu.uz)", url: "https://edu.uz/" }
    ],
    officialUrl: "https://my.uzbmb.uz/"
  },

  {
    id: "korean-topik",
    badge: "Koreys Tili (NIIED)",
    flag: "🇰🇷",
    category: "korean",
    title: {
      uz: "TOPIK I & TOPIK II (Test of Proficiency in Korean)",
      en: "TOPIK I & TOPIK II Korean Language Proficiency Test",
      ru: "Экзамен по корейскому языку TOPIK I & TOPIK II"
    },
    organization: "National Institute for International Education (NIIED), Janubiy Koreya",
    grantsApplicable: ["GKS (Global Korea Scholarship / KGSP)", "Koreya Universitetlari Granti", "Ishchi vizalar"],
    levels: "1-geup dan 6-geup gacha (Grantlar uchun TOPIK 3, 4, 5, 6)",
    description: {
      uz: "Janubiy Koreya hukumati va universitetlariga kirishda asosiy til hujjati. GKS grantida TOPIK 3+ sertifikati bo'lgan nomzodlar til kursisiz to'g'ridan-to'g'ri o'qishga kiradi va oyiga qo'shimcha +100,000 KRW bonus oladi!",
      en: "The official Korean language assessment for overseas Koreans and foreigners. Holding TOPIK 3+ drastically boosts GKS scholarship acceptance and unlocks monthly cash bonuses.",
      ru: "Официальный экзамен по корейскому языку. Уровень TOPIK 3+ дает колоссальное преимущество для стипендии правительства Кореи GKS и ежемесячную надбавку к стипендии."
    },
    examStructure: {
      uz: [
        "TOPIK I (Boshlang'ich - 1-2 daraja): Tinglab tushunish (듣기 - 30 savol) + O'qish (읽기 - 40 savol)",
        "TOPIK II (O'rta va Yuqori - 3-6 daraja):",
        "• Tinglab tushunish (듣기 - 50 savol / 60 daqiqa)",
        "• Yozma qism (쓰기 - 4 ta topshiriq: 51, 52-jumlalar, 53-diagramma tahlili, 54-erkin mavzuda 600-700 so'zli katta insho)",
        "• O'qish (읽기 - 50 savol / 70 daqiqa)"
      ],
      en: [
        "TOPIK I (Beginner): Listening (30 questions) + Reading (40 questions)",
        "TOPIK II (Intermediate/Advanced):",
        "• Listening (50 questions / 60 min)",
        "• Writing (4 tasks: sentence completion 51-52, graph description 53, opinion essay 54 of 600-700 characters)",
        "• Reading (50 questions / 70 min)"
      ],
      ru: [
        "TOPIK I (Начальный): Аудирование (30 заданий) + Чтение (40 заданий)",
        "TOPIK II (Средний и Продвинутый):",
        "• Аудирование (50 вопросов / 60 мин)",
        "• Письмо (4 задания: 51-52 вставка слов, 53 описание графиков, 54 эссе на 600-700 знаков)",
        "• Чтение (50 вопросов / 70 мин)"
      ]
    },
    prepRoadmap: {
      uz: [
        "1-qadam: Sejong Korean yoki Ewha Korean darsliklari orqali bazaviy grammatika va 3,000 ta asosiy lug'atni o'zlashtirish.",
        "2-qadam: 53-savol (diagramma va statistikani tasvirlash) formulalari va maxsus iboralarini yodlash (bepul 30 ball beradi).",
        "3-qadam: 54-katta insho uchun kirish, sabablar, qarshi fikr va xulosa yozish qoliplarini (서론-본론-결론) mashq qilish.",
        "4-qadam: Rasmiy topik.go.kr saytidagi so'nggi 10 ta o'tgan yillardagi imtihon variantlarini (기출문제) audiosi bilan to'liq ishlab chiqish."
      ],
      en: [
        "Step 1: Build core grammar & 3,000+ vocabulary through King Sejong Institute or Ewha Korean series.",
        "Step 2: Memorize standard graph-description templates for Question 53 to secure easy points.",
        "Step 3: Practice 600-700 character essay structuring (Introduction, Argumentation, Conclusion) for Question 54.",
        "Step 4: Solve all recent official past exams (기출문제) under strict real test timing."
      ],
      ru: [
        "Шаг 1: Изучение базовой грамматики и 3000 слов по учебникам института короля Седжона или Ewha.",
        "Шаг 2: Заучивание шаблонов описания графиков для задания 53 (гарантированные баллы).",
        "Шаг 3: Тренировка написания большого сочинения (задание 54) по структуре Введение-Основная часть-Вывод.",
        "Шаг 4: Прорешивание реальных вариантов прошлых лет с официального портала topik.go.kr."
      ]
    },
    freeResources: [
      { name: "topik.go.kr (Rasmiy TOPIK imtihon portali)", url: "https://www.topik.go.kr/" },
      { name: "King Sejong Institute (Bepul rasmiy koreys tili darslari)", url: "https://www.iksi.or.kr/" },
      { name: "TOPIK GUIDE (O'tgan yillardagi testlar va namunalar)", url: "https://www.topikguide.com/" }
    ],
    officialUrl: "https://www.topik.go.kr/"
  },

  {
    id: "english-ielts",
    badge: "Ingliz Tili (British Council / IDP)",
    flag: "🇬🇧",
    category: "english",
    title: {
      uz: "IELTS Academic (International English Language Testing System)",
      en: "IELTS Academic (British Council & IDP)",
      ru: "Международный экзамен IELTS Academic"
    },
    organization: "British Council, IDP: IELTS Australia, Cambridge University Press & Assessment",
    grantsApplicable: ["Chevening (UK)", "DAAD (Germaniya)", "Fulbright (AQSH)", "Stipendium Hungaricum", "Erasmus Mundus"],
    levels: "Band 1.0 dan 9.0 gacha (Top grantlar uchun 6.5, 7.0, 7.5+)",
    description: {
      uz: "Dunyoning 140 dan ortiq davlatidagi 11,500+ universitetlar va xalqaro grantlar tomonidan tan olinadigan mutlaq 1-raqamli akademik ingliz tili sertifikati.",
      en: "The world's most trusted high-stakes English test for international study and government scholarships across the UK, Europe, Australia, and the US.",
      ru: "Самый авторитетный и востребованный в мире международный экзамен по английскому языку для поступления в зарубежные вузы и получения грантов."
    },
    examStructure: {
      uz: [
        "1. Listening (30 daqiqa): 4 ta bo'lim, 40 ta savol (kundalik suhbatlar va akademik ma'ruzalar)",
        "2. Reading (60 daqiqa): 3 ta murakkab ilmiy/akademik matn, 40 ta savol (T/F/NG, Matching, Headings)",
        "3. Writing (60 daqiqa): Task 1 (Diagramma/Grafik tasvirlash - 150 so'z) + Task 2 (Akademik insho - 250 so'z)",
        "4. Speaking (11-14 daqiqa): 3 qism (Tanishtiruv, Cue card 2 daqiqalik nutq, Chuqur muhokama)"
      ],
      en: [
        "1. Listening (30 mins): 4 sections, 40 questions spanning everyday & academic dialogues",
        "2. Reading (60 mins): 3 rigorous academic texts, 40 questions (T/F/NG, matching, headings)",
        "3. Writing (60 mins): Task 1 (Data/Visual synthesis - 150 words) + Task 2 (Discursive essay - 250 words)",
        "4. Speaking (11-14 mins): 3 parts (Introduction, Cue card monologue, In-depth conceptual discussion)"
      ],
      ru: [
        "1. Listening (30 мин): 4 секции, 40 вопросов (диалоги и академические лекции)",
        "2. Reading (60 мин): 3 научных текста, 40 вопросов (T/F/NG, заголовки, соответствия)",
        "3. Writing (60 мин): Task 1 (Описание графиков/схем — 150 слов) + Task 2 (Эссе — 250 слов)",
        "4. Speaking (11-14 мин): 3 части (Знакомство, карточка-монолог на 2 минуты, обсуждение темы)"
      ]
    },
    prepRoadmap: {
      uz: [
        "1-qadam: Cambridge IELTS Practice Tests (12-19 kitoblar) orqali rasmiy format bilan to'liq tanishish.",
        "2-qadam: Writing Task 2 da 4 ta mezon: Task Response, Coherence/Cohesion, Lexical Resource, Grammatical Range bo'yicha shablonlar tuzish.",
        "3-qadam: Speaking Part 2 va 3 uchun har kuni audioyozuv yordamida erkin fikrlash mashqini o'tkazish.",
        "4-qadam: Reading da Skimming va Scanning usullarini qo'llab, har bir matnga 20 daqiqadan ko'p sarflamaslik ko'nikmasini shakllantirish."
      ],
      en: [
        "Step 1: Work through official Cambridge IELTS Practice Tests (volumes 12 to 19) for exact test realism.",
        "Step 2: Master the 4 writing assessment band descriptors to maximize Task 1 & Task 2 scoring.",
        "Step 3: Practice Speaking Part 2 & 3 prompts daily by voice-recording and critiquing fluency and coherence.",
        "Step 4: Perfect Skimming and Scanning reading techniques under strict 20-minute per passage constraints."
      ],
      ru: [
        "Шаг 1: Прохождение официальных сборников Cambridge IELTS Practice Tests (тома 12-19).",
        "Шаг 2: Освоение 4 критериев оценки Writing (Task Response, Coherence, Lexical Resource, Grammar).",
        "Шаг 3: Ежедневная тренировка устной речи Speaking с записью на диктофон и таймером.",
        "Шаг 4: Развитие навыков быстрого чтения Skimming и Scanning (ровно по 20 минут на каждый текст)."
      ]
    },
    freeResources: [
      { name: "TakeIELTS British Council (Rasmiy bepul mashqlar)", url: "https://takeielts.britishcouncil.org/" },
      { name: "IELTS.org (Rasmiy portal va namunalar)", url: "https://www.ielts.org/" },
      { name: "IELTS Liz & Simon (Metodik darslar va insho shablonlari)", url: "https://ieltsliz.com/" }
    ],
    officialUrl: "https://takeielts.britishcouncil.org/"
  },

  {
    id: "english-toefl-duolingo",
    badge: "AQSH & Onlayn (ETS & Duolingo)",
    flag: "🇺🇸",
    category: "english",
    title: {
      uz: "TOEFL iBT & Duolingo English Test (DET)",
      en: "TOEFL iBT & Duolingo English Test (DET)",
      ru: "Экзамены TOEFL iBT и Duolingo English Test"
    },
    organization: "Educational Testing Service (ETS) & Duolingo",
    grantsApplicable: ["Fulbright (AQSH)", "Global UGRAD", "AQSH va Kanada Universitetlari"],
    levels: "TOEFL iBT: 80 - 110+ | Duolingo: 115 - 135+",
    description: {
      uz: "AQSH va xalqaro universitetlar tomonidan keng qabul qilinadigan kompyuterlashtirilgan testlar. Duolingo testi esa uydan turib arzonroq narxda topshirilishi bilan ommalashgan.",
      en: "Leading computer-delivered English proficiency tests highly preferred across US universities, Ivy League institutions, and global scholarship boards.",
      ru: "Ведущие компьютерные экзамены, широко признаваемые американскими университетами Лиги плюща и международными грантовыми фондами."
    },
    examStructure: {
      uz: [
        "TOEFL iBT (Yangi 2 soatlik qisqartirilgan format):",
        "• Reading: 2 ta matn, 20 ta savol (35 daqiqa)",
        "• Listening: 3 ta ma'ruza va 2 ta suhbat, 28 ta savol (36 daqiqa)",
        "• Speaking: 4 ta topshiriq (1 ta mustaqil + 3 ta integrallashgan - 16 daqiqa)",
        "• Writing: 2 ta topshiriq (Academic Discussion va Integrated Writing - 29 daqiqa)",
        "Duolingo (1 soat): Adaptiv test, kompyuter kamerasi orqali nazorat qilinadi."
      ],
      en: [
        "TOEFL iBT (Enhanced 2-hour concise format):",
        "• Reading: 2 passages, 20 questions (35 mins)",
        "• Listening: 3 lectures & 2 conversations, 28 questions (36 mins)",
        "• Speaking: 4 integrated & independent tasks (16 mins)",
        "• Writing: Academic Discussion & Integrated task (29 mins)",
        "Duolingo English Test: 1-hour computer-adaptive test taken from home."
      ],
      ru: [
        "TOEFL iBT (Обновленный 2-часовой формат):",
        "• Reading: 2 текста, 20 вопросов (35 мин)",
        "• Listening: 3 лекции и 2 диалога, 28 вопросов (36 мин)",
        "• Speaking: 4 задания (16 мин)",
        "• Writing: 2 задания включая Academic Discussion (29 мин)",
        "Duolingo English Test: 1 час адаптивного теста онлайн прямо из дома."
      ]
    },
    prepRoadmap: {
      uz: [
        "1-qadam: ETS rasmiy 'TOEFL TestReady' platformasida bepul diagnostik testdan o'tish.",
        "2-qadam: Yangi 'Writing for Academic Discussion' formati shablonlarini o'rganish (10 daqiqada 100+ so'z yozish).",
        "3-qadam: Notetaking (qisqa yozib borish) texnikasini rivojlantirish (Listening va Integrated topshiriqlar uchun asosiy kalit).",
        "4-qadam: Kompyuter mikrofoniga gapirishga psixologik ko'nikish (Speaking qismida aniq va ravon gapirish)."
      ],
      en: [
        "Step 1: Take the free diagnostic test on ETS official TOEFL TestReady portal.",
        "Step 2: Master the new 'Writing for an Academic Discussion' task templates.",
        "Step 3: Drill shorthand notetaking skills vital for listening and integrated prompts.",
        "Step 4: Practice speaking cleanly into a headset microphone under strict 45-60 second constraints."
      ],
      ru: [
        "Шаг 1: Прохождение бесплатного диагностического теста на портале ETS TOEFL TestReady.",
        "Шаг 2: Освоение шаблонов нового формата письменного задания Writing for Academic Discussion.",
        "Шаг 3: Развитие навыка быстрого конспектирования на слух (Notetaking).",
        "Шаг 4: Тренировка четкого устного ответа в микрофон с таймером на 45-60 секунд."
      ]
    },
    freeResources: [
      { name: "ETS TOEFL TestReady (Rasmiy bepul platforma)", url: "https://www.ets.org/toefl.html" },
      { name: "Duolingo English Test Practice (Bepul mashq testi)", url: "https://englishtest.duolingo.com/" },
      { name: "TST Prep TOEFL (Video darslar va tahlillar)", url: "https://tstprep.com/" }
    ],
    officialUrl: "https://www.ets.org/toefl.html"
  },

  {
    id: "german-testdaf",
    badge: "Nemis Tili (TestDaF & Goethe)",
    flag: "🇩🇪",
    category: "german",
    title: {
      uz: "TestDaF & Goethe-Zertifikat (Nemis Tili)",
      en: "TestDaF & Goethe-Zertifikat (German Proficiency)",
      ru: "Экзамены TestDaF и Goethe-Zertifikat по немецкому языку"
    },
    organization: "TestDaF-Institut & Goethe-Institut, Germaniya",
    grantsApplicable: ["DAAD Germaniya Davlat Granti", "Germaniya davlat universitetlarida 100% bepul ta'lim"],
    levels: "B2 va C1 darajalar (TestDaF TDN 4 / TDN 5)",
    description: {
      uz: "Germaniya, Avstriya va Shveytsariya davlat universitetlarida mutlaqo bepul (kontraktsiz) oliy ta'lim olish va DAAD grantini yutish uchun zaruriy nemis tili sertifikati.",
      en: "Essential German language certification unlocking tuition-free degree programs at elite public universities across Germany, Austria, and Switzerland.",
      ru: "Официальный сертификат по немецкому языку, открывающий доступ к бесплатному обучению в государственных университетах Германии и стипендиям DAAD."
    },
    examStructure: {
      uz: [
        "1. Leseverstehen (O'qish - 60 daqiqa): 3 ta ilmiy matn, 30 ta savol",
        "2. Hörverstehen (Eshitish - 40 daqiqa): 3 ta audio (talabalar dialogi, radio va ilmiy ma'ruza)",
        "3. Schriftlicher Ausdruck (Yozish - 60 daqiqa): Diagramma tahlili va muammoli mavzuda dalillar keltirish",
        "4. Mündlicher Ausdruck (Gapirish - 35 daqiqa): 7 ta kompyuterlashtirilgan situatsion topshiriq"
      ],
      en: [
        "1. Reading Comprehension (60 mins): 3 scientific texts, 30 questions",
        "2. Listening Comprehension (40 mins): 3 audio recordings with academic and campus contexts",
        "3. Writing (60 mins): Statistical diagram analysis and argumentative essay",
        "4. Oral Expression (35 mins): 7 computer-assisted university communication tasks"
      ],
      ru: [
        "1. Чтение (60 мин): 3 академических текста, 30 заданий",
        "2. Аудирование (40 мин): 3 аудиозаписи университетской тематики",
        "3. Письменная часть (60 мин): Описание графика и аргументированное сочинение",
        "4. Устная речь (35 мин): 7 компьютерных ситуационных заданий"
      ]
    },
    prepRoadmap: {
      uz: [
        "1-qadam: B2/C1 darajadagi akademik lug'at (Wissenschaftssprache) va bog'lovchilarni o'zlashtirish.",
        "2-qadam: Grafik tasvirlash (Grafikbeschreibung) uchun Redemittel iboralarini to'liq yod olish.",
        "3-qadam: Deutsche Welle 'Top-Thema' va ilmiy maqolalar orqali tinglab tushunishni mashq qilish.",
        "4-qadam: TestDaF-Institut rasmiy model testlarini ishlab, kamida 4x4 (har bir bo'limdan kamida TDN 4) ballga erishish."
      ],
      en: [
        "Step 1: Build robust academic German vocabulary (Wissenschaftssprache) and transitional connectors.",
        "Step 2: Memorize standard Redemittel templates for visual and graphic descriptions.",
        "Step 3: Train listening stamina using Deutsche Welle Top-Thema and university podcasts.",
        "Step 4: Complete official TestDaF model tests targeting minimum TDN 4 in all 4 components."
      ],
      ru: [
        "Шаг 1: Освоение академического немецкого словаря (Wissenschaftssprache) и устойчивых связок.",
        "Шаг 2: Заучивание клише Redemittel для описания графиков и диаграмм.",
        "Шаг 3: Аудирование подкастов Deutsche Welle и лекций немецких профессоров.",
        "Шаг 4: Решение официальных тренировочных тестов TestDaF с прицелом на уровень TDN 4 по всем 4 частям."
      ]
    },
    freeResources: [
      { name: "TestDaF.de (Rasmiy model testlar)", url: "https://www.testdaf.de/" },
      { name: "Goethe-Institut (Bepul mashq materiallari)", url: "https://www.goethe.de/" },
      { name: "Deutsche Welle (Bepul nemis tili o'quv kursi)", url: "https://learngerman.dw.com/" }
    ],
    officialUrl: "https://www.testdaf.de/"
  },

  {
    id: "japanese-jlpt",
    badge: "Yapon Tili (Japan Foundation)",
    flag: "🇯🇵",
    category: "japanese",
    title: {
      uz: "JLPT (Japanese-Language Proficiency Test - N1, N2, N3)",
      en: "JLPT (Japanese-Language Proficiency Test)",
      ru: "Экзамен по японскому языку JLPT (Нихонго Норёку Сикэн)"
    },
    organization: "Japan Foundation & Japan Educational Exchanges and Services (JEES)",
    grantsApplicable: ["MEXT Yapon Hukumati Granti", "Yaponiya Milliy Universitetlari", "JASSO stipendiyalari"],
    levels: "N5 dan N1 gacha (Universitet va grantlar uchun N2 va N1)",
    description: {
      uz: "Yaponiyada MEXT granti va yetakchi Tokio, Kyoto universitetlarida o'qish, yapon kompaniyalarida yuqori maoshli faoliyat yuritish uchun xalqaro yagona rasmiy sertifikat.",
      en: "The worldwide standard for Japanese language qualification, mandatory for MEXT government research fellowships and admission to top imperial universities in Japan.",
      ru: "Международный стандарт оценки знания японского языка, необходимый для правительственной стипендии MEXT и поступления в национальные вузы Японии."
    },
    examStructure: {
      uz: [
        "JLPT N2 / N1 Formati:",
        "1. Leksika va Ierogliflar (文字・語彙 - Kanji & Vocabulary)",
        "2. Grammatika va O'qib tushunish (文法・読解 - Grammar & Reading)",
        "3. Tinglab tushunish (聴解 - Listening)"
      ],
      en: [
        "JLPT N2 / N1 Structure:",
        "1. Language Knowledge (Vocabulary & Kanji - 文字・語彙)",
        "2. Grammar & Reading Comprehension (文法・読解)",
        "3. Listening Comprehension (聴解)"
      ],
      ru: [
        "Структура JLPT N2 / N1:",
        "1. Иероглифика и лексика (Kanji & Vocabulary)",
        "2. Грамматика и чтение сложных текстов (Grammar & Reading)",
        "3. Аудирование (Listening)"
      ]
    },
    prepRoadmap: {
      uz: [
        "1-qadam: N2 uchun kamida 1,000 ta, N1 uchun 2,000 ta Kanjini (ieroglif) doimiy takrorlash (Anki ilovasi orqali).",
        "2-qadam: Shin Nihongo Soumatome yoki Shinkanzen Master kitoblari orqali grammatik konstruktsiyalarni o'rganish.",
        "3-qadam: Yapon yangiliklari (NHK News Web Easy) va gazeta maqolalarini o'qib, tez o'qish tezligini oshirish.",
        "4-qadam: O'tgan yillardagi rasmiy JLPT testlarini ishlab, ball chegarasidan (Overall 90-100+ va har bo'limdan kamida 19 ball) o'tish."
      ],
      en: [
        "Step 1: Master 1,000+ Kanji for N2 or 2,000+ for N1 using spaced repetition (Anki).",
        "Step 2: Study grammar structures using Shin Nihongo Soumatome or Shinkanzen Master series.",
        "Step 3: Read Japanese editorial columns and NHK News articles daily to increase reading speed.",
        "Step 4: Solve full past examination papers ensuring sectional minimum pass scores."
      ],
      ru: [
        "Шаг 1: Освоение 1000+ кандзи для N2 или 2000+ для N1 с помощью карточек интервального повторения Anki.",
        "Шаг 2: Изучение грамматики по пособиям Soumatome и Shinkanzen Master.",
        "Шаг 3: Ежедневное чтение статей и новостей NHK для ускорения восприятия текстов.",
        "Шаг 4: Прохождение тестов прошлых лет с контролем проходного балла по каждой секции."
      ]
    },
    freeResources: [
      { name: "JLPT.jp (Rasmiy imtihon portali va namunalar)", url: "https://www.jlpt.jp/e/" },
      { name: "Japan Foundation (Bepul yapon tili resurslari)", url: "https://www.jpf.go.jp/e/" },
      { name: "NHK News Web Easy (Mashq uchun yapon yangiliklari)", url: "https://www3.nhk.or.jp/news/easy/" }
    ],
    officialUrl: "https://www.jlpt.jp/e/"
  },

  {
    id: "turkish-tomer",
    badge: "Turk Tili (TÖMER & TYS)",
    flag: "🇹🇷",
    category: "turkish",
    title: {
      uz: "TÖMER & TYS (Türkçe Yeterlik Sınavı)",
      en: "TÖMER & TYS Turkish Language Proficiency Exam",
      ru: "Экзамены по турецкому языку TÖMER и TYS"
    },
    organization: "Yunus Emre Enstitüsü & Ankara Üniversitesi TÖMER, Turkiya",
    grantsApplicable: ["Türkiye Bursları Davlat Granti", "Turkiya davlat universitetlari"],
    levels: "B2 va C1 darajalar",
    description: {
      uz: "Turkiya universitetlarida turk tilidagi bakalavr, magistr va tibbiyot dasturlariga to'g'ridan-to'g'ri 1-kursdan boshlash imkonini beruvchi rasmiy til sertifikati.",
      en: "Official Turkish proficiency exam by Yunus Emre Institute exempting students from the 1-year preparatory Turkish language year under Turkiye Scholarships.",
      ru: "Официальный сертификат по турецкому языку института Юнуса Эмре, освобождающий от годичного подготовительного языкового курса в Турции."
    },
    examStructure: {
      uz: [
        "1. Okuma (O'qish - 60 daqiqa): Matnni tushunish va savollar",
        "2. Dinleme (Eshitish - 45 daqiqa): Suhbatlar va audiolarni tahlil qilish",
        "3. Yazma (Yozish - 60 daqiqa): 2 ta insho (erkin fikr bayoni va rasmiy maktub)",
        "4. Konuşma (Gapirish - 15 daqiqa): Mustaqil nutq va suhbatdosh bilan muloqot"
      ],
      en: [
        "1. Reading (60 mins): Comprehension texts and vocabulary tasks",
        "2. Listening (45 mins): Audio conversations and short lectures",
        "3. Writing (60 mins): 2 composition tasks (formal essay & letter)",
        "4. Speaking (15 mins): Monologue presentation and dialogue with examiner"
      ],
      ru: [
        "1. Чтение (60 мин): Понимание текстов и лексические задания",
        "2. Аудирование (45 мин): Диалоги и тематические аудиозаписи",
        "3. Письмо (60 мин): 2 письменных задания (эссе и официальное письмо)",
        "4. Говорение (15 мин): Монолог и беседа с экзаменатором"
      ]
    },
    prepRoadmap: {
      uz: [
        "1-qadam: Istanbul Yabancılar İçin Türkçe (A1-C1) kitoblar to'plami orqali grammatikani chuqur o'rganish.",
        "2-qadam: Yunus Emre Enstitüsü rasmiy TYS namunaviy testlarini ishlab chiqish.",
        "3-qadam: Turk teleradiosi (TRT) va ilmiy maqolalar orqali leksika boyligini 5,000+ so'zga yetkazish.",
        "4-qadam: Yozma qismda turk tiliga xos mantiqiy bog'lovchilarni (çünkü, dolayısıyla, öte yandan) to'g'ri qo'llash."
      ],
      en: [
        "Step 1: Complete comprehensive Turkish grammar via Istanbul Yabancılar İçin Türkçe series (A1-C1).",
        "Step 2: Solve official Yunus Emre Institute sample TYS examination papers.",
        "Step 3: Build active vocabulary using TRT broadcasts and contemporary Turkish press.",
        "Step 4: Practice transition connectors and idiomatic phrasing for the writing paper."
      ],
      ru: [
        "Шаг 1: Изучение грамматики по курсу Istanbul Yabancılar İçin Türkçe (уровни A1-C1).",
        "Шаг 2: Проработка демонстрационных тестов TYS института имени Юнуса Эмре.",
        "Шаг 3: Расширение словарного запаса через просмотр программ TRT и чтение прессы.",
        "Шаг 4: Отработка письменных навыков с использованием вводных слов и связок."
      ]
    },
    freeResources: [
      { name: "Yunus Emre Enstitüsü TYS (Rasmiy imtihon sayti)", url: "https://tys.yee.org.tr/" },
      { name: "Türkçe Öğreniyorum (Bepul rasmiy portal)", url: "https://turkce.yee.org.tr/" },
      { name: "Ankara TÖMER (Namunaviy savollar)", url: "https://tomer.ankara.edu.tr/" }
    ],
    officialUrl: "https://tys.yee.org.tr/"
  }
];

let currentCertCategory = 'all';

// Kategoriya bo'yicha filtrlash
function filterCertificates(category, btnElement) {
  currentCertCategory = category;
  document.querySelectorAll('.cert-tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  if (btnElement) {
    btnElement.classList.add('active');
  }
  renderCertificates(category);
}

// Sertifikat kartochkalarini ekranga render qilish
function renderCertificates(filterCategory = currentCertCategory) {
  const container = document.getElementById('certificatesGrid');
  if (!container) return;

  const t = typeof getT === 'function' ? getT() : (translations[currentLang] || translations.uz);

  const filtered = certificatesData.filter(cert => {
    if (filterCategory === 'all') return true;
    return cert.category === filterCategory;
  });

  let html = '';
  filtered.forEach(cert => {
    const certTitle = typeof getLangText === 'function' ? getLangText(cert.title) : (cert.title[currentLang] || cert.title.uz);
    const certDesc = typeof getLangText === 'function' ? getLangText(cert.description) : (cert.description[currentLang] || cert.description.uz);

    html += `
      <div class="certificate-card animate-fade-in" data-cert-id="${cert.id}">
        <div class="cert-card-header">
          <div class="cert-badge-wrap">
            <span class="cert-flag">${cert.flag}</span>
            <span class="cert-type-pill">${cert.badge}</span>
          </div>
          <span class="cert-levels-badge">${cert.levels}</span>
        </div>

        <h3 class="cert-card-title">${certTitle}</h3>
        <p class="cert-card-org">🏛️ ${cert.organization}</p>
        <p class="cert-card-desc">${certDesc}</p>

        <div class="cert-grants-box">
          <span class="cert-box-label">🎯 ${currentLang === 'uz' ? 'Qaysi grantlar uchun kerak:' : currentLang === 'ru' ? 'Для каких грантов:' : 'Applicable Scholarships:'}</span>
          <div class="cert-tags-wrap">
            ${cert.grantsApplicable.map(g => `<span class="cert-grant-tag">${g}</span>`).join('')}
          </div>
        </div>

        <div class="cert-card-footer">
          <button class="btn btn-primary btn-sm" onclick="openCertificateModal('${cert.id}')">
            📖 ${t.certPrepGuide || 'Tayyorgarlik qo\'llanmasi'}
          </button>
          <a href="${cert.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            🔗 ${t.certOfficialSite || 'Rasmiy sayt'} ↗
          </a>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Sertifikat batafsil modalini ochish
function openCertificateModal(certId) {
  const cert = certificatesData.find(c => c.id === certId);
  if (!cert) return;

  const modal = document.getElementById('certificateDetailModal');
  if (!modal) return;

  const certTitle = typeof getLangText === 'function' ? getLangText(cert.title) : (cert.title[currentLang] || cert.title.uz);
  const certDesc = typeof getLangText === 'function' ? getLangText(cert.description) : (cert.description[currentLang] || cert.description.uz);

  document.getElementById('certModalFlag').textContent = cert.flag;
  document.getElementById('certModalBadge').textContent = cert.badge;
  document.getElementById('certModalTitle').textContent = certTitle;
  document.getElementById('certModalOrg').textContent = cert.organization;
  document.getElementById('certModalDesc').textContent = certDesc;
  document.getElementById('certModalLevels').textContent = cert.levels;

  // Imtihon strukturasi
  const structureArr = cert.examStructure[currentLang] || cert.examStructure.en || cert.examStructure.uz || [];
  const structList = document.getElementById('certModalStructureList');
  structList.innerHTML = structureArr.map(s => `
    <li class="cert-list-item">
      <span class="cert-item-icon">📝</span>
      <span>${s}</span>
    </li>
  `).join('');

  // Tayyorgarlik rejasi (Roadmap)
  const roadmapArr = cert.prepRoadmap[currentLang] || cert.prepRoadmap.en || cert.prepRoadmap.uz || [];
  const roadmapList = document.getElementById('certModalRoadmapList');
  roadmapList.innerHTML = roadmapArr.map(r => `
    <li class="cert-roadmap-item">
      <span class="cert-item-icon">🚀</span>
      <span>${r}</span>
    </li>
  `).join('');

  // Bepul manbalar
  const resourcesList = document.getElementById('certModalResourcesList');
  resourcesList.innerHTML = cert.freeResources.map(res => `
    <li class="cert-resource-item">
      <span class="cert-item-icon">📚</span>
      <a href="${res.url}" target="_blank" rel="noopener noreferrer" class="cert-resource-link">
        ${res.name} ↗
      </a>
    </li>
  `).join('');

  // Rasmiy sayt tugmasi
  const officialBtn = document.getElementById('certModalOfficialBtn');
  if (officialBtn) {
    officialBtn.href = cert.officialUrl;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCertificateModal() {
  const modal = document.getElementById('certificateDetailModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

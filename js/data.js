// GrantWay - Xalqaro Grantlar va Universitetlar Ma'lumotlar Bazasi (2026-2027)
// Barcha havolalar, talablar va ma'lumotlar 2026-2027 yillik rasmiy manbalar asosida yangilangan

// 2026-2027 o'quv yili va real-vaqt deadline hisoblagichi
function getScholarshipDeadline(month, day, defaultYear = 2026) {
  const now = new Date();
  let target = new Date(`${defaultYear}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`);
  if (target < now) {
    target.setFullYear(now.getFullYear());
    if (target < now) {
      target.setFullYear(now.getFullYear() + 1);
    }
  }
  return target.toISOString().split('T')[0];
}

const scholarshipsData = [
  {
    id: "chevening-uk",
    countryCode: "GB",
    countryName: { uz: "Buyuk Britaniya", en: "United Kingdom", ru: "Великобритания" },
    flag: "🇬🇧",
    title: {
      uz: "Chevening 2026-2027 Xalqaro Magistratura Granti",
      en: "Chevening 2026-2027 UK Government Scholarship",
      ru: "Стипендия правительства Великобритании Chevening 2026-2027"
    },
    organizer: "Foreign, Commonwealth & Development Office (FCDO), UK",
    degree: ["master"],
    degreeLabels: { uz: "Magistratura", en: "Master's", ru: "Магистратура" },
    fields: ["it", "business", "medicine", "social", "arts", "any"],
    funding: "full",
    monthlyStipend: "£1,450 - £1,800 / oy (London: £1,800+)",
    deadline: getScholarshipDeadline(11, 5, 2026), // 2026-11-05
    deadlineDisplay: "2026-2027 Qabul mavsumi: 5-Noyabr 2026 (Arizalar qabuli ochiq!)",
    ieltsReq: "IELTS 6.5+ (yoki Universitet shartiga ko'ra)",
    gpaReq: "3.2 / 4.0 (Diplomda 80%+)",
    officialUrl: "https://www.chevening.org/",
    popular: true,
    tags: ["2026-2027", "Full-Ride", "Leadership", "UK Universities", "Global Network"],
    description: {
      uz: "Buyuk Britaniya hukumatining 2026-2027 yillik nufuzli xalqaro granti. Dunyoning istalgan nufuzli UK universitetida 1 yillik magistraturani to'liq bepul o'qish va xalqaro stipendiya imkoniyati.",
      en: "The UK government's flagship global scholarship program for 2026-2027, offering future leaders the opportunity to pursue a one-year master's degree at any UK university with 100% full funding.",
      ru: "Флагманская стипендиальная программа правительства Великобритании на 2026-2027 год, предоставляющая будущим лидерам возможность учиться в магистратуре любого вуза Великобритании со 100% покрытием."
    },
    benefits: {
      uz: [
        "Buyuk Britaniya universitetining 100% kontrakt to'lovi (Tuition fees)",
        "Oylik stipendiya: Londonda £1,800/oy, boshqa shaharlarda £1,450 - £1,550/oy",
        "Buyuk Britaniyaga borish va qaytish aviachiptalari (Economy class)",
        "Viza xarajatlari va tibbiy sug'urta to'liq qoplanadi",
        "Eksklyuziv Chevening xalqaro yetakchilar tarmog'i va konferensiyalarga taklifnoma"
      ],
      en: [
        "100% university tuition fees paid directly to the university",
        "Monthly living allowance (£1,450 - £1,800 depending on location)",
        "Economy return flights to and from the UK",
        "UK visa application costs and travel allowances",
        "Exclusive networking events, parliamentary receptions, and leadership workshops"
      ],
      ru: [
        "Полная оплата стоимости обучения в университете Великобритании (100% контракт)",
        "Ежемесячная стипендия на проживание (£1,450 - £1,800 в зависимости от города)",
        "Авиабилеты эконом-класса в Великобританию и обратно",
        "Оплата визового сбора и медицинская страховка",
        "Доступ к престижному глобальному сообществу выпускников Chevening"
      ]
    },
    requirements: {
      uz: [
        "Bakalavr diplomi (kamida 2:1 honours yoki 80%+ GPA)",
        "Kamida 2 yillik hujjatlashtirilgan mehnat staji (2,800 soat - pullik, ko'ngilli yoki stajirovka)",
        "UK universitetlaridan 3 ta dasturni tanlash va kamida bittasidan shartsiz qabul (unconditional offer) olish",
        "Dastur tugagach o'z vataniga qaytib kamida 2 yil faoliyat ko'rsatish majburiyati"
      ],
      en: [
        "Undergraduate degree equivalent to an upper second-class 2:1 honours",
        "Minimum 2 years of work experience (at least 2,800 cumulative hours)",
        "Apply to three eligible UK master's courses and receive an unconditional offer",
        "Commit to return to your country of citizenship for at least two years after completion"
      ],
      ru: [
        "Диплом бакалавра с высоким средним баллом (эквивалент британского 2:1 honours)",
        "Минимум 2 года опыта работы (не менее 2800 подтвержденных часов)",
        "Подача заявки в 3 аккредитованных вуза Великобритании и получение безусловного оффера",
        "Обязательство вернуться на родину минимум на 2 года после окончания обучения"
      ]
    },
    documents: {
      uz: [
        "Bakalavr diplomi va barcha fanlar baholari varaqasi (ingliz tilida rasmiy tasdiqlangan)",
        "4 ta asosiy insho: Yetakchilik, Networking, Buyuk Britaniyada o'qish sababi, Karyera rejasi (har biri 500 so'z)",
        "2 ta professional yoki akademik tavsiyanoma (LoR)",
        "Amaldagi xorijga chiqish pasporti",
        "Ingliz tili sertifikati (IELTS 6.5+ yoki universitet talabiga ko'ra)"
      ],
      en: [
        "Bachelor's degree certificate and official academic transcripts with certified translation",
        "4 core essays: Leadership, Networking, Study in the UK, Career Goals (500 words each)",
        "Two professional or academic reference letters",
        "Valid international passport",
        "Valid English language proof (IELTS/TOEFL) as required by chosen universities"
      ],
      ru: [
        "Диплом бакалавра и транскрипт с нотариально заверенным переводом на английский язык",
        "4 эссе: Лидерство, Нетворкинг, Учеба в Великобритании, Карьерные цели (по 500 слов)",
        "2 академические или профессиональные рекомендации",
        "Действующий заграничный паспорт",
        "Сертификат знания английского языка (IELTS/TOEFL) по требованию вуза"
      ]
    },
    tips: {
      uz: [
        "Insholaringizda STAR (Situation, Task, Action, Result) metodikasidan foydalaning va aniq sonlar keltiring.",
        "Arizani 2026-yil 5-noyabr so'nggi soatlariga qoldirmang; server yuklamasi sababli ertaroq submit qiling.",
        "Britaniyada tanlaydigan 3 ta dasturingiz sizning mutaxassisligingiz va kelajak maqsadingizga mantiqan mos bo'lishi shart."
      ],
      en: [
        "Structure your essays using the STAR method (Situation, Task, Action, Result) with tangible achievements.",
        "Do not wait until the deadline day as official servers experience heavy traffic globally.",
        "Ensure your 3 course choices align cohesively with your stated career vision."
      ],
      ru: [
        "Используйте структуру STAR (Ситуация, Задача, Действие, Результат) при написании эссе.",
        "Не откладывайте отправку на последний день из-за перегрузки официальных серверов.",
        "Выбранные вами 3 университетские программы должны логично продолжать вашу карьерную цель."
      ]
    }
  },

  {
    id: "daad-germany",
    countryCode: "DE",
    countryName: { uz: "Germaniya", en: "Germany", ru: "Германия" },
    flag: "🇩🇪",
    title: {
      uz: "DAAD EPOS & Helmut-Schmidt 2026-2027",
      en: "DAAD 2026-2027 Development & Public Policy Scholarships",
      ru: "Стипендии DAAD 2026-2027 (EPOS и Helmut-Schmidt)"
    },
    organizer: "German Academic Exchange Service (DAAD), Germany",
    degree: ["master", "phd"],
    degreeLabels: { uz: "Magistratura & PhD", en: "Master's & PhD", ru: "Магистратура и PhD" },
    fields: ["it", "business", "social", "medicine"],
    funding: "full",
    monthlyStipend: "€992 - €1,350 / oy (Yangi rasmiy stavka)",
    deadline: getScholarshipDeadline(11, 30, 2026), // 2026-11-30
    deadlineDisplay: "2026-2027 O'quv yili: 30-Noyabr 2026 (Dasturga qarab 31-Oktabr / 30-Noyabr)",
    ieltsReq: "IELTS 6.0+ yoki TOEFL iBT 80+ (Dasturga qarab)",
    gpaReq: "3.0+ / 4.0 (75%+)",
    officialUrl: "https://www.daad.de/en/",
    popular: true,
    tags: ["2026-2027", "Full-Ride", "Engineering", "Germany", "Stipend €992+"],
    description: {
      uz: "Germaniya hukumatining 2026-2027 yillik eng yirik stipendiya dasturi. Germaniyaning nufuzli davlat texnika va tadqiqot universitetlarida bepul ingliz va nemis tillarida o'qish.",
      en: "Germany's prestigious scholarship for 2026-2027 supporting postgraduate study in English and German across world-renowned public technical and research universities.",
      ru: "Престижные стипендии немецкой службы академических обменов на 2026-2027 год для обучения в магистратуре и аспирантуре ведущих государственных университетов Германии."
    },
    benefits: {
      uz: [
        "Oylik stipendiya: magistrlar uchun €992/oy, PhD doktorantlar uchun €1,350/oy",
        "Germaniyadagi nufuzli davlat universitetlarida 100% bepul ta'lim",
        "To'liq tibbiy, baxtsiz hodisalar va shaxsiy javobgarlik sug'urtasi",
        "Germaniyaga kelish va qaytish xalqaro transport xarajatlari qoplanadi",
        "Germaniyada bepul intensiv nemis tili kursi (o'qish boshlanishidan oldin)"
      ],
      en: [
        "Monthly stipend of €992 for graduates, €1,350 for doctoral candidates",
        "Tuition-free higher education at top German public research universities",
        "Comprehensive health, accident, and liability insurance",
        "Travel subsidy for round-trip flights",
        "Free preparatory German language course and annual study allowances"
      ],
      ru: [
        "Ежемесячная стипендия: €992 для магистров, €1,350 для докторантов (новые ставки)",
        "Бесплатное обучение в ведущих государственных университетах Германии",
        "Полное медицинское страхование и страхование от несчастных случаев",
        "Компенсация расходов на перелет в Германию и обратно",
        "Бесплатные языковые курсы немецкого языка перед началом учебы"
      ]
    },
    requirements: {
      uz: [
        "Tegishli mutaxassislik bo'yicha kamida 4 yillik bakalavr diplomi",
        "Bakalavr diplomini olgandan keyin kamida 2 yillik sohaviy ish staji",
        "Diplom olinganiga 6 yildan oshmagan bo'lishi lozim",
        "Ingliz tili (IELTS 6.0+) yoki nemis tili talabiga javob berish"
      ],
      en: [
        "Bachelor's degree in a relevant discipline with strong academic record",
        "Minimum 2 years of professional work experience after bachelor's completion",
        "Academic degree should generally not be older than six years",
        "Proficiency in English (IELTS 6.0+) or German depending on program"
      ],
      ru: [
        "Степень бакалавра по профильной специальности с отличными оценками",
        "Не менее 2 лет профессионального опыта работы после окончания бакалавриата",
        "С момента получения диплома должно пройти не более 6 лет",
        "Сертификат IELTS (от 6.0) для англоязычных программ или TestDaF для немецкоязычных"
      ]
    },
    documents: {
      uz: [
        "DAAD onlayn arizasi",
        "Europass formatidagi batafsil CV (imzolangan va sanasi bilan)",
        "Motivatsion xat (aniq ilmiy va kasbiy sabablar ko'rsatilgan, 2 sahifagacha)",
        "Ish joyidan rasmiy tavsiyanoma va ish stajini tasdiqlovchi ma'lumotnoma",
        "Diplom va baholar ilovasi (notarial tasdiqlangan inglizcha tarjima)"
      ],
      en: [
        "Completed DAAD application form via official portal",
        "Hand-signed Europass-style Curriculum Vitae",
        "Letter of motivation explaining academic relevance (max 2 pages)",
        "Letter of recommendation from employer on official letterhead",
        "Certified copies of university degrees and transcripts"
      ],
      ru: [
        "Заполненная анкета на портале DAAD",
        "Подписанное резюме в формате Europass",
        "Мотивационное письмо с подробным обоснованием выбора курса (до 2 страниц)",
        "Справка с места работы и рекомендательное письмо от работодателя",
        "Нотариально заверенные копии диплома и приложений с оценками"
      ]
    },
    tips: {
      uz: [
        "DAAD dasturlarida ish tajribangiz va o'qishdan so'ng o'z davlatingiz rivojiga qanday hissa qo'shishingiz hal qiluvchi mezon hisoblanadi.",
        "Har bir universitet kursi uchun muddatlarni tekshiring (ba'zi kurslar universitet orqali, ba'zilari to'g'ridan-to'g'ri DAAD orqali qabul qilinadi)."
      ],
      en: [
        "Demonstrate how your studies will directly contribute to development priorities in your home nation.",
        "Verify whether your target course requires submission directly to the university or via the DAAD portal."
      ],
      ru: [
        "Ключевой фактор отбора — как именно полученные знания помогут решить задачи развития вашей страны.",
        "Обратите внимание: часть программ принимает документы через портал DAAD, а часть — напрямую через университет."
      ]
    }
  },

  {
    id: "global-ugrad",
    countryCode: "US",
    countryName: { uz: "AQSH", en: "United States", ru: "США" },
    flag: "🇺🇸",
    title: {
      uz: "Global UGRAD 2026-2027 Talabalar Almashinuv Granti",
      en: "Global UGRAD 2026-2027 Undergraduate Exchange Program",
      ru: "Программа студенческого обмена Global UGRAD 2026-2027 (США)"
    },
    organizer: "U.S. Department of State, Bureau of Educational and Cultural Affairs",
    degree: ["exchange"],
    degreeLabels: { uz: "Bakalavr almashinuvi (1 semestr)", en: "Undergraduate Exchange", ru: "Обмен для бакалавров (1 семестр)" },
    fields: ["it", "business", "medicine", "social", "arts", "any"],
    funding: "full",
    monthlyStipend: "$800 - $1,200 / oy + Kampusda bepul yotoqxona",
    deadline: getScholarshipDeadline(12, 15, 2026), // 2026-12-15
    deadlineDisplay: "2026-2027 Akademik mavsumi: 15-Dekabr 2026",
    ieltsReq: "TOEFL iBT (Grant yarim finalchilariga test xarajati qoplab beriladi)",
    gpaReq: "Kamida 3.0 / 4.0 (75%+)",
    officialUrl: "https://www.worldlearning.org/program/global-undergraduate-exchange-program/",
    popular: true,
    tags: ["2026-2027", "Full-Ride", "Exchange", "USA Campus", "Leadership"],
    description: {
      uz: "Bakalavriatning 1, 2 va 3-kurs talabalari uchun 2026-2027 o'quv yilida AQSH nufuzli kollej yoki universitetida 1 akademik semestr davomida 100% bepul o'qish imkoniyati.",
      en: "Fully funded non-degree semester exchange program in the USA for undergraduate student leaders to study, volunteer, and experience American campus life in 2026-2027.",
      ru: "Полностью финансируемая семестровая программа обмена в США на 2026-2027 учебный год для студентов бакалавриата очного отделения."
    },
    benefits: {
      uz: [
        "AQSH universitetida 1 semestr davomida 100% bepul o'qish (Tuition waiver)",
        "Talabalar shaharchasida (kampus) bepul turar joy va to'liq ovqatlanish rejasi (Meal plan)",
        "Oylik stipendiya shaxsiy xarajatlar uchun ($800 - $1,200)",
        "Barcha xalqaro va AQSH ichidagi reys aviachiptalari to'liq qoplanadi",
        "Vashington shahrida o'tkaziladigan yillik yetakchilik sammitida qatnashish va tibbiy sug'urta"
      ],
      en: [
        "Full tuition waiver at an accredited US host university for one semester",
        "Campus housing and full meal plan included free of charge",
        "Monthly stipend for personal expenses ($800 - $1,200)",
        "Round-trip international and domestic air travel",
        "ASPE health insurance and participation in Washington D.C. leadership workshop"
      ],
      ru: [
        "100% бесплатное обучение в университете США в течение 1 академического семестра",
        "Бесплатное проживание в кампусе и полный план питания",
        "Ежемесячная стипендия на личные расходы ($800 - $1,200)",
        "Оплата всех международных и внутренних перелетов туда и обратно",
        "Медицинская страховка и участие в лидерском семинаре в Вашингтоне"
      ]
    },
    requirements: {
      uz: [
        "Arizani topshirish paytida kamida 18 yoshda bo'lish",
        "Universitetda bakalavriatning kunduzgi bo'limida 1, 2 yoki 3-kursda o'qiyotgan bo'lish",
        "Dastur yakunlangach, o'z universitetida kamida 1 semestr o'qishi qolgan bo'lishi shart",
        "Yetakchilik salohiyati va jamoat/ko'ngillilik ishlarida faol ishtirok"
      ],
      en: [
        "At least 18 years of age at application time",
        "Currently enrolled as a full-time undergraduate student in good academic standing",
        "Must have at least one semester remaining at their home university after program completion",
        "Demonstrated leadership potential and commitment to community service"
      ],
      ru: [
        "Возраст от 18 лет на момент подачи заявки",
        "Обучение на 1-3 курсах бакалавриата очного отделения",
        "После возвращения из США должен оставаться минимум 1 семестр учебы в родном вузе",
        "Лидерский потенциал и подтвержденное участие в общественной деятельности"
      ]
    },
    documents: {
      uz: [
        "World Learning portalidagi onlayn anketa",
        "2 ta insho (Shaxsiy bayonot va Jamiyat rivojiga hissa qo'shish haqida)",
        "Universitetdan ma'lumotnoma va barcha semestr baholari transkripti",
        "2 ta o'qituvchidan tavsiyanoma",
        "Xorijga chiqish pasporti nusxasi"
      ],
      en: [
        "Online application form via World Learning portal",
        "Two essays (Personal statement and community impact statement)",
        "Official academic transcripts for all completed university semesters",
        "Two reference letters from university instructors",
        "Copy of valid international passport"
      ],
      ru: [
        "Онлайн-анкета через официальный портал World Learning",
        "Два эссе (личное заявление и вклад в развитие общества)",
        "Академическая справка с оценками за все пройденные семестры",
        "Два рекомендательных письма от преподавателей",
        "Копия загранпаспорта"
      ]
    },
    tips: {
      uz: [
        "Insho yozishda ko'ngillilik (volunteering) va jamoat ishlaridagi shaxsiy hissangizni aniq misollar bilan ochib bering.",
        "TOEFL sertifikatingiz bo'lmasa ham topshira olasiz — yarim finalga chiqsangiz elchixona sizga bepul TOEFL testiga vaucher beradi."
      ],
      en: [
        "Highlight concrete community volunteering experiences and community leadership.",
        "Do not worry if you do not have TOEFL yet; semi-finalists receive free official testing vouchers."
      ],
      ru: [
        "Сделайте упор на волонтерскую деятельность и общественные инициативы.",
        "Сертификат TOEFL на начальном этапе не требуется — финалистам посольство оплачивает сдачу экзамена."
      ]
    }
  },

  {
    id: "el-yurt-umidi",
    countryCode: "UZ",
    countryName: { uz: "O'zbekiston / Dunyo TOP 300", en: "Uzbekistan / Global TOP 300", ru: "Узбекистан / Топ-300 мира" },
    flag: "🇺🇿",
    title: {
      uz: "El-Yurt Umidi Jamg'armasi 2026-2027 Granti",
      en: "El-Yurt Umidi Foundation 2026-2027 Scholarship",
      ru: "Стипендия фонда «Эл-юрт умиди» 2026-2027"
    },
    organizer: "O'zbekiston Respublikasi Prezidenti huzuridagi «El-yurt umidi» jamg'armasi",
    degree: ["bachelor", "master", "phd"],
    degreeLabels: { uz: "Bakalavr, Magistr & Doktorantura", en: "Bachelor's, Master's & PhD", ru: "Бакалавриат, Магистратура и PhD" },
    fields: ["it", "business", "medicine", "social", "arts", "any"],
    funding: "full",
    monthlyStipend: "$1,500 - $2,500 / oy (Mamlakatga qarab)",
    deadline: getScholarshipDeadline(12, 1, 2026), // 2026-12-01
    deadlineDisplay: "2026-2027 O'quv yili tanlovi: 1-Dekabr 2026",
    ieltsReq: "IELTS 6.5+ (Bakalavr), 7.0+ (Magistr) yoki xorijiy OTM qabul talabi",
    gpaReq: "80%+",
    officialUrl: "https://eyuf.uz/",
    popular: true,
    tags: ["2026-2027", "Full-Ride", "TOP 300 Universities", "Uzbekistan Government"],
    description: {
      uz: "O'zbekiston yoshlariga 2026-2027 o'quv yilida dunyoning eng nufuzli TOP-300 universitetlarida o'qish uchun barcha xarajatlarni to'liq qoplab beruvchi davlat granti.",
      en: "Presidential scholarship fund of Uzbekistan financing full tuition, living, and travel costs for talented citizens admitted to the world's top 300 universities for 2026-2027.",
      ru: "Президентский стипендиальный фонд Узбекистана на 2026-2027 год, полностью оплачивающий учебу и проживание талантливой молодежи в топ-300 университетах мира."
    },
    benefits: {
      uz: [
        "Xorijiy nufuzli TOP-300 oliygohining 100% kontrakt to'lovi (Tuition fees)",
        "Oylik stipendiya yashash va ovqatlanish uchun ($1,500 - $2,500)",
        "Ikki tomonlama xalqaro aviachiptalar xarajatlari",
        "Viza va xalqaro tibbiy sug'urta to'lovlari to'liq davlat hisobidan",
        "O'quv darsliklari va ilmiy maqolalar nashr etish uchun qo'shimcha mablag'"
      ],
      en: [
        "Full tuition coverage at world TOP 300 institutions",
        "Monthly living stipend tailored by host country ($1,500 - $2,500)",
        "Round-trip international flight tickets",
        "Visa processing fees and comprehensive health insurance",
        "Textbooks and research publication allowances"
      ],
      ru: [
        "100% оплата контракта в вузах из топ-300 мировых рейтингов",
        "Ежемесячная стипендия на жилье и питание ($1,500 - $2,500)",
        "Авиабилеты туда и обратно",
        "Оплата визовых сборов и международная медицинская страховка",
        "Средства на учебные материалы и публикации"
      ]
    },
    requirements: {
      uz: [
        "O'zbekiston Respublikasi fuqarosi bo'lish",
        "Dunyoning TOP-300 reytingidagi universitetidan shartsiz qabul xati (Unconditional Offer)ga ega bo'lish",
        "Til bilish sertifikati (IELTS/TOEFL/boshqa)",
        "O'qishni tamomlagach, O'zbekistondagi davlat idorasi yoki tashkilotida ishlab berish majburiyati"
      ],
      en: [
        "Citizen of the Republic of Uzbekistan",
        "Hold an unconditional admission offer from a university ranked in the global TOP 300",
        "Recognized language proficiency certificate",
        "Commitment to work in Uzbekistan's public or priority sectors upon graduation"
      ],
      ru: [
        "Гражданство Республики Узбекистан",
        "Безусловное приглашение (Unconditional offer) от вуза из топ-300 мирового рейтинга",
        "Сертификат о знании иностранного языка",
        "Обязательство отработать в профильных организациях Узбекистана после окончания учебы"
      ]
    },
    documents: {
      uz: [
        "EYUF elektron arizasi (onlayn tizim orqali)",
        "Xorijiy nufuzli OTMdan rasmiy qabul xati (Offer letter)",
        "Pasport/ID karta nusxasi",
        "Diplom/Attestat nusxasi va baholar transkripti",
        "Motivatsion insho va O'zbekiston rivojiga hissa qo'shish rejasi"
      ],
      en: [
        "EYUF online portal application",
        "Official unconditional offer letter from TOP 300 foreign university",
        "Passport / National ID card copy",
        "Graduation diploma with grades transcript",
        "Motivation essay outlining return-and-impact plan for Uzbekistan"
      ],
      ru: [
        "Электронное заявление на портале фонда EYUF",
        "Официальное приглашение (Unconditional Offer) из вуза топ-300",
        "Копия паспорта / ID-карты",
        "Диплом или аттестат с оценками",
        "Мотивационное эссе с планом практического применения знаний в Узбекистане"
      ]
    },
    tips: {
      uz: [
        "Avval chet eldagi nufuzli universitetga mustaqil hujjat topshirib, qabul xatini oling, so'ngra jamg'arma stipendiyasiga ariza bering.",
        "Suhbat bosqichida davlat tili, O'zbekiston tarixi va o'z sohangizdagi islohotlar bo'yicha tayyorgarlik ko'ring."
      ],
      en: [
        "First secure your unconditional admission offer directly from your target university before applying to the foundation.",
        "Prepare for the interview by demonstrating expertise in your field and readiness to contribute to national reforms."
      ],
      ru: [
        "Сначала самостоятельно поступите в зарубежный вуз из топ-300 и получите безусловный оффер, затем подавайте на стипендию.",
        "Готовьтесь к собеседованию: важны лидерские качества и четкое видение реформ в вашей сфере."
      ]
    }
  },

  {
    id: "erasmus-mundus",
    countryCode: "EU",
    countryName: { uz: "Yevropa Ittifoqi", en: "European Union", ru: "Европейский Союз" },
    flag: "🇪🇺",
    title: {
      uz: "Erasmus Mundus Joint Masters 2027-2029 (EMJM)",
      en: "Erasmus Mundus 2027-2029 Joint Masters Scholarships",
      ru: "Совместная магистратура Erasmus Mundus 2027-2029 (EMJM)"
    },
    organizer: "European Commission, European Union",
    degree: ["master"],
    degreeLabels: { uz: "Xalqaro Magistratura", en: "Joint Master's", ru: "Совместная магистратура" },
    fields: ["it", "business", "medicine", "social", "arts", "any"],
    funding: "full",
    monthlyStipend: "€1,400 / oy (Jami €33,600)",
    deadline: getScholarshipDeadline(1, 10, 2027), // 2027-01-10
    deadlineDisplay: "2026-2027 Qabul katalogi: 10-Yanvar 2027",
    ieltsReq: "IELTS 6.5 - 7.0 yoki TOEFL iBT 90+",
    gpaReq: "3.3+ / 4.0 (Top 15%)",
    officialUrl: "https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/erasmus-mundus-joint-masters",
    popular: true,
    tags: ["2026-2027", "Full-Ride", "Multi-Country", "Double Degree", "High Stipend €1400"],
    description: {
      uz: "Yevropaning eng elita qo'shma magistratura dasturi. Talaba 2 yil davomida kamida 2-3 xil Yevropa davlatida o'qiydi va bir vaqtning o'zida bir nechta universitet diplomini oladi.",
      en: "Prestigious integrated master's program funded by the European Union. Study across at least two to three different European countries with a full monthly fellowship of €1,400.",
      ru: "Элитная магистерская программа Евросоюза. Студенты учатся минимум в двух или трех разных странах Европы и получают двойной европейский диплом со стипендией €1,400/мес."
    },
    benefits: {
      uz: [
        "Konsortsiumdagi barcha Yevropa universitetlarining 100% o'qish to'lovi to'liq qoplanadi",
        "Har oy €1,400 sof stipendiya (24 oy davomida jami €33,600)",
        "Yevropa davlatlari o'rtasida ko'chib yurish (mobility) xarajatlari va parvozlar",
        "To'liq xalqaro tibbiy va sayohat sug'urtasi",
        "Bir nechta nufuzli Yevropa OTMlarining qo'shma xalqaro diplomi (Joint/Double Degree)"
      ],
      en: [
        "100% coverage of all tuition and participation costs across partner universities",
        "Monthly living allowance of €1,400 for up to 24 months (total €33,600)",
        "Travel, relocation, and visa subsidies",
        "Worldwide comprehensive health and accident insurance",
        "Joint or multiple master's degrees from prestigious European universities"
      ],
      ru: [
        "100% покрытие стоимости обучения во всех вузах европейского консорциума",
        "Ежемесячная стипендия €1,400 в течение всех 2 лет учебы (всего €33,600)",
        "Оплата переездов между странами, виз и перелетов",
        "Полная международная медицинская страховка",
        "Двойной или совместный диплом нескольких европейских университетов"
      ]
    },
    requirements: {
      uz: [
        "Bakalavr diplomi (tegishli soha bo'yicha yuqori GPA bilan)",
        "Ingliz tilini erkin bilish (IELTS kamida 6.5, har bir bo'limdan 6.0+)",
        "Akademik yoki ilmiy izlanishlarga yuqori qiziqish",
        "Dunyoning istalgan davlati fuqarolari uchun ochiq"
      ],
      en: [
        "First higher education degree (bachelor's or equivalent) in relevant field",
        "High proficiency in academic English (IELTS 6.5+ or TOEFL iBT 90+)",
        "Demonstrated academic excellence and motivation for international mobility",
        "Open to applicants worldwide without nationality restrictions"
      ],
      ru: [
        "Диплом бакалавра в релевантной области с отличными оценками",
        "Свободный академический английский (IELTS от 6.5 или TOEFL от 90)",
        "Высокая академическая успеваемость и готовность к учебе в разных странах",
        "Доступно для граждан любых стран мира"
      ]
    },
    documents: {
      uz: [
        "Bakalavr diplomi va transkripti (inglizcha tarjima va tasdiq)",
        "Motivatsion xat (aniq dastur va konsortsium universitetlariga moslashtirilgan)",
        "2 ta akademik tavsiyanoma (professorlar yoki ilmiy rahbarlardan)",
        "Europass CV (akademik loyihalar va nashrlar ko'rsatilgan)",
        "Ingliz tili sertifikati (IELTS / TOEFL)"
      ],
      en: [
        "Bachelor's degree certificate and official academic transcript",
        "Motivation letter tailored specifically to the consortium's curriculum",
        "Two letters of academic recommendation from professors",
        "Europass-style academic CV highlighting achievements and research",
        "Valid English language proficiency test report"
      ],
      ru: [
        "Диплом бакалавра и транскрипт с нотариально заверенным переводом",
        "Индивидуальное мотивационное письмо под специфику выбранного консорциума",
        "Два академических рекомендательных письма",
        "Резюме в формате Europass с перечнем научных интересов",
        "Сертификат IELTS или TOEFL"
      ]
    },
    tips: {
      uz: [
        "Erasmus katalogida 100 dan ortiq dastur mavjud. Bir vaqtning o'zida ko'pi bilan 3 ta dasturga grant uchun ariza topshirishingiz mumkin.",
        "Har bir dasturning o'ziga xos talablari va muddati bor, arizani aynan shu dastur sahifasi orqali yuborasiz."
      ],
      en: [
        "Search the EMJMD Catalogue of 100+ programs. You may apply for funding to a maximum of 3 programs simultaneously.",
        "Each consortium has its own independent application deadline and review portal."
      ],
      ru: [
        "В каталоге EMJMD доступно более 100 программ; одновременно можно подать заявку максимум на 3 программы.",
        "У каждого консорциума свои критерии отбора и отдельный сайт для подачи документов."
      ]
    }
  },

  {
    id: "stipendium-hungaricum",
    countryCode: "HU",
    countryName: { uz: "Vengriya", en: "Hungary", ru: "Венгрия" },
    flag: "🇭🇺",
    title: {
      uz: "Stipendium Hungaricum 2027-2028 Davlat Granti",
      en: "Stipendium Hungaricum 2027-2028 Scholarship Program",
      ru: "Государственная стипендия Венгрии Stipendium Hungaricum 2027-2028"
    },
    organizer: "Tempus Public Foundation & Hungarian Government",
    degree: ["bachelor", "master", "phd"],
    degreeLabels: { uz: "Bakalavr, Magistr & PhD", en: "Bachelor's, Master's & PhD", ru: "Бакалавриат, Магистратура и PhD" },
    fields: ["it", "business", "medicine", "social", "arts", "any"],
    funding: "full",
    monthlyStipend: "43,700 - 180,000 HUF / oy + Yotoqxona yordami",
    deadline: getScholarshipDeadline(1, 15, 2027), // 2027-01-15
    deadlineDisplay: "2026-2027 Qabul sikli: 15-Yanvar 2027",
    ieltsReq: "IELTS 5.5 - 6.5 (yoki Duolingo / OTM ichki imtihoni)",
    gpaReq: "70%+",
    officialUrl: "https://stipendiumhungaricum.hu/",
    popular: true,
    tags: ["2026-2027", "Full-Ride", "Europe (EU)", "Schengen Visa", "Low Cost"],
    description: {
      uz: "Vengriya hukumatining xalqaro talabalar uchun Yevropadagi eng mashhur dasturi. Shengen hududida bepul ingliz tilida o'qish, bepul yotoqxona va yashash stipendiyasi.",
      en: "Prestigious Hungarian government scholarship granting full tuition exemption, dormitory accommodation, and living stipends in the European Union for 2026-2027.",
      ru: "Популярная стипендиальная программа правительства Венгрии, дающая возможность бесплатно учиться на английском языке в вузах Евросоюза."
    },
    benefits: {
      uz: [
        "100% barcha o'quv kontrakt to'lovlaridan to'liq ozod etilish",
        "Oylik stipendiya (Bakalavr va Magistr: 43,700 HUF, PhD: 140,000 - 180,000 HUF)",
        "Bepul universitet yotoqxonasi yoki oyiga 40,000 HUF turar-joy kompensatsiyasi",
        "Yillik 65,000 HUF miqdoridagi to'liq davlat tibbiy sug'urtasi",
        "Yevropa Ittifoqi (Shengen hududi) bo'ylab vizasiz erkin sayohat qilish imkoniyati"
      ],
      en: [
        "100% exemption from payment of university tuition fees",
        "Monthly stipend (Undergraduate/Master: HUF 43,700, PhD: up to HUF 180,000)",
        "Free dormitory place or accommodation contribution of HUF 40,000/month",
        "Comprehensive health insurance up to HUF 65,000 per year",
        "Schengen student residence permit allowing free EU travel"
      ],
      ru: [
        "Полное освобождение от оплаты обучения (100% грант)",
        "Ежемесячная стипендия (Бакалавриат/Магистратура: 43,700 HUF, PhD: до 180,000 HUF)",
        "Бесплатное место в общежитии или компенсация аренды 40,000 HUF/мес",
        "Комплексное медицинское страхование",
        "Студенческий ВНЖ и возможность свободно путешествовать по странам Шенгена"
      ]
    },
    requirements: {
      uz: [
        "Hamkor davlat (shu jumladan O'zbekiston) fuqarosi bo'lish",
        "Nomzod arizani ham DreamApply tizimiga, ham milliy yuboruvchi organga topshirishi kerak",
        "Ingliz tilida B2 daraja (IELTS kamida 5.5 yoki 6.0)",
        "Tibbiy ma'lumotnoma (belgilangan xalqaro shablon bo'yicha)"
      ],
      en: [
        "Citizen of an eligible partner country",
        "Submission of application to both the DreamApply system and local Sending Partner",
        "English language proficiency at CEFR B2 level (IELTS 5.5 - 6.5)",
        "Satisfactory official medical certificate"
      ],
      ru: [
        "Гражданство страны-партнера программы",
        "Обязательная подача документов в систему DreamApply и национальному партнеру",
        "Владение английским языком на уровне B2 (IELTS 5.5 - 6.5)",
        "Медицинская справка о состоянии здоровья"
      ]
    },
    documents: {
      uz: [
        "Onlayn ariza shakli (DreamApply portali orqali)",
        "Motivatsiya xati (kamida 1 sahifa, Times New Roman 12)",
        "Attestat yoki Diplom va baholar transkripti (notarial tasdiqlangan inglizcha tarjima)",
        "Ingliz tili sertifikati nusxasi",
        "Xorijga chiqish pasporti nusxasi va Tibbiy ma'lumotnoma"
      ],
      en: [
        "Online application completed via DreamApply portal",
        "Motivation letter (minimum 1 page)",
        "Proof of education credentials and transcripts translated into English",
        "Language proficiency certificate",
        "Copy of valid passport and official Medical Certificate"
      ],
      ru: [
        "Заполненная анкета на портале DreamApply",
        "Мотивационное письмо (минимум 1 страница на английском языке)",
        "Аттестат или диплом с нотариальным переводом на английский язык",
        "Сертификат английского языка (IELTS/TOEFL)",
        "Копия заграничного паспорта и медицинская справка"
      ]
    },
    tips: {
      uz: [
        "Ikki xil ta'lim dasturini tanlashingiz mumkin. Birinchi tanlov sizning asosiy ustuvor dasturingiz hisoblanadi.",
        "Milliy yuboruvchi organ (Sending Partner - O'zbekiston Oliy Ta'lim Vazirligi) ro'yxatidan o'tishni unutmang!"
      ],
      en: [
        "You can select up to two study programs. Prioritize your preferred choice as first.",
        "Do not forget to register with your country's Sending Partner authority alongside DreamApply."
      ],
      ru: [
        "Можно выбрать до двух программ обучения; расставьте их в порядке реального приоритета.",
        "Обязательно пройдите регистрацию в национальном координирующем органе вашей страны."
      ]
    }
  },

  {
    id: "turkiye-burslari",
    countryCode: "TR",
    countryName: { uz: "Turkiya", en: "Turkey", ru: "Турция" },
    flag: "🇹🇷",
    title: {
      uz: "Türkiye Bursları 2026-2027 Davlat Granti",
      en: "Türkiye Scholarships 2026-2027 (Turkiye Burslari)",
      ru: "Государственная стипендия Турции Türkiye Bursları 2026-2027"
    },
    organizer: "Presidency for Turks Abroad and Related Communities (YTB), Turkey",
    degree: ["bachelor", "master", "phd"],
    degreeLabels: { uz: "Bakalavr, Magistr & PhD", en: "Bachelor's, Master's & PhD", ru: "Бакалавриат, Магистратура и PhD" },
    fields: ["it", "business", "medicine", "social", "arts", "any"],
    funding: "full",
    monthlyStipend: "4,500 - 9,500 TRY / oy (Yangi oshirilgan stavkalar)",
    deadline: getScholarshipDeadline(2, 20, 2027), // 2027-02-20
    deadlineDisplay: "2026-2027 / 2027 Qabuli: 10-Yanvar — 20-Fevral 2027",
    ieltsReq: "Tilsiz topshirsa bo'ladi (1 yil bepul turk tili kursi bor)",
    gpaReq: "70% (Bakalavr), 75% (Magistr), 90% (Tibbiyot)",
    officialUrl: "https://www.turkiyeburslari.gov.tr/",
    popular: true,
    tags: ["2026-2027", "Full-Ride", "No-IELTS", "Free Dorm & Meals", "Turkish Course"],
    description: {
      uz: "Turkiya hukumatining eng ommabop xalqaro granti. Barcha darajalar uchun to'liq kontrakt, yotoqxona va 3 mahal ovqat, yangilangan oylik stipendiya, 1 yillik turk tili kursi va aviachiptalar.",
      en: "Comprehensive government-funded scholarship offering university placement, tuition waiver, dormitory accommodation, language preparation, and increased monthly stipends in Turkey.",
      ru: "Самая популярная государственная стипендия Турции, покрывающая обучение в вузе, общежитие с питанием, стипендию, перелет и годичный языковой курс."
    },
    benefits: {
      uz: [
        "Turkiyaning davlat va yetakchi universitetlariga to'g'ridan-to'g'ri joylashtirish va 100% bepul o'qish",
        "Oylik stipendiya (Bakalavr: 4,500 - 5,000 TL, Magistr: 7,000 TL, PhD: 9,500 TL)",
        "Davlat talabalar turar joyida (yotoqxonada) bepul yashash va 3 mahal ovqatlanish",
        "1 yillik bepul turk tili (TÖMER) tayyorlov kursi",
        "Bir martalik borish va o'qish tugagach qaytish aviachiptasi",
        "To'liq davlat tibbiy sug'urtasi"
      ],
      en: [
        "Guaranteed university and program placement with zero tuition fees",
        "Monthly stipend (Undergraduate: 4,500 - 5,000 TL, Master's: 7,000 TL, PhD: 9,500 TL)",
        "Free dormitory accommodation with meal plans included",
        "One-year Turkish language preparatory course (TÖMER)",
        "Round-trip international flight tickets",
        "Full health insurance coverage"
      ],
      ru: [
        "100% бесплатное обучение в выбранном турецком государственном вузе",
        "Ежемесячная стипендия: Бакалавриат: 4,500-5,000 TL, Магистратура: 7,000 TL, PhD: 9,500 TL",
        "Бесплатное проживание в студенческом общежитии с питанием",
        "Годичный курс турецкого языка (TÖMER)",
        "Бесплатный авиаперелет в Турцию и обратно",
        "Государственная медицинская страховка"
      ]
    },
    requirements: {
      uz: [
        "Bakalavriat uchun 21 yoshdan, Magistratura uchun 30 yoshdan, PhD uchun 35 yoshdan oshmagan bo'lish",
        "O'rtacha baho: Bakalavr uchun kamida 70%, Magistr/PhD uchun kamida 75%, Tibbiyot uchun 90%",
        "Turkiya fuqaroligiga ega bo'lmaslik"
      ],
      en: [
        "Under 21 years old for undergraduate; under 30 for master's; under 35 for doctoral programs",
        "Minimum academic achievement: 70% for bachelor's, 75% for graduate, 90% for health sciences",
        "Must not hold Turkish citizenship"
      ],
      ru: [
        "Возраст: до 21 года на бакалавриат, до 30 лет на магистратуру, до 35 лет на докторантуру",
        "Минимальный балл аттестата/диплома: 70% (бакалавриат), 75% (магистратура/PhD), 90% (медицина)",
        "Кандидат не должен иметь гражданства Турции"
      ]
    },
    documents: {
      uz: [
        "Pasport yoki ID karta nusxasi",
        "Attestat yoki Diplom (ilovasi bilan)",
        "Letter of Intent (Turkiyada o'qish sababi va kelajak maqsadlar)",
        "Akademik yoki professional tavsiyanoma",
        "Yutuqlar: olimpiada diplomlari, sertifikatlar, ko'ngillilik faoliyati"
      ],
      en: [
        "Valid identity document or international passport",
        "Diploma or official temporary graduation certificate with transcripts",
        "Letter of intent detailing why Turkey and academic goals",
        "At least one academic or employer recommendation letter",
        "Extracurricular certificates, awards, and project achievements"
      ],
      ru: [
        "Действующий загранпаспорт или удостоверение личности",
        "Аттестат или диплом с приложением оценок",
        "Мотивационное письмо (Letter of Intent)",
        "Академическое рекомендательное письмо от преподавателя",
        "Сертификаты олимпиад, волонтерства, публикации"
      ]
    },
    tips: {
      uz: [
        "IELTS majburiy emas, ammo bo'lsa ODTÜ, Boğaziçi kabi ingliz tilidagi nufuzli universitetlarga qabul ehtimolini oshiradi.",
        "Arizadagi 'Letter of Intent' qismida nega aynan Turkiyani va tanlagan shaharlaringizni tanlaganingizni asoslab bering."
      ],
      en: [
        "While IELTS is optional, having one opens doors to elite English-medium universities like METU and Boğaziçi.",
        "Clearly explain your regional choice in the Letter of Intent section."
      ],
      ru: [
        "Наличие IELTS необязательно, но сильно повышает шансы на англоязычные программы в топовые вузы (METU, Boğaziçi).",
        "Подробно обоснуйте свой выбор специальностей и городов в мотивационной части заявки."
      ]
    }
  },

  {
    id: "swedish-institute",
    countryCode: "SE",
    countryName: { uz: "Shvetsiya", en: "Sweden", ru: "Швеция" },
    flag: "🇸🇪",
    title: {
      uz: "Swedish Institute Scholarships (SISGP) 2027-2028",
      en: "Swedish Institute Scholarships 2027-2028 (SISGP)",
      ru: "Стипендия Шведского Института SISGP 2027-2028"
    },
    organizer: "Swedish Institute, Government of Sweden",
    degree: ["master"],
    degreeLabels: { uz: "Magistratura", en: "Master's", ru: "Магистратура" },
    fields: ["it", "business", "social", "medicine"],
    funding: "full",
    monthlyStipend: "12,000 SEK / oy + 15,000 SEK yo'l puli",
    deadline: getScholarshipDeadline(2, 20, 2027), // 2027-02-20
    deadlineDisplay: "2026-2027 Sikli: OTM: 15-Yanvar 2027 / SI: 20-Fevral 2027",
    ieltsReq: "IELTS 6.5+ (Universitetga bog'liq)",
    gpaReq: "3.0+ / 4.0",
    officialUrl: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/",
    popular: false,
    tags: ["2026-2027", "Full-Ride", "Scandinavia", "Innovation", "12,000 SEK"],
    description: {
      uz: "Shvetsiya davlatining eng nufuzli xalqaro granti. Barqaror rivojlanish, innovatsiya va yetakchilik sohasida magistratura uchun to'liq ta'minot.",
      en: "Full-ride scholarship by the Swedish government designed to develop global leaders aligned with the UN 2030 Agenda for Sustainable Development.",
      ru: "Щедрая стипендия правительства Швеции для подготовки будущих лидеров, нацеленных на устойчивое развитие и инновации."
    },
    benefits: {
      uz: [
        "Shvetsiya universitetining 100% kontrakt to'lovi to'liq qoplanadi",
        "Oylik stipendiya: 12,000 SEK (yashash xarajatlari uchun)",
        "15,000 SEK miqdorida bir martalik parvoz xarajatlari uchun moddiy yordam",
        "To'liq tibbiy va baxtsiz hodisalardan sug'urta",
        "Nufuzli SI Network for Global Professionals tarmog'iga a'zolik"
      ],
      en: [
        "Full tuition fee coverage paid directly to the Swedish university",
        "Monthly living allowance of 12,000 SEK",
        "Travel grant of 15,000 SEK",
        "Comprehensive health and accident insurance",
        "Membership in the prestigious SI Network for Future Global Leaders"
      ],
      ru: [
        "Полная оплата обучения в шведском университете",
        "Ежемесячная стипендия 12,000 шведских крон на проживание",
        "Грант на авиаперелет в размере 15,000 крон",
        "Медицинская страховка",
        "Членство в сети будущих глобальных лидеров SI"
      ]
    },
    requirements: {
      uz: [
        "Kamida 3,000 soatlik hujjatlashtirilgan mehnat va yetakchilik tajribasi",
        "Shvetsiyadagi magistratura dasturiga University Admissions portali orqali ariza topshirgan bo'lish (16-oktabr — 15-yanvar)",
        "BMTning Barqaror Rivojlanish maqsadlariga mos keluvchi mutaxassislik tanlash"
      ],
      en: [
        "Demonstrated minimum of 3,000 hours of certified work and leadership experience",
        "Application to an eligible master's program through UniversityAdmissions.se",
        "Clear alignment with UN 2030 Sustainable Development Goals"
      ],
      ru: [
        "Подтвержденный опыт работы и лидерства не менее 3000 часов",
        "Подача заявки в магистратуру через единый шведский портал UniversityAdmissions.se",
        "Соответствие целям устойчивого развития ООН"
      ]
    },
    documents: {
      uz: [
        "SI Curriculum Vitae (faqat maxsus SI shabloni bo'yicha)",
        "2 dona tavsiyanoma (faqat rasmiy SI shaklida)",
        "Ish va yetakchilik tajribasi to'g'risidagi rasmiy tasdiqnoma (Proof of work form)",
        "Pasport nusxasi"
      ],
      en: [
        "Strictly formatted SI CV on official template",
        "Two letters of reference on official SI template",
        "Proof of work and leadership experience form",
        "Copy of valid international passport"
      ],
      ru: [
        "Резюме строго по официальному шаблону Шведского института",
        "Два рекомендательных письма по официальной форме SI",
        "Подтверждение рабочего и лидерского стажа (Proof of Work)",
        "Копия заграничного паспорта"
      ]
    },
    tips: {
      uz: [
        "Shvetsiyada avval University Admissions portalida o'qishga topshirib 8 xonali arizachi raqamini olasiz, keyin fevralda SI stipendiyasiga topshirasiz.",
        "Faqat rasmiy SI shablonlaridan foydalaning; shablon o'zgartirilsa ariza bekor qilinadi."
      ],
      en: [
        "You must first apply on UniversityAdmissions.se and obtain your 8-digit application number.",
        "Use only the exact official SI templates without altering fonts or formatting."
      ],
      ru: [
        "Сначала подайте заявку на учебу через UniversityAdmissions.se и получите 8-значный номер заявки.",
        "Используйте только официальные бланки SI без изменения формата."
      ]
    }
  },

  {
    id: "gks-korea",
    countryCode: "KR",
    countryName: { uz: "Janubiy Koreya", en: "South Korea", ru: "Южная Корея" },
    flag: "🇰🇷",
    title: {
      uz: "Global Korea Scholarship (GKS / KGSP) 2026-2027",
      en: "Global Korea Scholarship 2026-2027 (GKS / KGSP)",
      ru: "Государственная стипендия Южной Кореи GKS 2026-2027"
    },
    organizer: "National Institute for International Education (NIIED), Ministry of Education, Korea",
    degree: ["bachelor", "master", "phd"],
    degreeLabels: { uz: "Bakalavr, Magistr & PhD", en: "Bachelor's, Master's & PhD", ru: "Бакалавриат, Магистратура и PhD" },
    fields: ["it", "business", "social", "arts", "medicine", "any"],
    funding: "full",
    monthlyStipend: "1,000,000 - 1,500,000 KRW / oy (+TOPIK 5-6 bonusi)",
    deadline: getScholarshipDeadline(3, 10, 2027), // 2027-03-10
    deadlineDisplay: "2026-2027 Bakalavr: Kuz 2026 / Magistr & PhD: Mart 2027",
    ieltsReq: "Majburiy emas (IELTS yoki TOPIK borligi katta ustunlik beradi)",
    gpaReq: "80%+ yoki eng yaxshi 20% likda bo'lish",
    officialUrl: "https://www.studyinkorea.go.kr/",
    popular: true,
    tags: ["2026-2027", "Full-Ride", "Free Korean Course", "High Stipend", "Tech Hub"],
    description: {
      uz: "Janubiy Koreya hukumatining eng nufuzli to'liq granti. Barcha darajadagi ta'lim, 1 yillik bepul koreys tili tayyorlov kursi, oyma-oy stipendiya va aviachiptalar.",
      en: "Flagship scholarship by the South Korean government offering fully funded bachelor's, master's, and doctoral studies plus a one-year intensive Korean language program.",
      ru: "Главная правительственная стипендия Южной Кореи, покрывающая обучение, проживание, перелеты и годичные курсы корейского языка."
    },
    benefits: {
      uz: [
        "100% barcha o'quv kontrakt to'lovlari (Tuition waiver)",
        "Oylik stipendiya: Bakalavr: 1,000,000 KRW, Magistr/PhD: 1,300,000 - 1,500,000 KRW",
        "Borish va qaytish aviachiptalari (Economy)",
        "Bir martalik joylashish yordam puli (Settlement allowance: 200,000 KRW)",
        "1 yillik bepul koreys tili tayyorlov kursi",
        "Tibbiy sug'urta va TOPIK 5+ daraja uchun qo'shimcha oylik 100,000 KRW bonus"
      ],
      en: [
        "Full tuition waiver for the entire degree period",
        "Monthly stipend: KRW 1,000,000 (Bachelor's), KRW 1,300,000 - 1,500,000 (Master's/PhD)",
        "Round-trip airfare economy class",
        "Settlement allowance upon arrival",
        "1-year intensive Korean language training",
        "National health insurance coverage and Korean proficiency bonus"
      ],
      ru: [
        "Полное покрытие стоимости обучения в университете",
        "Ежемесячная стипендия: от 1,000,000 до 1,500,000 вон",
        "Авиабилеты в оба конца",
        "Единовременное пособие на обустройство",
        "Годичные интенсивные языковые курсы корейского языка",
        "Медицинская страховка и доплата за знание корейского языка (TOPIK 5-6)"
      ]
    },
    requirements: {
      uz: [
        "Nomzod va uning ota-onasi Koreya fuqarosi bo'lmasligi kerak",
        "Bakalavr uchun 25 yoshgacha, Magistr/PhD uchun 40 yoshgacha",
        "O'rtacha baho: GPA kamida 80% yoki sinf/guruhdagi eng yuqori 20% ichida bo'lish",
        "Jismonan va ruhan sog'lom bo'lish"
      ],
      en: [
        "Applicant and both parents must not hold Korean citizenship",
        "Under 25 for undergraduate; under 40 for graduate degrees",
        "Cumulative GPA of 80% or higher from the previous degree institution",
        "Good physical and mental health condition"
      ],
      ru: [
        "Кандидат и его родители не должны иметь гражданство Южной Кореи",
        "Возраст: до 25 лет (бакалавриат), до 40 лет (магистратура/PhD)",
        "Средний балл диплома/аттестата не ниже 80% или топ-20% выпускников",
        "Отличное состояние физического и психического здоровья"
      ]
    },
    documents: {
      uz: [
        "GKS rasmiy arizasi",
        "Personal Statement va Statement of Purpose / Study Plan",
        "Ikkita tavsiyanoma (muhrlangan konvertda)",
        "Apostil qilingan Diplom/Attestat va baholar transkripti",
        "Nomzod va ota-onaning fuqarolik pasportlari hamda tug'ilganlik haqidagi guvohnomalari"
      ],
      en: [
        "Official GKS Application Form",
        "Personal Statement and Statement of Purpose / Study Plan",
        "Two letters of recommendation in sealed envelopes",
        "Apostilled educational certificate and academic transcript",
        "Proof of citizenship for applicant and both parents"
      ],
      ru: [
        "Официальная форма заявки GKS",
        "Мотивационное эссе и учебный план (Study Plan)",
        "Два рекомендательных письма в запечатанных конвертах",
        "Апостилированный диплом/аттестат и академическая выписка оценок",
        "Свидетельство о рождении и копии паспортов заявителя и родителей"
      ]
    },
    tips: {
      uz: [
        "Embassy Track (elchixona orqali 3 ta OTM tanlanadi) va University Track (to'g'ridan-to'g'ri 1 ta OTM) yo'llarini to'g'ri tanlang.",
        "TOPIK 3+ sertifikati bo'lishi arizangizga katta ustunlik beradi."
      ],
      en: [
        "Choose strategically between Embassy Track (select 3 universities) and University Track (direct application to 1 university).",
        "Holding even a TOPIK level 3 certificate dramatically improves your chances."
      ],
      ru: [
        "Выбирайте способ подачи с умом: Embassy Track (до 3 вузов) или University Track (напрямую в 1 вуз).",
        "Сертификат знания корейского языка TOPIK дает мощное преимущество."
      ]
    }
  },

  {
    id: "fulbright-usa",
    countryCode: "US",
    countryName: { uz: "AQSH", en: "United States", ru: "США" },
    flag: "🇺🇸",
    title: {
      uz: "Fulbrayt (Fulbright Foreign Student Program) 2027-2028",
      en: "Fulbright 2027-2028 Foreign Student Program (USA)",
      ru: "Программа Фулбрайта для иностранных студентов 2027-2028 (США)"
    },
    organizer: "U.S. Department of State, Bureau of Educational and Cultural Affairs",
    degree: ["master", "phd"],
    degreeLabels: { uz: "Magistratura & Ilmiy tadqiqot", en: "Master's & PhD", ru: "Магистратура и исследования" },
    fields: ["it", "business", "social", "arts", "any"],
    funding: "full",
    monthlyStipend: "$2,000 - $2,700 / oy + Barcha to'lovlar",
    deadline: getScholarshipDeadline(4, 15, 2027), // 2027-04-15
    deadlineDisplay: "2026-2027 Bahorgi elchixona qabuli: 15-Aprel 2027",
    ieltsReq: "TOEFL iBT 80+ yoki IELTS 7.0+",
    gpaReq: "3.0+ / 4.0",
    officialUrl: "https://foreign.fulbrightonline.org/",
    popular: true,
    tags: ["2026-2027", "Full-Ride", "USA Universities", "Ivy League", "Prestigious"],
    description: {
      uz: "AQSH hukumatining eng yuqori darajadagi grant dasturi. AQSHning yetakchi oliygohlarida 1-2 yil bepul o'qish, to'liq stipendiya va barcha xarajatlarni qoplash.",
      en: "The U.S. government's premier international educational exchange program allowing graduates to pursue master's degrees at leading American universities.",
      ru: "Главная программа образовательных обменов правительства США, дающая возможность бесплатно учиться в лучших университетах Америки."
    },
    benefits: {
      uz: [
        "AQSH universitetida 100% kontrakt to'lovi to'liq qoplanadi",
        "Oylik stipendiya yashash, ovqatlanish va kitoblar uchun ($2,000 - $2,700)",
        "Borish va kelish xalqaro aviachiptalari",
        "ASPE sog'liqni saqlash imtiyozlari rejasi (tibbiy sug'urta)",
        "J-1 vizasi to'liq bepul rasmiylashtiriladi va qo'llab-quvvatlanadi"
      ],
      en: [
        "Full tuition and mandatory fees at accredited US universities",
        "Monthly living stipend tailored to the local cost of living ($2,000 - $2,700)",
        "Round-trip international airfare",
        "ASPE health insurance coverage",
        "J-1 exchange visitor visa sponsorship and support"
      ],
      ru: [
        "Полное покрытие стоимости обучения в университете США",
        "Ежемесячная стипендия с учетом стоимости жизни в городе обучения",
        "Оплата перелета туда и обратно",
        "Медицинская страховка по программе ASPE",
        "Визовая поддержка и оформление визы J-1"
      ]
    },
    requirements: {
      uz: [
        "Bakalavr darajasiga ega bo'lish",
        "Arizani topshirish paytida o'z vatanida doimiy yashab turgan bo'lish",
        "Ingliz tilini mukammal bilish (TOEFL iBT / IELTS)",
        "Dastur tugagach kamida 2 yil o'z vataniga qaytib ishlash majburiyati (J-1 viza qoidasi)"
      ],
      en: [
        "Possess a recognized bachelor's degree at time of application",
        "Be a citizen and resident of the participating country during application",
        "High proficiency in English (demonstrated via TOEFL/IELTS)",
        "Commitment to the J-1 visa two-year home residency requirement"
      ],
      ru: [
        "Наличие диплома бакалавра на момент подачи заявления",
        "Гражданство и постоянное проживание в стране подачи заявки",
        "Свободное владение английским языком (TOEFL/IELTS)",
        "Обязательное возвращение в родную страну на 2 года после завершения учебы"
      ]
    },
    documents: {
      uz: [
        "Onlayn Fulbright arizasi (Embassy portali orqali)",
        "Bakalavr diplomi va baholar transkriptining tasdiqlangan inglizcha tarjimasi",
        "3 ta mustaqil tavsiyanoma (Letters of Reference)",
        "Study/Research Objective (Maqsad inshosi - 1-2 sahifa)",
        "Personal Statement (Shaxsiy bayonot - 1 sahifa)"
      ],
      en: [
        "Online Fulbright application via official portal",
        "Official transcripts and degree certificates with certified English translations",
        "3 confidential letters of recommendation",
        "Study/Research Objective essay (1-2 pages)",
        "Personal Statement narrative essay (1 page)"
      ],
      ru: [
        "Электронная анкета программы Фулбрайта",
        "Копии дипломов и приложений с нотариальным переводом на английский язык",
        "3 конфиденциальных рекомендательных письма",
        "Study/Research Objective (академические цели исследования)",
        "Personal Statement (личное эссе о вашей биографии и мотивации)"
      ]
    },
    tips: {
      uz: [
        "Personal Statement va Study Objective farqini biling: birinchisi sizning kimligingiz, ikkinchisi esa akademik va ilmiy maqsadingiz haqida.",
        "Suhbat (interview) bosqichida madaniyat elchisi sifatidagi salohiyatingizni ko'rsatish zarur."
      ],
      en: [
        "Distinguish clearly between Personal Statement (who you are) and Study Objectives (what you want to accomplish academically).",
        "Emphasize your role as a cultural ambassador during the interview stage."
      ],
      ru: [
        "Четко разделяйте цели: Personal Statement раскрывает вашу личность, а Study Objective — академический проект.",
        "На собеседовании в посольстве продемонстрируйте открытость к межкультурному диалогу и лидерские качества."
      ]
    }
  },

  {
    id: "mext-japan",
    countryCode: "JP",
    countryName: { uz: "Yaponiya", en: "Japan", ru: "Япония" },
    flag: "🇯🇵",
    title: {
      uz: "MEXT Yapon Hukumati Granti (Monbukagakusho) 2026-2027",
      en: "MEXT 2026-2027 Japanese Government Scholarship",
      ru: "Правительственная стипендия Японии MEXT 2026-2027"
    },
    organizer: "Ministry of Education, Culture, Sports, Science and Technology (MEXT), Japan",
    degree: ["bachelor", "master", "phd"],
    degreeLabels: { uz: "Bakalavr, Magistr & Tadqiqot", en: "Bachelor's, Master's & Research", ru: "Бакалавриат, Магистратура и PhD" },
    fields: ["it", "business", "medicine", "social", "arts", "any"],
    funding: "full",
    monthlyStipend: "117,000 - 145,000 JPY / oy",
    deadline: getScholarshipDeadline(5, 25, 2027), // 2027-05-25
    deadlineDisplay: "2026-2027 Kuz (OTM tavsiyasi) / 2027-2028 May 2027 (Elchixona)",
    ieltsReq: "Ingliz yoki Yapon tili testi topshiriladi",
    gpaReq: "3.2+ / 4.0",
    officialUrl: "https://www.studyinjapan.go.jp/en/",
    popular: true,
    tags: ["2026-2027", "Full-Ride", "Japan", "High Tech", "Full Support"],
    description: {
      uz: "Yaponiya ta'lim vazirligining jahon miqyosidagi to'liq granti. Tokio, Kyoto, Osaka kabi dunyoning eng ilg'or texnologik universitetlarida bepul ta'lim va barqaror stipendiya.",
      en: "Prestigious scholarship from Japan's Ministry of Education supporting undergraduate and graduate studies at top Japanese national universities for 2026-2027.",
      ru: "Престижная программа японского правительства на 2026-2027 год для обучения в бакалавриате, магистратуре и аспирантуре ведущих национальных университетов Японии."
    },
    benefits: {
      uz: [
        "100% universitet kontrakt to'lovlari va kirish imtihonlari to'lovidan ozod bo'lish",
        "Oylik stipendiya: 117,000 JPY (Bakalavr) dan 145,000 JPY (PhD) gacha",
        "Yaponiyaga borish va qaytish bepul aviachiptalari",
        "Yaponiyada talabalar turar joyi bilan ta'minlashda yordam",
        "Yapon tilini bilmaydiganlar uchun 6 oylik - 1 yillik bepul intensiv til kursi"
      ],
      en: [
        "100% exemption from entrance examination, matriculation, and tuition fees",
        "Monthly stipend ranging from 117,000 JPY to 145,000 JPY",
        "Round-trip international air travel",
        "Access to discounted university housing",
        "6-month to 1-year preparatory Japanese language education"
      ],
      ru: [
        "100% освобождение от оплаты вступительных экзаменов и всего периода учебы",
        "Ежемесячная стипендия от 117,000 до 145,000 иен",
        "Бесплатный авиаперелет в Японию и обратно",
        "Содействие в получении субсидированного жилья",
        "Курсы японского языка перед началом основной программы обучения"
      ]
    },
    requirements: {
      uz: [
        "Bakalavriat uchun 17-25 yosh, Magistratura/Tadqiqot uchun 35 yoshdan oshmagan bo'lish",
        "Yapon tilini o'rganishga va yapon madaniyatini hurmat qilishga tayyorlik",
        "Elchixonada o'tkaziladigan yozma imtihonlar (Ingliz tili, Matematika yoki Yapon tili)dan muvaffaqiyatli o'tish",
        "Sog'lom jismoniy holat"
      ],
      en: [
        "Age 17-25 for undergraduate; under 35 for graduate research applicants",
        "Willingness to learn Japanese and adapt to Japanese society",
        "Passing the Embassy written exams (English, Mathematics, or Japanese) and interview",
        "Certified good medical standing"
      ],
      ru: [
        "Возраст: от 17 до 25 лет на бакалавриат, до 35 лет на программы исследований",
        "Готовность учить японский язык и адаптироваться к культуре страны",
        "Успешная сдача письменных тестов в посольстве Японии и прохождение собеседования",
        "Медицинское заключение об отсутствии противопоказаний"
      ]
    },
    documents: {
      uz: [
        "MEXT rasmiy ariza formasi",
        "Field of Study and Research Plan (Tadqiqot rejasi - magistr/tadqiqotchilar uchun eng muhimi)",
        "Attestat yoki Diplom (inglizcha/yaponcha rasmiy tarjimasi bilan)",
        "Tavsiyanomalar (dekan yoki ilmiy rahbar tomonidan)",
        "Tibbiy ko'rik varaqasi (Certificate of Health)"
      ],
      en: [
        "Standard MEXT application form",
        "Detailed Field of Study and Research Plan (crucial for graduate applicants)",
        "Certified graduation certificates and official transcripts",
        "Letters of recommendation from academic advisors or university dean",
        "Prescribed MEXT Medical Certificate"
      ],
      ru: [
        "Официальная анкета кандидата MEXT",
        "Подробный план научного исследования (Research Plan — главный документ)",
        "Заверенный перевод диплома или аттестата на английский язык",
        "Рекомендательное письмо от научного руководителя или декана",
        "Установленная медицинская справка MEXT"
      ]
    },
    tips: {
      uz: [
        "Magistratura va PhD nomzodlari uchun eng muhim hujjat — bu 'Research Plan'. U Yaponiyadagi professor tadqiqotlariga aniq mos kelishi shart.",
        "Elchixona imtihonlari uchun o'tgan yillardagi test savollarini (studyinjapan saytida bor) yechib mashq qiling."
      ],
      en: [
        "For graduate candidates, your Research Plan must align closely with current research of prospective Japanese professors.",
        "Practice using past MEXT written examination papers available on the Study in Japan portal."
      ],
      ru: [
        "Для поступающих в магистратуру ключевым фактором является продуманный Research Plan, интересный профессорам в Японии.",
        "Решайте примеры тестов прошлых лет, доступные на официальном сайте Study in Japan."
      ]
    }
  }
];

// Dunyoning yetakchi universitetlari (Top Universities 2026-2027)
const universitiesData = [
  {
    id: "oxford",
    name: "University of Oxford",
    country: { uz: "Buyuk Britaniya", en: "United Kingdom", ru: "Великобритания" },
    countryCode: "GB",
    city: "Oxford",
    qsRanking: 3,
    acceptanceRate: "14%",
    avgTuition: "£28,000 - £44,000 / yil",
    scholarshipsAvailable: ["Chevening", "Clarendon Fund", "Rhodes Scholarship"],
    website: "https://www.ox.ac.uk/",
    image: "https://images.unsplash.com/photo-1612563958093-2c3bcfbd8760?auto=format&fit=crop&w=800&q=80",
    description: {
      uz: "Ingliz tilidagi dunyoning eng qadimiy va eng nufuzli tadqiqot universiteti.",
      en: "The oldest university in the English-speaking world and a world-leading center of learning.",
      ru: "Старейший англоязычный университет в мире и один из главных мировых центров науки."
    }
  },
  {
    id: "cambridge",
    name: "University of Cambridge",
    country: { uz: "Buyuk Britaniya", en: "United Kingdom", ru: "Великобритания" },
    countryCode: "GB",
    city: "Cambridge",
    qsRanking: 2,
    acceptanceRate: "18%",
    avgTuition: "£25,000 - £40,000 / yil",
    scholarshipsAvailable: ["Chevening", "Gates Cambridge", "Cambridge Trust"],
    website: "https://www.cam.ac.uk/",
    image: "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=800&q=80",
    description: {
      uz: "Buyuk ilmiy kashfiyotlar va 120 dan ortiq Nobel mukofoti sohiblari beshigi.",
      en: "Renowned collegiate research university with a rich history of scientific breakthroughs.",
      ru: "Легендарный исследовательский университет, давший миру более 120 нобелевских лауреатов."
    }
  },
  {
    id: "mit",
    name: "Massachusetts Institute of Technology (MIT)",
    country: { uz: "AQSH", en: "United States", ru: "США" },
    countryCode: "US",
    city: "Cambridge, MA",
    qsRanking: 1,
    acceptanceRate: "4%",
    avgTuition: "$59,000 / yil (Need-blind 100% financial aid)",
    scholarshipsAvailable: ["Fulbright", "MIT Need-Based Aid", "Global UGRAD"],
    website: "https://www.mit.edu/",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    description: {
      uz: "Texnologiya, sun'iy intellekt va muhandislik sohasida dunyoning mutlaq 1-raqamli universiteti.",
      en: "World #1 university in engineering, artificial intelligence, and physical sciences.",
      ru: "Университет №1 в мире в сфере высоких технологий, искусственного интеллекта и инженерии."
    }
  },
  {
    id: "harvard",
    name: "Harvard University",
    country: { uz: "AQSH", en: "United States", ru: "США" },
    countryCode: "US",
    city: "Cambridge, MA",
    qsRanking: 4,
    acceptanceRate: "3.4%",
    avgTuition: "$57,000 / yil (100% Need-based aid)",
    scholarshipsAvailable: ["Fulbright", "Harvard Need-Based Scholarship", "Boustany Foundation"],
    website: "https://www.harvard.edu/",
    image: "https://images.unsplash.com/photo-1622397333309-3056849bc70b?auto=format&fit=crop&w=800&q=80",
    description: {
      uz: "Dunyodagi eng boy ta'lim fondiga ega afsonaviy Ayvi Ligasi universiteti.",
      en: "Prestigious Ivy League research institution dedicated to excellence in teaching and research.",
      ru: "Легендарный университет Лиги плюща с богатейшим академическим наследием."
    }
  },
  {
    id: "tum",
    name: "Technical University of Munich (TUM)",
    country: { uz: "Germaniya", en: "Germany", ru: "Германия" },
    countryCode: "DE",
    city: "Munich",
    qsRanking: 37,
    acceptanceRate: "28%",
    avgTuition: "€2,000 - €3,000 / semestr (Arzon davlat ta'limi)",
    scholarshipsAvailable: ["DAAD", "Deutschlandstipendium", "TUM Merit Scholarship"],
    website: "https://www.tum.de/en/",
    image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800&q=80",
    description: {
      uz: "Yevropaning eng kuchli texnika va innovatsiya universiteti, Germaniya sanoati markazi.",
      en: "One of Europe's top universities committed to excellence in research, innovation, and tech.",
      ru: "Один из лучших технических университетов Европы и флагман немецкой инженерной школы."
    }
  },
  {
    id: "snu",
    name: "Seoul National University (SNU)",
    country: { uz: "Janubiy Koreya", en: "South Korea", ru: "Южная Корея" },
    countryCode: "KR",
    city: "Seoul",
    qsRanking: 41,
    acceptanceRate: "15%",
    avgTuition: "3,000,000 - 5,000,000 KRW / semestr",
    scholarshipsAvailable: ["GKS (KGSP)", "SNU Global Scholarship", "Silk Road Scholarship"],
    website: "https://en.snu.ac.kr/",
    image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=800&q=80",
    description: {
      uz: "Janubiy Koreyaning 1-raqamli milliy universiteti va SKY oliygohlari yetakchisi.",
      en: "South Korea's most prestigious national research university and top of the SKY alliance.",
      ru: "Самый престижный национальный университет Южной Кореи и лидер союза SKY."
    }
  },
  {
    id: "u-tokyo",
    name: "The University of Tokyo",
    country: { uz: "Yaponiya", en: "Japan", ru: "Япония" },
    countryCode: "JP",
    city: "Tokyo",
    qsRanking: 28,
    acceptanceRate: "34%",
    avgTuition: "535,800 JPY / yil",
    scholarshipsAvailable: ["MEXT", "University of Tokyo Special Scholarship", "JASSO"],
    website: "https://www.u-tokyo.ac.jp/en/",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
    description: {
      uz: "Yaponiyaning eng qadimiy imperatorlik universiteti va Osiyoning yetakchi ilmiy markazi.",
      en: "Japan's premier imperial university known for groundbreaking research and world impact.",
      ru: "Главный императорский университет Японии и ведущий научный центр Азии."
    }
  },
  {
    id: "elte",
    name: "Eötvös Loránd University (ELTE)",
    country: { uz: "Vengriya", en: "Hungary", ru: "Венгрия" },
    countryCode: "HU",
    city: "Budapest",
    qsRanking: 564,
    acceptanceRate: "45%",
    avgTuition: "€2,500 - €4,200 / semestr",
    scholarshipsAvailable: ["Stipendium Hungaricum", "Erasmus+", "Hungarian Diaspora"],
    website: "https://www.elte.hu/en/",
    image: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&fit=crop&w=800&q=80",
    description: {
      uz: "Budapesht markazidagi Vengriyaning eng nufuzli va yirik universiteti.",
      en: "Hungary's leading public research university located in the heart of Budapest.",
      ru: "Крупнейший и самый авторитетный университет Венгрии в центре Будапешта."
    }
  }
];

// Ommabop davlatlar filtri uchun ro'yxat
const countriesList = [
  { 
    code: "ALL", 
    name: { 
      uz: "Barcha mamlakatlar", en: "All Countries", ru: "Все страны",
      ko: "모든 국가", zh: "所有国家", ja: "すべての国", tr: "Tüm Ülkeler",
      ar: "جميع الدول", de: "Alle Länder", fr: "Tous les pays", es: "Todos los países",
      it: "Tutti i paesi", pt: "Todos os países", "pt-br": "Todos os países",
      kk: "Барлық елдер", th: "ทุกประเทศ", vi: "Tất cả quốc gia", fil: "Lahat ng Bansa"
    } 
  },
  { 
    code: "GB", 
    name: { 
      uz: "Buyuk Britaniya 🇬🇧", en: "United Kingdom 🇬🇧", ru: "Великобритания 🇬🇧",
      ko: "영국 🇬🇧", zh: "英国 🇬🇧", ja: "イギリス 🇬🇧", tr: "Birleşik Krallık 🇬🇧",
      ar: "المملكة المتحدة 🇬🇧", de: "Großbritannien 🇬🇧", fr: "Royaume-Uni 🇬🇧", es: "Reino Unido 🇬🇧",
      it: "Regno Unito 🇬🇧", pt: "Reino Unido 🇬🇧", "pt-br": "Reino Unido 🇬🇧",
      kk: "Ұлыбритания 🇬🇧", th: "สหราชอาณาจักร 🇬🇧", vi: "Vương quốc Anh 🇬🇧", fil: "United Kingdom 🇬🇧"
    } 
  },
  { 
    code: "US", 
    name: { 
      uz: "AQSH 🇺🇸", en: "United States 🇺🇸", ru: "США 🇺🇸",
      ko: "미국 🇺🇸", zh: "美国 🇺🇸", ja: "アメリカ 🇺🇸", tr: "Amerika Birleşik Devletleri 🇺🇸",
      ar: "الولايات المتحدة 🇺🇸", de: "USA 🇺🇸", fr: "États-Unis 🇺🇸", es: "Estados Unidos 🇺🇸",
      it: "Stati Uniti 🇺🇸", pt: "Estados Unidos 🇺🇸", "pt-br": "Estados Unidos 🇺🇸",
      kk: "АҚШ 🇺🇸", th: "สหรัฐอเมริกา 🇺🇸", vi: "Hoa Kỳ 🇺🇸", fil: "Estados Unidos 🇺🇸"
    } 
  },
  { 
    code: "DE", 
    name: { 
      uz: "Germaniya 🇩🇪", en: "Germany 🇩🇪", ru: "Германия 🇩🇪",
      ko: "독일 🇩🇪", zh: "德国 🇩🇪", ja: "ドイツ 🇩🇪", tr: "Almanya 🇩🇪",
      ar: "ألمانيا 🇩🇪", de: "Deutschland 🇩🇪", fr: "Allemagne 🇩🇪", es: "Alemania 🇩🇪",
      it: "Germania 🇩🇪", pt: "Alemanha 🇩🇪", "pt-br": "Alemanha 🇩🇪",
      kk: "Германия 🇩🇪", th: "เยอรมนี 🇩🇪", vi: "Đức 🇩🇪", fil: "Alemanya 🇩🇪"
    } 
  },
  { 
    code: "TR", 
    name: { 
      uz: "Turkiya 🇹🇷", en: "Turkey 🇹🇷", ru: "Турция 🇹🇷",
      ko: "튀르키예 🇹🇷", zh: "土耳其 🇹🇷", ja: "トルコ 🇹🇷", tr: "Türkiye 🇹🇷",
      ar: "تركيا 🇹🇷", de: "Türkei 🇹🇷", fr: "Turquie 🇹🇷", es: "Turquía 🇹🇷",
      it: "Turchia 🇹🇷", pt: "Turquia 🇹🇷", "pt-br": "Turquia 🇹🇷",
      kk: "Түркия 🇹🇷", th: "ตุรกี 🇹🇷", vi: "Thổ Nhĩ Kỳ 🇹🇷", fil: "Turkiya 🇹🇷"
    } 
  },
  { 
    code: "HU", 
    name: { 
      uz: "Vengriya 🇭🇺", en: "Hungary 🇭🇺", ru: "Венгрия 🇭🇺",
      ko: "헝가리 🇭🇺", zh: "匈牙利 🇭🇺", ja: "ハンガリー 🇭🇺", tr: "Macaristan 🇭🇺",
      ar: "المجر 🇭🇺", de: "Ungarn 🇭🇺", fr: "Hongrie 🇭🇺", es: "Hungría 🇭🇺",
      it: "Ungheria 🇭🇺", pt: "Hungria 🇭🇺", "pt-br": "Hungria 🇭🇺",
      kk: "Венгрия 🇭🇺", th: "ฮังการี 🇭🇺", vi: "Hungary 🇭🇺", fil: "Hungary 🇭🇺"
    } 
  },
  { 
    code: "KR", 
    name: { 
      uz: "Janubiy Koreya 🇰🇷", en: "South Korea 🇰🇷", ru: "Южная Корея 🇰🇷",
      ko: "대한민국 🇰🇷", zh: "韩国 🇰🇷", ja: "韓国 🇰🇷", tr: "Güney Kore 🇰🇷",
      ar: "كوريا الجنوبية 🇰🇷", de: "Südkorea 🇰🇷", fr: "Corée du Sud 🇰🇷", es: "Corea del Sur 🇰🇷",
      it: "Corea del Sud 🇰🇷", pt: "Coreia do Sul 🇰🇷", "pt-br": "Coreia do Sul 🇰🇷",
      kk: "Оңтүстік Корея 🇰🇷", th: "เกาหลีใต้ 🇰🇷", vi: "Hàn Quốc 🇰🇷", fil: "Timog Korea 🇰🇷"
    } 
  },
  { 
    code: "JP", 
    name: { 
      uz: "Yaponiya 🇯🇵", en: "Japan 🇯🇵", ru: "Япония 🇯🇵",
      ko: "일본 🇯🇵", zh: "日本 🇯🇵", ja: "日本 🇯🇵", tr: "Japonya 🇯🇵",
      ar: "اليابان 🇯🇵", de: "Japan 🇯🇵", fr: "Japon 🇯🇵", es: "Japón 🇯🇵",
      it: "Giappone 🇯🇵", pt: "Japão 🇯🇵", "pt-br": "Japão 🇯🇵",
      kk: "Жапония 🇯🇵", th: "ญี่ปุ่น 🇯🇵", vi: "Nhật Bản 🇯🇵", fil: "Hapon 🇯🇵"
    } 
  },
  { 
    code: "EU", 
    name: { 
      uz: "Yevropa Ittifoqi 🇪🇺", en: "European Union 🇪🇺", ru: "Европейский Союз 🇪🇺",
      ko: "유럽연합 🇪🇺", zh: "欧盟 🇪🇺", ja: "欧州連合 🇪🇺", tr: "Avrupa Birliği 🇪🇺",
      ar: "الاتحاد الأوروبي 🇪🇺", de: "Europäische Union 🇪🇺", fr: "Union Européenne 🇪🇺", es: "Unión Europea 🇪🇺",
      it: "Unione Europea 🇪🇺", pt: "União Europeia 🇪🇺", "pt-br": "União Europeia 🇪🇺",
      kk: "Еуропалық Одақ 🇪🇺", th: "สหภาพยุโรป 🇪🇺", vi: "Liên minh Châu Âu 🇪🇺", fil: "Unyong Europeo 🇪🇺"
    } 
  },
  { 
    code: "SE", 
    name: { 
      uz: "Shvetsiya 🇸🇪", en: "Sweden 🇸🇪", ru: "Швеция 🇸🇪",
      ko: "스웨덴 🇸🇪", zh: "瑞典 🇸🇪", ja: "スウェーデン 🇸🇪", tr: "İsveç 🇸🇪",
      ar: "السويد 🇸🇪", de: "Schweden 🇸🇪", fr: "Suède 🇸🇪", es: "Suecia 🇸🇪",
      it: "Svezia 🇸🇪", pt: "Suécia 🇸🇪", "pt-br": "Suécia 🇸🇪",
      kk: "Швеция 🇸🇪", th: "สวีเดน 🇸🇪", vi: "Thụy Điển 🇸🇪", fil: "Sweden 🇸🇪"
    } 
  },
  { 
    code: "UZ", 
    name: { 
      uz: "O'zbekiston / Xalqaro 🇺🇿", en: "Uzbekistan / Global 🇺🇿", ru: "Узбекистан / Мир 🇺🇿",
      ko: "우즈베키스탄 / 글로벌 🇺🇿", zh: "乌兹别克斯坦 / 全球 🇺🇿", ja: "ウズベキスタン / グローバル 🇺🇿", tr: "Özbekistan / Küresel 🇺🇿",
      ar: "أوزبكستان / دولي 🇺🇿", de: "Usbekistan / International 🇺🇿", fr: "Ouzbékistan / International 🇺🇿", es: "Uzbekistán / Global 🇺🇿",
      it: "Uzbekistan / Internazionale 🇺🇿", pt: "Uzbequistão / Global 🇺🇿", "pt-br": "Uzbequistão / Global 🇺🇿",
      kk: "Өзбекстан / Әлемдік 🇺🇿", th: "อุซเบกิสถาน / นานาชาติ 🇺🇿", vi: "Uzbekistan / Quốc tế 🇺🇿", fil: "Uzbekistan / Global 🇺🇿"
    } 
  }
];

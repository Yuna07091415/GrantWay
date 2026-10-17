// GrantWay - Asosiy Dastur Logikasi (App Controller)
// Qidiruv, filtrlash, grant kartalari, modal oynalar, universitetlar va eslatmalar

let activeFilters = {
  country: 'ALL',
  degree: 'all',
  field: 'all',
  funding: 'all',
  languageReq: 'all',
  search: '',
  sortBy: 'deadline_soon'
};

let currentModalGrant = null;

// Hujjat yuklanganda dastlabki sozlamalar
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  updateFilterCountryOptions();
  setupEventListeners();
  renderScholarships();
  renderUniversities();
  renderPlanner();
  updatePlannerBadge();
});

// Hodisalarni sozlash (Event Listeners)
function setupEventListeners() {
  // Qidiruv inputi (real-time debounced)
  const searchInput = document.getElementById('globalSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeFilters.search = e.target.value.trim().toLowerCase();
      renderScholarships();
    });
  }

  // Filtr selektorlari
  const countrySelect = document.getElementById('filterCountrySelect');
  if (countrySelect) {
    countrySelect.addEventListener('change', (e) => {
      activeFilters.country = e.target.value;
      renderScholarships();
    });
  }

  const degreeSelect = document.getElementById('filterDegreeSelect');
  if (degreeSelect) {
    degreeSelect.addEventListener('change', (e) => {
      activeFilters.degree = e.target.value;
      renderScholarships();
    });
  }

  const fieldSelect = document.getElementById('filterFieldSelect');
  if (fieldSelect) {
    fieldSelect.addEventListener('change', (e) => {
      activeFilters.field = e.target.value;
      renderScholarships();
    });
  }

  const fundingSelect = document.getElementById('filterFundingSelect');
  if (fundingSelect) {
    fundingSelect.addEventListener('change', (e) => {
      activeFilters.funding = e.target.value;
      renderScholarships();
    });
  }

  const langReqSelect = document.getElementById('filterLangReqSelect');
  if (langReqSelect) {
    langReqSelect.addEventListener('change', (e) => {
      activeFilters.languageReq = e.target.value;
      renderScholarships();
    });
  }

  const sortSelect = document.getElementById('sortBySelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activeFilters.sortBy = e.target.value;
      renderScholarships();
    });
  }

  // Universitet qidiruvi
  const uniSearch = document.getElementById('uniSearchInput');
  if (uniSearch) {
    uniSearch.addEventListener('input', (e) => {
      renderUniversities(e.target.value.trim().toLowerCase());
    });
  }

  // Mobil menyu
  const mobileMenuBtn = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('mainNavLinks');
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('nav-open');
    });
  }

  // Escape tugmasi bosilganda modallarni yopish
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeGrantModal();
      closeTelegramLangModal();
      closeGuideModal();
    }
  });
}

// Mamlakatlar selektori parametrlarini yangilash
function updateFilterCountryOptions() {
  const select = document.getElementById('filterCountrySelect');
  if (!select) return;

  const savedVal = select.value || 'ALL';
  select.innerHTML = '';

  countriesList.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.code;
    opt.textContent = c.name[currentLang] || c.name.uz;
    if (c.code === savedVal) opt.selected = true;
    select.appendChild(opt);
  });
}

// Filtrlarni tozalash (Reset)
function resetAllFilters() {
  activeFilters = {
    country: 'ALL',
    degree: 'all',
    field: 'all',
    funding: 'all',
    languageReq: 'all',
    search: '',
    sortBy: 'deadline_soon'
  };

  const searchInput = document.getElementById('globalSearchInput');
  if (searchInput) searchInput.value = '';

  const countrySelect = document.getElementById('filterCountrySelect');
  if (countrySelect) countrySelect.value = 'ALL';

  const degreeSelect = document.getElementById('filterDegreeSelect');
  if (degreeSelect) degreeSelect.value = 'all';

  const fieldSelect = document.getElementById('filterFieldSelect');
  if (fieldSelect) fieldSelect.value = 'all';

  const fundingSelect = document.getElementById('filterFundingSelect');
  if (fundingSelect) fundingSelect.value = 'all';

  const langReqSelect = document.getElementById('filterLangReqSelect');
  if (langReqSelect) langReqSelect.value = 'all';

  const sortSelect = document.getElementById('sortBySelect');
  if (sortSelect) sortSelect.value = 'deadline_soon';

  renderScholarships();
  showToast(
    currentLang === 'uz' ? "Filtrlar tozalandi" :
    currentLang === 'ru' ? "Фильтры сброшены" :
    "Filters reset",
    'info'
  );
}

// Grantlarni qidirish va filtrlash
function getFilteredScholarships() {
  return scholarshipsData.filter(item => {
    // 1. Qidiruv matni (Nomi, mamlakati, tashkilotchi, tavsifi)
    if (activeFilters.search) {
      const q = activeFilters.search;
      const titleMatch = item.title[currentLang]?.toLowerCase().includes(q) || item.title.en.toLowerCase().includes(q);
      const countryMatch = item.countryName[currentLang]?.toLowerCase().includes(q) || item.countryName.en.toLowerCase().includes(q);
      const organizerMatch = item.organizer.toLowerCase().includes(q);
      const descMatch = item.description[currentLang]?.toLowerCase().includes(q);
      const tagsMatch = item.tags.some(t => t.toLowerCase().includes(q));

      if (!titleMatch && !countryMatch && !organizerMatch && !descMatch && !tagsMatch) {
        return false;
      }
    }

    // 2. Mamlakat
    if (activeFilters.country !== 'ALL' && item.countryCode !== activeFilters.country) {
      return false;
    }

    // 3. Ta'lim darajasi
    if (activeFilters.degree !== 'all' && !item.degree.includes(activeFilters.degree)) {
      return false;
    }

    // 4. Yo'nalish
    if (activeFilters.field !== 'all') {
      if (!item.fields.includes('any') && !item.fields.includes(activeFilters.field)) {
        return false;
      }
    }

    // 5. Moliyalashtirish turi
    if (activeFilters.funding !== 'all' && item.funding !== activeFilters.funding) {
      return false;
    }

    // 6. Til talabi (No IELTS required filtri)
    if (activeFilters.languageReq === 'no_ielts') {
      const reqText = item.ieltsReq.toLowerCase();
      if (!reqText.includes('tilsiz') && !reqText.includes('no ielts') && !reqText.includes('optional') && !reqText.includes('majburiy emas')) {
        return false;
      }
    } else if (activeFilters.languageReq === 'ielts') {
      const reqText = item.ieltsReq.toLowerCase();
      if (reqText.includes('tilsiz') || reqText.includes('majburiy emas')) {
        return false;
      }
    }

    return true;
  }).sort((a, b) => {
    // Saralash
    if (activeFilters.sortBy === 'deadline_soon') {
      return new Date(a.deadline) - new Date(b.deadline);
    } else if (activeFilters.sortBy === 'deadline_late') {
      return new Date(b.deadline) - new Date(a.deadline);
    } else if (activeFilters.sortBy === 'name_asc') {
      return a.title[currentLang].localeCompare(b.title[currentLang]);
    } else if (activeFilters.sortBy === 'popular') {
      return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
    }
    return 0;
  });
}

// Grant kartalarini ekranga chiqarish
function renderScholarships() {
  const container = document.getElementById('scholarshipsGrid');
  const countBadge = document.getElementById('resultsCountBadge');
  if (!container) return;

  const filtered = getFilteredScholarships();

  if (countBadge) {
    countBadge.textContent = `${filtered.length} ${translations[currentLang].foundResults}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-results-box">
        <div class="no-results-icon">🔍</div>
        <h3>${translations[currentLang].noResults}</h3>
        <button class="btn btn-outline" onclick="resetAllFilters()">${translations[currentLang].resetFilters}</button>
      </div>
    `;
    return;
  }

  const planner = getPlannerData();

  let html = '';
  filtered.forEach(grant => {
    const daysLeft = calculateDaysLeft(grant.deadline);
    let deadlineBadgeClass = 'badge-active';
    let deadlineText = `${daysLeft} ${translations[currentLang].grantDaysLeft}`;

    if (daysLeft < 0) {
      deadlineBadgeClass = 'badge-expired';
      deadlineText = translations[currentLang].grantDeadlinePassed;
    } else if (daysLeft === 0) {
      deadlineBadgeClass = 'badge-urgent';
      deadlineText = translations[currentLang].grantToday;
    } else if (daysLeft <= 14) {
      deadlineBadgeClass = 'badge-urgent';
    }

    const isInPlanner = !!planner[grant.id];

    html += `
      <div class="scholarship-card animate-fade-in" data-id="${grant.id}">
        <div class="card-header">
          <div class="card-country">
            <span class="country-flag">${grant.flag}</span>
            <span class="country-name">${grant.countryName[currentLang]}</span>
          </div>
          <span class="deadline-badge ${deadlineBadgeClass}">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            ${deadlineText}
          </span>
        </div>

        <h3 class="card-title">${grant.title[currentLang]}</h3>
        <p class="card-organizer">${grant.organizer}</p>

        <p class="card-desc">${grant.description[currentLang]}</p>

        <div class="card-specs">
          <div class="spec-item">
            <span class="spec-label">${translations[currentLang].modalDegree}:</span>
            <span class="spec-value">${grant.degreeLabels[currentLang]}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">${translations[currentLang].modalFundingCoverage}:</span>
            <span class="spec-value font-semibold text-emerald">${grant.funding === 'full' ? translations[currentLang].grantFundingFull : translations[currentLang].grantFundingPartial} (${grant.monthlyStipend})</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">${translations[currentLang].modalLanguageReqs}:</span>
            <span class="spec-value">${grant.ieltsReq}</span>
          </div>
        </div>

        <div class="card-tags">
          ${grant.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
        </div>

        <div class="card-footer">
          <button class="btn btn-primary btn-view" onclick="openGrantModal('${grant.id}')">
            ${translations[currentLang].viewDetails}
          </button>
          <button class="btn btn-outline btn-plan ${isInPlanner ? 'in-planner' : ''}" data-planner-btn="${grant.id}" onclick="togglePlannerItem('${grant.id}')">
            ${isInPlanner ? `
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>${translations[currentLang].inPlanner}</span>
            ` : `
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              <span>${translations[currentLang].addToPlanner}</span>
            `}
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Grant Tafsilotlari Modalini ochish
function openGrantModal(grantId) {
  const grant = scholarshipsData.find(s => s.id === grantId);
  if (!grant) return;

  currentModalGrant = grant;
  const modal = document.getElementById('grantDetailModal');
  if (!modal) return;

  // Ma'lumotlarni to'ldirish
  document.getElementById('modalFlag').textContent = grant.flag;
  document.getElementById('modalCountry').textContent = grant.countryName[currentLang];
  document.getElementById('modalTitle').textContent = grant.title[currentLang];
  document.getElementById('modalOrganizer').textContent = grant.organizer;
  document.getElementById('modalOverviewText').textContent = grant.description[currentLang];

  const daysLeft = calculateDaysLeft(grant.deadline);
  document.getElementById('modalDeadlineVal').innerHTML = `<strong>${grant.deadlineDisplay}</strong> (${grant.deadline}) — <span class="text-emerald">${daysLeft} ${translations[currentLang].grantDaysLeft}</span>`;
  document.getElementById('modalDegreeVal').textContent = grant.degreeLabels[currentLang];
  document.getElementById('modalFundingVal').textContent = `${grant.funding === 'full' ? translations[currentLang].grantFundingFull : translations[currentLang].grantFundingPartial} (${grant.monthlyStipend})`;
  document.getElementById('modalIeltsVal').textContent = grant.ieltsReq;
  document.getElementById('modalGpaVal').textContent = grant.gpaReq;

  // Imtiyozlar (Benefits)
  const benefitsList = document.getElementById('modalBenefitsList');
  benefitsList.innerHTML = grant.benefits[currentLang].map(b => `
    <li class="benefit-item">
      <span class="icon-check">✓</span>
      <span>${b}</span>
    </li>
  `).join('');

  // Talablar (Requirements)
  const reqsList = document.getElementById('modalRequirementsList');
  reqsList.innerHTML = grant.requirements[currentLang].map(r => `
    <li class="req-item">
      <span class="bullet">•</span>
      <span>${r}</span>
    </li>
  `).join('');

  // Kerakli Hujjatlar (Documents Checklist)
  const docsList = document.getElementById('modalDocumentsList');
  docsList.innerHTML = grant.documents[currentLang].map((d, index) => `
    <li class="doc-checklist-item">
      <input type="checkbox" id="doc-check-${grant.id}-${index}">
      <label for="doc-check-${grant.id}-${index}">${d}</label>
    </li>
  `).join('');

  // Eslatmalar va Maslahatlar (Tips)
  const tipsList = document.getElementById('modalTipsList');
  tipsList.innerHTML = grant.tips[currentLang].map(t => `
    <li class="tip-item">
      <span class="tip-icon">💡</span>
      <span>${t}</span>
    </li>
  `).join('');

  // Rasmiy sayt havolasi
  const applyBtn = document.getElementById('modalOfficialLinkBtn');
  if (applyBtn) {
    applyBtn.href = grant.officialUrl;
    applyBtn.textContent = translations[currentLang].applyNowOfficial;
  }

  // Rejaga qo'shish tugmasi
  const planner = getPlannerData();
  const isInPlanner = !!planner[grant.id];
  const modalPlanBtn = document.getElementById('modalPlannerBtn');
  if (modalPlanBtn) {
    modalPlanBtn.innerHTML = isInPlanner ? `✓ ${translations[currentLang].inPlanner}` : `+ ${translations[currentLang].addToPlanner}`;
    modalPlanBtn.onclick = () => {
      togglePlannerItem(grant.id);
      openGrantModal(grant.id); // holatni yangilash
    };
  }

  // Modalni ko'rsatish
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Modalni yopish
function closeGrantModal() {
  const modal = document.getElementById('grantDetailModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Eslatma sozlash (Reminder notification)
function setDeadlineReminder() {
  if (!currentModalGrant) return;

  if (!("Notification" in window)) {
    showToast("Brauzeringiz bildirishnomalarni qo'llab-quvvatlamaydi. Rejangizga saqlab qo'ydik!", "info");
    return;
  }

  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      new Notification(`GrantWay: ${currentModalGrant.title[currentLang]}`, {
        body: `Deadline: ${currentModalGrant.deadline}. Hujjatlaringizni tayyorlashni unutmang!`,
        icon: "assets/logo.png"
      });
      showToast(translations[currentLang].reminderSuccess, "success");
    } else {
      showToast("Bildirishnomalarga ruxsat berilmadi, lekin rejangizga kiritildi.", "info");
    }
  });
}

// Universitetlarni ekranga chiqarish
function renderUniversities(query = '') {
  const container = document.getElementById('universitiesGrid');
  if (!container) return;

  const filtered = universitiesData.filter(uni => {
    if (!query) return true;
    return uni.name.toLowerCase().includes(query) ||
           uni.country[currentLang]?.toLowerCase().includes(query) ||
           uni.city.toLowerCase().includes(query);
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p class="text-center w-full py-8">${translations[currentLang].noResults}</p>`;
    return;
  }

  let html = '';
  filtered.forEach(uni => {
    html += `
      <div class="university-card animate-fade-in">
        <div class="uni-image-wrapper">
          <img src="${uni.image}" alt="${uni.name}" class="uni-image" loading="lazy">
          <span class="uni-ranking-badge">QS #${uni.qsRanking}</span>
        </div>
        <div class="uni-card-body">
          <h3 class="uni-name">${uni.name}</h3>
          <p class="uni-location">📍 ${uni.city}, ${uni.country[currentLang]}</p>
          <p class="uni-desc">${uni.description[currentLang]}</p>

          <div class="uni-meta-grid">
            <div class="uni-meta-item">
              <span class="meta-label">${translations[currentLang].uniAcceptanceRate}:</span>
              <span class="meta-val font-semibold">${uni.acceptanceRate}</span>
            </div>
            <div class="uni-meta-item">
              <span class="meta-label">${translations[currentLang].uniAvgTuition}:</span>
              <span class="meta-val font-semibold">${uni.avgTuition}</span>
            </div>
          </div>

          <div class="uni-scholarships-box">
            <span class="meta-label">${translations[currentLang].uniScholarshipsAvailable}:</span>
            <div class="uni-tags-wrap">
              ${uni.scholarshipsAvailable.map(s => `<span class="uni-grant-pill">${s}</span>`).join('')}
            </div>
          </div>

          <a href="${uni.website}" target="_blank" rel="noopener noreferrer" class="btn btn-outline uni-visit-btn">
            ${translations[currentLang].uniVisitSite} ↗
          </a>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Qo'llanmalar modali
const guidesContent = {
  sop: {
    title: {
      uz: "Kuchsiz Motivatsiya Xatini Qanday Kuchaytirsa Bo'ladi?",
      en: "How to Write a Winning Motivation Letter (SOP)",
      ru: "Как написать сильное мотивационное письмо (SOP)"
    },
    body: {
      uz: `
        <h4>1. Umumiy gaplardan qoching (No clichés)</h4>
        <p>"Bolaligimdan buyon kompyuterlarga qiziqaman" yoki "Men dunyoni yaxshiroq qilmoqchiman" kabi so'zlar qabul komissiyasini zeriktiradi. Uning o'rniga aniq bir voqea, siz duch kelgan muammo va uni qanday hal qilganingiz haqida yozing.</p>
        
        <h4>2. "Nega aynan bu universitet va dastur?"</h4>
        <p>Ko'pchilik grant saytidan nusxa olib qo'yadi. Siz esa professorning aniq maqolasi, universitetdagi maxsus laboratoriya yoki o'quv rejasidagi o'ziga xos modulni nomma-nom keltiring.</p>
        
        <h4>3. STAR formulasidan foydalaning</h4>
        <p><strong>S (Situation):</strong> Qanday vaziyat edi?<br>
        <strong>T (Task):</strong> Sizning oldingizdagi vazifa nima edi?<br>
        <strong>A (Action):</strong> Aynan siz nima qildingiz?<br>
        <strong>R (Result):</strong> Qanday natijaga erishildi (sonlar va faktlar bilan)?</p>

        <h4>4. Kelajakdagi aniq rejangiz (Career Goals)</h4>
        <p>O'qishni tugatgach nima qilasiz? 2-3 yillik va 5-10 yillik professional maqsadlaringizni aniq ko'rsating. Qabul qiluvchilar o'z investitsiyasini kimga kiritayotganini ko'rishi kerak.</p>
      `,
      en: `
        <h4>1. Avoid Generic Openers</h4>
        <p>Skip lines like "Ever since I was a child..." Focus instead on a catalyst project, an academic challenge you solved, or a pivotal moment that shaped your focus.</p>
        
        <h4>2. Be Hyper-Specific About the University</h4>
        <p>Name prospective advisors, specific research centers, unique course modules, or facilities that are only available at this particular institution.</p>
        
        <h4>3. Utilize the STAR Method</h4>
        <p>Structure your impact: Situation, Task, Action, and Measurable Result.</p>
        
        <h4>4. Realistic, Concrete Long-Term Vision</h4>
        <p>Outline realistic 3-year and 7-year career trajectories demonstrating how this scholarship directly unlocks your capability to create impact.</p>
      `,
      ru: `
        <h4>1. Избегайте банальных клише</h4>
        <p>Фразы вроде «С самого детства я мечтал стать программистом» мгновенно портят впечатление. Начните с конкретного проекта, исследовательской проблемы или практического опыта.</p>
        
        <h4>2. Почему именно этот университет?</h4>
        <p>Назовите конкретных профессоров, лаборатории, дисциплины и совместные программы, которых нет в других вузах.</p>
        
        <h4>3. Применяйте метод STAR</h4>
        <p>Ситуация (Situation), Задача (Task), Ваше действие (Action) и измеримый Результат (Result).</p>
        
        <h4>4. Четкий план после выпуска</h4>
        <p>Сформулируйте 3-5-летние цели: где вы будете работать и какую практическую пользу принесете обществу.</p>
      `
    }
  },
  lor: {
    title: {
      uz: "Kuchli Tavsiyanoma (LoR) Olish Sir-Asrorlari",
      en: "Secrets to Securing High-Impact Letters of Recommendation",
      ru: "Секреты получения убедительных рекомендательных писем"
    },
    body: {
      uz: `
        <h4>1. To'g'ri tavsiya beruvchini tanlang</h4>
        <p>Faqat unvoni baland dekan emas, balki sizning akademik yoki ilmiy mehnatingizni shaxsan biladigan, darsida faol qatnashgan o'qituvchingizdan tavsiyanoma oling.</p>
        
        <h4>2. Professorga "Brifing Paketi" tayyorlab bering</h4>
        <p>Professorga shunchaki "menga xat yozib bering" demang. Unga: o'zingizning CVingiz, topshirayotgan granti talablari va uning darsida qaysi loyihani bajarganingizni eslatuvchi 1 varaqli eslatma yuboring.</p>

        <h4>3. Rasmiy blanka va imzo</h4>
        <p>Tavsiyanoma albatta universitet yoki tashkilotning rasmiy blankasida, muhr, sana va tavsiya beruvchining ishchi elektron pochtasi bilan bo'lishi shart (@gmail.com emas, balki @university.edu).</p>
      `,
      en: `
        <h4>1. Choose Recommenders Who Truly Know You</h4>
        <p>A specific, insightful letter from an assistant professor who supervised your lab work outweighs a generic form letter from a busy faculty dean.</p>
        
        <h4>2. Provide a Comprehensive Brag Sheet</h4>
        <p>Hand your recommender your updated CV, course grade, copies of papers you wrote for them, and key prompts of the scholarship.</p>
        
        <h4>3. Official Institutional Letterhead & Email</h4>
        <p>Ensure the recommendation is signed on university letterhead with an official institutional email address.</p>
      `,
      ru: `
        <h4>1. Выбирайте того, кто знает вас лично</h4>
        <p>Теплое, подробное письмо от преподавателя вашего семинара ценится комиссией выше, чем пара сухих стандартных абзацев от ректора.</p>
        
        <h4>2. Подготовьте для рекомендателя резюме-бриф</h4>
        <p>Напомните профессору, какие курсовые и проекты вы у него защищали, приложите свое CV и дедлайны программы.</p>
        
        <h4>3. Официальный бланк и корпоративная почта</h4>
        <p>Письмо должно быть на официальном бланке с печатью, подписью и корпоративным адресом электронной почты (@edu).</p>
      `
    }
  },
  cv: {
    title: {
      uz: "Xalqaro CV va Resume Tayyorlash Standartlari",
      en: "International Academic CV & Resume Masterclass",
      ru: "Международный стандарт академического CV"
    },
    body: {
      uz: `
        <h4>1. Europass va AQSH akademik CV farqi</h4>
        <p>Yevropa davlatlari (Germaniya, Vengriya, Shvetsiya) ko'pincha Europass formatini xush ko'radi. AQSH uchun esa klassik 1-2 sahifalik toza, rasm va tug'ilgan sana kiritilmagan minimalist dizayn kerak.</p>
        
        <h4>2. Harakat fe'llari (Action Verbs)</h4>
        <p>"Loyihada qatnashdim" emas, balki "5 kishilik guruhni boshqardim, 30% xatolikni kamaytirdim va yangi modulni joriy qildim" (Led, developed, optimized, published).</p>

        <h4>3. To'g'ri xronologik tartib</h4>
        <p>Har doim Reverse Chronological (eng so'nggi yutuqlardan boshlab orqaga qarab) tartibda yozing.</p>
      `,
      en: `
        <h4>1. Regional Expectations: Europe vs. USA</h4>
        <p>European portals often suggest Europass styling. US institutions prefer clean 1-page resumes free of photos, age, marital status, or nationality.</p>
        
        <h4>2. Use Powerful Action Verbs</h4>
        <p>Quantify your contributions: "Spearheaded research analyzing 5,000 datapoints", "Optimized algorithmic runtime by 42%".</p>
        
        <h4>3. Reverse-Chronological Order</h4>
        <p>Always list your most recent experiences and degrees first.</p>
      `,
      ru: `
        <h4>1. Разница между США и Европой</h4>
        <p>Для программ в Европе часто подходит формат Europass. Для США резюме должно быть лаконичным, без фото, даты рождения и семейного положения.</p>
        
        <h4>2. Глаголы действия и цифры</h4>
        <p>Не просто перечисляйте обязанности, а пишите о результатах: «Разработал модель», «Повысил точность на 25%», «Организовал конференцию на 200 участников».</p>
        
        <h4>3. Обратный хронологический порядок</h4>
        <p>Указывайте ваш самый свежий академический и рабочий опыт в начале списка.</p>
      `
    }
  },
  interview: {
    title: {
      uz: "Elchixona va Universitet Intervyusidan Qanday O'tish Kerak?",
      en: "Acing Embassy & University Scholarship Interviews",
      ru: "Как успешно пройти собеседование на грант"
    },
    body: {
      uz: `
        <h4>1. Eng ko'p so'raladigan savollar</h4>
        <p>• Nega aynan ushbu davlatni tanladingiz?<br>
        • Nega aynan sizga bu grantni berishimiz kerak?<br>
        • Ta'limdan so'ng vataningizga qaytish rejangiz qanday?<br>
        • Murakkab stressli vaziyatda qanday yo'l tutgansiz?</p>
        
        <h4>2. Shaxsiy qadriyatlar va madaniyat elchisi</h4>
        <p>Grant beruvchi hukumatlar sizni o'z davlatingiz va xalqaro hamjamiyat o'rtasidagi ko'prik deb hisoblaydi. Ochiqko'ngil, do'stona va bag'rikeng ekaningizni ko'rsating.</p>
        
        <h4>3. O'zingiz ham savol bering</h4>
        <p>Suhbat oxirida "Savollaringiz bormi?" deb so'rashganda hech qachon "Yo'q" demang. Universitetdagi imkoniyatlar yoki laboratoriya loyihalari haqida oldindan tayyorlangan aqlli savol bering.</p>
      `,
      en: `
        <h4>1. Anticipate Core Evaluative Prompts</h4>
        <p>Why this specific destination? Why should we select you over hundreds of other applicants? What is your post-graduate re-entry plan?</p>
        
        <h4>2. Embody Cultural Ambassadorship</h4>
        <p>Committees fund candidates who will actively foster international dialogue and cross-cultural understanding.</p>
        
        <h4>3. Always Ask Thoughtful Questions</h4>
        <p>When asked if you have questions, engage the interviewers on faculty initiatives, research symposiums, or university-industry partnerships.</p>
      `,
      ru: `
        <h4>1. Ключевые вопросы на интервью</h4>
        <p>• Почему именно эта страна и специальность?<br>
        • Почему комиссия должна выбрать именно вас?<br>
        • Как именно вы примените знания после возвращения на родину?<br>
        • Расскажите о преодолении сложной командной проблемы.</p>
        
        <h4>2. Вы — культурный посол своей страны</h4>
        <p>Организаторам грантов важно увидеть вашу зрелость, открытость к межкультурному общению и готовность строить партнерские связи.</p>
        
        <h4>3. Обязательно задавайте встречные вопросы</h4>
        <p>В конце беседы задайте 1-2 продуманных вопроса о научных лабораториях, менторских программах или студенческих инициативах.</p>
      `
    }
  }
};

function openGuideModal(guideKey) {
  const guide = guidesContent[guideKey];
  if (!guide) return;

  const modal = document.getElementById('guideDetailModal');
  if (!modal) return;

  document.getElementById('guideModalTitle').textContent = guide.title[currentLang];
  document.getElementById('guideModalBody').innerHTML = guide.body[currentLang];

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeGuideModal() {
  const modal = document.getElementById('guideDetailModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

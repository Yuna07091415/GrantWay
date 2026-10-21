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
  if (typeof renderCertificates === 'function') renderCertificates();
  renderPlanner();
  updatePlannerBadge();
});

// Yordamchi: joriy til lug'ati
function getT() {
  return translations[currentLang] || translations.en || translations.uz;
}

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

  // Telegram modalidagi til qidiruvi
  const langSearchInput = document.getElementById('langSearchInput');
  if (langSearchInput) {
    langSearchInput.addEventListener('input', (e) => {
      renderTelegramLangList(e.target.value);
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
      if (typeof closeCertificateModal === 'function') closeCertificateModal();
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
    opt.textContent = getLangText(c.name);
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
  showToast(getT().resetFilters, 'info');
}

// Grantlarni qidirish va filtrlash
function getFilteredScholarships() {
  return scholarshipsData.filter(item => {
    // 1. Qidiruv matni (Nomi, mamlakati, tashkilotchi, tavsifi)
    if (activeFilters.search) {
      const q = activeFilters.search;
      const titleText = (getLangText(item.title) + " " + (item.title.en || "")).toLowerCase();
      const countryText = (getLangText(item.countryName) + " " + (item.countryName.en || "")).toLowerCase();
      const organizerText = item.organizer.toLowerCase();
      const descText = (getLangText(item.description) + " " + (item.description.en || "")).toLowerCase();
      const tagsMatch = item.tags.some(t => t.toLowerCase().includes(q));

      if (!titleText.includes(q) && !countryText.includes(q) && !organizerText.includes(q) && !descText.includes(q) && !tagsMatch) {
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
      return getLangText(a.title).localeCompare(getLangText(b.title));
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

  const t = getT();
  const filtered = getFilteredScholarships();

  if (countBadge) {
    countBadge.textContent = `${filtered.length} ${t.foundResults}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-results-box">
        <div class="no-results-icon">🔍</div>
        <h3>${t.noResults}</h3>
        <button class="btn btn-outline" onclick="resetAllFilters()">${t.resetFilters}</button>
      </div>
    `;
    return;
  }

  const planner = getPlannerData();

  let html = '';
  filtered.forEach(grant => {
    const daysLeft = calculateDaysLeft(grant.deadline);
    let deadlineBadgeClass = 'badge-active';
    let deadlineText = `${daysLeft} ${t.grantDaysLeft}`;

    if (daysLeft < 0) {
      deadlineBadgeClass = 'badge-expired';
      deadlineText = t.grantDeadlinePassed;
    } else if (daysLeft === 0) {
      deadlineBadgeClass = 'badge-urgent';
      deadlineText = t.grantToday;
    } else if (daysLeft <= 14) {
      deadlineBadgeClass = 'badge-urgent';
    }

    const isInPlanner = !!planner[grant.id];
    const grantTitle = getLangText(grant.title);
    const countryName = getLangText(grant.countryName);
    const degreeLabel = getLangText(grant.degreeLabels);
    const description = getLangText(grant.description);

    html += `
      <div class="scholarship-card animate-fade-in" data-id="${grant.id}">
        <div class="card-header">
          <div class="card-country">
            <span class="country-flag">${grant.flag}</span>
            <span class="country-name">${countryName}</span>
          </div>
          <span class="deadline-badge ${deadlineBadgeClass}">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            ${deadlineText}
          </span>
        </div>

        <h3 class="card-title">${grantTitle}</h3>
        <p class="card-organizer">${grant.organizer}</p>

        <p class="card-desc">${description}</p>

        <div class="card-specs">
          <div class="spec-item">
            <span class="spec-label">${t.modalDegree}:</span>
            <span class="spec-value">${degreeLabel}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">${t.modalFundingCoverage}:</span>
            <span class="spec-value font-semibold text-emerald">${grant.funding === 'full' ? t.grantFundingFull : t.grantFundingPartial} (${grant.monthlyStipend})</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">${t.modalLanguageReqs}:</span>
            <span class="spec-value">${grant.ieltsReq}</span>
          </div>
        </div>

        <div class="card-tags">
          ${grant.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
        </div>

        <div class="card-footer">
          <button class="btn btn-primary btn-view" onclick="openGrantModal('${grant.id}')">
            ${t.viewDetails}
          </button>
          <button class="btn btn-outline btn-plan ${isInPlanner ? 'in-planner' : ''}" data-planner-btn="${grant.id}" onclick="togglePlannerItem('${grant.id}')">
            ${isInPlanner ? `
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>${t.inPlanner}</span>
            ` : `
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              <span>${t.addToPlanner}</span>
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

  const t = getT();

  // Ma'lumotlarni to'ldirish
  document.getElementById('modalFlag').textContent = grant.flag;
  document.getElementById('modalCountry').textContent = getLangText(grant.countryName);
  document.getElementById('modalTitle').textContent = getLangText(grant.title);
  document.getElementById('modalOrganizer').textContent = grant.organizer;
  document.getElementById('modalOverviewText').textContent = getLangText(grant.description);

  const daysLeft = calculateDaysLeft(grant.deadline);
  document.getElementById('modalDeadlineVal').innerHTML = `<strong>${grant.deadlineDisplay}</strong> (${grant.deadline}) — <span class="text-emerald">${daysLeft} ${t.grantDaysLeft}</span>`;
  document.getElementById('modalDegreeVal').textContent = getLangText(grant.degreeLabels);
  document.getElementById('modalFundingVal').textContent = `${grant.funding === 'full' ? t.grantFundingFull : t.grantFundingPartial} (${grant.monthlyStipend})`;
  document.getElementById('modalIeltsVal').textContent = grant.ieltsReq;
  document.getElementById('modalGpaVal').textContent = grant.gpaReq;

  // Imtiyozlar (Benefits)
  const benefitsArr = grant.benefits[currentLang] || grant.benefits.en || grant.benefits.uz || [];
  const benefitsList = document.getElementById('modalBenefitsList');
  benefitsList.innerHTML = benefitsArr.map(b => `
    <li class="benefit-item">
      <span class="icon-check">✓</span>
      <span>${b}</span>
    </li>
  `).join('');

  // Talablar (Requirements)
  const reqsArr = grant.requirements[currentLang] || grant.requirements.en || grant.requirements.uz || [];
  const reqsList = document.getElementById('modalRequirementsList');
  reqsList.innerHTML = reqsArr.map(r => `
    <li class="req-item">
      <span class="bullet">•</span>
      <span>${r}</span>
    </li>
  `).join('');

  // Kerakli Hujjatlar (Documents Checklist)
  const docsArr = grant.documents[currentLang] || grant.documents.en || grant.documents.uz || [];
  const docsList = document.getElementById('modalDocumentsList');
  docsList.innerHTML = docsArr.map((d, index) => `
    <li class="doc-checklist-item">
      <input type="checkbox" id="doc-check-${grant.id}-${index}">
      <label for="doc-check-${grant.id}-${index}">${d}</label>
    </li>
  `).join('');

  // Eslatmalar va Maslahatlar (Tips)
  const tipsArr = grant.tips[currentLang] || grant.tips.en || grant.tips.uz || [];
  const tipsList = document.getElementById('modalTipsList');
  tipsList.innerHTML = tipsArr.map(tip => `
    <li class="tip-item">
      <span class="tip-icon">💡</span>
      <span>${tip}</span>
    </li>
  `).join('');

  // Rasmiy sayt havolasi
  const applyBtn = document.getElementById('modalOfficialLinkBtn');
  if (applyBtn) {
    applyBtn.href = grant.officialUrl;
    applyBtn.textContent = t.applyNowOfficial;
  }

  // Rejaga qo'shish tugmasi
  const planner = getPlannerData();
  const isInPlanner = !!planner[grant.id];
  const modalPlanBtn = document.getElementById('modalPlannerBtn');
  if (modalPlanBtn) {
    modalPlanBtn.innerHTML = isInPlanner ? `✓ ${t.inPlanner}` : `+ ${t.addToPlanner}`;
    modalPlanBtn.onclick = () => {
      togglePlannerItem(grant.id);
      openGrantModal(grant.id);
    };
  }

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

// Eslatma sozlash
function setDeadlineReminder() {
  if (!currentModalGrant) return;
  const t = getT();

  if (!("Notification" in window)) {
    showToast("Notification not supported in this browser. Saved to planner!", "info");
    return;
  }

  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      new Notification(`GrantWay: ${getLangText(currentModalGrant.title)}`, {
        body: `Deadline: ${currentModalGrant.deadline}.`,
        icon: "assets/favicon.svg"
      });
      showToast(t.reminderSuccess, "success");
    } else {
      showToast(t.reminderSuccess, "info");
    }
  });
}

// Universitetlarni ekranga chiqarish
function renderUniversities(query = '') {
  const container = document.getElementById('universitiesGrid');
  if (!container) return;

  const t = getT();
  const filtered = universitiesData.filter(uni => {
    if (!query) return true;
    const uniName = uni.name.toLowerCase();
    const uniCountry = getLangText(uni.country).toLowerCase();
    const uniCity = uni.city.toLowerCase();
    return uniName.includes(query) || uniCountry.includes(query) || uniCity.includes(query);
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p class="text-center w-full py-8">${t.noResults}</p>`;
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
          <p class="uni-location">📍 ${uni.city}, ${getLangText(uni.country)}</p>
          <p class="uni-desc">${getLangText(uni.description)}</p>

          <div class="uni-meta-grid">
            <div class="uni-meta-item">
              <span class="meta-label">${t.uniAcceptanceRate}:</span>
              <span class="meta-val font-semibold">${uni.acceptanceRate}</span>
            </div>
            <div class="uni-meta-item">
              <span class="meta-label">${t.uniAvgTuition}:</span>
              <span class="meta-val font-semibold">${uni.avgTuition}</span>
            </div>
          </div>

          <div class="uni-scholarships-box">
            <span class="meta-label">${t.uniScholarshipsAvailable}:</span>
            <div class="uni-tags-wrap">
              ${uni.scholarshipsAvailable.map(s => `<span class="uni-grant-pill">${s}</span>`).join('')}
            </div>
          </div>

          <a href="${uni.website}" target="_blank" rel="noopener noreferrer" class="btn btn-outline uni-visit-btn">
            ${t.uniVisitSite} ↗
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
        <strong>R (Result):</strong> Qanday natijaga erishildi?</p>
      `,
      en: `
        <h4>1. Avoid Generic Openers</h4>
        <p>Skip lines like "Ever since I was a child..." Focus instead on a catalyst project, an academic challenge you solved, or a pivotal moment that shaped your focus.</p>
        <h4>2. Be Hyper-Specific About the University</h4>
        <p>Name prospective advisors, specific research centers, unique course modules, or facilities that are only available at this particular institution.</p>
        <h4>3. Utilize the STAR Method</h4>
        <p>Structure your impact: Situation, Task, Action, and Measurable Result.</p>
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
        <p>Sizning akademik yoki ilmiy mehnatingizni shaxsan biladigan, faol qatnashgan o'qituvchingizdan tavsiyanoma oling.</p>
        <h4>2. Professorga "Brifing Paketi" tayyorlab bering</h4>
        <p>CVingiz, topshirayotgan grant talablari va uning darsida qaysi loyihani bajarganingizni eslatuvchi 1 varaqli eslatma yuboring.</p>
      `,
      en: `
        <h4>1. Choose Recommenders Who Truly Know You</h4>
        <p>A specific, insightful letter from an instructor who supervised your lab work outweighs a generic form letter from a busy faculty dean.</p>
        <h4>2. Provide a Comprehensive Brag Sheet</h4>
        <p>Hand your recommender your updated CV, course grade, and key prompts of the scholarship.</p>
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
        <p>Yevropa davlatlari ko'pincha Europass formatini xush ko'radi. AQSH uchun esa klassik 1-2 sahifalik toza minimalist dizayn kerak.</p>
        <h4>2. Harakat fe'llari (Action Verbs)</h4>
        <p>"Led, developed, optimized, published, analyzed" kabi aniq fe'llardan foydalaning.</p>
      `,
      en: `
        <h4>1. Regional Expectations: Europe vs. USA</h4>
        <p>European portals often suggest Europass styling. US institutions prefer clean 1-page resumes free of photos, age, marital status, or nationality.</p>
        <h4>2. Use Powerful Action Verbs</h4>
        <p>Quantify your contributions: "Spearheaded research analyzing 5,000 datapoints", "Optimized algorithmic runtime by 42%".</p>
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
        • Ta'limdan so'ng vataningizga qaytish rejangiz qanday?</p>
        <h4>2. Shaxsiy qadriyatlar va madaniyat elchisi</h4>
        <p>Ochiqko'ngil, do'stona va xalqaro hamjamiyat bilan ishlashga tayyor ekaningizni namoyish eting.</p>
      `,
      en: `
        <h4>1. Anticipate Core Evaluative Prompts</h4>
        <p>Why this specific destination? Why should we select you over hundreds of other applicants? What is your post-graduate re-entry plan?</p>
        <h4>2. Embody Cultural Ambassadorship</h4>
        <p>Committees fund candidates who will actively foster international dialogue and cross-cultural understanding.</p>
      `
    }
  }
};

function openGuideModal(guideKey) {
  const guide = guidesContent[guideKey];
  if (!guide) return;

  const modal = document.getElementById('guideDetailModal');
  if (!modal) return;

  const title = getLangText(guide.title);
  const body = guide.body[currentLang] || guide.body.en || guide.body.uz || '';

  document.getElementById('guideModalTitle').textContent = title;
  document.getElementById('guideModalBody').innerHTML = body;

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

// QR Kod havolasidan nusxa olish
function copyQrLink() {
  const url = "https://grantway1.netlify.app/";
  const t = typeof getT === 'function' ? getT() : (translations[currentLang] || translations.uz);
  const successMsg = t.qrCopied || "Havola nusxalandi: https://grantway1.netlify.app/";

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      showToast(successMsg, 'success');
      updateCopyBtnFeedback();
    }).catch(() => {
      fallbackCopyText(url, successMsg);
    });
  } else {
    fallbackCopyText(url, successMsg);
  }
}

function fallbackCopyText(text, successMsg) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showToast(successMsg, 'success');
    updateCopyBtnFeedback();
  } catch (err) {
    showToast(text, 'info');
  }
  document.body.removeChild(ta);
}

function updateCopyBtnFeedback() {
  const btn = document.getElementById('copyQrBtn');
  if (btn) {
    const origHtml = btn.innerHTML;
    const t = typeof getT === 'function' ? getT() : (translations[currentLang] || translations.uz);
    btn.innerHTML = `✓ ${t.qrCopied || 'Nusxalandi!'}`;
    btn.classList.add('btn-primary');
    btn.classList.remove('btn-outline');
    setTimeout(() => {
      btn.innerHTML = origHtml;
      btn.classList.remove('btn-primary');
      btn.classList.add('btn-outline');
    }, 2500);
  }
}

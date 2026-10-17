// GrantWay - Ko'p tillilik moduli (Language Manager)
// Telegram uslubidagi til tanlash va dinamik yangilanish

let currentLang = 'uz';

// Sayt ishga tushganda tilni aniqlash
function initLanguage() {
  const savedLang = localStorage.getItem('grantway_lang');
  
  if (savedLang && ['uz', 'en', 'ru'].includes(savedLang)) {
    currentLang = savedLang;
  } else {
    // Agar foydalanuvchi birinchi marta kirgan bo'lsa, Telegramdagi kabi til tanlash oynasini ko'rsatamiz
    currentLang = 'uz'; // standart
    showTelegramLangModal();
  }
  
  updateLanguageUI();
}

// Telegram uslubidagi modalni ko'rsatish
function showTelegramLangModal() {
  const modal = document.getElementById('telegramLangModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// Telegram uslubidagi modalni yopish
function closeTelegramLangModal() {
  const modal = document.getElementById('telegramLangModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Tilni tanlash va saqlash
function setLanguage(lang) {
  if (!['uz', 'en', 'ru'].includes(lang)) return;
  currentLang = lang;
  localStorage.setItem('grantway_lang', lang);
  
  // UI ni yangilash
  updateLanguageUI();
  
  // Modalni yopish
  closeTelegramLangModal();
  
  // Grantlar, Universitetlar va Rejani qayta render qilish
  if (typeof renderScholarships === 'function') renderScholarships();
  if (typeof renderUniversities === 'function') renderUniversities();
  if (typeof renderPlanner === 'function') renderPlanner();
  if (typeof updateFilterCountryOptions === 'function') updateFilterCountryOptions();
  
  // Animatsiyali bildirishnoma
  showToast(
    lang === 'uz' ? "Til O'zbekchaga o'zgartirildi 🇺🇿" :
    lang === 'ru' ? "Язык переключен на русский 🇷🇺" :
    "Language changed to English 🇬🇧"
  );
}

// Sahifadagi barcha matnlarni joriy tilga o'girish
function updateLanguageUI() {
  const langPack = translations[currentLang] || translations.uz;
  
  // data-i18n bo'lgan barcha elementlarni yangilash
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (langPack[key]) {
      el.textContent = langPack[key];
    }
  });

  // data-i18n-placeholder bo'lgan elementlar
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (langPack[key]) {
      el.placeholder = langPack[key];
    }
  });

  // data-i18n-html bo'lgan elementlar (agar kerak bo'lsa)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (langPack[key]) {
      el.innerHTML = langPack[key];
    }
  });

  // Til tanlash tugmasining ko'rinishini yangilash
  const currentLangLabel = document.getElementById('currentLangLabel');
  if (currentLangLabel) {
    if (currentLang === 'uz') currentLangLabel.innerHTML = `<span class="flag">🇺🇿</span> O'zbekcha`;
    else if (currentLang === 'en') currentLangLabel.innerHTML = `<span class="flag">🇬🇧</span> English`;
    else if (currentLang === 'ru') currentLangLabel.innerHTML = `<span class="flag">🇷🇺</span> Русский`;
  }

  // Active tugmalarni belgilash
  document.querySelectorAll('.lang-select-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Tizimdagi qulay xabarlar (Toast notifications)
function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast-item toast-${type} animate-slide-in`;
  toast.innerHTML = `
    <div class="toast-content">
      <span class="toast-icon">✨</span>
      <span class="toast-text">${message}</span>
    </div>
  `;
  
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

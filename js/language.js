// GrantWay - Ko'p tillilik moduli (Language Manager)
// Telegram uslubidagi til tanlash, qidiruv va RTL (Arab tili) qo'llab-quvvatlashi

let currentLang = 'uz';

// Sayt ishga tushganda tilni aniqlash
function initLanguage() {
  const savedLang = localStorage.getItem('grantway_lang');
  const validCodes = languagesConfig.map(l => l.code);
  
  if (savedLang && validCodes.includes(savedLang)) {
    currentLang = savedLang;
  } else {
    currentLang = 'uz'; // standart
    showTelegramLangModal();
  }
  
  renderTelegramLangList();
  applyCurrentLanguage();
}

// Telegram uslubidagi modalni ko'rsatish
function showTelegramLangModal() {
  const modal = document.getElementById('telegramLangModal');
  if (modal) {
    renderTelegramLangList();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Qidiruv inputiga fokus berish
    setTimeout(() => {
      const searchInput = document.getElementById('langSearchInput');
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
    }, 200);
  }
}

// Telegram modalida barcha 18 ta tilni render qilish
function renderTelegramLangList(query = '') {
  const container = document.getElementById('telegramLangListContainer');
  if (!container) return;

  const q = query.trim().toLowerCase();
  const filtered = languagesConfig.filter(l => {
    if (!q) return true;
    return l.name.toLowerCase().includes(q) ||
           l.sub.toLowerCase().includes(q) ||
           l.code.toLowerCase().includes(q);
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 1.5rem; color: var(--text-dim);">
        Til topilmadi / No language found
      </div>
    `;
    return;
  }

  let html = '';
  filtered.forEach(lang => {
    const isActive = lang.code === currentLang;
    html += `
      <button type="button" class="lang-select-btn ${isActive ? 'active' : ''}" data-lang="${lang.code}" onclick="setLanguage('${lang.code}')">
        <div class="lang-info">
          <span class="lang-flag">${lang.flag}</span>
          <div>
            <div class="lang-native-name">${lang.name}</div>
            <div class="lang-sub-name">${lang.sub}</div>
          </div>
        </div>
        <div class="lang-check-radio"></div>
      </button>
    `;
  });

  container.innerHTML = html;
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
  const validCodes = languagesConfig.map(l => l.code);
  if (!validCodes.includes(lang)) return;

  currentLang = lang;
  localStorage.setItem('grantway_lang', lang);
  
  applyCurrentLanguage();
  closeTelegramLangModal();

  // Foydalanuvchiga xabar
  const selectedObj = languagesConfig.find(l => l.code === lang);
  showToast(`Til o'zgartirildi: ${selectedObj?.name} ${selectedObj?.flag}`);
}

// Tilni qo'llash va DOM elementlarini yangilash
function applyCurrentLanguage() {
  const langConfig = languagesConfig.find(l => l.code === currentLang) || languagesConfig[0];
  
  // RTL / LTR yo'nalishini belgilash (Arab tili uchun RTL)
  if (langConfig.dir === 'rtl') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.classList.add('rtl-mode');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.classList.remove('rtl-mode');
  }

  document.documentElement.setAttribute('lang', currentLang);

  // Navbardagi joriy til tugmasini yangilash
  const currentLangLabel = document.getElementById('currentLangLabel');
  if (currentLangLabel) {
    currentLangLabel.innerHTML = `<span class="flag">${langConfig.flag}</span> <span>${langConfig.name}</span>`;
  }

  // Sahifadagi barcha matnlarni tarjima qilish
  updateLanguageUI();

  // Komponentlarni qayta chizish
  if (typeof renderScholarships === 'function') renderScholarships();
  if (typeof renderUniversities === 'function') renderUniversities();
  if (typeof renderCertificates === 'function') renderCertificates();
  if (typeof renderPlanner === 'function') renderPlanner();
  if (typeof updateFilterCountryOptions === 'function') updateFilterCountryOptions();
}

// data-i18n elementlarini tarjima qilish
function updateLanguageUI() {
  const langPack = translations[currentLang] || translations.en || translations.uz;
  const fallbackPack = translations.en || translations.uz;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = langPack[key] || fallbackPack[key];
    if (text) {
      el.textContent = text;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const placeholder = langPack[key] || fallbackPack[key];
    if (placeholder) {
      el.placeholder = placeholder;
    }
  });
}

// Tildan matn olish yordamchisi (har qanday ma'lumotlar obyekti uchun xavfsiz fallback)
function getLangText(obj) {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return obj[currentLang] || obj.en || obj.uz || obj.ru || Object.values(obj)[0] || '';
}

// Tizimdagi xabarnomalar (Toast)
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

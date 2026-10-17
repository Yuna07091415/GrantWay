// GrantWay - Shaxsiy Ariza Rejasi va Yo'l Xaritasi (Personal Application Planner)
// Foydalanuvchining shaxsiy checklistlari, progressi va eslatmalari

const PLANNER_STORAGE_KEY = 'grantway_user_planner';

// Rejani xotiradan olish
function getPlannerData() {
  const data = localStorage.getItem(PLANNER_STORAGE_KEY);
  return data ? JSON.parse(data) : {};
}

// Rejani xotiraga saqlash
function savePlannerData(data) {
  localStorage.setItem(PLANNER_STORAGE_KEY, JSON.stringify(data));
  updatePlannerBadge();
}

// Grantni rejaga qo'shish / o'chirish
function togglePlannerItem(scholarshipId) {
  const planner = getPlannerData();
  const grant = scholarshipsData.find(s => s.id === scholarshipId);
  if (!grant) return;

  if (planner[scholarshipId]) {
    // Rejadan olib tashlash
    delete planner[scholarshipId];
    savePlannerData(planner);
    showToast(
      currentLang === 'uz' ? `"${grant.title[currentLang]}" rejadan olib tashlandi` :
      currentLang === 'ru' ? `"${grant.title[currentLang]}" удалено из плана` :
      `"${grant.title[currentLang]}" removed from planner`,
      'info'
    );
  } else {
    // Rejaga qo'shish
    planner[scholarshipId] = {
      addedAt: new Date().toISOString(),
      notes: "",
      steps: {
        step1: false, // Tadqiqot va moslik
        step2: false, // Hujjatlar va tarjimalar
        step3: false, // Til sertifikati
        step4: false, // Motivatsion xat va LoR
        step5: false  // Rasmiy yuborish
      }
    };
    savePlannerData(planner);
    showToast(
      currentLang === 'uz' ? `"${grant.title[currentLang]}" shaxsiy rejangizga qo'shildi! 📋` :
      currentLang === 'ru' ? `"${grant.title[currentLang]}" добавлено в ваш план! 📋` :
      `"${grant.title[currentLang]}" added to your planner! 📋`,
      'success'
    );
  }

  // Sahifadagi tugmalar va ro'yxatni yangilash
  updatePlannerButtons();
  renderPlanner();
}

// Navbardagi saqlanganlar sonini yangilash
function updatePlannerBadge() {
  const planner = getPlannerData();
  const count = Object.keys(planner).length;
  const badges = document.querySelectorAll('.planner-count-badge');
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'inline-flex' : 'none';
  });
}

// Kartochkalardagi "Rejaga qo'shish" tugmalari holatini yangilash
function updatePlannerButtons() {
  const planner = getPlannerData();
  const buttons = document.querySelectorAll('[data-planner-btn]');
  
  buttons.forEach(btn => {
    const id = btn.getAttribute('data-planner-btn');
    const isInPlanner = !!planner[id];
    
    if (isInPlanner) {
      btn.classList.add('in-planner');
      btn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${translations[currentLang].inPlanner}</span>
      `;
    } else {
      btn.classList.remove('in-planner');
      btn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
        <span>${translations[currentLang].addToPlanner}</span>
      `;
    }
  });
}

// Shaxsiy ariza rejasini ekranga render qilish
function renderPlanner() {
  const container = document.getElementById('plannerItemsContainer');
  if (!container) return;

  const planner = getPlannerData();
  const grantIds = Object.keys(planner);
  const emptyState = document.getElementById('plannerEmptyState');
  const plannerContent = document.getElementById('plannerContentArea');

  if (grantIds.length === 0) {
    if (emptyState) emptyState.style.display = 'block';
    if (plannerContent) plannerContent.style.display = 'none';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (plannerContent) plannerContent.style.display = 'block';

  let totalStepsCount = 0;
  let completedStepsCount = 0;

  let html = '';

  grantIds.forEach(id => {
    const grant = scholarshipsData.find(s => s.id === id);
    if (!grant) return;

    const item = planner[id];
    const steps = item.steps || {};
    
    const stepsDone = Object.values(steps).filter(Boolean).length;
    const progressPercent = Math.round((stepsDone / 5) * 100);

    totalStepsCount += 5;
    completedStepsCount += stepsDone;

    // Deadline hisobi
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

    html += `
      <div class="planner-card" data-card-id="${grant.id}">
        <div class="planner-card-header">
          <div class="planner-card-info">
            <span class="flag-icon">${grant.flag}</span>
            <div>
              <h3 class="planner-card-title">${grant.title[currentLang]}</h3>
              <p class="planner-card-meta">${grant.organizer} • ${grant.countryName[currentLang]}</p>
            </div>
          </div>
          <div class="planner-card-actions">
            <span class="deadline-pill ${deadlineBadgeClass}">⏳ ${deadlineText} (${grant.deadline})</span>
            <button class="btn-icon btn-remove" onclick="togglePlannerItem('${grant.id}')" title="Rejadan o'chirish">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        </div>

        <div class="planner-progress-wrapper">
          <div class="progress-info">
            <span class="progress-title">${translations[currentLang].plannerProgress}</span>
            <span class="progress-percent font-bold">${progressPercent}%</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${progressPercent}%;"></div>
          </div>
        </div>

        <!-- 5 Bosqichli Checklist -->
        <div class="planner-steps-list">
          <label class="step-checkbox-item ${steps.step1 ? 'completed' : ''}">
            <input type="checkbox" ${steps.step1 ? 'checked' : ''} onchange="toggleStep('${grant.id}', 'step1')">
            <span class="custom-checkbox"></span>
            <div class="step-label">
              <strong>${translations[currentLang].step1Title}</strong>
              <small>${currentLang === 'uz' ? "Yo'nalish va OTMni tanlash, qabul mezonlari bilan to'liq tanishib chiqish." : currentLang === 'ru' ? "Выбор программы и детальное изучение требований." : "Review course catalog, eligibility, and program regulations."}</small>
            </div>
          </label>

          <label class="step-checkbox-item ${steps.step2 ? 'completed' : ''}">
            <input type="checkbox" ${steps.step2 ? 'checked' : ''} onchange="toggleStep('${grant.id}', 'step2')">
            <span class="custom-checkbox"></span>
            <div class="step-label">
              <strong>${translations[currentLang].step2Title}</strong>
              <small>${currentLang === 'uz' ? "Diplom/Attestatni ingliz tiliga tarjima qildirish, notarial tasdiqlash va apostil." : currentLang === 'ru' ? "Перевод диплома/аттестата, нотариальное заверение и апостиль." : "Translate academic diploma/transcript and get notarized/apostilled."}</small>
            </div>
          </label>

          <label class="step-checkbox-item ${steps.step3 ? 'completed' : ''}">
            <input type="checkbox" ${steps.step3 ? 'checked' : ''} onchange="toggleStep('${grant.id}', 'step3')">
            <span class="custom-checkbox"></span>
            <div class="step-label">
              <strong>${translations[currentLang].step3Title}</strong>
              <small>${grant.ieltsReq}</small>
            </div>
          </label>

          <label class="step-checkbox-item ${steps.step4 ? 'completed' : ''}">
            <input type="checkbox" ${steps.step4 ? 'checked' : ''} onchange="toggleStep('${grant.id}', 'step4')">
            <span class="custom-checkbox"></span>
            <div class="step-label">
              <strong>${translations[currentLang].step4Title}</strong>
              <small>${currentLang === 'uz' ? "Kuchli Statement of Purpose yozish va professorlardan 2 ta tavsiyanoma olish." : currentLang === 'ru' ? "Написание мотивационного эссе и получение рекомендаций от профессоров." : "Draft high-impact Statement of Purpose and secure 2 recommendation letters."}</small>
            </div>
          </label>

          <label class="step-checkbox-item ${steps.step5 ? 'completed' : ''}">
            <input type="checkbox" ${steps.step5 ? 'checked' : ''} onchange="toggleStep('${grant.id}', 'step5')">
            <span class="custom-checkbox"></span>
            <div class="step-label">
              <strong>${translations[currentLang].step5Title}</strong>
              <small>${currentLang === 'uz' ? "Rasmiy portalda anketani to'ldirib, arizani muddatidan oldin jo'natish." : currentLang === 'ru' ? "Заполнение формы на официальном портале и финальная отправка заявки." : "Final online form submission on official scholarship portal before deadline."}</small>
            </div>
          </label>
        </div>

        <!-- Shaxsiy Qaydlar (Notes) -->
        <div class="planner-notes-section">
          <textarea class="planner-notes-input" id="notes-${grant.id}" placeholder="${translations[currentLang].notesPlaceholder}">${item.notes || ''}</textarea>
          <div class="notes-footer">
            <button class="btn btn-sm btn-outline" onclick="saveGrantNotes('${grant.id}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
              ${translations[currentLang].saveNotes}
            </button>
            <a href="${grant.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
              ${translations[currentLang].officialLink} ↗
            </a>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Umumiy hisoblagichni yangilash
  const overallPercent = totalStepsCount > 0 ? Math.round((completedStepsCount / totalStepsCount) * 100) : 0;
  const overallBadge = document.getElementById('overallPlannerProgress');
  if (overallBadge) {
    overallBadge.textContent = `${overallPercent}%`;
  }
}

// Qadamni belgilash
function toggleStep(grantId, stepKey) {
  const planner = getPlannerData();
  if (!planner[grantId]) return;

  planner[grantId].steps = planner[grantId].steps || {};
  planner[grantId].steps[stepKey] = !planner[grantId].steps[stepKey];

  savePlannerData(planner);
  renderPlanner();
}

// Qaydlarni saqlash
function saveGrantNotes(grantId) {
  const planner = getPlannerData();
  if (!planner[grantId]) return;

  const textarea = document.getElementById(`notes-${grantId}`);
  if (textarea) {
    planner[grantId].notes = textarea.value;
    savePlannerData(planner);
    showToast(
      currentLang === 'uz' ? "Qaydlaringiz muvaffaqiyatli saqlandi! 💾" :
      currentLang === 'ru' ? "Заметка сохранена! 💾" :
      "Notes saved successfully! 💾",
      'success'
    );
  }
}

// Rejani eksport qilish (JSON yuklab olish)
function exportPlannerJSON() {
  const planner = getPlannerData();
  const jsonStr = JSON.stringify(planner, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `GrantWay-Application-Plan-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// Rejani chop etish / PDF sifatida saqlash
function printPlanner() {
  window.print();
}

// Barcha rejani tozalash
function clearPlanner() {
  const confirmMsg = currentLang === 'uz' ? "Haqiqatan ham barcha shaxsiy rejalaringizni o'chirib tashlamoqchimisiz?" :
    currentLang === 'ru' ? "Вы действительно хотите очистить весь личный план?" :
    "Are you sure you want to clear your entire application plan?";

  if (confirm(confirmMsg)) {
    localStorage.removeItem(PLANNER_STORAGE_KEY);
    renderPlanner();
    updatePlannerBadge();
    updatePlannerButtons();
    showToast(
      currentLang === 'uz' ? "Reja tozalandi." :
      currentLang === 'ru' ? "План очищен." :
      "Planner cleared.",
      'info'
    );
  }
}

// Deadline orqaga hisoblash yordamchisi (kunlarda)
function calculateDaysLeft(deadlineStr) {
  const now = new Date();
  const deadlineDate = new Date(deadlineStr);
  const diffTime = deadlineDate - now;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

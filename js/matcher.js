// GrantWay - Moslik Kalkulyatori (Eligibility Matcher Quiz)
// Foydalanuvchi parametrlariga ko'ra grantlarni tahlil qilish va tavsiya etish

function runEligibilityMatcher() {
  const degree = document.getElementById('matcherDegree')?.value || 'any';
  const field = document.getElementById('matcherField')?.value || 'any';
  const english = document.getElementById('matcherEnglish')?.value || 'any';
  const gpa = document.getElementById('matcherGpa')?.value || 'any';
  const region = document.getElementById('matcherRegion')?.value || 'any';

  const resultsContainer = document.getElementById('matcherResultsContainer');
  const resultsCard = document.getElementById('matcherResultsCard');

  if (!resultsContainer || !resultsCard) return;

  // Har bir grant uchun moslik foizini hisoblash
  const scoredGrants = scholarshipsData.map(grant => {
    let score = 0;
    let maxScore = 5;

    // 1. Ta'lim darajasi mosligi
    if (degree === 'any' || grant.degree.includes(degree)) {
      score += 1;
    }

    // 2. Yo'nalish mosligi
    if (field === 'any' || grant.fields.includes('any') || grant.fields.includes(field)) {
      score += 1;
    }

    // 3. Til talabi mosligi
    if (english === 'no_ielts') {
      if (grant.ieltsReq.toLowerCase().includes('tilsiz') || grant.ieltsReq.toLowerCase().includes('optional') || grant.ieltsReq.toLowerCase().includes('no ielts')) {
        score += 1;
      } else {
        score += 0.2;
      }
    } else if (english === 'ielts_mid') { // 6.0 - 6.5
      score += 0.85;
    } else if (english === 'ielts_high') { // 7.0+
      score += 1;
    } else {
      score += 0.9;
    }

    // 4. GPA mosligi
    if (gpa === 'gpa_high') { // 85%+
      score += 1;
    } else if (gpa === 'gpa_mid') { // 75-85%
      score += 0.8;
    } else {
      score += 0.6;
    }

    // 5. Mintaqa mosligi
    if (region === 'any') {
      score += 1;
    } else if (region === 'eu' && ['DE', 'HU', 'EU', 'SE'].includes(grant.countryCode)) {
      score += 1;
    } else if (region === 'us' && grant.countryCode === 'US') {
      score += 1;
    } else if (region === 'uk' && grant.countryCode === 'GB') {
      score += 1;
    } else if (region === 'asia' && ['JP', 'KR', 'TR'].includes(grant.countryCode)) {
      score += 1;
    } else {
      score += 0.3;
    }

    const percentage = Math.round((score / maxScore) * 100);
    return { grant, percentage };
  });

  // Eng yuqori foizli grantlarni tartiblash (kamida 70% moslik)
  scoredGrants.sort((a, b) => b.percentage - a.percentage);
  const topMatches = scoredGrants.filter(item => item.percentage >= 65).slice(0, 4);

  let html = '';

  if (topMatches.length === 0) {
    html = `
      <div class="empty-matches">
        <p>${translations[currentLang].noResults}</p>
      </div>
    `;
  } else {
    topMatches.forEach(({ grant, percentage }) => {
      let matchColor = '#10b981'; // yashil
      if (percentage < 80) matchColor = '#3b82f6'; // ko'k
      if (percentage < 70) matchColor = '#f59e0b'; // to'q sariq

      html += `
        <div class="matcher-result-item animate-fade-in">
          <div class="match-badge" style="background-color: ${matchColor}15; color: ${matchColor}; border: 1px solid ${matchColor}40;">
            <span class="match-score font-bold">${percentage}%</span>
            <small>${translations[currentLang].quizMatchPercent}</small>
          </div>
          <div class="match-info">
            <h4 class="match-title">${grant.flag} ${grant.title[currentLang]}</h4>
            <p class="match-desc">${grant.countryName[currentLang]} • ${grant.degreeLabels[currentLang]} • ${grant.funding === 'full' ? translations[currentLang].grantFundingFull : translations[currentLang].grantFundingPartial}</p>
          </div>
          <div class="match-actions">
            <button class="btn btn-sm btn-outline" onclick="openGrantModal('${grant.id}')">
              ${translations[currentLang].viewDetails}
            </button>
            <button class="btn btn-sm btn-primary" onclick="togglePlannerItem('${grant.id}')">
              ${translations[currentLang].addToPlanner}
            </button>
          </div>
        </div>
      `;
    });
  }

  resultsContainer.innerHTML = html;
  resultsCard.style.display = 'block';

  // Chiroyli scroll
  resultsCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

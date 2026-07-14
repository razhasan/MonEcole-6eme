// ============================================ //
// SCRIPT PRINCIPAL - Logique et Fonctions //
// ============================================ //

// ============================================ //
// 1. CHARGER LES DONNÉES DES MATIÈRES //
// ============================================ //

// Les données sont chargées depuis les fichiers séparés :
// - data-islam.js
// - data-maths.js (à créer)
// - data-francais.js (à créer)
// - data-sciences.js (à créer)
// - data-histoire.js (à créer)
// - data-anglais.js (à créer)

// On vérifie que les données sont chargées
function initSubjects() {
    const subjects = {};
    
    if (typeof DATA_ISLAM !== 'undefined') subjects.islam = DATA_ISLAM;
    if (typeof DATA_MATHS !== 'undefined') subjects.maths = DATA_MATHS;
    if (typeof DATA_FRANCAIS !== 'undefined') subjects.francais = DATA_FRANCAIS;
    if (typeof DATA_SCIENCES !== 'undefined') subjects.sciences = DATA_SCIENCES;
    if (typeof DATA_HISTOIRE !== 'undefined') subjects.histoire = DATA_HISTOIRE;
    if (typeof DATA_ANGLAIS !== 'undefined') subjects.anglais = DATA_ANGLAIS;
    
    window.SUBJECTS = subjects;
    return subjects;
}

// ============================================ //
// 2. DATE MANAGEMENT //
// ============================================ //

const START_DATE = new Date('2026-07-14');
const TODAY = new Date();
const TOTAL_DAYS = 7;

function normalizeDate(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function getCurrentDay() {
    const start = normalizeDate(START_DATE);
    const today = normalizeDate(TODAY);
    const diffTime = today - start;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 1;
    if (diffDays >= TOTAL_DAYS) return TOTAL_DAYS;
    return diffDays + 1;
}

function getTodayDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return TODAY.toLocaleDateString('fr-FR', options);
}

function getDateForDay(dayNumber) {
    const date = new Date(START_DATE);
    date.setDate(date.getDate() + dayNumber - 1);
    return date;
}

function formatDate(date) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
}

// ============================================ //
// 3. PROGRESS MANAGEMENT //
// ============================================ //

function getProgress() {
    try {
        const data = localStorage.getItem('monEcoleProgress');
        return data ? JSON.parse(data) : {};
    } catch {
        return {};
    }
}

function saveProgress(progress) {
    localStorage.setItem('monEcoleProgress', JSON.stringify(progress));
}

function getSubjectProgress(subjectKey) {
    const progress = getProgress();
    return progress[subjectKey] || { completedDays: [], scores: {}, weeklyPassed: false };
}

function updateSubjectProgress(subjectKey, dayNumber, score) {
    const progress = getProgress();
    if (!progress[subjectKey]) {
        progress[subjectKey] = { completedDays: [], scores: {}, weeklyPassed: false };
    }
    
    if (!progress[subjectKey].completedDays.includes(dayNumber)) {
        progress[subjectKey].completedDays.push(dayNumber);
    }
    progress[subjectKey].scores[dayNumber] = score;
    
    saveProgress(progress);
    return progress[subjectKey];
}

function isDayCompleted(subjectKey, dayNumber) {
    const progress = getSubjectProgress(subjectKey);
    return progress.completedDays.includes(dayNumber);
}

function isDayUnlocked(subjectKey, dayNumber) {
    const currentDay = getCurrentDay();
    return dayNumber <= currentDay;
}

function getCompletedDaysCount(subjectKey) {
    const progress = getSubjectProgress(subjectKey);
    return progress.completedDays.length;
}

function getAverageScore(subjectKey) {
    const progress = getSubjectProgress(subjectKey);
    const scores = Object.values(progress.scores);
    if (scores.length === 0) return 0;
    const sum = scores.reduce((a, b) => a + b, 0);
    return Math.round(sum / scores.length);
}

// ============================================ //
// 4. DASHBOARD UPDATE //
// ============================================ //

function updateDashboard() {
    // Initialiser les données si pas encore fait
    if (!window.SUBJECTS) initSubjects();
    const subjects = window.SUBJECTS || {};
    
    // Update date
    const dateEl = document.getElementById('date-text');
    if (dateEl) dateEl.textContent = getTodayDate();
    
    const subjectKeys = Object.keys(subjects);
    if (subjectKeys.length === 0) return;
    
    let totalCompleted = 0;
    let totalPossible = subjectKeys.length * TOTAL_DAYS;
    let totalQuizzesPassed = 0;
    let totalScores = [];
    let subjectsCompleted = 0;
    
    subjectKeys.forEach(key => {
        const progress = getSubjectProgress(key);
        const completed = progress.completedDays.length;
        const percent = Math.round((completed / TOTAL_DAYS) * 100);
        
        totalCompleted += completed;
        
        const gauge = document.getElementById(`gauge-${key}`);
        const percentLabel = document.getElementById(`percent-${key}`);
        const statusLabel = document.getElementById(`status-${key}`);
        
        if (gauge) gauge.style.width = `${percent}%`;
        if (percentLabel) percentLabel.textContent = `${percent}%`;
        
        if (statusLabel) {
            if (percent === 100) {
                statusLabel.textContent = '✅ Terminé';
                statusLabel.className = 'subject-status completed';
                subjectsCompleted++;
            } else if (percent > 0) {
                statusLabel.textContent = '🔵 En cours';
                statusLabel.className = 'subject-status in-progress';
            } else {
                statusLabel.textContent = '🔒 Non commencé';
                statusLabel.className = 'subject-status locked';
            }
        }
        
        Object.values(progress.scores).forEach(score => {
            if (score >= 65) totalQuizzesPassed++;
            totalScores.push(score);
        });
    });
    
    const globalPercent = totalPossible > 0 ? Math.round((totalCompleted / totalPossible) * 100) : 0;
    const globalEl = document.getElementById('globalProgress');
    if (globalEl) globalEl.textContent = `${globalPercent}%`;
    
    const daysEl = document.getElementById('totalDays');
    if (daysEl) daysEl.textContent = totalCompleted;
    
    const quizzesEl = document.getElementById('passedQuizzes');
    if (quizzesEl) quizzesEl.textContent = totalQuizzesPassed;
    
    const subjectsEl = document.getElementById('subjectsCompleted');
    if (subjectsEl) subjectsEl.textContent = subjectsCompleted;
    
    const avgScore = totalScores.length > 0 
        ? Math.round(totalScores.reduce((a, b) => a + b, 0) / totalScores.length)
        : 0;
    const avgEl = document.getElementById('avgScore');
    if (avgEl) avgEl.textContent = `${avgScore}%`;
    
    drawPieChart(globalPercent);
    updateMotivation();
}

// ============================================ //
// 5. PIE CHART //
// ============================================ //

function drawPieChart(percentage) {
    const canvas = document.getElementById('progressChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 10;
    
    ctx.clearRect(0, 0, width, height);
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#ecf0f1';
    ctx.lineWidth = 20;
    ctx.stroke();
    
    const endAngle = (percentage / 100) * 2 * Math.PI - Math.PI / 2;
    const startAngle = -Math.PI / 2;
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.strokeStyle = percentage >= 65 ? '#6BCB77' : '#FF6B6B';
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';
    ctx.stroke();
    
    ctx.fillStyle = '#2d3436';
    ctx.font = 'bold 36px Quicksand, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${percentage}%`, centerX, centerY - 5);
    
    ctx.fillStyle = '#636e72';
    ctx.font = '14px Quicksand, sans-serif';
    ctx.fillText('Progrès', centerX, centerY + 25);
}

// ============================================ //
// 6. MOTIVATION //
// ============================================ //

const MOTIVATIONS = [
    { message: '"Chaque jour est une nouvelle opportunité d\'apprendre !"', emoji: '🌟' },
    { message: '"Les petits pas mènent à de grandes réussites."', emoji: '👣' },
    { message: '"Sois curieuse, le monde est rempli de merveilles !"', emoji: '🌍' },
    { message: '"Apprendre, c\'est grandir chaque jour un peu plus."', emoji: '🌱' },
    { message: '"Les étoiles brillent plus fort après l\'effort."', emoji: '⭐' },
    { message: '"La persévérance est la clé du succès."', emoji: '🔑' },
    { message: '"Tu es capable de grandes choses !"', emoji: '💪' }
];

function updateMotivation() {
    const day = getCurrentDay();
    const index = (day - 1) % MOTIVATIONS.length;
    const motivation = MOTIVATIONS[index];
    
    const messageEl = document.getElementById('daily-message');
    if (messageEl) {
        messageEl.textContent = motivation.message;
        messageEl.textContent = `${motivation.emoji} ${motivation.message}`;
    }
}

// ============================================ //
// 7. NAVIGATION //
// ============================================ //

function goToSubject(subjectKey) {
    const subjectNames = {
        islam: 'islam',
        maths: 'maths',
        francais: 'francais',
        sciences: 'sciences',
        histoire: 'histoire',
        anglais: 'anglais'
    };
    
    if (subjectNames[subjectKey]) {
        window.location.href = `pages/${subjectNames[subjectKey]}.html`;
    } else {
        alert('📚 Page en construction !');
    }
}

// ============================================ //
// 8. INITIALIZATION //
// ============================================ //

document.addEventListener('DOMContentLoaded', function() {
    initSubjects();
    updateDashboard();
    setInterval(updateDashboard, 60000);
});

// ============================================ //
// 9. EXPOSE TO GLOBAL SCOPE //
// ============================================ //

window.initSubjects = initSubjects;
window.getCurrentDay = getCurrentDay;
window.getTodayDate = getTodayDate;
window.getDateForDay = getDateForDay;
window.formatDate = formatDate;
window.getProgress = getProgress;
window.saveProgress = saveProgress;
window.getSubjectProgress = getSubjectProgress;
window.updateSubjectProgress = updateSubjectProgress;
window.isDayCompleted = isDayCompleted;
window.isDayUnlocked = isDayUnlocked;
window.getCompletedDaysCount = getCompletedDaysCount;
window.getAverageScore = getAverageScore;
window.updateDashboard = updateDashboard;
window.goToSubject = goToSubject;

console.log('🏫 Mon École - 6ème chargé avec succès !');
console.log(`📅 Aujourd'hui: ${getTodayDate()}`);
console.log(`📚 Jour actuel: ${getCurrentDay()}/${TOTAL_DAYS}`);
console.log('💾 Progrès sauvegardé dans localStorage');

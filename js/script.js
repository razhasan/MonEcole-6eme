// ============================================ //
// FONCTIONS UTILITAIRES //
// ============================================ //

const START_DATE = new Date('2026-07-14');
const TODAY = new Date();
const TOTAL_DAYS = 7;

function getCurrentDay() {
    const start = new Date(START_DATE.getFullYear(), START_DATE.getMonth(), START_DATE.getDate());
    const today = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate());
    const diffDays = Math.floor((today - start) / (1000 * 60 * 60 * 24));
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
// PROGRESS (localStorage) //
// ============================================ //

function getProgress() {
    try {
        const data = localStorage.getItem('monEcoleProgress');
        return data ? JSON.parse(data) : {};
    } catch { return {}; }
}

function saveProgress(progress) {
    localStorage.setItem('monEcoleProgress', JSON.stringify(progress));
}

function getSubjectProgress(subjectKey) {
    const progress = getProgress();
    return progress[subjectKey] || { completedDays: [], scores: {} };
}

function updateSubjectProgress(subjectKey, dayNumber, score) {
    const progress = getProgress();
    if (!progress[subjectKey]) progress[subjectKey] = { completedDays: [], scores: {} };
    if (!progress[subjectKey].completedDays.includes(dayNumber)) {
        progress[subjectKey].completedDays.push(dayNumber);
    }
    progress[subjectKey].scores[dayNumber] = score;
    saveProgress(progress);
    updateDashboard();
    return progress[subjectKey];
}

function isDayCompleted(subjectKey, dayNumber) {
    return getSubjectProgress(subjectKey).completedDays.includes(dayNumber);
}

function isDayUnlocked(dayNumber) {
    return dayNumber <= getCurrentDay();
}

// ============================================ //
// DASHBOARD //
// ============================================ //

function updateDashboard() {
    document.getElementById('date-text').textContent = getTodayDate();

    const subjects = ['islam', 'maths', 'francais', 'sciences', 'histoire', 'anglais'];
    let totalCompleted = 0;
    let totalQuizzesPassed = 0;
    let totalScores = [];
    let subjectsCompleted = 0;

    subjects.forEach(key => {
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

    const totalPossible = subjects.length * TOTAL_DAYS;
    const globalPercent = Math.round((totalCompleted / totalPossible) * 100);
    document.getElementById('globalProgress').textContent = `${globalPercent}%`;
    document.getElementById('totalDays').textContent = totalCompleted;
    document.getElementById('passedQuizzes').textContent = totalQuizzesPassed;

    const avgScore = totalScores.length > 0
        ? Math.round(totalScores.reduce((a, b) => a + b, 0) / totalScores.length)
        : 0;
    document.getElementById('avgScore').textContent = `${avgScore}%`;
    document.getElementById('subjectsCompleted').textContent = subjectsCompleted;

    drawPieChart(globalPercent);
    updateMotivation();
}

// ============================================ //
// PIE CHART //
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
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, endAngle);
    ctx.strokeStyle = percentage >= 65 ? '#6BCB77' : '#FF6B6B';
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';
    ctx.stroke();

    ctx.fillStyle = '#2d3436';
    ctx.font = 'bold 36px Quicksand, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${percentage}

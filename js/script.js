// ============================================ //
// SCRIPT COMPLET - TOUTES LES DONNÉES INCLUSES //
// ============================================ //

// ============================================ //
// 1. DONNÉES DE L'ISLAM (7 JOURS COMPLETS) //
// ============================================ //

const DATA_ISLAM = {
    name: 'Éducation Islamique',
    icon: '🕌',
    emoji: '🕌',
    color: '#6C63FF',
    startDate: '2026-07-14',
    days: {
        1: {
            title: 'Jour 1: Les 5 Piliers de l\'Islam',
            content: `
                <div class="lesson-content">
                    <h3>📖 Les 5 Piliers de l'Islam</h3>
                    <p>L'Islam repose sur 5 piliers essentiels :</p>
                    <ul>
                        <li><strong>1. La Shahada</strong> - La profession de foi</li>
                        <li><strong>2. La Salat</strong> - Les 5 prières quotidiennes</li>
                        <li><strong>3. La Zakat</strong> - L'aumône obligatoire</li>
                        <li><strong>4. Le Sawm</strong> - Le jeûne du Ramadan</li>
                        <li><strong>5. Le Hajj</strong> - Le pèlerinage à La Mecque</li>
                    </ul>
                    <div class="lesson-tip">💡 Les piliers sont comme les fondations d'une maison !</div>
                </div>
            `,
            quiz: {
                questions: [
                    { question: "Combien y a-t-il de piliers en Islam ?", options: ["3", "4", "5", "6"], correct: 2 },
                    { question: "Que signifie la Shahada ?", options: ["La prière", "La profession de foi", "Le jeûne", "Le pèlerinage"], correct: 1 },
                    { question: "Combien de prières quotidiennes y a-t-il ?", options: ["3", "4", "5", "6"], correct: 2 },
                    { question: "Qu'est-ce que la Zakat ?", options: ["Le jeûne", "L'aumône obligatoire", "Le pèlerinage", "La prière"], correct: 1 },
                    { question: "Pendant quel mois jeûne-t-on ?", options: ["Muharram", "Ramadan", "Dhu al-Hijjah", "Rabi' al-Awwal"], correct: 1 }
                ]
            }
        },
        2: {
            title: 'Jour 2: La Shahada',
            content: `
                <div class="lesson-content">
                    <h3>📖 La Shahada</h3>
                    <p>La Shahada est la porte d'entrée de l'Islam.</p>
                    <div class="arabic-text">
                        <p>أشهد أن لا إله إلا الله وأشهد أن محمداً رسول الله</p>
                        <p><em>"Ash-hadu an la ilaha illa Allah, wa ash-hadu anna Muhammadan rasulu Allah"</em></p>
                    </div>
                    <p><strong>Signification :</strong></p>
                    <ul>
                        <li>🔹 "La ilaha illa Allah" : Il n'y a de dieu qu'Allah</li>
                        <li>🔹 "Muhammadan rasulu Allah" : Muhammad est le messager d'Allah</li>
                    </ul>
                    <div class="lesson-tip">💡 Pour être musulman, il suffit de prononcer la Shahada avec sincérité !</div>
                </div>
            `,
            quiz: {
                questions: [
                    { question: "Que signifie 'La ilaha illa Allah' ?", options: ["Dieu est grand", "Il n'y a de dieu qu'Allah", "Muhammad est le messager", "Allah est le seul"], correct: 1 },
                    { question: "Qui est le dernier prophète de l'Islam ?", options: ["Ibrahim", "Musa", "Muhammad", "Isa"], correct: 2 },
                    { question: "Qu'est-ce que la Shahada ?", options: ["La prière", "La profession de foi", "Le jeûne", "Le pèlerinage"], correct: 1 },
                    { question: "La Shahada est-elle importante ?", options: ["Non", "Oui, c'est le premier pilier", "Seulement pour les adultes", "Pas vraiment"], correct: 1 },
                    { question: "Que signifie 'Muhammadan rasulu Allah' ?", options: ["Muhammad est aimé", "Muhammad est le messager", "Muhammad est le fils", "Muhammad est un prophète"], correct: 1 }
                ]
            }
        },
        3: {
            title: 'Jour 3: La Salat - La Prière',
            content: `
                <div class="lesson-content">
                    <h3>🕌 La Salat - Les 5 Prières</h3>
                    <p>La Salat est le deuxième pilier de l'Islam.</p>
                    <ul>
                        <li>🌅 <strong>Fajr</strong> - Avant le lever du soleil</li>
                        <li>☀️ <strong>Dhuhr</strong> - Après le midi</li>
                        <li>🌤️ <strong>Asr</strong> - L'après-midi</li>
                        <li>🌅 <strong>Maghrib</strong> - Après le coucher du soleil</li>
                        <li>🌙 <strong>Isha</strong> - La nuit</li>
                    </ul>
                    <div class="lesson-tip">💡 La prière est un moment de connexion avec Allah !</div>
                </div>
            `,
            quiz: {
                questions: [
                    { question: "Combien de prières quotidiennes ?", options: ["3", "4", "5", "7"], correct: 2 },
                    { question: "Quelle prière est faite avant le lever du soleil ?", options: ["Dhuhr", "Fajr", "Asr", "Maghrib"], correct: 1 },
                    { question: "La Salat est le combien de pilier ?", options: ["1er", "2ème", "3ème", "4ème"], correct: 1 },
                    { question: "Quelle prière est faite la nuit ?", options: ["Fajr", "Dhuhr", "Maghrib", "Isha"], correct: 3 },
                    { question: "Combien de rak'ahs a Maghrib ?", options: ["2", "3", "4", "5"], correct: 1 }
                ]
            }
        },
        4: {
            title: 'Jour 4: La Zakat',
            content: `
                <div class="lesson-content">
                    <h3>💰 La Zakat - L'Aumône</h3>
                    <p>La Zakat est le troisième pilier de l'Islam.</p>
                    <ul>
                        <li>🔹 On donne <strong>2.5%</strong> de son épargne</li>
                        <li>🔹 La Zakat purifie l'argent</li>
                        <li>🔹 Elle est donnée aux pauvres et dans le besoin</li>
                    </ul>
                    <div class="lesson-tip">💡 La Zakat enseigne le partage et la solidarité !</div>
                </div>
            `,
            quiz: {
                questions: [
                    { question: "Quel pourcentage donne-t-on en Zakat ?", options: ["1%", "2.5%", "5%", "10%"], correct: 1 },
                    { question: "La Zakat est le combien de pilier ?", options: ["1er", "2ème", "3ème", "4ème"], correct: 2 },
                    { question: "À qui donne-t-on la Zakat ?", options: ["Aux riches", "Aux pauvres", "Aux non-musulmans", "À personne"], correct: 1 },
                    { question: "Quelle est la fréquence de la Zakat ?", options: ["Chaque mois", "Chaque année", "Une fois dans la vie", "Chaque jour"], correct: 1 },
                    { question: "La Zakat purifie-t-elle l'argent ?", options: ["Oui", "Non", "Parfois", "Seulement pour les riches"], correct: 0 }
                ]
            }
        },
        5: {
            title: 'Jour 5: Le Sawm - Le Jeûne',
            content: `
                <div class="lesson-content">
                    <h3>🌙 Le Sawm - Le Jeûne du Ramadan</h3>
                    <p>Le Sawm est le quatrième pilier de l'Islam.</p>
                    <ul>
                        <li>🔹 On jeûne <strong>de l'aube au coucher du soleil</strong></li>
                        <li>🔹 On ne mange pas et on ne boit pas</li>
                        <li>🔹 Le Ramadan est le 9ème mois du calendrier islamique</li>
                    </ul>
                    <div class="lesson-tip">💡 Le jeûne enseigne la patience et la discipline !</div>
                </div>
            `,
            quiz: {
                questions: [
                    { question: "Pendant combien de temps jeûne-t-on ?", options: ["Du lever au coucher du soleil", "Du midi au soir", "24 heures", "Du matin au midi"], correct: 0 },
                    { question: "Le Ramadan est quel mois ?", options: ["7ème", "8ème", "9ème", "10ème"], correct: 2 },
                    { question: "Le Sawm est le combien de pilier ?", options: ["2ème", "3ème", "4ème", "5ème"], correct: 2 },
                    { question: "Qu'apprend-on par le jeûne ?", options: ["La patience", "La paresse", "La colère", "La tristesse"], correct: 0 },
                    { question: "Les enfants doivent-ils jeûner dès leur plus jeune âge ?", options: ["Oui, tout de suite", "Non, progressivement", "Non, jamais", "Seulement les garçons"], correct: 1 }
                ]
            }
        },
        6: {
            title: 'Jour 6: Le Hajj - Le Pèlerinage',
            content: `
                <div class="lesson-content">
                    <h3>🕋 Le Hajj - Le Pèlerinage</h3>
                    <p>Le Hajj est le cinquième pilier de l'Islam.</p>
                    <ul>
                        <li>🔹 Il a lieu pendant Dhu al-Hijjah</li>
                        <li>🔹 Les pèlerins portent un vêtement blanc (Ihram)</li>
                        <li>🔹 Ils font le tour de la Kaaba 7 fois</li>
                    </ul>
                    <div class="lesson-tip">💡 Le Hajj rassemble des millions de musulmans !</div>
                </div>
            `,
            quiz: {
                questions: [
                    { question: "Le Hajj est le combien de pilier ?", options: ["3ème", "4ème", "5ème", "6ème"], correct: 2 },
                    { question: "Où se trouve La Mecque ?", options: ["Arabie Saoudite", "Égypte", "Maroc", "Turquie"], correct: 0 },
                    { question: "Combien de fois les pèlerins font-ils le tour de la Kaaba ?", options: ["3", "5", "7", "10"], correct: 2 },
                    { question: "Quel vêtement portent les pèlerins ?", options: ["Coloré", "Blanc (Ihram)", "Costume", "Uniforme"], correct: 1 },
                    { question: "Le Hajj doit être fait combien de fois ?", options: ["Chaque année", "Au moins une fois", "Jamais", "10 fois"], correct: 1 }
                ]
            }
        },
        7: {
            title: 'Jour 7: Quiz Hebdomadaire',
            content: `
                <div class="lesson-content">
                    <h3>📚 Révision de la Semaine</h3>
                    <p>Félicitations ! Voici un résumé de ce que tu as appris :</p>
                    <ul>
                        <li>📖 <strong>Jour 1</strong> : Les 5 Piliers de l'Islam</li>
                        <li>📖 <strong>Jour 2</strong> : La Shahada</li>
                        <li>🕌 <strong>Jour 3</strong> : La Salat</li>
                        <li>💰 <strong>Jour 4</strong> : La Zakat</li>
                        <li>🌙 <strong>Jour 5</strong> : Le Sawm</li>
                        <li>🕋 <strong>Jour 6</strong> : Le Hajj</li>
                    </ul>
                    <div class="lesson-tip">🌟 20 questions t'attendent ! 65% pour réussir.</div>
                </div>
            `,
            quiz: {
                questions: [
                    { question: "Combien y a-t-il de piliers en Islam ?", options: ["3", "4", "5", "6"], correct: 2 },
                    { question: "Qu'est-ce que la Shahada ?", options: ["La prière", "La profession de foi", "Le jeûne", "Le pèlerinage"], correct: 1 },
                    { question: "Combien de prières quotidiennes ?", options: ["3", "4", "5", "6"], correct: 2 },
                    { question: "Quel pourcentage donne-t-on en Zakat ?", options: ["1%", "2.5%", "5%", "10%"], correct: 1 },
                    { question: "Pendant quel mois jeûne-t-on ?", options: ["Muharram", "Ramadan", "Dhu al-Hijjah", "Rabi' al-Awwal"], correct: 1 },
                    { question: "Où se trouve La Mecque ?", options: ["Arabie Saoudite", "Égypte", "Maroc", "Turquie"], correct: 0 },
                    { question: "Le Sawm est le combien de pilier ?", options: ["2ème", "3ème", "4ème", "5ème"], correct: 2 },
                    { question: "La Salat est le combien de pilier ?", options: ["1er", "2ème", "3ème", "4ème"], correct: 1 },
                    { question: "Quelle prière est faite avant le lever du soleil ?", options: ["Dhuhr", "Fajr", "Asr", "Maghrib"], correct: 1 },
                    { question: "Le Hajj est le combien de pilier ?", options: ["3ème", "4ème", "5ème", "6ème"], correct: 2 },
                    { question: "Qu'apprend-on par le jeûne ?", options: ["La patience", "La paresse", "La colère", "La tristesse"], correct: 0 },
                    { question: "À qui donne-t-on la Zakat ?", options: ["Aux riches", "Aux pauvres", "Aux non-musulmans", "À personne"], correct: 1 },
                    { question: "Que signifie 'La ilaha illa Allah' ?", options: ["Dieu est grand", "Il n'y a de dieu qu'Allah", "Muhammad est le messager", "Allah est le seul"], correct: 1 },
                    { question: "Quel vêtement portent les pèlerins ?", options: ["Coloré", "Blanc (Ihram)", "Costume", "Uniforme"], correct: 1 },
                    { question: "Le Ramadan est quel mois ?", options: ["7ème", "8ème", "9ème", "10ème"], correct: 2 },
                    { question: "Qui est le dernier prophète ?", options: ["Ibrahim", "Musa", "Muhammad", "Isa"], correct: 2 },
                    { question: "La Zakat est le combien de pilier ?", options: ["1er", "2ème", "3ème", "4ème"], correct: 2 },
                    { question: "Combien de rak'ahs a Maghrib ?", options: ["2", "3", "4", "5"], correct: 1 },
                    { question: "Que signifie 'Muhammadan rasulu Allah' ?", options: ["Muhammad est aimé", "Muhammad est le messager", "Muhammad est le fils", "Muhammad est un prophète"], correct: 1 },
                    { question: "Les 5 piliers sont-ils importants ?", options: ["Oui", "Non", "Parfois", "Seulement pour les hommes"], correct: 0 }
                ]
            }
        }
    },
    weeklyQuiz: {
        passingScore: 65,
        questions: []
    }
};

// ============================================ //
// 2. RASSEMBLER TOUTES LES MATIÈRES //
// ============================================ //

const SUBJECTS = {
    islam: DATA_ISLAM
    // Ajouter les autres matières ici plus tard
};

// ============================================ //
// 3. DATE MANAGEMENT //
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
// 4. PROGRESS MANAGEMENT //
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
// 5. DASHBOARD UPDATE //
// ============================================ //

function updateDashboard() {
    const dateEl = document.getElementById('date-text');
    if (dateEl) dateEl.textContent = getTodayDate();
    
    const subjectKeys = Object.keys(SUBJECTS);
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
// 6. PIE CHART //
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
// 7. MOTIVATION //
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
        messageEl.textContent = `${motivation.emoji} ${motivation.message}`;
    }
}

// ============================================ //
// 8. NAVIGATION //
// ============================================ //

function goToSubject(subjectKey) {
    const subjectNames = {
        islam: 'islam'
    };
    
    if (subjectNames[subjectKey]) {
        window.location.href = `pages/${subjectNames[subjectKey]}.html`;
    } else {
        alert('📚 Page en construction !');
    }
}

// ============================================ //
// 9. INITIALIZATION //
// ============================================ //

document.addEventListener('DOMContentLoaded', function() {
    updateDashboard();
    setInterval(updateDashboard, 60000);
});

// ============================================ //
// 10. EXPOSE TO GLOBAL SCOPE //
// ============================================ //

window.SUBJECTS = SUBJECTS;
window.DATA_ISLAM = DATA_ISLAM;
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

// ============================================ //
// 1. SUBJECT DATA (All 6 Subjects, 7 Days Each) //
// ============================================ //

const SUBJECTS = {
    islam: {
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
                        <p>L'Islam repose sur 5 piliers essentiels qui guident la vie de chaque musulman :</p>
                        <ul>
                            <li><strong>1. La Shahada</strong> - La profession de foi : "Il n'y a de dieu qu'Allah et Muhammad est Son messager"</li>
                            <li><strong>2. La Salat</strong> - Les 5 prières quotidiennes</li>
                            <li><strong>3. La Zakat</strong> - L'aumône obligatoire (2.5% de l'épargne)</li>
                            <li><strong>4. Le Sawm</strong> - Le jeûne du mois de Ramadan</li>
                            <li><strong>5. Le Hajj</strong> - Le pèlerinage à La Mecque (au moins une fois dans la vie)</li>
                        </ul>
                        <div class="lesson-tip">💡 Astuce : Les piliers sont comme les fondations d'une maison - ils soutiennent toute la structure de l'Islam !</div>
                    </div>
                `,
                quiz: {
                    questions: [
                        {
                            question: "Combien y a-t-il de piliers en Islam ?",
                            options: ["3", "4", "5", "6"],
                            correct: 2
                        },
                        {
                            question: "Que signifie la Shahada ?",
                            options: [
                                "La prière",
                                "La profession de foi",
                                "Le jeûne",
                                "Le pèlerinage"
                            ],
                            correct: 1
                        },
                        {
                            question: "Combien de prières quotidiennes y a-t-il en Islam ?",
                            options: ["3", "4", "5", "6"],
                            correct: 2
                        },
                        {
                            question: "Qu'est-ce que la Zakat ?",
                            options: [
                                "Le jeûne",
                                "L'aumône obligatoire",
                                "Le pèlerinage",
                                "La prière"
                            ],
                            correct: 1
                        },
                        {
                            question: "Pendant quel mois musulman pratique-t-on le jeûne ?",
                            options: [
                                "Muharram",
                                "Ramadan",
                                "Dhu al-Hijjah",
                                "Rabi' al-Awwal"
                            ],
                            correct: 1
                        }
                    ]
                }
            },
            2: {
                title: 'Jour 2: La Shahada - La Profession de Foi',
                content: `
                    <div class="lesson-content">
                        <h3>📖 La Shahada</h3>
                        <p>La Shahada est la porte d'entrée de l'Islam. C'est la déclaration qui fait devenir musulman.</p>
                        <div class="arabic-text">
                            <p>أشهد أن لا إله إلا الله وأشهد أن محمداً رسول الله</p>
                            <p><em>"Ash-hadu an la ilaha illa Allah, wa ash-hadu anna Muhammadan rasulu Allah"</em></p>
                        </div>
                        <p><strong>Signification :</strong></p>
                        <ul>
                            <li>🔹 <strong>"La ilaha illa Allah"</strong> : Il n'y a de dieu qu'Allah</li>
                            <li>🔹 <strong>"Muhammadan rasulu Allah"</strong> : Muhammad est le messager d'Allah</li>
                        </ul>
                        <div class="lesson-tip">💡 Pour être musulman, il suffit de prononcer la Shahada avec sincérité et conviction !</div>
                    </div>
                `,
                quiz: {
                    questions: [
                        {
                            question: "Que signifie 'La ilaha illa Allah' ?",
                            options: [
                                "Dieu est grand",
                                "Il n'y a de dieu qu'Allah",
                                "Muhammad est le messager",
                                "Allah est le seul"
                            ],
                            correct: 1
                        },
                        {
                            question: "Qui est le dernier prophète de l'Islam ?",
                            options: [
                                "Ibrahim (Abraham)",
                                "Musa (Moïse)",
                                "Muhammad",
                                "Isa (Jésus)"
                            ],
                            correct: 2
                        },
                        {
                            question: "Qu'est-ce que la Shahada ?",
                            options: [
                                "La prière",
                                "La profession de foi",
                                "Le jeûne",
                                "Le pèlerinage"
                            ],
                            correct: 1
                        },
                        {
                            question: "La Shahada est-elle importante en Islam ?",
                            options: [
                                "Non, c'est facultatif",
                                "Oui, c'est le premier pilier",
                                "Seulement pour les adultes",
                                "Pas vraiment"
                            ],
                            correct: 1
                        },
                        {
                            question: "Que signifie 'Muhammadan rasulu Allah' ?",
                            options: [
                                "Muhammad est aimé d'Allah",
                                "Muhammad est le messager d'Allah",
                                "Muhammad est le fils d'Allah",
                                "Muhammad est un prophète"
                            ],
                            correct: 1
                        }
                    ]
                }
            },
            // Days 3-7 will be added...
        },
        weeklyQuiz: {
            passingScore: 65,
            questions: [
                // 20 questions covering all 7 days
            ]
        }
    },
    maths: {
        name: 'Mathématiques',
        icon: '📐',
        emoji: '📐',
        color: '#FF6B6B',
        startDate: '2026-07-14',
        days: {
            1: {
                title: 'Jour 1: Les Nombres Entiers',
                content: `
                    <div class="lesson-content">
                        <h3>🔢 Les Nombres Entiers</h3>
                        <p>Les nombres entiers sont les nombres que nous utilisons tous les jours !</p>
                        <ul>
                            <li>🔹 <strong>Les nombres naturels</strong> : 0, 1, 2, 3, 4, ...</li>
                            <li>🔹 <strong>Les nombres entiers relatifs</strong> : ... -3, -2, -1, 0, 1, 2, 3, ...</li>
                            <li>🔹 <strong>Les nombres pairs</strong> : 0, 2, 4, 6, 8, ...</li>
                            <li>🔹 <strong>Les nombres impairs</strong> : 1, 3, 5, 7, 9, ...</li>
                        </ul>
                        <div class="lesson-tip">💡 Astuce : Les nombres pairs se terminent par 0, 2, 4, 6, ou 8 !</div>
                    </div>
                `,
                quiz: {
                    questions: [
                        {
                            question: "Quel est le plus petit nombre entier naturel ?",
                            options: ["-1", "0", "1", "2"],
                            correct: 1
                        },
                        {
                            question: "Lequel de ces nombres est pair ?",
                            options: ["7", "11", "14", "19"],
                            correct: 2
                        },
                        {
                            question: "Lequel de ces nombres est impair ?",
                            options: ["6", "8", "10", "13"],
                            correct: 3
                        },
                        {
                            question: "Combien y a-t-il de nombres pairs entre 1 et 10 ?",
                            options: ["4", "5", "6", "7"],
                            correct: 1
                        },
                        {
                            question: "Quel est le successeur de 99 ?",
                            options: ["98", "100", "101", "99.5"],
                            correct: 1
                        }
                    ]
                }
            },
            // Days 2-7 will be added...
        },
        weeklyQuiz: {
            passingScore: 65,
            questions: []
        }
    },
    francais: {
        name: 'Français',
        icon: '📖',
        emoji: '📖',
        color: '#4CAF50',
        startDate: '2026-07-14',
        days: {
            1: {
                title: 'Jour 1: Les Parties du Discours',
                content: `
                    <div class="lesson-content">
                        <h3>📚 Les Parties du Discours</h3>
                        <p>En français, les mots sont classés en différentes catégories :</p>
                        <ul>
                            <li>🔹 <strong>Le nom</strong> : désigne une personne, un lieu, une chose (ex: fille, école, livre)</li>
                            <li>🔹 <strong>Le verbe</strong> : exprime une action ou un état (ex: manger, être, dormir)</li>
                            <li>🔹 <strong>L'adjectif</strong> : qualifie un nom (ex: grand, belle, intelligent)</li>
                            <li>🔹 <strong>Le déterminant</strong> : précède le nom (ex: le, une, ma)</li>
                        </ul>
                        <div class="lesson-tip">💡 Astuce : Pour trouver le verbe, pose-toi la question "Qu'est-ce qu'on fait ?"</div>
                    </div>
                `,
                quiz: {
                    questions: [
                        {
                            question: "Quel mot est un nom ?",
                            options: ["manger", "jolie", "maison", "grand"],
                            correct: 2
                        },
                        {
                            question: "Quel mot est un verbe ?",
                            options: ["chat", "dormir", "heureuse", "petit"],
                            correct: 1
                        },
                        {
                            question: "Quel mot est un adjectif ?",
                            options: ["belle", "manger", "école", "ma"],
                            correct: 0
                        },
                        {
                            question: "Quel mot est un déterminant ?",
                            options: ["chat", "un", "grand", "mange"],
                            correct: 1
                        },
                        {
                            question: "Dans 'la jolie fleur', quel mot est l'adjectif ?",
                            options: ["la", "jolie", "fleur", "aucun"],
                            correct: 1
                        }
                    ]
                }
            },
            // Days 2-7 will be added...
        },
        weeklyQuiz: {
            passingScore: 65,
            questions: []
        }
    },
    sciences: {
        name: 'Sciences',
        icon: '🔬',
        emoji: '🔬',
        color: '#00B894',
        startDate: '2026-07-14',
        days: {
            1: {
                title: 'Jour 1: Le Corps Humain',
                content: `
                    <div class="lesson-content">
                        <h3>🧬 Le Corps Humain</h3>
                        <p>Notre corps est composé de plusieurs systèmes qui travaillent ensemble :</p>
                        <ul>
                            <li>🔹 <strong>Le système squelettique</strong> : les os (206 os dans le corps humain)</li>
                            <li>🔹 <strong>Le système musculaire</strong> : les muscles (plus de 600 muscles)</li>
                            <li>🔹 <strong>Le système digestif</strong> : transforme les aliments en énergie</li>
                            <li>🔹 <strong>Le système respiratoire</strong> : apporte l'oxygène au corps</li>
                        </ul>
                        <div class="lesson-tip">💡 Le cœur bat environ 100 000 fois par jour !</div>
                    </div>
                `,
                quiz: {
                    questions: [
                        {
                            question: "Combien d'os y a-t-il dans le corps humain adulte ?",
                            options: ["106", "206", "306", "406"],
                            correct: 1
                        },
                        {
                            question: "Quel système transforme les aliments en énergie ?",
                            options: [
                                "Système respiratoire",
                                "Système digestif",
                                "Système squelettique",
                                "Système musculaire"
                            ],
                            correct: 1
                        },
                        {
                            question: "Combien de muscles y a-t-il dans le corps humain ?",
                            options: ["Plus de 100", "Plus de 300", "Plus de 600", "Plus de 1000"],
                            correct: 2
                        },
                        {
                            question: "À quoi sert le système respiratoire ?",
                            options: [
                                "À digérer les aliments",
                                "À apporter l'oxygène",
                                "À bouger le corps",
                                "À protéger les organes"
                            ],
                            correct: 1
                        },
                        {
                            question: "Combien de fois le cœur bat-il par jour environ ?",
                            options: ["10 000 fois", "50 000 fois", "100 000 fois", "1 000 000 fois"],
                            correct: 2
                        }
                    ]
                }
            },
            // Days 2-7 will be added...
        },
        weeklyQuiz: {
            passingScore: 65,
            questions: []
        }
    },
    histoire: {
        name: 'Histoire-Géographie',
        icon: '🌍',
        emoji: '🌍',
        color: '#FDCB6E',
        startDate: '2026-07-14',
        days: {
            1: {
                title: 'Jour 1: La Préhistoire',
                content: `
                    <div class="lesson-content">
                        <h3>🦴 La Préhistoire</h3>
                        <p>La Préhistoire est la période avant l'invention de l'écriture.</p>
                        <ul>
                            <li>🔹 <strong>Le Paléolithique</strong> : les premiers hommes (chasseurs-cueilleurs)</li>
                            <li>🔹 <strong>Le Néolithique</strong> : naissance de l'agriculture et de l'élevage</li>
                            <li>🔹 <strong>Les Hommes préhistoriques</strong> : Homo habilis, Homo erectus, Homo sapiens</li>
                            <li>🔹 <strong>L'art préhistorique</strong> : peintures rupestres (grottes de Lascaux)</li>
                        </ul>
                        <div class="lesson-tip">💡 Les peintures de Lascaux ont plus de 17 000 ans !</div>
                    </div>
                `,
                quiz: {
                    questions: [
                        {
                            question: "Que signifie 'Préhistoire' ?",
                            options: [
                                "Avant l'écriture",
                                "Après l'écriture",
                                "Pendant l'écriture",
                                "Avec l'écriture"
                            ],
                            correct: 0
                        },
                        {
                            question: "Quelle est la principale activité du Paléolithique ?",
                            options: [
                                "L'agriculture",
                                "La chasse et la cueillette",
                                "L'élevage",
                                "L'écriture"
                            ],
                            correct: 1
                        },
                        {
                            question: "Qu'est-ce qui caractérise le Néolithique ?",
                            options: [
                                "La chasse",
                                "L'agriculture et l'élevage",
                                "Les peintures",
                                "Les outils en pierre"
                            ],
                            correct: 1
                        },
                        {
                            question: "Où trouve-t-on des peintures rupestres célèbres en France ?",
                            options: [
                                "Lascaux",
                                "Paris",
                                "Marseille",
                                "Lyon"
                            ],
                            correct: 0
                        },
                        {
                            question: "Qui est l'Homo sapiens ?",
                            options: [
                                "Le premier homme",
                                "L'homme moderne",
                                "Un dinosaure",
                                "Un singe"
                            ],
                            correct: 1
                        }
                    ]
                }
            },
            // Days 2-7 will be added...
        },
        weeklyQuiz: {
            passingScore: 65,
            questions: []
        }
    },
    anglais: {
        name: 'Anglais',
        icon: '💬',
        emoji: '💬',
        color: '#E17055',
        startDate: '2026-07-14',
        days: {
            1: {
                title: 'Day 1: Greetings & Introductions',
                content: `
                    <div class="lesson-content">
                        <h3>👋 Greetings in English</h3>
                        <p>Learn how to greet people in English !</p>
                        <ul>
                            <li>🔹 <strong>Hello !</strong> / <strong>Hi !</strong> - Bonjour !</li>
                            <li>🔹 <strong>Good morning !</strong> - Bonjour (le matin)</li>
                            <li>🔹 <strong>Good afternoon !</strong> - Bonjour (l'après-midi)</li>
                            <li>🔹 <strong>Good evening !</strong> - Bonsoir</li>
                            <li>🔹 <strong>Good night !</strong> - Bonne nuit</li>
                            <li>🔹 <strong>How are you ?</strong> - Comment ça va ?</li>
                            <li>🔹 <strong>I'm fine, thank you !</strong> - Je vais bien, merci !</li>
                        </ul>
                        <div class="lesson-tip">💡 En anglais, on dit "Good morning" jusqu'à midi !</div>
                    </div>
                `,
                quiz: {
                    questions: [
                        {
                            question: "Que signifie 'Good morning' ?",
                            options: [
                                "Bonjour (le matin)",
                                "Bonjour (l'après-midi)",
                                "Bonsoir",
                                "Bonne nuit"
                            ],
                            correct: 0
                        },
                        {
                            question: "Comment dit-on 'Bonjour' en anglais ?",
                            options: ["Hello", "Goodbye", "Thank you", "Please"],
                            correct: 0
                        },
                        {
                            question: "Que signifie 'How are you ?'",
                            options: [
                                "Comment ça va ?",
                                "Où vas-tu ?",
                                "Qui es-tu ?",
                                "Quand viens-tu ?"
                            ],
                            correct: 0
                        },
                        {
                            question: "Comment répondre à 'How are you ?' ?",
                            options: [
                                "Goodbye",
                                "I'm fine, thank you",
                                "Thank you",
                                "Please"
                            ],
                            correct: 1
                        },
                        {
                            question: "Que signifie 'Good night' ?",
                            options: [
                                "Bonjour",
                                "Bonsoir",
                                "Bonne nuit",
                                "Bonne journée"
                            ],
                            correct: 2
                        }
                    ]
                }
            },
            // Days 2-7 will be added...
        },
        weeklyQuiz: {
            passingScore: 65,
            questions: []
        }
    }
};

// ============================================ //
// 2. DATE MANAGEMENT //
// ============================================ //

const START_DATE = new Date('2026-07-14');
const TODAY = new Date();
const TOTAL_DAYS = 7;

// Normalize date (remove time)
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
// 3. PROGRESS MANAGEMENT (localStorage) //
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
    // Update date
    document.getElementById('date-text').textContent = getTodayDate();
    
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
        
        // Update gauge
        const gauge = document.getElementById(`gauge-${key}`);
        const percentLabel = document.getElementById(`percent-${key}`);
        const statusLabel = document.getElementById(`status-${key}`);
        
        if (gauge) gauge.style.width = `${percent}%`;
        if (percentLabel) percentLabel.textContent = `${percent}%`;
        
        // Update status
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
        
        // Count passed quizzes (score >= 65%)
        Object.values(progress.scores).forEach(score => {
            if (score >= 65) totalQuizzesPassed++;
            totalScores.push(score);
        });
    });
    
    // Update global stats
    const globalPercent = Math.round((totalCompleted / totalPossible) * 100);
    document.getElementById('globalProgress').textContent = `${globalPercent}%`;
    document.getElementById('totalDays').textContent = totalCompleted;
    document.getElementById('passedQuizzes').textContent = totalQuizzesPassed;
    document.getElementById('subjectsCompleted').textContent = subjectsCompleted;
    
    // Average score
    const avgScore = totalScores.length > 0 
        ? Math.round(totalScores.reduce((a, b) => a + b, 0) / totalScores.length)
        : 0;
    document.getElementById('avgScore').textContent = `${avgScore}%`;
    
    // Draw pie chart
    drawPieChart(globalPercent);
    
    // Update daily motivation
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
    
    // Background circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#ecf0f1';
    ctx.lineWidth = 20;
    ctx.stroke();
    
    // Progress circle
    const endAngle = (percentage / 100) * 2 * Math.PI - Math.PI / 2;
    const startAngle = -Math.PI / 2;
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.strokeStyle = percentage >= 65 ? '#6BCB77' : '#FF6B6B';
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';
    ctx.stroke();
    
    // Center text
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
        // Add emoji before the message
        messageEl.textContent = `${motivation.emoji} ${motivation.message}`;
    }
}

// ============================================ //
// 7. NAVIGATION //
// ============================================ //

function goToSubject(subjectKey) {
    // Check if subject page exists
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
    updateDashboard();
    
    // Auto-refresh every minute
    setInterval(updateDashboard, 60000);
});

// ============================================ //
// 9. EXPOSE TO GLOBAL SCOPE (for inline onclick) //
// ============================================ //

window.goToSubject = goToSubject;
window.getCurrentDay = getCurrentDay;
window.getSubjectProgress = getSubjectProgress;
window.isDayCompleted = isDayCompleted;
window.isDayUnlocked = isDayUnlocked;
window.updateDashboard = updateDashboard;

console.log('🏫 Mon École - 6ème chargé avec succès !');
console.log(`📅 Aujourd'hui: ${getTodayDate()}`);
console.log(`📚 Jour actuel: ${getCurrentDay()}/${TOTAL_DAYS}`);
console.log('💾 Progrès sauvegardé dans localStorage');

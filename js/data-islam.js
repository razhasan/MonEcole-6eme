// ============================================ //
// DONNÉES COMPLÈTES - ÉDUCATION ISLAMIQUE //
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
                        options: ["La prière", "La profession de foi", "Le jeûne", "Le pèlerinage"],
                        correct: 1
                    },
                    {
                        question: "Combien de prières quotidiennes y a-t-il en Islam ?",
                        options: ["3", "4", "5", "6"],
                        correct: 2
                    },
                    {
                        question: "Qu'est-ce que la Zakat ?",
                        options: ["Le jeûne", "L'aumône obligatoire", "Le pèlerinage", "La prière"],
                        correct: 1
                    },
                    {
                        question: "Pendant quel mois musulman pratique-t-on le jeûne ?",
                        options: ["Muharram", "Ramadan", "Dhu al-Hijjah", "Rabi' al-Awwal"],
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
                        options: ["Dieu est grand", "Il n'y a de dieu qu'Allah", "Muhammad est le messager", "Allah est le seul"],
                        correct: 1
                    },
                    {
                        question: "Qui est le dernier prophète de l'Islam ?",
                        options: ["Ibrahim (Abraham)", "Musa (Moïse)", "Muhammad", "Isa (Jésus)"],
                        correct: 2
                    },
                    {
                        question: "Qu'est-ce que la Shahada ?",
                        options: ["La prière", "La profession de foi", "Le jeûne", "Le pèlerinage"],
                        correct: 1
                    },
                    {
                        question: "La Shahada est-elle importante en Islam ?",
                        options: ["Non, c'est facultatif", "Oui, c'est le premier pilier", "Seulement pour les adultes", "Pas vraiment"],
                        correct: 1
                    },
                    {
                        question: "Que signifie 'Muhammadan rasulu Allah' ?",
                        options: ["Muhammad est aimé d'Allah", "Muhammad est le messager d'Allah", "Muhammad est le fils d'Allah", "Muhammad est un prophète"],
                        correct: 1
                    }
                ]
            }
        },
        3: {
            title: 'Jour 3: La Salat - La Prière',
            content: `
                <div class="lesson-content">
                    <h3>🕌 La Salat - Les 5 Prières Quotidiennes</h3>
                    <p>La Salat est le deuxième pilier de l'Islam. C'est une prière rituelle que tout musulman doit accomplir 5 fois par jour.</p>
                    <p><strong>Les 5 prières obligatoires :</strong></p>
                    <ul>
                        <li>🌅 <strong>Fajr</strong> - Avant le lever du soleil (2 rak'ahs)</li>
                        <li>☀️ <strong>Dhuhr</strong> - Après le midi (4 rak'ahs)</li>
                        <li>🌤️ <strong>Asr</strong> - L'après-midi (4 rak'ahs)</li>
                        <li>🌅 <strong>Maghrib</strong> - Après le coucher du soleil (3 rak'ahs)</li>
                        <li>🌙 <strong>Isha</strong> - La nuit (4 rak'ahs)</li>
                    </ul>
                    <div class="lesson-tip">💡 La prière est un moment de connexion directe avec Allah. C'est comme une conversation personnelle !</div>
                </div>
            `,
            quiz: {
                questions: [
                    {
                        question: "Combien de prières quotidiennes y a-t-il en Islam ?",
                        options: ["3", "4", "5", "7"],
                        correct: 2
                    },
                    {
                        question: "Quelle prière est faite avant le lever du soleil ?",
                        options: ["Dhuhr", "Fajr", "Asr", "Maghrib"],
                        correct: 1
                    },
                    {
                        question: "Combien de rak'ahs a la prière de Maghrib ?",
                        options: ["2", "3", "4", "5"],
                        correct: 1
                    },
                    {
                        question: "La Salat est le combien de pilier de l'Islam ?",
                        options: ["1er", "2ème", "3ème", "4ème"],
                        correct: 1
                    },
                    {
                        question: "Quelle prière est faite pendant la nuit ?",
                        options: ["Fajr", "Dhuhr", "Maghrib", "Isha"],
                        correct: 3
                    }
                ]
            }
        },
        4: {
            title: 'Jour 4: La Zakat - L\'Aumône Obligatoire',
            content: `
                <div class="lesson-content">
                    <h3>💰 La Zakat - L'Aumône Obligatoire</h3>
                    <p>La Zakat est le troisième pilier de l'Islam. C'est une aumône obligatoire que tout musulman doit donner.</p>
                    <p><strong>Points importants :</strong></p>
                    <ul>
                        <li>🔹 On donne <strong>2.5%</strong> de son épargne chaque année</li>
                        <li>🔹 La Zakat purifie l'argent et aide les pauvres</li>
                        <li>🔹 Elle est donnée aux personnes dans le besoin : pauvres, orphelins, voyageurs, etc.</li>
                        <li>🔹 C'est un droit des pauvres sur l'argent des riches</li>
                    </ul>
                    <div class="lesson-tip">💡 La Zakat enseigne le partage et la solidarité. L'argent ne doit pas rester entre les mains des riches seulement !</div>
                </div>
            `,
            quiz: {
                questions: [
                    {
                        question: "Quel pourcentage de l'épargne donne-t-on en Zakat ?",
                        options: ["1%", "2.5%", "5%", "10%"],
                        correct: 1
                    },
                    {
                        question: "La Zakat est le combien de pilier de l'Islam ?",
                        options: ["1er", "2ème", "3ème", "4ème"],
                        correct: 2
                    },
                    {
                        question: "À qui donne-t-on la Zakat ?",
                        options: ["Aux riches seulement", "Aux pauvres et dans le besoin", "Aux non-musulmans seulement", "À personne"],
                        correct: 1
                    },
                    {
                        question: "Quelle est la fréquence de la Zakat ?",
                        options: ["Chaque mois", "Chaque année", "Une fois dans la vie", "Chaque jour"],
                        correct: 1
                    },
                    {
                        question: "La Zakat purifie-t-elle l'argent ?",
                        options: ["Oui", "Non", "Parfois", "Seulement pour les riches"],
                        correct: 0
                    }
                ]
            }
        },
        5: {
            title: 'Jour 5: Le Sawm - Le Jeûne du Ramadan',
            content: `
                <div class="lesson-content">
                    <h3>🌙 Le Sawm - Le Jeûne du Ramadan</h3>
                    <p>Le Sawm est le quatrième pilier de l'Islam. C'est le jeûne du mois de Ramadan.</p>
                    <p><strong>Ce qu'il faut savoir :</strong></p>
                    <ul>
                        <li>🔹 On jeûne <strong>de l'aube au coucher du soleil</strong></li>
                        <li>🔹 On ne mange pas, ne boit pas et on s'abstient de mauvaises actions</li>
                        <li>🔹 Le Ramadan est le 9ème mois du calendrier islamique</li>
                        <li>🔹 Le jeûne enseigne la patience, la discipline et l'empathie</li>
                        <li>🔹 Les enfants commencent à jeûner progressivement</li>
                    </ul>
                    <div class="lesson-tip">💡 Le jeûne permet de comprendre ce que les pauvres ressentent et d'être plus reconnaissant envers Allah !</div>
                </div>
            `,
            quiz: {
                questions: [
                    {
                        question: "Pendant combien de temps jeûne-t-on pendant le Ramadan ?",
                        options: ["Du lever au coucher du soleil", "Du midi au soir", "24 heures", "Du matin au midi"],
                        correct: 0
                    },
                    {
                        question: "Le Ramadan est quel mois du calendrier islamique ?",
                        options: ["7ème", "8ème", "9ème", "10ème"],
                        correct: 2
                    },
                    {
                        question: "Le Sawm est le combien de pilier de l'Islam ?",
                        options: ["2ème", "3ème", "4ème", "5ème"],
                        correct: 2
                    },
                    {
                        question: "Qu'apprend-on par le jeûne ?",
                        options: ["La patience et la discipline", "La paresse", "La colère", "La tristesse"],
                        correct: 0
                    },
                    {
                        question: "Les enfants doivent-ils jeûner dès leur plus jeune âge ?",
                        options: ["Oui, tout de suite", "Non, ils commencent progressivement", "Non, ils ne jeûnent jamais", "Seulement les garçons"],
                        correct: 1
                    }
                ]
            }
        },
        6: {
            title: 'Jour 6: Le Hajj - Le Pèlerinage',
            content: `
                <div class="lesson-content">
                    <h3>🕋 Le Hajj - Le Pèlerinage à La Mecque</h3>
                    <p>Le Hajj est le cinquième pilier de l'Islam. C'est un pèlerinage à La Mecque que tout musulman doit faire au moins une fois dans sa vie, s'il en a les moyens.</p>
                    <p><strong>Ce qu'il faut savoir :</strong></p>
                    <ul>
                        <li>🔹 Il a lieu pendant le mois de <strong>Dhu al-Hijjah</strong></li>
                        <li>🔹 Les pèlerins portent un vêtement simple et blanc (Ihram)</li>
                        <li>🔹 Ils font le tour de la Kaaba 7 fois</li>
                        <li>🔹 Ils vont sur le mont Arafat pour prier</li>
                        <li>🔹 Le Hajj symbolise l'unité et l'égalité de tous les musulmans</li>
                    </ul>
                    <div class="lesson-tip">💡 Le Hajj rassemble des millions de musulmans du monde entier. Tous sont égaux devant Allah, quelle que soit leur origine !</div>
                </div>
            `,
            quiz: {
                questions: [
                    {
                        question: "Le Hajj est le combien de pilier de l'Islam ?",
                        options: ["3ème", "4ème", "5ème", "6ème"],
                        correct: 2
                    },
                    {
                        question: "Où se trouve La Mecque ?",
                        options: ["Arabie Saoudite", "Égypte", "Maroc", "Turquie"],
                        correct: 0
                    },
                    {
                        question: "Combien de fois les pèlerins font-ils le tour de la Kaaba ?",
                        options: ["3 fois", "5 fois", "7 fois", "10 fois"],
                        correct: 2
                    },
                    {
                        question: "Quel vêtement portent les pèlerins ?",
                        options: ["Des vêtements colorés", "Un vêtement simple et blanc (Ihram)", "Des costumes", "Des uniformes"],
                        correct: 1
                    },
                    {
                        question: "Le Hajj doit être fait combien de fois dans une vie ?",
                        options: ["Chaque année", "Au moins une fois", "Jamais", "10 fois"],
                        correct: 1
                    }
                ]
            }
        },
        7: {
            title: 'Jour 7: Révision et Quiz Hebdomadaire',
            content: `
                <div class="lesson-content">
                    <h3>📚 Révision de la Semaine</h3>
                    <p>Félicitations ! Tu as terminé les 6 premiers jours d'apprentissage sur l'Islam. Voici un résumé de ce que tu as appris :</p>
                    <ul>
                        <li>📖 <strong>Jour 1</strong> : Les 5 Piliers de l'Islam</li>
                        <li>📖 <strong>Jour 2</strong> : La Shahada - La Profession de Foi</li>
                        <li>🕌 <strong>Jour 3</strong> : La Salat - Les 5 Prières</li>
                        <li>💰 <strong>Jour 4</strong> : La Zakat - L'Aumône Obligatoire</li>
                        <li>🌙 <strong>Jour 5</strong> : Le Sawm - Le Jeûne du Ramadan</li>
                        <li>🕋 <strong>Jour 6</strong> : Le Hajj - Le Pèlerinage</li>
                    </ul>
                    <div class="lesson-tip">🌟 Maintenant, prépare-toi pour le grand quiz hebdomadaire ! 20 questions t'attendent. Il faut au moins 65% pour réussir. Bonne chance !</div>
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
                        question: "Qu'est-ce que la Shahada ?",
                        options: ["La prière", "La profession de foi", "Le jeûne", "Le pèlerinage"],
                        correct: 1
                    },
                    {
                        question: "Combien de prières quotidiennes y a-t-il en Islam ?",
                        options: ["3", "4", "5", "6"],
                        correct: 2
                    },
                    {
                        question: "Quel pourcentage de l'épargne donne-t-on en Zakat ?",
                        options: ["1%", "2.5%", "5%", "10%"],
                        correct: 1
                    },
                    {
                        question: "Pendant quel mois musulman jeûne-t-on ?",
                        options: ["Muharram", "Ramadan", "Dhu al-Hijjah", "Rabi' al-Awwal"],
                        correct: 1
                    },
                    {
                        question: "Où se trouve La Mecque ?",
                        options: ["Arabie Saoudite", "Égypte", "Maroc", "Turquie"],
                        correct: 0
                    },
                    {
                        question: "Combien de fois les pèlerins font-ils le tour de la Kaaba ?",
                        options: ["3 fois", "5 fois", "7 fois", "10 fois"],
                        correct: 2
                    },
                    {
                        question: "Le Sawm est le combien de pilier de l'Islam ?",
                        options: ["2ème", "3ème", "4ème", "5ème"],
                        correct: 2
                    },
                    {
                        question: "La Salat est le combien de pilier de l'Islam ?",
                        options: ["1er", "2ème", "3ème", "4ème"],
                        correct: 1
                    },
                    {
                        question: "Quelle prière est faite avant le lever du soleil ?",
                        options: ["Dhuhr", "Fajr", "Asr", "Maghrib"],
                        correct: 1
                    },
                    {
                        question: "Le Hajj est le combien de pilier de l'Islam ?",
                        options: ["3ème", "4ème", "5ème", "6ème"],
                        correct: 2
                    },
                    {
                        question: "Qu'apprend-on par le jeûne ?",
                        options: ["La patience et la discipline", "La paresse", "La colère", "La tristesse"],
                        correct: 0
                    },
                    {
                        question: "À qui donne-t-on la Zakat ?",
                        options: ["Aux riches seulement", "Aux pauvres et dans le besoin", "Aux non-musulmans seulement", "À personne"],
                        correct: 1
                    },
                    {
                        question: "Que signifie 'La ilaha illa Allah' ?",
                        options: ["Dieu est grand", "Il n'y a de dieu qu'Allah", "Muhammad est le messager", "Allah est le seul"],
                        correct: 1
                    },
                    {
                        question: "Quel vêtement portent les pèlerins ?",
                        options: ["Des vêtements colorés", "Un vêtement simple et blanc (Ihram)", "Des costumes", "Des uniformes"],
                        correct: 1
                    },
                    {
                        question: "Le Ramadan est quel mois du calendrier islamique ?",
                        options: ["7ème", "8ème", "9ème", "10ème"],
                        correct: 2
                    },
                    {
                        question: "Qui est le dernier prophète de l'Islam ?",
                        options: ["Ibrahim (Abraham)", "Musa (Moïse)", "Muhammad", "Isa (Jésus)"],
                        correct: 2
                    },
                    {
                        question: "La Zakat est le combien de pilier de l'Islam ?",
                        options: ["1er", "2ème", "3ème", "4ème"],
                        correct: 2
                    },
                    {
                        question: "Combien de rak'ahs a la prière de Maghrib ?",
                        options: ["2", "3", "4", "5"],
                        correct: 1
                    },
                    {
                        question: "Que signifie 'Muhammadan rasulu Allah' ?",
                        options: ["Muhammad est aimé d'Allah", "Muhammad est le messager d'Allah", "Muhammad est le fils d'Allah", "Muhammad est un prophète"],
                        correct: 1
                    }
                ]
            }
        }
    },
    weeklyQuiz: {
        passingScore: 65,
        questions: [
            // Les 20 questions du jour 7 sont déjà incluses ci-dessus
        ]
    }
};

// 1. Add this at the top
let syllabusContent = {};

// 2. Function to merge
function mergeClassContents() {
  Object.assign(syllabusContent, syllabusContentClass5);
  Object.assign(syllabusContent, syllabusContentClass6);
  Object.assign(syllabusContent, syllabusContentClass7);
  Object.assign(syllabusContent, syllabusContentClass8);
}

// 3. Modify init() to call merge before continuing
function init() {
  mergeClassContents();
  populateTopics();
  setupEventListeners();
}

// 4. Rest of your existing code uses syllabusContent as usual



// DOM Elements
const classSelect = document.getElementById('classSelect');
const topicSelect = document.getElementById('topicSelect');
const contentArea = document.getElementById('contentArea');
const topicContent = document.getElementById('topicContent');
const topicActions = document.getElementById('topicActions');

// Action buttons
const studyBtn = document.getElementById('studyBtn');
const examplesBtn = document.getElementById('examplesBtn');
const practiceBtn = document.getElementById('practiceBtn');
const quizBtn = document.getElementById('quizBtn');

// Content sections
const studySection = document.getElementById('studySection');
const examplesSection = document.getElementById('examplesSection');
const practiceSection = document.getElementById('practiceSection');

// Quiz elements
const quizArea = document.getElementById('quizArea');
const backToTopic = document.getElementById('backToTopic');
const quizProgress = document.getElementById('quizProgress');
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const submitAnswer = document.getElementById('submitAnswer');
const nextQuestion = document.getElementById('nextQuestion');
const quizResult = document.getElementById('quizResult');
const quizSummary = document.getElementById('quizSummary');
const finalScore = document.getElementById('finalScore');
const retakeQuiz = document.getElementById('retakeQuiz');

// Progress elements
const progressDetails = document.getElementById('progressDetails');

// State variables
let currentClass = '5';
let currentTopic = '';
let currentQuizData = [];
let currentQuestionIndex = 0;
let selectedAnswer = null;
let quizScore = 0;
let progressData = {};
let currentLanguage = 'en'; // 'en' for English, 'bn' for Bengali




// Language translations
const translations = {
  en: {
    appTitle: "Mathematics Learning App for Classes V to VIII",
    selectClass: "Select Class:",
    selectTopic: "Select a topic",
    selectTopicMsg: "Select a topic to begin learning",
    chooseMsg: "Choose a class and topic from the dropdowns above to start your mathematics journey.",
    studyNotes: "📚 Study Notes",
    examples: "💡 Examples",
    practice: "✏️ Practice",
    takeQuiz: "🎯 Take Quiz",
    quizTime: "📝 Quiz Time!",
    backToTopic: "← Back to Topic",
    submitAnswer: "Submit Answer",
    nextQuestion: "Next Question",
    quizComplete: "Quiz Complete!",
    retakeQuiz: "Retake Quiz",
    progressDashboard: "Progress Dashboard",
    selectClassTopic: "Select class and topic to see progress.",
    correct: "✅ Correct! Well done!",
    incorrect: "❌ Incorrect. The correct answer is:",
    excellent: "🎉 Excellent work!",
    goodJob: "👍 Good job!",
    keepPracticing: "📚 Keep practicing!",
    enterAnswer: "Enter your answer",
    checkAnswer: "Check Answer",
    selectAnswer: "Please select an answer.",
    question: "Question",
    of: "of",
    youScored: "You scored",
    out: "out",
    class: "Class"
  },
  bn: {
    appTitle: "পঞ্চম থেকে অষ্টম শ্রেণীর গণিত শিক্ষা অ্যাপ",
    selectClass: "শ্রেণী নির্বাচন করুন:",
    selectTopic: "একটি বিষয় নির্বাচন করুন",
    selectTopicMsg: "শেখা শুরু করতে একটি বিষয় নির্বাচন করুন",
    chooseMsg: "আপনার গণিত যাত্রা শুরু করতে উপরের ড্রপডাউন থেকে একটি শ্রেণী এবং বিষয় বেছে নিন।",
    studyNotes: "📚 অধ্যয়ন নোট",
    examples: "💡 উদাহরণ",
    practice: "✏️ অনুশীলন",
    takeQuiz: "🎯 কুইজ নিন",
    quizTime: "📝 কুইজের সময়!",
    backToTopic: "← বিষয়ে ফিরে যান",
    submitAnswer: "উত্তর জমা দিন",
    nextQuestion: "পরবর্তী প্রশ্ন",
    quizComplete: "কুইজ সম্পূর্ণ!",
    retakeQuiz: "আবার কুইজ নিন",
    progressDashboard: "অগ্রগতি ড্যাশবোর্ড",
    selectClassTopic: "অগ্রগতি দেখতে শ্রেণী এবং বিষয় নির্বাচন করুন।",
    correct: "✅ সঠিক! চমৎকার!",
    incorrect: "❌ ভুল। সঠিক উত্তর হল:",
    excellent: "🎉 চমৎকার কাজ!",
    goodJob: "👍 ভাল কাজ!",
    keepPracticing: "📚 অনুশীলন চালিয়ে যান!",
    enterAnswer: "আপনার উত্তর লিখুন",
    checkAnswer: "উত্তর পরীক্ষা করুন",
    selectAnswer: "দয়া করে একটি উত্তর নির্বাচন করুন।",
    question: "প্রশ্ন",
    of: "এর",
    youScored: "আপনি পেয়েছেন",
    out: "এর মধ্যে",
    class: "শ্রেণী"
  }
};

// Function to get translated text
function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

// Function to toggle language
function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'bn' : 'en';
  localStorage.setItem('preferred-language', currentLanguage);
  updateLanguageButton();
  updateUILanguage();
}

// Function to update language button text
function updateLanguageButton() {
  const langBtn = document.getElementById('langBtn');
  const langText = langBtn.querySelector('.lang-text');
  langText.textContent = currentLanguage === 'en' ? 'বাং' : 'ENG';
  langBtn.title = currentLanguage === 'en' ? 'Switch to Bengali' : 'ইংরেজিতে পরিবর্তন করুন';
}

// Function to update UI language
function updateUILanguage() {
  // Update header
  document.querySelector('header h1').textContent = t('appTitle');
  
  // Update selectors
  document.querySelector('label[for="classSelect"]').textContent = t('selectClass');
  document.querySelector('label[for="topicSelect"]').textContent = t('selectTopic');
  
  // Update action buttons
  if (document.getElementById('studyBtn')) {
    document.getElementById('studyBtn').innerHTML = t('studyNotes');
    document.getElementById('examplesBtn').innerHTML = t('examples');
    document.getElementById('practiceBtn').innerHTML = t('practice');
    document.getElementById('quizBtn').innerHTML = t('takeQuiz');
  }
  
  // Update quiz area
  const quizHeader = document.querySelector('#quizArea h2');
  if (quizHeader) quizHeader.textContent = t('quizTime');
  
  const backBtn = document.getElementById('backToTopic');
  if (backBtn) backBtn.textContent = t('backToTopic');
  
  const submitBtn = document.getElementById('submitAnswer');
  if (submitBtn) submitBtn.textContent = t('submitAnswer');
  
  const nextBtn = document.getElementById('nextQuestion');
  if (nextBtn) nextBtn.textContent = t('nextQuestion');
  
  // Update progress area
  const progressHeader = document.querySelector('#progressArea h2');
  if (progressHeader) progressHeader.textContent = t('progressDashboard');
  
  // Reload current topic if one is selected
  if (currentTopic) {
    loadTopic(currentTopic);
  } else {
    topicContent.innerHTML = `<h2>${t('selectTopicMsg')}</h2><p>${t('chooseMsg')}</p>`;
  }
}

// Function to normalize answer for comparison (supports both English and Bengali)
function normalizeAnswer(answer) {
  if (!answer) return '';
  
  // Convert to lowercase and trim
  let normalized = answer.toString().toLowerCase().trim();
  
  // Bengali number to English number conversion
  const bengaliToEnglish = {
    '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4',
    '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9'
  };
  
  // Replace Bengali numbers with English numbers
  for (const [bengali, english] of Object.entries(bengaliToEnglish)) {
    normalized = normalized.replace(new RegExp(bengali, 'g'), english);
  }
  
  // Common Bengali-English word mappings for mathematical terms
  const wordMappings = {
    'হ্যাঁ': 'yes',
    'না': 'no',
    'সত্য': 'true',
    'মিথ্যা': 'false',
    'শূন্য': '0',
    'এক': '1',
    'দুই': '2',
    'তিন': '3',
    'চার': '4',
    'পাঁচ': '5',
    'ছয়': '6',
    'সাত': '7',
    'আট': '8',
    'নয়': '9',
    'দশ': '10'
  };
  
  // Replace Bengali words with English equivalents
  for (const [bengali, english] of Object.entries(wordMappings)) {
    normalized = normalized.replace(new RegExp(bengali, 'g'), english);
  }
  
  return normalized;
}

// Comprehensive syllabus content with examples and practice problems


// Initialize the app
function init() {
  mergeClassContents();
  populateTopics();
  setupEventListeners();
}

// Populate topics based on selected class
function populateTopics() {
  const topics = syllabusContent[currentClass] || {};
  topicSelect.innerHTML = `<option value="">${t('selectTopic')}</option>`;
  
  for (const topic in topics) {
    const option = document.createElement('option');
    option.value = topic;
    option.textContent = topic;
    topicSelect.appendChild(option);
  }
  
  // Reset content area
  topicActions.classList.add('hidden');
  topicContent.innerHTML = `<h2>${t('selectTopicMsg')}</h2><p>${t('chooseMsg')}</p>`;
}

// Load content for selected topic
function loadTopic(topic) {
  if (!topic || !syllabusContent[currentClass][topic]) {
    topicActions.classList.add('hidden');
    topicContent.innerHTML = `<h2>${t('selectTopicMsg')}</h2><p>${t('chooseMsg')}</p>`;
    return;
  }

  currentTopic = topic;
  const topicData = syllabusContent[currentClass][topic];
  
  // Show topic actions
  topicActions.classList.remove('hidden');
  const activityMsg = currentLanguage === 'bn' ? `${topic} সম্পর্কে শেখা শুরু করতে নিচের একটি কার্যকলাপ বেছে নিন।` : `Choose an activity below to start learning about ${topic}.`;
  topicContent.innerHTML = `<h2>${topic}</h2><p>${activityMsg}</p>`;
  
  // Load study notes by default
  showStudyNotes();
  setActiveButton(studyBtn);
}

// Show study notes
function showStudyNotes() {
  const topicData = syllabusContent[currentClass][currentTopic];
  studySection.innerHTML = `
    <h3>${t('studyNotes')}</h3>
    <p>${topicData.notes}</p>
  `;
  showSection('study');
}

// Show examples
function showExamples() {
  const topicData = syllabusContent[currentClass][currentTopic];
  let examplesHTML = `<h3>${t('examples')}</h3>`;
  
  if (topicData.examples && topicData.examples.length > 0) {
    topicData.examples.forEach((example, index) => {
      examplesHTML += `
        <div class="example-box">
          <h4>${currentLanguage === 'bn' ? 'উদাহরণ' : 'Example'} ${index + 1}: ${example.title}</h4>
          <p>${example.content}</p>
        </div>
      `;
    });
  } else {
    examplesHTML += `<p>${currentLanguage === 'bn' ? 'এই বিষয়ের উদাহরণ শীঘ্রই যোগ করা হবে!' : 'Examples for this topic will be added soon!'}</p>`;
  }
  
  examplesSection.innerHTML = examplesHTML;
  showSection('examples');
}

// Show practice problems
function showPractice() {
  const topicData = syllabusContent[currentClass][currentTopic];
  let practiceHTML = `<h3>${t('practice')} ${currentLanguage === 'bn' ? 'সমস্যা' : 'Problems'}</h3>`;
  
  if (topicData.practice && topicData.practice.length > 0) {
    topicData.practice.forEach((problem, index) => {
      practiceHTML += `
        <div class="practice-problem">
          <h4>${currentLanguage === 'bn' ? 'সমস্যা' : 'Problem'} ${index + 1}</h4>
          <p>${problem.question}</p>
          <input type="text" class="practice-input" id="practice-${index}" placeholder="${t('enterAnswer')}">
          <button class="check-answer-btn" onclick="checkPracticeAnswer(${index}, '${problem.answer}')">${t('checkAnswer')}</button>
          <div id="feedback-${index}" class="answer-feedback" style="display: none;"></div>
        </div>
      `;
    });
  } else {
    practiceHTML += `<p>${currentLanguage === 'bn' ? 'এই বিষয়ের অনুশীলনী সমস্যা শীঘ্রই যোগ করা হবে!' : 'Practice problems for this topic will be added soon!'}</p>`;
  }
  
  practiceSection.innerHTML = practiceHTML;
  showSection('practice');
}

// Check practice answer
function checkPracticeAnswer(index, correctAnswer) {
  const userAnswer = document.getElementById(`practice-${index}`).value.trim();
  const feedback = document.getElementById(`feedback-${index}`);
  
  // Normalize both answers for comparison
  const normalizedUser = normalizeAnswer(userAnswer);
  const normalizedCorrect = normalizeAnswer(correctAnswer);
  
  if (normalizedUser === normalizedCorrect) {
    feedback.innerHTML = t('correct');
    feedback.className = 'answer-feedback correct';
  } else {
    feedback.innerHTML = `${t('incorrect')} ${correctAnswer}`;
    feedback.className = 'answer-feedback incorrect';
  }
  
  feedback.style.display = 'block';
}

// Start quiz
function startQuiz() {
  const topicData = syllabusContent[currentClass][currentTopic];
  
  if (!topicData.quiz || topicData.quiz.length === 0) {
    alert('Quiz for this topic is not available yet!');
    return;
  }
  
  // Initialize quiz data
  currentQuizData = [...topicData.quiz];
  currentQuestionIndex = 0;
  quizScore = 0;
  selectedAnswer = null;
  
  // Show quiz area, hide content area
  contentArea.style.display = 'none';
  quizArea.classList.remove('hidden');
  
  // Reset quiz UI
  quizSummary.classList.add('hidden');
  nextQuestion.classList.add('hidden');
  submitAnswer.classList.remove('hidden');
  
  // Load first question
  loadQuizQuestion();
}

// Load quiz question
function loadQuizQuestion() {
  if (currentQuestionIndex >= currentQuizData.length) {
    showQuizSummary();
    return;
  }
  
  const question = currentQuizData[currentQuestionIndex];
  quizProgress.textContent = `${t('question')} ${currentQuestionIndex + 1} ${t('of')} ${currentQuizData.length}`;
  quizQuestion.textContent = question.question;
  
  // Clear previous options
  quizOptions.innerHTML = '';
  selectedAnswer = null;
  quizResult.textContent = '';
  
  // Add new options
  question.options.forEach(option => {
    const li = document.createElement('li');
    li.textContent = option;
    li.onclick = () => selectQuizAnswer(option, li);
    quizOptions.appendChild(li);
  });
}

// Select quiz answer
function selectQuizAnswer(answer, element) {
  selectedAnswer = answer;
  // Remove selection from all options
  [...quizOptions.children].forEach(child => child.classList.remove('selected'));
  // Add selection to clicked option
  element.classList.add('selected');
}

// Submit quiz answer
function submitQuizAnswer() {
  if (selectedAnswer === null) {
    alert(t('selectAnswer'));
    return;
  }
  
  const currentQuestion = currentQuizData[currentQuestionIndex];
  // Normalize both answers for comparison
  const normalizedSelected = normalizeAnswer(selectedAnswer);
  const normalizedCorrect = normalizeAnswer(currentQuestion.answer);
  const isCorrect = normalizedSelected === normalizedCorrect;
  
  if (isCorrect) {
    quizResult.textContent = t('correct');
    quizResult.style.color = '#28a745';
    quizScore++;
  } else {
    quizResult.textContent = `${t('incorrect')} ${currentQuestion.answer}`;
    quizResult.style.color = '#dc3545';
  }
  
  // Update progress
  updateProgress(currentClass, currentTopic, isCorrect);
  
  // Show next button or finish quiz
  submitAnswer.classList.add('hidden');
  if (currentQuestionIndex < currentQuizData.length - 1) {
    nextQuestion.classList.remove('hidden');
  } else {
    setTimeout(showQuizSummary, 2000);
  }
}

// Go to next question
function goToNextQuestion() {
  currentQuestionIndex++;
  nextQuestion.classList.add('hidden');
  submitAnswer.classList.remove('hidden');
  loadQuizQuestion();
}

// Show quiz summary
function showQuizSummary() {
  const percentage = Math.round((quizScore / currentQuizData.length) * 100);
  let message = '';
  
  if (percentage >= 80) {
    message = '🎉 Excellent work!';
  } else if (percentage >= 60) {
    message = '👍 Good job!';
  } else {
    message = '📚 Keep practicing!';
  }
  
  finalScore.innerHTML = `
    <h4>${message}</h4>
    <p>You scored ${quizScore} out of ${currentQuizData.length} (${percentage}%)</p>
  `;
  
  quizSummary.classList.remove('hidden');
  quizQuestion.style.display = 'none';
  quizOptions.style.display = 'none';
  document.querySelector('.quiz-controls').style.display = 'none';
  quizResult.style.display = 'none';
}

// Back to topic
function backToTopicView() {
  contentArea.style.display = 'block';
  quizArea.classList.add('hidden');
  
  // Reset quiz display
  quizQuestion.style.display = 'block';
  quizOptions.style.display = 'block';
  document.querySelector('.quiz-controls').style.display = 'flex';
  quizResult.style.display = 'block';
}

// Retake quiz
function retakeQuizHandler() {
  quizSummary.classList.add('hidden');
  quizQuestion.style.display = 'block';
  quizOptions.style.display = 'block';
  document.querySelector('.quiz-controls').style.display = 'flex';
  quizResult.style.display = 'block';
  startQuiz();
}

// Show specific section
function showSection(section) {
  // Hide all sections
  studySection.classList.add('hidden');
  examplesSection.classList.add('hidden');
  practiceSection.classList.add('hidden');
  
  // Show selected section
  switch(section) {
    case 'study':
      studySection.classList.remove('hidden');
      break;
    case 'examples':
      examplesSection.classList.remove('hidden');
      break;
    case 'practice':
      practiceSection.classList.remove('hidden');
      break;
  }
}

// Set active button
function setActiveButton(activeBtn) {
  // Remove active class from all buttons
  [studyBtn, examplesBtn, practiceBtn, quizBtn].forEach(btn => {
    btn.classList.remove('active');
  });
  // Add active class to selected button
  activeBtn.classList.add('active');
}

// Update progress tracking
function updateProgress(cls, topic, isCorrect) {
  if (!progressData[cls]) progressData[cls] = {};
  if (!progressData[cls][topic]) progressData[cls][topic] = {attempts: 0, correct: 0};
  
  progressData[cls][topic].attempts += 1;
  if (isCorrect) progressData[cls][topic].correct += 1;
  
  displayProgress(cls, topic);
}

// Display progress details
function displayProgress(cls, topic) {
  const data = progressData[cls][topic];
  if (!data) {
    progressDetails.textContent = currentLanguage === 'bn' ? 'এখনো কোন অগ্রগতি হয়নি।' : 'No progress made yet.';
    return;
  }
  
  const percent = ((data.correct / data.attempts) * 100).toFixed(1);
  const attemptsText = currentLanguage === 'bn' ? 'কুইজ চেষ্টা:' : 'Quiz Attempts:';
  const correctText = currentLanguage === 'bn' ? 'সঠিক:' : 'Correct:';
  const successText = currentLanguage === 'bn' ? 'সফলতার হার:' : 'Success Rate:';
  
  progressDetails.innerHTML = `
    <strong>${t('class')} ${cls} - ${topic}</strong><br>
    ${attemptsText} ${data.attempts} | ${correctText} ${data.correct} | ${successText} ${percent}%
  `;
}

// Setup event listeners
function setupEventListeners() {
  // Class and topic selection
  classSelect.onchange = (e) => {
    currentClass = e.target.value;
    populateTopics();
    progressDetails.textContent = t('selectClassTopic');
  };
  
  topicSelect.onchange = (e) => {
    loadTopic(e.target.value);
    progressDetails.textContent = t('selectClassTopic');
  };
  
  // Action buttons
  studyBtn.onclick = () => {
    showStudyNotes();
    setActiveButton(studyBtn);
  };
  
  examplesBtn.onclick = () => {
    showExamples();
    setActiveButton(examplesBtn);
  };
  
  practiceBtn.onclick = () => {
    showPractice();
    setActiveButton(practiceBtn);
  };
  
  quizBtn.onclick = () => {
    startQuiz();
    setActiveButton(quizBtn);
  };
  
  // Quiz controls
  submitAnswer.onclick = submitQuizAnswer;
  nextQuestion.onclick = goToNextQuestion;
  backToTopic.onclick = backToTopicView;
  retakeQuiz.onclick = retakeQuizHandler;
}

// Theme Management
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('preferred-theme', theme);
  
  // Add visual feedback
  const themeButtons = document.querySelectorAll('.theme-btn');
  themeButtons.forEach(btn => btn.style.transform = 'scale(1)');
  
  const activeBtn = document.querySelector(`.theme-btn.${theme}`);
  if (activeBtn) {
    activeBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
      activeBtn.style.transform = 'scale(1)';
    }, 200);
  }
}

// Load saved theme
function loadTheme() {
  const savedTheme = localStorage.getItem('preferred-theme') || 'light';
  setTheme(savedTheme);
}

// Enhanced initialization with dynamic features
function initDynamicFeatures() {
  loadTheme();
}

// Show updates information modal
function showUpdatesInfo() {
  // Create modal if it doesn't exist
  let modal = document.getElementById('updatesModal');
  if (!modal) {
    modal = createUpdatesModal();
  }
  
  // Show modal
  modal.classList.add('show');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close updates modal
function closeUpdatesModal() {
  const modal = document.getElementById('updatesModal');
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restore scrolling
  }
}

// Create updates modal
function createUpdatesModal() {
  const modal = document.createElement('div');
  modal.id = 'updatesModal';
  modal.className = 'updates-modal';
  
  modal.innerHTML = `
    <div class="updates-content">
      <div class="updates-header">
        <h2 class="updates-title">
          <span>🎉</span>
          What's New in Dynamic Looks
        </h2>
        <button class="updates-close" onclick="closeUpdatesModal()">×</button>
      </div>
      
      <ul class="updates-list">
        <li class="updates-item">
          <div class="updates-item-icon">🎨</div>
          <div class="updates-item-content">
            <h4>Dynamic Theme System</h4>
            <p>Switch between Light, Dark, and Colorful themes instantly! Each theme provides a unique visual experience with custom colors, backgrounds, and animations.</p>
          </div>
        </li>
        
        <li class="updates-item">
          <div class="updates-item-icon">✨</div>
          <div class="updates-item-content">
            <h4>Enhanced Animations</h4>
            <p>Experience smooth transitions, floating background particles, shimmer effects on hover, and beautiful slide-in animations throughout the app.</p>
          </div>
        </li>
        
        <li class="updates-item">
          <div class="updates-item-icon">🎯</div>
          <div class="updates-item-content">
            <h4>Interactive Elements</h4>
            <p>All buttons and cards now feature dynamic hover effects, scaling animations, and visual feedback to make your learning experience more engaging.</p>
          </div>
        </li>
        
        <li class="updates-item">
          <div class="updates-item-icon">🎊</div>
          <div class="updates-item-content">
            <h4>Celebration Effects</h4>
            <p>Achieve excellent quiz scores and enjoy colorful particle animations that celebrate your success with flying confetti effects!</p>
          </div>
        </li>
        
        <li class="updates-item">
          <div class="updates-item-icon">📱</div>
          <div class="updates-item-content">
            <h4>Responsive Design</h4>
            <p>All new features work seamlessly across desktop, tablet, and mobile devices with optimized layouts and touch-friendly interactions.</p>
          </div>
        </li>
        
        <li class="updates-item">
          <div class="updates-item-icon">🔔</div>
          <div class="updates-item-content">
            <h4>Smart Notifications</h4>
            <p>Stay informed with beautiful notification banners that slide in smoothly and provide helpful updates about your learning progress.</p>
          </div>
        </li>
        
        <li class="updates-item">
          <div class="updates-item-icon">⚡</div>
          <div class="updates-item-content">
            <h4>Performance Optimized</h4>
            <p>All animations use CSS transforms and GPU acceleration for smooth 60fps performance, ensuring a lag-free experience on all devices.</p>
          </div>
        </li>
        
        <li class="updates-item">
          <div class="updates-item-icon">🎮</div>
          <div class="updates-item-content">
            <h4>Interactive Features</h4>
            <p>Discover hidden keyboard shortcuts (Ctrl+U for custom messages, Ctrl+Shift+A for admin panel) and enjoy gamified learning elements.</p>
          </div>
        </li>
      </ul>
      
      <div class="updates-version">Version 2.0 - Dynamic Edition</div>
    </div>
  `;
  
  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeUpdatesModal();
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeUpdatesModal();
    }
  });
  
  document.body.appendChild(modal);
  return modal;
}

// Add floating animation to action buttons
function addButtonAnimations() {
  const actionButtons = document.querySelectorAll('.action-btn');
  actionButtons.forEach((btn, index) => {
    btn.style.animationDelay = `${index * 0.1}s`;
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'translateY(-3px) scale(1.05)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// Add particle effect on quiz completion
function addParticleEffect() {
  const particles = [];
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
  
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '6px';
    particle.style.height = '6px';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    
    document.body.appendChild(particle);
    particles.push(particle);
    
    // Animate particle
    const animation = particle.animate([
      { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
      { transform: `translateY(-${window.innerHeight + 100}px) rotate(360deg)`, opacity: 0 }
    ], {
      duration: Math.random() * 3000 + 2000,
      easing: 'ease-out'
    });
    
    animation.onfinish = () => {
      particle.remove();
    };
  }
}

// Enhanced quiz completion with celebration
function showQuizSummaryEnhanced() {
  const percentage = Math.round((quizScore / currentQuizData.length) * 100);
  let message = '';
  
  if (percentage >= 80) {
    message = t('excellent');
    addParticleEffect(); // Add celebration effect
  } else if (percentage >= 60) {
    message = t('goodJob');
  } else {
    message = t('keepPracticing');
  }
  
  finalScore.innerHTML = `
    <h4>${message}</h4>
    <p>${t('youScored')} ${quizScore} ${t('out')} ${currentQuizData.length} (${percentage}%)</p>
  `;
  
  // Update quiz complete heading
  const quizCompleteHeading = quizSummary.querySelector('h3');
  if (quizCompleteHeading) {
    quizCompleteHeading.textContent = t('quizComplete');
  }
  
  // Update retake button
  const retakeBtn = document.getElementById('retakeQuiz');
  if (retakeBtn) {
    retakeBtn.textContent = t('retakeQuiz');
  }
  
  quizSummary.classList.remove('hidden');
  quizQuestion.style.display = 'none';
  quizOptions.style.display = 'none';
  document.querySelector('.quiz-controls').style.display = 'none';
  quizResult.style.display = 'none';
}

// Load saved language
function loadLanguage() {
  const savedLanguage = localStorage.getItem('preferred-language') || 'en';
  currentLanguage = savedLanguage;
  updateLanguageButton();
  updateUILanguage();
}

// Initialize the app when page loads
document.addEventListener('DOMContentLoaded', () => {
  init();
  initDynamicFeatures();
  addButtonAnimations();
  loadLanguage();
  
  // Override the original showQuizSummary function
  window.showQuizSummary = showQuizSummaryEnhanced;
});

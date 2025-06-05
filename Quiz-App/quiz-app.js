const easyQuestions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyper Tool Multi Language",
        ],
        answer: "Hyper Text Markup Language",
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Color Style Sheets",
            "Cascading Style Sheets",
            "Creative Style Syntax",
            "Computer Style Sheets",
        ],
        answer: "Cascading Style Sheets",
    },
    {
        question: "What does SQL stand for?",
        options: [
            "Structured Question Language",
            "Simple Query Language",
            "Structured Query Language",
            "Sequential Query Language",
        ],
        answer: "Structured Query Language",
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Python", "Java", "C++", "JavaScript"],
        answer: "JavaScript",
    },
    {
        question: "Which company developed the React.js library?",
        options: ["Google", "Facebook", "Microsoft", "Apple"],
        answer: "Facebook",
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["class", "style", "font", "styles"],
        answer: "style",
    },
];

const mediumQuestions = [
    {
        question: "Which method converts a JSON string to a JavaScript object?",
        options: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.toObject()",
            "JSON.decode()",
        ],
        answer: "JSON.parse()",
    },
    {
        question: "Which HTTP method is used to update a resource?",
        options: ["GET", "POST", "PUT", "FETCH"],
        answer: "PUT",
    },
    {
        question: "What is a closure in JavaScript?",
        options: [
            "A variable",
            "A function inside another function",
            "A loop",
            "A callback",
        ],
        answer: "A function inside another function",
    },
    {
        question: "Which protocol is used to secure HTTP?",
        options: ["FTP", "SMTP", "SSL", "HTTPS"],
        answer: "HTTPS",
    },
    {
        question: "What does the `this` keyword refer to in JavaScript?",
        options: [
            "Current object",
            "Previous object",
            "Global object always",
            "Parent function",
        ],
        answer: "Current object",
    },
    {
        question: "Which one is a JavaScript package manager?",
        options: ["Node", "npm", "TypeScript", "Express"],
        answer: "npm",
    },
    {
        question: "Which property is used in CSS to make text bold?",
        options: ["text-style", "font-weight", "font-style", "text-weight"],
        answer: "font-weight",
    },
    {
        question: "What is the default flex direction in CSS Flexbox?",
        options: ["column", "row", "row-reverse", "column-reverse"],
        answer: "row",
    },
    {
        question: "In SQL, what does the `JOIN` clause do?",
        options: [
            "Deletes data",
            "Combines rows from two or more tables",
            "Creates a new table",
            "Changes column name",
        ],
        answer: "Combines rows from two or more tables",
    },
    {
        question: "Which of these is NOT a valid HTTP status code?",
        options: ["200", "404", "500", "999"],
        answer: "999",
    },
];

const hardQuestions = [
    {
        question: "What is the output of `typeof NaN` in JavaScript?",
        options: ["number", "NaN", "undefined", "object"],
        answer: "number",
    },
    {
        question:
            "What is the time complexity of accessing an element in a hash table?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
        answer: "O(1)",
    },
    {
        question: "Which algorithm is used in HTTPS for encryption?",
        options: ["RSA", "SHA256", "MD5", "AES256"],
        answer: "RSA",
    },
    {
        question: "Which of the following is not part of the React lifecycle?",
        options: [
            "componentWillMount",
            "componentDidUpdate",
            "componentDead",
            "componentDidMount",
        ],
        answer: "componentDead",
    },
    {
        question: "What is a race condition?",
        options: [
            "A bug in CSS",
            "Two threads accessing shared data simultaneously",
            "A network delay",
            "An error in database queries",
        ],
        answer: "Two threads accessing shared data simultaneously",
    },
    {
        question: "What does ACID stand for in databases?",
        options: [
            "Atomicity, Consistency, Isolation, Durability",
            "Action, Control, Integrity, Durability",
            "Atomic, Controlled, Isolated, Durable",
            "Advanced Consistent Indexed Database",
        ],
        answer: "Atomicity, Consistency, Isolation, Durability",
    },
    {
        question: "Which language is used for styling React Native apps?",
        options: ["CSS", "Sass", "Styled-Components", "JavaScript"],
        answer: "JavaScript",
    },
    {
        question: "In Git, what does `rebase` do?",
        options: [
            "Deletes branches",
            "Combines commits",
            "Reapplies commits on top of another base tip",
            "Switches branches",
        ],
        answer: "Reapplies commits on top of another base tip",
    },
    {
        question: "What does the SOLID principle 'O' stand for?",
        options: [
            "Object-oriented design",
            "Open/Closed Principle",
            "Overload Principle",
            "Only one responsibility",
        ],
        answer: "Open/Closed Principle",
    },
    {
        question: "What does event delegation in JavaScript mean?",
        options: [
            "Assigning multiple events to one element",
            "Handling events at a higher DOM level",
            "Creating dynamic elements",
            "Using async event listeners",
        ],
        answer: "Handling events at a higher DOM level",
    },
];

// DOM Elements
const difficulty = document.getElementById("difficulty");
const startBtn = document.getElementById("start-btn");
const quizChoices = document.getElementById("quiz-choices");
const quizContent = document.getElementById("quiz-content");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const progressText = document.getElementById("questions-count");
const progressBar = document.querySelector("#progress");
const nextBtn = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");
const heigestScore = document.getElementById("heigest-score");

// Quiz State
// ... (keep all your existing question arrays and DOM element declarations)

// Quiz State
let score = 0;
let questions = [];
let currentQuestionIndex = 0;
let selectedDifficulty = "";
let timer;
let timeLeft;
const TIME_PER_QUESTION = 15; // seconds per question
heigestScore.textContent = `Highest Score: ${
    localStorage.getItem("heigestScore") || 0
}`;

// Utility function to shuffle array
function shuffleArray(array) {
    return array.slice().sort(() => Math.random() - 0.5);
}

// Initialize the quiz
function initQuiz() {
    quizChoices.style.display = "flex";
    quizContent.style.display = "none";
    score = 0;
    currentQuestionIndex = 0;
    clearInterval(timer); // Clear any existing timer
}

// Start the quiz
function startQuiz() {
    quizChoices.style.display = "none";
    quizContent.style.display = "block";
    selectedDifficulty = difficulty.value;
    questions =
        selectedDifficulty === "easy"
            ? shuffleArray(easyQuestions)
            : selectedDifficulty === "medium"
            ? shuffleArray(mediumQuestions)
            : shuffleArray(hardQuestions);

    // Shuffle options for each question
    questions = questions.map((q) => ({
        ...q,
        options: shuffleArray(q.options),
    }));

    currentQuestionIndex = 0;
    score = 0;
    updateScore();
    loadQuestion(currentQuestionIndex);
}

// Timer function
function startTimer() {
    timeLeft = TIME_PER_QUESTION;
    updateTimerDisplay();

    // Clear any existing timer
    clearInterval(timer);

    // Start new timer
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeOut();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerElement = document.getElementById("timer");
    if (timerElement) {
        timerElement.textContent = `Time: ${timeLeft}s`;

        // Visual feedback when time is running low
        if (timeLeft <= 5) {
            timerElement.style.color = "#ff4444";
            timerElement.style.fontWeight = "bold";
        } else {
            timerElement.style.color = "";
            timerElement.style.fontWeight = "";
        }
    }
}

function handleTimeOut() {
    // Disable all options
    document.querySelectorAll('input[name="answer"]').forEach((radio) => {
        radio.disabled = true;
    });

    // Show timeout message
    const feedbackElement = document.getElementById("feedback");
    if (feedbackElement) {
        feedbackElement.textContent = "Time's up!";
        feedbackElement.style.color = "#ff4444";
    }

    // Automatically proceed after a short delay
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            showResults();
        }
    }, 500);
}

// Load and display the current question
function loadQuestion(index) {
    const q = questions[index];
    questionElement.textContent = q.question;

    optionsElement.innerHTML = q.options
        .map(
            (opt) => `
        <div class="option">
            <label>
                <input type="radio" name="answer" value="${opt}" />
                <p>${opt}</p>
            </label>
        </div>`
        )
        .join("");

    progressText.textContent = `Question ${index + 1}/${questions.length}`;
    const percent = ((index + 1) / questions.length) * 100;
    progressBar.style.width = `${percent}%`;

    // Disable next button until an option is selected
    nextBtn.disabled = true;

    // Enable next button when an option is selected
    optionsElement.querySelectorAll('input[name="answer"]').forEach((radio) => {
        radio.addEventListener("change", () => {
            nextBtn.disabled = false;
            // Stop the timer when an answer is selected
            clearInterval(timer);
        });
    });

    // Start the timer for this question
    startTimer();

    // Add feedback element if it doesn't exist
    if (!document.getElementById("feedback")) {
        const feedbackDiv = document.createElement("div");
        feedbackDiv.id = "feedback";
        feedbackDiv.style.margin = "10px 0";
        feedbackDiv.style.minHeight = "20px";
        questionElement.parentNode.insertBefore(
            feedbackDiv,
            questionElement.nextSibling
        );
    } else {
        document.getElementById("feedback").textContent = "";
    }

    // Add timer display if it doesn't exist
    if (!document.getElementById("timer")) {
        const timerDiv = document.createElement("div");
        timerDiv.id = "timer";
        timerDiv.style.margin = "10px 0";
        timerDiv.style.fontWeight = "bold";
        questionElement.parentNode.insertBefore(
            timerDiv,
            questionElement.nextSibling
        );
    }
}

// Update score display
function updateScore() {
    if (scoreElement) {
        scoreElement.textContent = `Score: ${score}/${currentQuestionIndex}`;
    }
}

function handleNextQuestion() {
    const selected = document.querySelector('input[name="answer"]:checked');
    const feedbackElement = document.getElementById("feedback");

    if (!selected) return;

    const answer = selected.value;
    const isCorrect = answer === questions[currentQuestionIndex].answer;

    if (isCorrect) {
        score++;
        updateScore();
        if (feedbackElement) {
            feedbackElement.textContent = "Correct!";
            feedbackElement.style.color = "#4CAF50";
        }
    } else {
        if (feedbackElement) {
            feedbackElement.textContent = `Incorrect! The correct answer is: ${questions[currentQuestionIndex].answer}`;
            feedbackElement.style.color = "#ff4444";
        }
    }

    // Clear the timer
    clearInterval(timer);

    // Delay next question to show feedback
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            showResults();
        }
    }, 1500);
}

// Show final results
function showResults() {
    saveToLocalStorage(score, selectedDifficulty);
    clearInterval(timer); // Clear the timer when quiz is completed
    const percentage = Math.round((score / questions.length) * 100);
    let message = "";

    if (percentage >= 80) {
        message = "Excellent work!";
    } else if (percentage >= 60) {
        message = "Good job!";
    } else if (percentage >= 40) {
        message = "Not bad!";
    } else {
        message = "Keep practicing!";
    }

    quizContent.innerHTML = `
        <div class="quiz-results">
            <h2>Quiz Completed!</h2>
            <p class="final-score">Your score: ${score}/${questions.length} (${percentage}%)</p>
            <p class="message">${message}</p>
            <p class="difficulty">Difficulty: ${selectedDifficulty}</p>
            <button id="restart-btn" class="next-btn">Restart Quiz</button>
        </div>
    `;

    document.getElementById("restart-btn").addEventListener("click", () => {
        window.location.reload();
    });
}

const saveToLocalStorage = (score, selectedDifficulty) => {
    localStorage.setItem("heigestScore", score);
    localStorage.setItem("selectedDifficulty", selectedDifficulty);
};

// Event Listeners
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", handleNextQuestion);

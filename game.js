
const exercises = [
    // Nivel Básico
    { question: "2 + 2", answer: "4", difficulty: "easy" },
    { question: "5 * 6", answer: "30", difficulty: "easy" },
    { question: "12 / 4", answer: "3", difficulty: "easy" },
    { question: "25 + 15", answer: "40", difficulty: "easy" },
    { question: "35 * 2", answer: "70", difficulty: "easy" },
    { question: "10 - 3", answer: "7", difficulty: "easy" },
    { question: "14 + 6", answer: "20", difficulty: "easy" },
    { question: "7 * 9", answer: "63", difficulty: "easy" },
    { question: "18 / 3", answer: "6", difficulty: "easy" },
    { question: "9 * 4", answer: "36", difficulty: "easy" },

    // Nivel Intermedio
    { question: "x + 5 = 12, ¿cuál es el valor de x?", answer: "7", difficulty: "medium" },
    { question: "3x - 4 = 11, ¿cuál es el valor de x?", answer: "5", difficulty: "medium" },
    { question: "2(x - 3) = 10, ¿cuál es el valor de x?", answer: "8", difficulty: "medium" },
    { question: "5x + 7 = 22, ¿cuál es el valor de x?", answer: "3", difficulty: "medium" },
    { question: "x^2 - 4 = 0, ¿cuál es el valor de x?", answer: "2", difficulty: "medium" },
    { question: "3x^2 + 2x = 0, ¿cuál es el valor de x?", answer: "0, -2/3", difficulty: "medium" },
    { question: "12x - 4 = 5x + 11, ¿cuál es el valor de x?", answer: "x = 15/7", difficulty: "medium" },
    { question: "2x^2 - 6x + 4 = 0, ¿cuál es el valor de x?", answer: "x = 2, 1", difficulty: "medium" },
    { question: "4(x + 3) = 20, ¿cuál es el valor de x?", answer: "2", difficulty: "medium" },
    { question: "x^2 + 6x + 9 = 0, ¿cuál es el valor de x?", answer: "-3", difficulty: "medium" },

    // Nivel Difícil
    { question: "x^2 + 6x + 8 = 0, ¿cuáles son los valores de x?", answer: "-2, -4", difficulty: "hard" },
    { question: "2x^2 - 3x - 5 = 0, ¿cuáles son los valores de x?", answer: "x = (3 ± √(9 + 40)) / 4", difficulty: "hard" },
    { question: "x^2 - 12x + 36 = 0, ¿cuál es el valor de x?", answer: "6", difficulty: "hard" },
    { question: "x^2 - 5x + 6 = 0, ¿cuáles son los valores de x?", answer: "x = 2, 3", difficulty: "hard" },
    { question: "x^2 + 4x - 12 = 0, ¿cuáles son los valores de x?", answer: "x = 2, -6", difficulty: "hard" },
    { question: "3x^2 - 5x + 2 = 0, ¿cuáles son los valores de x?", answer: "x = (5 ± √(25 - 24)) / 6", difficulty: "hard" },
    { question: "x^2 + 7x + 10 = 0, ¿cuáles son los valores de x?", answer: "x = -2, -5", difficulty: "hard" },
    { question: "x^2 + 2x - 8 = 0, ¿cuáles son los valores de x?", answer: "x = 2, -4", difficulty: "hard" },
    { question: "x^2 - 8x + 15 = 0, ¿cuáles son los valores de x?", answer: "x = 3, 5", difficulty: "hard" },
    { question: "x^2 + 3x - 18 = 0, ¿cuáles son los valores de x?", answer: "x = 3, -6", difficulty: "hard" },

    // Nivel Muy Difícil
    { question: "x^2 - 10x + 21 = 0, ¿cuáles son los valores de x?", answer: "x = 3, 7", difficulty: "very hard" },
    { question: "x^2 - 7x + 10 = 0, ¿cuáles son los valores de x?", answer: "x = 2, 5", difficulty: "very hard" },
    { question: "x^2 + 5x - 6 = 0, ¿cuáles son los valores de x?", answer: "x = -6, 1", difficulty: "very hard" },
    { question: "2x^2 + 3x - 5 = 0, ¿cuáles son los valores de x?", answer: "x = (3 ± √(9 + 40)) / 4", difficulty: "very hard" },
    { question: "x^2 + 9x + 18 = 0, ¿cuáles son los valores de x?", answer: "x = -3, -6", difficulty: "very hard" },
    { question: "x^2 - 4x - 21 = 0, ¿cuáles son los valores de x?", answer: "x = 7, -3", difficulty: "very hard" },
    { question: "4x^2 - 12x + 9 = 0, ¿cuál es el valor de x?", answer: "x = 3/2", difficulty: "very hard" },
    { question: "x^2 + 8x - 20 = 0, ¿cuáles son los valores de x?", answer: "x = -4 ± √(16 + 80)", difficulty: "very hard" },
    { question: "3x^2 + 5x - 2 = 0, ¿cuáles son los valores de x?", answer: "x = (5 ± √(25 + 24)) / 6", difficulty: "very hard" },
    { question: "x^2 + 6x + 5 = 0, ¿cuáles son los valores de x?", answer: "x = -1, -5", difficulty: "very hard" }
];

let currentExercise = 0;
let score = 0;
let timer;
let timeLeft = 60;


function showExercise() {
    document.getElementById("question").textContent = exercises[currentExercise].question;
    document.getElementById("answer").value = "";
    document.getElementById("feedback").textContent = "";
    timeLeft = 60;
    updateTimer();
    if (timer) {
        clearInterval(timer);
    }
    startTimer();
}


function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer();
        }
    }, 1000);
}


function updateTimer() {
    document.getElementById("timer").textContent = `Tiempo restante: ${timeLeft}s`;
}


function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const correctAnswer = exercises[currentExercise].answer;

    if (userAnswer === correctAnswer) {
        score += 10; // 10 puntos por cada respuesta correcta
        document.getElementById("feedback").textContent = "¡Respuesta correcta!";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").textContent = "Respuesta incorrecta";
        document.getElementById("feedback").style.color = "red";
    }

    currentExercise++;
    if (currentExercise < exercises.length) {
        setTimeout(() => {
            showExercise();
        }, 2000);
    } else {
        setTimeout(() => {
            endGame();
        }, 2000);
    }
}


function endGame() {
    clearInterval(timer); 
    let resultMessage = "";
    const finalScore = (score / (exercises.length * 10)) * 100;

    if (finalScore >= 70) {
        resultMessage = `¡Misión completada con éxito! Puntaje final: ${finalScore.toFixed(0)}%`;
        document.getElementById("feedback").style.color = "green";
    } else {
        resultMessage = `No completaste la misión, intenta de nuevo. Puntaje final: ${finalScore.toFixed(0)}%`;
        document.getElementById("feedback").style.color = "red";
    }

    document.getElementById("feedback").textContent = resultMessage;
    document.querySelector('.quiz-container').style.display = 'none';
    document.querySelector('.score-container').style.display = 'block';
}


function restartGame() {
    currentExercise = 0;
    score = 0;
    document.querySelector('.score-container').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
    showExercise();
}


showExercise();

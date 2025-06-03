const questions = [


    {
    
        question: "Qual órgão deve atuar na prevenção e no gerenciamento de desastres naturais como as enchentes no Brasil?",
        answers: [
            {id: 1, text: "INMET", correct:false},
            {id: 2, text: "IBGE", correct:false},
            {id: 3, text: "Receita Federal", correct:false},
            {id: 4, text: "Defesa CIvil", correct:true}
        ],
    },

     {
        question: "Como o descarte incorreto de lixo contribui para as enchentes?",
        answers: [
            {id: 1, text: "Aumenta a temperatura da água", correct:false},
            {id: 2, text: "Bloqueia o escoamento da água em bueiros e canais", correct:true},
            {id: 3, text: "Deixa o solo mais fértil", correct:false},
            {id: 4, text: "Faz chover com mais frequência", correct:false}
        ],
    },

     {
        question: "Qual destas doenças é comum após enchentes?",
        answers: [
            {id: 1, text: "Sarampo", correct:false},
            {id: 2, text: "Catapora", correct:false},
            {id: 3, text: "Anemia", correct:false},
            {id: 4, text: "Leptospirose", correct:true}
        ],
    },

     {
        question: "Qual região do Brasil costuma ser mais afetada por enchentes durante o verão?",
        answers: [
            {id: 1, text: "Norte", correct:false},
            {id: 2, text: "Nordeste", correct:false},
            {id: 3, text: "Sudeste", correct:true},
            {id: 4, text: "Centro-Oeste", correct:false}
        ],
    },

     {
        question: "Qual método o estado de São Paulo utiliza para evitar as enchentes nas cidades?",
        answers: [
            {id: 1, text: "Muros de proteção", correct:false},
            {id: 2, text: "Piscinões", correct:true},
            {id: 3, text: "Barreiras contra o mar", correct:false},
            {id: 4, text: "Túneis para água", correct:false}
        ],
    },

     {
        question: "Qual destas ações NÃO contribui para a prevenção de enchentes?",
        answers: [
            {id: 1, text: "Plantio de árvores", correct:false},
            {id: 2, text: "Construção de calçadas permeáveis", correct:false},
            {id: 3, text: "Descarte de lixo em terrenos baldios", correct:true},
            {id: 4, text: "Manutenção de canais de drenagem", correct:false}
        ],
    },

     {
        question: "As mudanças climáticas têm qual efeito sobre as enchentes?",
        answers: [
            {id: 1, text: "Reduzem o número de chuvas no país", correct:false},
            {id: 2, text: "Tornam os rios mais profundos", correct:false},
            {id: 3, text: "Intensificam as chuvas e aumentam a frequência de eventos extremos", correct:true},
            {id: 4, text: "Diminuem a temperatura da água da chuva", correct:false}
        ],
    },

     {
        question: "O que pode ser feito para reduzir os risco de enchentes nas cidades?",
        answers: [
            {id: 1, text: "Construir casas nas margens dos rios", correct:false},
            {id: 2, text: "Reduzir a vegetação urbana", correct:false},
            {id: 3, text: "Aumentar a pavimentação de ruas", correct:false},
            {id: 4, text: "Investir em drenagem e planejamento urbano", correct:true}
        ],
    },

     {
        question: "Quais são os principais sinais de risco antes de uma enchente?",
        answers: [
            {id: 1, text: "Dias muito quentes e secos", correct:false},
            {id: 2, text: "Céu limpo e vento forte", correct:false},
            {id: 3, text: "Nuvens carregadas, rios cheios e chuva constante", correct:true},
            {id: 4, text: "Neve e granizo", correct:false}
        ],
    },

     {
        question: "Como o uso de calçadas e ruas asfaltadas pode contribuir para enchentes?",
        answers: [
            {id: 1, text: "Absorvem toda a água da chuva", correct:false},
            {id: 2, text: "Permitem o escoamento natural da água", correct:false},
            {id: 3, text: "Impedem a infiltração da água no solo", correct:true},
            {id: 4, text: "Aumentam a vegetação urbana", correct:false}
        ],
    },
]

const questionElement = document.getElementById("question");
const answersButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none";
    while (answersButtons.firstChild) {
        answersButtons.removeChild(answersButtons.firstChild);
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answersButtons.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const answers = questions[currentQuestionIndex].answers;
    const correctAnswer = answers.find(answer => answer.correct === true);

    const isCorrect = selectedBtn.dataset.id == correctAnswer.id;

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answersButtons.children).forEach(button => {
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Jogar de novo";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
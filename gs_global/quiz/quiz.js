const perguntasQuiz = [
    {
        pergunta: "Qual órgão deve atuar na prevenção e no gerenciamento de desastres naturais como as enchentes no Brasil?",
        respostas: [
            {id: 1, texto: "INMET", correta: false},
            {id: 2, texto: "IBGE", correta: false},
            {id: 3, texto: "Receita Federal", correta: false},
            {id: 4, texto: "Defesa Civil", correta: true}
        ],
    },
    {
        pergunta: "Como o descarte incorreto de lixo contribui para as enchentes?",
        respostas: [
            {id: 1, texto: "Aumenta a temperatura da água", correta: false},
            {id: 2, texto: "Bloqueia o escoamento da água em bueiros e canais", correta: true},
            {id: 3, texto: "Deixa o solo mais fértil", correta: false},
            {id: 4, texto: "Faz chover com mais frequência", correta: false}
        ],
    },
    {
        pergunta: "Qual destas doenças é comum após enchentes?",
        respostas: [
            {id: 1, texto: "Sarampo", correta: false},
            {id: 2, texto: "Catapora", correta: false},
            {id: 3, texto: "Anemia", correta: false},
            {id: 4, texto: "Leptospirose", correta: true}
        ],
    },
    {
        pergunta: "Qual região do Brasil costuma ser mais afetada por enchentes durante o verão?",
        respostas: [
            {id: 1, texto: "Norte", correta: false},
            {id: 2, texto: "Nordeste", correta: false},
            {id: 3, texto: "Sudeste", correta: true},
            {id: 4, texto: "Centro-Oeste", correta: false}
        ],
    },
    {
        pergunta: "Qual método o estado de São Paulo utiliza para evitar as enchentes nas cidades?",
        respostas: [
            {id: 1, texto: "Muros de proteção", correta: false},
            {id: 2, texto: "Piscinões", correta: true},
            {id: 3, texto: "Barreiras contra o mar", correta: false},
            {id: 4, texto: "Túneis para água", correta: false}
        ],
    },
    {
        pergunta: "Qual destas ações NÃO contribui para a prevenção de enchentes?",
        respostas: [
            {id: 1, texto: "Plantio de árvores", correta: false},
            {id: 2, texto: "Construção de calçadas permeáveis", correta: false},
            {id: 3, texto: "Descarte de lixo em terrenos baldios", correta: true},
            {id: 4, texto: "Manutenção de canais de drenagem", correta: false}
        ],
    },
    {
        pergunta: "As mudanças climáticas têm qual efeito sobre as enchentes?",
        respostas: [
            {id: 1, texto: "Reduzem o número de chuvas no país", correta: false},
            {id: 2, texto: "Tornam os rios mais profundos", correta: false},
            {id: 3, texto: "Intensificam as chuvas e aumentam a frequência de eventos extremos", correta: true},
            {id: 4, texto: "Diminuem a temperatura da água da chuva", correta: false}
        ],
    },
    {
        pergunta: "O que pode ser feito para reduzir os riscos de enchentes nas cidades?",
        respostas: [
            {id: 1, texto: "Construir casas nas margens dos rios", correta: false},
            {id: 2, texto: "Reduzir a vegetação urbana", correta: false},
            {id: 3, texto: "Aumentar a pavimentação de ruas", correta: false},
            {id: 4, texto: "Investir em drenagem e planejamento urbano", correta: true}
        ],
    },
    {
        pergunta: "Quais são os principais sinais de risco antes de uma enchente?",
        respostas: [
            {id: 1, texto: "Dias muito quentes e secos", correta: false},
            {id: 2, texto: "Céu limpo e vento forte", correta: false},
            {id: 3, texto: "Nuvens carregadas, rios cheios e chuva constante", correta: true},
            {id: 4, texto: "Neve e granizo", correta: false}
        ],
    },
    {
        pergunta: "Como o uso de calçadas e ruas asfaltadas pode contribuir para enchentes?",
        respostas: [
            {id: 1, texto: "Absorvem toda a água da chuva", correta: false},
            {id: 2, texto: "Permitem o escoamento natural da água", correta: false},
            {id: 3, texto: "Impedem a infiltração da água no solo", correta: true},
            {id: 4, texto: "Aumentam a vegetação urbana", correta: false}
        ],
    },
];

// Pegando os elementos do HTML
const divPergunta = document.getElementById("question");
const divRespostas = document.getElementById("answer-buttons");
const botaoProx = document.getElementById("next-btn");
const formContato = document.getElementById("form-contato");

// Variáveis para controlar o quiz
let perguntaAtual = 0;
let pontos = 0;
let jaRespondeu = false;

// Começa o quiz
function comecarQuiz() {
    perguntaAtual = 0;
    pontos = 0;
    botaoProx.innerText = "Próximo";
    botaoProx.style.display = "none";
    formContato.style.display = "none";
    mostrarPerguntaQuiz();
}

// Limpa as respostas antigas
function limparTudo() {
    botaoProx.style.display = "none";
    jaRespondeu = false;
    while (divRespostas.firstChild) {
        divRespostas.removeChild(divRespostas.firstChild);
    }
}

// Mostra a pergunta e as opções
function mostrarPerguntaQuiz() {
    limparTudo();
    const perguntaObj = perguntasQuiz[perguntaAtual];
    divPergunta.innerText = `${perguntaAtual + 1}. ${perguntaObj.pergunta}`;

    perguntaObj.respostas.forEach(resp => {
        const botao = document.createElement("button");
        botao.innerText = resp.texto;
        botao.classList.add("btn");
        botao.dataset.id = resp.id;
        botao.addEventListener("click", clicarResposta);
        divRespostas.appendChild(botao);
    });
}

// Quando clica numa resposta
function clicarResposta(e) {
    if (jaRespondeu) return;

    jaRespondeu = true;
    const botaoClicado = e.target;
    const respostas = perguntasQuiz[perguntaAtual].respostas;
    const certa = respostas.find(r => r.correta === true);

    if (botaoClicado.dataset.id == certa.id) {
        botaoClicado.classList.add("correta");
        pontos++;
    } else {
        botaoClicado.classList.add("incorreta");
    }

    botaoProx.style.display = "block";
}

// Mostra o resultado final e o formulário
function mostrarResultado() {
    limparTudo();
    divPergunta.innerText = `Você acertou ${pontos} de ${perguntasQuiz.length}!`;
    botaoProx.innerText = "Jogar de novo";
    botaoProx.style.display = "block";
    formContato.style.display = "block";
}

// Vai pra próxima pergunta ou mostra o resultado
function proximaPerguntaQuiz() {
    if (!jaRespondeu) return;
    perguntaAtual++;
    if (perguntaAtual < perguntasQuiz.length) {
        mostrarPerguntaQuiz();
    } else {
        mostrarResultado();
    }
}

// Clique no botão próximo
botaoProx.addEventListener("click", () => {
    if (perguntaAtual < perguntasQuiz.length) {
        proximaPerguntaQuiz();
    } else {
        comecarQuiz();
    }
});

// Envio do formulário
formContato.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome && email && mensagem) {
        alert(`Obrigado, ${nome}! Enviado com sucesso.`);
        formContato.reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

// Inicia o quiz quando a página carrega
comecarQuiz();
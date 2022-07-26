console.clear();

const prompt = require("prompt-sync")();

const apresentacao = [
  
];

const perguntas = [
  {
    pergunta: "",
    respostas: [
      "",
      "",
      "",
    ],
  },
  {
    pergunta: " ",
    respostas: [
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  },
  {
    pergunta: " ",
    respostas: [
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  },
  {
    pergunta:
      " ",
    respostas: [""],
  },
  {
    pergunta: " - ",
    respostas: [
      "",
      "",
      "",
    ],
  },
];

let statusPersonagem = {
  saude: 100,
  fome: 50,
  felicidade: 50,
  cansaco: 0,
  sono: 0,
};

function caminhar() {
  statusPersonagem.fome += 5;
  statusPersonagem.felicidade -= 7;
  statusPersonagem.cansaco += 5;
  statusPersonagem.sono += 10;
}

function correr() {
  statusPersonagem.fome += 12;
  statusPersonagem.felicidade += 10;
  statusPersonagem.cansaco += 12;
  statusPersonagem.sono += 5;
}

function brincar() {
  statusPersonagem.fome += 5;
  statusPersonagem.felicidade += 15;
  statusPersonagem.cansaco += 10;
  statusPersonagem.sono += 2;
}

function descansar() {
  statusPersonagem.fome -= 15;
  statusPersonagem.felicidade += 5;
  statusPersonagem.cansaco -= 20;
  statusPersonagem.sono += 2;
}

function comer() {
  statusPersonagem.fome -= 25;
  statusPersonagem.felicidade += 5;
  statusPersonagem.cansaco -= 20;
  statusPersonagem.sono += 2;
}

function dormir() {
  statusPersonagem.felicidade += 2;
  statusPersonagem.cansaco -= 25;
  statusPersonagem.sono -= 25;
}

function machucar() {
  statusPersonagem.saude -= 25;
  statusPersonagem.fome += 5;
  statusPersonagem.felicidade -= 15;
  statusPersonagem.cansaco += 15;
  statusPersonagem.sono += 10;
}

function curar() {
  statusPersonagem.saude += 25;
  statusPersonagem.fome += 2;
  statusPersonagem.felicidade += 20;
  statusPersonagem.cansaco -= 10;
  statusPersonagem.sono += 2;
}

function normalizar() {
  Object.keys(statusPersonagem).map(function (key, index) {
    if (statusPersonagem[key] < 0) {
      statusPersonagem[key] = 0;
    }
  });
  Object.keys(statusPersonagem).map(function (key, index) {
    if (statusPersonagem[key] > 100) {
      statusPersonagem[key] = 100;
    }
  });
}

function mostrarStatus() {
  normalizar();
  console.log(`
Saude:${statusPersonagem.saude} Fome:${statusPersonagem.fome} Felicidade:${statusPersonagem.felicidade} Cansaco:${statusPersonagem.cansaco} Sono:${statusPersonagem.sono}
`);
}

console.log(apresentacao[0]);

console.log();
prompt("Pressione ENTER para continuar.");
console.clear();

let numPergunta = 0;
function perguntar(numPergunta) {
  let cont = 0;
  let tarefa = 0;
  do {
    mostrarStatus();
    console.log(`${apresentacao[numPergunta + 1]} Temos:\n`);

    cont = 0;
    while (cont < perguntas[numPergunta].respostas.length) {
      console.log(`(${cont + 1}) ${perguntas[numPergunta].respostas[cont]}`);
      cont++;
    }

    tarefa = +prompt(`\n${perguntas[numPergunta].pergunta} `);
  } while (tarefa <= 0 || tarefa > cont || isNaN(tarefa));
}

function verificaFome() {
  if (statusPersonagem.fome >= 85) {
    perguntar(4);
    caminhar();
    comer();
  }
}

function verificaCansaco() {
  if (statusPersonagem.cansaco >= 85) {
    perguntar(3);
    descansar();
  }
}

function verificaSono() {
  if (statusPersonagem.sono >= 85) {
    console.log("");
    ();
  }
}

verificaFome();
verificaCansaco();
perguntar(numPergunta++);
caminhar();
comer();

console.log(statusPersonagem.sono);

while (statusPersonagem.sono <= 85) {

  verificaFome();
  verificaCansaco();
  perguntar(numPergunta);
  caminhar();
  brincar();
  if (numPergunta == 1) {
    numPergunta = 2;
  } else {
    numPergunta = 1;
  }
}

verificaFome();
verificaCansaco();
verificaSono();

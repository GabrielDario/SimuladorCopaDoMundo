let span = document.querySelector("span");
let next = document.getElementById("next");
let button = document.querySelector("button");


let todosOsTimes = ['Qatar', 'Equador', 'Senegal', 'Holanda',
  'Inglaterra', 'Estados Unidos', 'Irã', 'Gales',
  'Argentina', 'Polonia', 'México', 'Arábia Saudita',
  'França', 'Austrália', 'Tunísia', 'Dinamarca',
  'Alemanha', 'Costa Rica', 'Espanha', 'Japão',
  'Bélgica', 'Canada', 'Croácia', 'Marrocos',
  'Brasil', 'Camarões', 'Sérvia', 'Suiça',
  'Coréia do Sul', 'Gana', 'Portugal', 'Uruguai'];

let grupoA = [];
let grupoB = [];
let grupoC = [];
let grupoD = [];
let grupoE = [];
let grupoF = [];
let grupoG = [];
let grupoH = [];
let tirandoTime = todosOsTimes.length;

let timeA, timeB, timeC, timeD;
let separarRodada = '---------------------'

let nTimes = 4;
let gols = Math.floor(Math.random() * 165 + 1);
let rodadas = 0;
let formarRodadaTimes = [];
let juntarTimesRodada = [];

button.addEventListener('click', e => {
  fazerGrupos(grupoA);
  fazerGrupos(grupoB);
  fazerGrupos(grupoC);
  fazerGrupos(grupoD);
  fazerGrupos(grupoE);
  fazerGrupos(grupoF);
  fazerGrupos(grupoG);
  fazerGrupos(grupoH);

  console.log('grupoA:');
  console.log(grupoA);
  console.log('grupoB:');
  console.log(grupoB);
  console.log('grupoC:');
  console.log(grupoC);
  console.log('grupoD:');
  console.log(grupoD);

  console.log('grupoE:');
  console.log(grupoE);
  console.log('grupoF:');
  console.log(grupoF);
  console.log('grupoG:');
  console.log(grupoG);
  console.log('grupoH:');
  console.log(grupoH);
  console.log('Sobrou');
  console.log(todosOsTimes);
})

const fazerGrupos = (grupo) => {
  do {
    let sortearNumber = Math.floor(Math.random() * tirandoTime);
    grupo.push({ nome: todosOsTimes[sortearNumber], pontos: 0, saldoGols: 0 })
    todosOsTimes = todosOsTimes.filter(item => item != todosOsTimes[sortearNumber]);
    tirandoTime--
  } while (grupo.length < 4);
}


next.addEventListener("click", e => {
  fazerGrupos(grupoA);
  fazerGrupos(grupoB);
  fazerGrupos(grupoC);
  fazerGrupos(grupoD);
  fazerGrupos(grupoE);
  fazerGrupos(grupoF);
  fazerGrupos(grupoG);
  fazerGrupos(grupoH);
  console.log('grupoA');
  console.log(grupoA);

  jogarGrupo(grupoA);
  
})

const gerarRodada = (grupo) => {
  let timesCopia = [];
  if(grupo.length > 4) {
    grupo.pop();
  }
  for (i = 0; i < nTimes; i++) {
     timesCopia.push(grupo[i].nome);
   }
  timeA = grupo[Math.floor(Math.random() * 4)].nome;
  timesCopia = timesCopia.filter(item => item != timeA);


  if (rodadas == 0) {
    timeB = timesCopia[Math.floor(Math.random() * 3)];
    timesCopia = timesCopia.filter(item => item != timeB);

    timeC = timesCopia[Math.floor(Math.random() * 2)];
    timesCopia = timesCopia.filter(item => item != timeC);

    timeD = timesCopia[Math.floor(Math.random() * 1)];
    timesCopia = timesCopia.filter(item => item != timeD);

    formarRodadaTimes.push(timeA, timeB, timeC, timeD);
    juntarTimesRodada.push(timeA + timeB, timeC + timeD)
  
  }

  verificarRodadaRepetida(timesCopia, grupo);
}

const gerarGols = (gols) => {
  gols = Math.floor(Math.random() * 165 + 1);
  if (gols > 0 && gols <= 80) {
    gols = 0;
  } else if (gols > 80 && gols <= 100) {
    gols = 1;
  } else if (gols > 100 && gols <= 125) {
    gols = 2;
  } else if (gols > 125 && gols <= 140) {
    gols = 3;
  } else if (gols > 140 && gols <= 150) {
    gols = 4;
  } else if (gols > 150 && gols <= 155) {
    gols = 5;
  } else if (gols > 155 && gols <= 159) {
    gols = 6;
  } else if (gols > 159 && gols <= 162) {
    gols = 7;
  } else if (gols > 162 && gols <= 164) {
    gols = 8;
  } else if (gols == 165) {
    gols = 9;
  }
  return gols;
}

let verificarRodadaRepetida = (timesCopia, grupo) => {
  if (rodadas == 1) {
    let timeAx = formarRodadaTimes.indexOf(timeA);
    if (timeAx == 0) {
      segundaRodada(timesCopia, 1);
    } else if (timeAx == 1) {
      segundaRodada(timesCopia, 0);
    } else if (timeAx == 2) {
      segundaRodada(timesCopia, 3);
    } else if (timeAx == 3) {
      segundaRodada(timesCopia, 2);
    }

  } else if (rodadas == 2) {
  
    let i = 0;

    let verificando = false;

    while (verificando == false) {
      let nomeRodada = timeA + timesCopia[i];
      let nomeRodadaInverso = timesCopia[i] + timeA;

      let jaJogou = juntarTimesRodada.indexOf(nomeRodada);
      let jaJogou2 = juntarTimesRodada.indexOf(nomeRodadaInverso);

      if (jaJogou == -1 && jaJogou2 == -1) {
        verificando = true;
      }
      timeB = timesCopia[i]

      i++;
    };
    timesCopia = timesCopia.filter(item => item != timeB);

    timeC = timesCopia[Math.floor(Math.random() * 2)];
    timesCopia = timesCopia.filter(item => item != timeC);
    timeD = timesCopia[0];
    formarRodadaTimes.push(timeA, timeB, timeC, timeD);
    juntarTimesRodada.push(timeA + timeB, timeC + timeD);

  }

}

let segundaRodada = (timesCopia, x,grupo) => {
  timesCopia = timesCopia.filter(item => item != formarRodadaTimes[x]);
  timeB = timesCopia[Math.floor(Math.random() * 2)]
  timesCopia = timesCopia.filter(item => item != timeB);
  timesCopia.push(formarRodadaTimes[x])

  timeC = timesCopia[Math.floor(Math.random() * 2)];
  timesCopia = timesCopia.filter(item => item != timeC);
  timeD = timesCopia[0];
  formarRodadaTimes.push(timeA, timeB, timeC, timeD);
  juntarTimesRodada.push(timeA + timeB, timeC + timeD);
}

const verificandoResultados = (gerandoTextoRodada,grupo) => {
  
  let timesCopia = [];
  for (i = 0; i < nTimes; i++) {
    timesCopia.push(grupo[i].nome);
  }
  const gols = gerandoTextoRodada.match(/[0-9]/g);
 

  if (gols[0] > gols[1]) {  //Primeiro Jogo
    gerenciarPontosGols(timesCopia, timeA, timeB, gols[0], gols[1],grupo);
  } else if (gols[0] < gols[1]) {
    gerenciarPontosGols(timesCopia, timeB, timeA, gols[1], gols[0], grupo);
  } else { // EMPATE PRIMEIRO JOGO
    gerenciarPontosGols(timesCopia, timeA, timeB, gols[0], gols[1],grupo);
  }

  if (gols[2] > gols[3]) { //Segundo Jogo
    gerenciarPontosGols(timesCopia, timeC, timeD, gols[2], gols[3], grupo);
  } else if (gols[2] < gols[3]) {
    gerenciarPontosGols(timesCopia, timeD, timeC, gols[3], gols[2], grupo);
  } else {// EMPATE SEGUNDO JOGO
    gerenciarPontosGols(timesCopia, timeC, timeD, gols[2], gols[3] , grupo);

  }
};


let fazerTabela = (grupo) => {
  if(grupo.length > 4) {
    grupo.pop();
  }
  let ordemGrupo = grupo;
  ordemGrupo.sort(function (b, a) {
    if (a.pontos > b.pontos) {
      return 1;
    }
    if (a.pontos < b.pontos) {
      return -1;
    }
    return 0;
  });
  for (i = 0; i < ordemGrupo.length - 1; i++) {
    if (ordemGrupo[i].pontos == ordemGrupo[i + 1].pontos) {
      if (ordemGrupo[i].saldoGols < ordemGrupo[i + 1].saldoGols) {
        let copairObjeto = ordemGrupo[i + 1];
        ordemGrupo[i + 1] = ordemGrupo[i];
        ordemGrupo[i] = copairObjeto;
      }
    }
  }


  return ordemGrupo;
}

const gerenciarPontosGols = (timesCopia, primeiroTime, segundoTime, golsPrimeiroTime, golsSegundoTime, grupo) => {

  if (golsPrimeiroTime == golsSegundoTime) {
    let posicaoA = timesCopia.indexOf(primeiroTime);
    let posicaoB = timesCopia.indexOf(segundoTime);

    grupo[posicaoA].pontos = grupo[posicaoA].pontos + 1;
    grupo[posicaoB].pontos = grupo[posicaoB].pontos + 1;
  } else {
    let posicao1 = timesCopia.indexOf(primeiroTime);
    let posicao2 = timesCopia.indexOf(segundoTime);
 
    grupo[posicao1].pontos = grupo[posicao1].pontos + 3;

    grupo[posicao1].saldoGols = grupo[posicao1].saldoGols + Number(golsPrimeiroTime - golsSegundoTime);
    grupo[posicao2].saldoGols = grupo[posicao2].saldoGols + Number(golsSegundoTime - golsPrimeiroTime);
  }
}

const jogarGrupo = (grupo) => {

  if (rodadas < 3) {
    gerarRodada(grupo);
    let gerandoTextoRodada = timeA + ' ' + gerarGols(gols) + ' x ' + gerarGols(gols) + ' ' + timeB + '\n'
      + timeC + ' ' + gerarGols(gols) + ' x ' + gerarGols(gols) + ' ' + timeD + '\n \n';

    verificandoResultados(gerandoTextoRodada,grupo);
    span.innerText = span.innerText + Number(rodadas + 1) + 'º RODADA \n' +
      separarRodada + '\n' + gerandoTextoRodada;
  
  } else {
    let orderGrupo = fazerTabela(grupo);
  
    span.innerText = 'Lista de resultados\n' + separarRodada + '\n'
      + 'Lugar.......Time.......Pontos.......Saldo de gols\n';
    for (let i = 0; i < orderGrupo.length; i++) {
      span.innerText = span.innerText +
        Number(i + 1) + 'º .......' +
        orderGrupo[i].nome + ' .......' +
        orderGrupo[i].pontos + ' ..............' +
        orderGrupo[i].saldoGols + '\n';
    }

  }
 
  rodadas++;
}

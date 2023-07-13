let span = document.querySelector("span");
let next = document.getElementById("next");

let timeA, timeB, timeC, timeD;
let separarRodada = '---------------------'
let times = [
  { nome: 'Brasil', pontos: 0,  saldoGols: 0 },
  { nome: 'Argentina', pontos: 0, saldoGols: 0 },
  { nome: 'França', pontos: 0, saldoGols: 0 },
  { nome: 'Equador', pontos: 0,  saldoGols: 0 }];
let nTimes = times.length;
let gols = Math.floor(Math.random() * 165 + 1);
let rodadas = 0;
let formarRodadaTimes = [];
let juntarTimesRodada = [];


next.addEventListener("click", e => {
  if (rodadas < 3) {
    gerarRodada();
    let gerandoTextoRodada = timeA + ' ' + gerarGols(gols) + ' x ' + gerarGols(gols) + ' ' + timeB + '\n'
      + timeC + ' ' + gerarGols(gols) + ' x ' + gerarGols(gols) + ' ' + timeD + '\n \n';

    verificandoResultados(gerandoTextoRodada);
    span.innerText = span.innerText + Number(rodadas + 1) + 'º RODADA \n' +
      separarRodada + '\n' + gerandoTextoRodada;
  } else {
    let orderGrupo = fazerTabela();
    console.log(orderGrupo);
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
})

const gerarRodada = () => {
  let timesCopia = [];

  for (i = 0; i < nTimes; i++) {
    timesCopia.push(times[i].nome);
  }
  timeA = timesCopia[Math.floor(Math.random() * 4)];
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

  verificarRodadaRepetida(timesCopia);
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

let verificarRodadaRepetida = (timesCopia) => {
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

let segundaRodada = (timesCopia, x) => {
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

const verificandoResultados = (gerandoTextoRodada) => {
  let timesCopia = [];
  for (i = 0; i < nTimes; i++) {
    timesCopia.push(times[i].nome);
  }
  const gols = gerandoTextoRodada.match(/[0-9]/g);


  if (gols[0] > gols[1]) {  //Primeiro Jogo
    gerenciarPontosGols(timesCopia,timeA,timeB,gols[0],gols[1]);
  } else if (gols[0] < gols[1]) {
    gerenciarPontosGols(timesCopia, timeB, timeA, gols[1], gols[0]);
  } else { // EMPATE PRIMEIRO JOGO
    gerenciarPontosGols(timesCopia, timeA, timeB);
  }

  if (gols[2] > gols[3]) { //Segundo Jogo
    gerenciarPontosGols(timesCopia, timeC, timeD, gols[2], gols[3]);
  } else if (gols[2] < gols[3]) {
    gerenciarPontosGols(timesCopia, timeD ,timeC, gols[3], gols[2]);
  } else {// EMPATE SEGUNDO JOGO
    gerenciarPontosGols(timesCopia, timeC, timeD);
  
  }
console.log(times)
};


let fazerTabela = () => {
  let ordemGrupo = times;
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

const gerenciarPontosGols = (timesCopia,primeiroTime,SegundoTime,golsPrimeiroTime,golsSegundoTime) => {

  if (golsPrimeiroTime == golsSegundoTime) {
    let posicaoA = timesCopia.indexOf(primeiroTime);
    let posicaoB = timesCopia.indexOf(SegundoTime);

    times[posicaoA].pontos = times[posicaoA].pontos + 1;
    times[posicaoB].pontos = times[posicaoB].pontos + 1;
  }else {
  let posicao1 = timesCopia.indexOf(primeiroTime);
  let posicao2 = timesCopia.indexOf(SegundoTime);

  times[posicao1].pontos = times[posicao1].pontos + 3;

  times[posicao1].saldoGols = times[posicao1].saldoGols + Number(golsPrimeiroTime - golsSegundoTime);
  times[posicao2].saldoGols = times[posicao2].saldoGols + Number(golsSegundoTime - golsPrimeiroTime);
  }
}
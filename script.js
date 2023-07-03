let span = document.querySelector("span");
let next = document.getElementById("next");

let timeA, timeB, timeC, timeD;
let separarRodada = '---------------------'
let times = ['Brasil', 'Argentina', 'França', 'Equador'];
let gols = Math.floor(Math.random() * 165 + 1);
let rodadas = 0;
let formarRodadaTimes = [];
let juntarTimesRodada = [];
next.addEventListener("click", e => {
  gerarRodada();
  span.innerText = span.innerText + Number(rodadas + 1) + 'º RODADA \n' +
    separarRodada + '\n' +
    timeA + ' ' + gerarGols(gols) + ' x ' + gerarGols(gols) + ' ' + timeB + '\n'
    + timeC + ' ' + gerarGols(gols) + ' x ' + gerarGols(gols) + ' ' + timeD + '\n \n';
  rodadas++;
})

const gerarRodada = () => {
  let timesCopia = times;

  timeA = timesCopia[Math.floor(Math.random() * 4)];
  timesCopia = timesCopia.filter(item => item != timeA);
  if (rodadas == 0) {
    timeB = timesCopia[Math.floor(Math.random() * 3)];
  }

  verificarRodadaRepetida(timesCopia);
  console.log(timeB)

  timeC = timesCopia[Math.floor(Math.random() * 2)];
  timesCopia = timesCopia.filter(item => item != timeC);

  timeD = timesCopia[Math.floor(Math.random() * 1)];
  timesCopia = timesCopia.filter(item => item != timeD);

  formarRodadaTimes.push(timeA, timeB, timeC, timeD);
  juntarTimesRodada.push(timeA + timeB, timeC + timeD)

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

  if (rodadas == 0) {
  } else if (rodadas == 1) {
    let timeAx = formarRodadaTimes.indexOf(timeA);
    if (timeAx == 0) {
      timesCopia = timesCopia.filter(item => item != formarRodadaTimes[1]);
      timeB = timesCopia[Math.floor(Math.random() * 2)]
    } else if (timeAx == 1) {
      timesCopia = timesCopia.filter(item => item != formarRodadaTimes[0]);
      timeB = timesCopia[Math.floor(Math.random() * 2)]
    } else if (timeAx == 2) {
      timesCopia = timesCopia.filter(item => item != formarRodadaTimes[3]);
      timeB = timesCopia[Math.floor(Math.random() * 2)]
    } else if (timeAx == 3) {
      timesCopia = timesCopia.filter(item => item != formarRodadaTimes[2]);
      timeB = timesCopia[Math.floor(Math.random() * 2)]
    }

  } else if (rodadas == 2) {
    let timeAx = formarRodadaTimes.indexOf(timeA);
    console.log(timeA);
    console.log(timesCopia);
    console.log(juntarTimesRodada)


    let nomeRodada = timeA + timesCopia[0];
    let nomeRodadaInverso = timesCopia[0] + timeA;
    console.log(nomeRodada);
    console.log(nomeRodadaInverso);

    let jaJogou = juntarTimesRodada.indexOf(nomeRodada);
    let jaJogou2 = juntarTimesRodada.indexOf(nomeRodadaInverso);
    console.log(jaJogou, jaJogou2)
    if (jaJogou == -1 && jaJogou2 == -1) {
      console.log('Nao jogaram');
    } else {
      console.log('Ja jogaram');
      let nomeRodada = timeA + timesCopia[1];
      let nomeRodadaInverso = timesCopia[1] + timeA;
      timeB = timesCopia[1]
    }

  }

}
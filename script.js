let span = document.querySelectorAll("span");
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
let separarRodada = '------------------------------------------'

let gols = Math.floor(Math.random() * 165 + 1);
let rodadas = 0;
let avancandoRodada = 0;
let grupos = 0;
let formarRodadaTimes = [];
let juntarTimesRodada = [];

let timesClassificados = [];

next.addEventListener("click", e => {
  if (grupoA.length == 0) {
    fazerGrupos(grupoA);
    fazerGrupos(grupoB);
    fazerGrupos(grupoC);
    fazerGrupos(grupoD);
    fazerGrupos(grupoE);
    fazerGrupos(grupoF);
    fazerGrupos(grupoG);
    fazerGrupos(grupoH);
  }

  if(avancandoRodada < 12) {
    rodadas = 0;
    jogarGrupo(grupoA);
  
    rodadas = 0;
    jogarGrupo(grupoB);
  
    rodadas = 0;
    jogarGrupo(grupoC);
  
    rodadas = 0;
    jogarGrupo(grupoD);
  
    rodadas = 0;
    jogarGrupo(grupoE);
  
    rodadas = 0;
    jogarGrupo(grupoF);
  
    rodadas = 0;
    jogarGrupo(grupoG);
  
    rodadas = 0;
    jogarGrupo(grupoH);
  
  
    avancandoRodada++;
  
    grupos = 0;
  } else if(avancandoRodada == 12) {
    let montarClassificacao = fazerFaseDeGrupos();
    span[avancandoRodada-1].innerText = 'Fase de Grupos : \n' + separarRodada + '\n' +
     montarClassificacao;
  }
  
})


//Verificar Repetições
let verificarRodadaRepetida = (timeA, grupo) => {
  if (avancandoRodada == 1) {
    let timesCopia = [];

    for (i = 0; i < 4; i++) {
      timesCopia.push(formarRodadaTimes[i + (grupos * 4)]);
    }

    let timeAx = formarRodadaTimes.indexOf(timeA);
    timeAx = timeAx - (grupos * 4);
    timesCopia = timesCopia.filter(item => item != timeA);

    if (timeAx == 0) {
      segundaRodada(timesCopia, 0);
    } else if (timeAx == 1) {
      segundaRodada(timesCopia, 0);
    } else if (timeAx == 2) {
      segundaRodada(timesCopia, 2);
    } else if (timeAx == 3) {
      segundaRodada(timesCopia, 2);
    }

  } else if (avancandoRodada == 2) {
    //VERIFICAR RODADA 3

    console.log(grupo);

    let timesCopia = [];

    for (let i = 0; i < 4; i++) {
      timesCopia.push(formarRodadaTimes[i + (grupos * 4)]);
    }
    let verificando = false;

    let i = 0;
    while (verificando == false) {
      let nomeRodada = timeA + timesCopia[i];
      let nomeRodadaInverso = timesCopia[i] + timeA;

      let jaJogou = juntarTimesRodada.indexOf(nomeRodada);
      let jaJogouInverso = juntarTimesRodada.indexOf(nomeRodadaInverso);
      if (jaJogou == -1 && jaJogouInverso == -1 && timeA !== timesCopia[i]) {
        verificando = true;
      }
      timeB = timesCopia[i]

      i++;
    };
    timesCopia = timesCopia.filter(item => item != timeA);
    timesCopia = timesCopia.filter(item => item != timeB);

    timeC = timesCopia[Math.floor(Math.random() * 2)];
    timesCopia = timesCopia.filter(item => item != timeC);
    timeD = timesCopia[0];
    formarRodadaTimes.push(timeA, timeB, timeC, timeD);
    juntarTimesRodada.push(timeA + timeB, timeC + timeD);

  }

}

let segundaRodada = (timesCopia, x) => {
  let salvandoTimeVoltar = timesCopia[x];

  timesCopia = timesCopia.filter(item => item != salvandoTimeVoltar); //tirando o repetido

  timeB = timesCopia[Math.floor(Math.random() * 2)]; // sorteia os dois times
  timesCopia = timesCopia.filter(item => item != timeB); //tiras

  timesCopia.push(salvandoTimeVoltar);

  timeC = timesCopia[Math.floor(Math.random() * 2)];
  timesCopia = timesCopia.filter(item => item != timeC);
  timeD = timesCopia[Math.floor(Math.random() * 1)];
  formarRodadaTimes.push(timeA, timeB, timeC, timeD);
  juntarTimesRodada.push(timeA + timeB, timeC + timeD);

}






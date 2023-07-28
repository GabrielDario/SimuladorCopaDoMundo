const fazerTabela = (grupo) => {
    if (grupo.length > 4) {
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

const verificandoResultados = (gerandoTextoRodada, grupo) => {

    let timesCopia = [];
    for (i = 0; i < 4; i++) {
        timesCopia.push(grupo[i].nome);
    }
    const gols = gerandoTextoRodada.match(/[0-9]/g);


    if (gols[0] > gols[1]) {  //Primeiro Jogo
        gerenciarPontosGols(timesCopia, timeA, timeB, gols[0], gols[1], grupo);
    } else if (gols[0] < gols[1]) {
        gerenciarPontosGols(timesCopia, timeB, timeA, gols[1], gols[0], grupo);
    } else { // EMPATE PRIMEIRO JOGO
        gerenciarPontosGols(timesCopia, timeA, timeB, gols[0], gols[1], grupo);
    }

    if (gols[2] > gols[3]) { //Segundo Jogo
        gerenciarPontosGols(timesCopia, timeC, timeD, gols[2], gols[3], grupo);
    } else if (gols[2] < gols[3]) {
        gerenciarPontosGols(timesCopia, timeD, timeC, gols[3], gols[2], grupo);
    } else {// EMPATE SEGUNDO JOGO
        gerenciarPontosGols(timesCopia, timeC, timeD, gols[2], gols[3], grupo);

    }
};

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
const jogarGrupo = (grupo) => {

    if (avancandoRodada < 3) {
        gerarRodada(grupo);
        let gerandoTextoRodada = timeA + ' ' + gerarGols(gols) + ' x ' + gerarGols(gols) + ' ' + timeB + '\n'
            + timeC + ' ' + gerarGols(gols) + ' x ' + gerarGols(gols) + ' ' + timeD + '\n \n';

        verificandoResultados(gerandoTextoRodada, grupo);
        span[avancandoRodada].innerText = span[avancandoRodada].innerText + '\nGrupo 0' + (grupos + 1) + '\n' +
            separarRodada + '\n' + gerandoTextoRodada;
        grupos++;

    } else if (avancandoRodada < 12 && avancandoRodada >= 3) {
        if (avancandoRodada == 3) {
            grupos = 0;
        }

        let orderGrupo = fazerTabela(grupo);

        span[avancandoRodada].innerText = 'Lista de resultados\nGrupo 0' + (grupos + 1) + '\n' + separarRodada + '\n'
            + 'Lugar.......Time.......Pontos.......Saldo de gols\n';
        for (let i = 0; i < orderGrupo.length; i++) {
            span[avancandoRodada].innerText = span[avancandoRodada].innerText +
                Number(i + 1) + 'º .......' +
                orderGrupo[i].nome + ' .......' +
                orderGrupo[i].pontos + ' ..............' +
                orderGrupo[i].saldoGols + '\n';
        }
        avancandoRodada++;
        grupos++;
    }
}

const gerarRodada = (grupo) => {

    let timesCopia = [];
    if (grupo.length > 4) {
        grupo.pop();
    }

    for (i = 0; i < 4; i++) {
        timesCopia.push(grupo[i].nome);
    }

    timeA = grupo[Math.floor(Math.random() * 4)].nome;
    timesCopia = timesCopia.filter(item => item != timeA);

    if (avancandoRodada == 0) {
        timeB = timesCopia[Math.floor(Math.random() * 3)];
        timesCopia = timesCopia.filter(item => item != timeB);

        timeC = timesCopia[Math.floor(Math.random() * 2)];
        timesCopia = timesCopia.filter(item => item != timeC);

        timeD = timesCopia[Math.floor(Math.random() * 1)];
        timesCopia = timesCopia.filter(item => item != timeD);

        formarRodadaTimes.push(timeA, timeB, timeC, timeD);
        juntarTimesRodada.push(timeA + timeB, timeC + timeD)

    }

    verificarRodadaRepetida(timeA, grupo);
}

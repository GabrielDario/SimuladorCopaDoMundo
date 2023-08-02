let montandoSemifinais;

let classificados = [];

const fazerFaseDeGrupos = (montar) => {
    let juntarGrupos = [grupoA, grupoB, grupoC, grupoD, grupoE, grupoF, grupoG, grupoH]
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 2; j++) {
            timesClassificados.push({ nome: juntarGrupos[i][j].nome, gols: gerarGols(gols) })
        }
    }

    montandoSemifinais = montarSemifinais(0, 3) + montarSemifinais(4, 7) +
        montarSemifinais(8, 11) + montarSemifinais(12, 15) +
        montarSemifinais(2, 1) + montarSemifinais(6, 5) +
        montarSemifinais(10, 9) + montarSemifinais(14, 13);

    montar = montandoSemifinais;

    eliminarSemifinais();

    return montar;
}

const montarSemifinais = (primeiroTime, SegundoTime) => {
    montar = timesClassificados[primeiroTime].nome + ' ' + timesClassificados[primeiroTime].gols + ' x '
        + timesClassificados[SegundoTime].gols + ' ' + timesClassificados[SegundoTime].nome + '\n'

    return montar;
}

const eliminarSemifinais = () => {
   // Verificar listas para naoi turar

    console.log(timesClassificados);

    classificados = timesClassificados;
    
    compararEliminar(0, 3);
    compararEliminar(4, 7);
    compararEliminar(8, 11);
    compararEliminar(12, 15);

    compararEliminar(2, 1);
    compararEliminar(6, 5);
    compararEliminar(10, 9);
    compararEliminar(14, 13);
    console.log('elimiandios: ');
    console.log(montarEliminados)
}

const compararEliminar = (x, y) => {
    if (timesClassificados[x].gols > timesClassificados[y].gols) {
        alert('Eliminando ' + timesClassificados[y].nome);
        classificados = timesClassificados.splice(x, 1)
    } else if (timesClassificados[x].gols < timesClassificados[y].gols) {
        alert('Eliminando ' + timesClassificados[x].nome);
        classificados = timesClassificados.splice(y, 1)
    } else {
        console.log('Empatou');
    }
    console.log(timesClassificados);

}
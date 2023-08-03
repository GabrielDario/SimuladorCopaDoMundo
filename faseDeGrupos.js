let montarClassificacao;

let classificados = [];

const fazerFaseDeGrupos = (montar) => {
    if(classificados.length == 0) {
        let juntarGrupos = [grupoA, grupoB, grupoC, grupoD, grupoE, grupoF, grupoG, grupoH];

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 2; j++) {
                timesClassificados.push({ nome: juntarGrupos[i][j].nome, gols: gerarGols(gols) })
            }
        }
    
        montarClassificacao = montandoClassificacao(0, 3) + montandoClassificacao(4, 7) +
        montandoClassificacao(8, 11) + montandoClassificacao(12, 15) +
        montandoClassificacao(2, 1) + montandoClassificacao(6, 5) +
        montandoClassificacao(10, 9) + montandoClassificacao(14, 13);
    
        montar = montarClassificacao;
    
        eliminandoOitavas();
    } else if(classificados.length == 8) {
        timesClassificados = classificados;
        montarClassificacao = montandoClassificacao(0,1) + montandoClassificacao(2,3)
        + montandoClassificacao(4,5) + montandoClassificacao(6,7);
        classificados = [];
        montar = montarClassificacao;
        eliminandoQuartas();
    } else if(classificados.length == 4) {
        timesClassificados = classificados;
        montarClassificacao = montandoClassificacao(0,1) + montandoClassificacao(2,3);
        classificados = [];
        montar = montarClassificacao;
        elimimandoSemi();
    }else if(classificados.length == 2) {
        timesClassificados = classificados;
        montarClassificacao = montandoClassificacao(0,1);
        classificados = [];
        montar = montarClassificacao;
        elimimandoFinal();
    }
   

    return montar;
}

const montandoClassificacao = (primeiroTime, SegundoTime) => {

    let montar = ''
    do {
        if (timesClassificados[primeiroTime].gols == timesClassificados[SegundoTime].gols) {
            montar = '(Penalts) TN - ' + timesClassificados[primeiroTime].gols + ' x ' + timesClassificados[SegundoTime].gols ;
            timesClassificados[primeiroTime].gols = gerarGols();
            timesClassificados[SegundoTime].gols = gerarGols();
        }
    
        montar = timesClassificados[primeiroTime].nome + ' ' + timesClassificados[primeiroTime].gols + ' ' + 'x'  + ' '
            + timesClassificados[SegundoTime].gols + ' ' + timesClassificados[SegundoTime].nome + montar + '\n' 


    } while (timesClassificados[primeiroTime].gols === timesClassificados[SegundoTime].gols);

    return montar;
}

const eliminandoOitavas = () => {
    compararEliminar(0, 3);
    compararEliminar(4, 7);
    compararEliminar(8, 11);
    compararEliminar(12, 15);

    compararEliminar(2, 1);
    compararEliminar(6, 5);
    compararEliminar(10, 9);
    compararEliminar(14, 13);

}


const eliminandoQuartas = () => {
    compararEliminar(0, 1);
    compararEliminar(2, 3);
    compararEliminar(4, 5);
    compararEliminar(6, 7);
}

const elimimandoSemi = () => {
    compararEliminar(0, 1);
    compararEliminar(2, 3);
}

const elimimandoFinal = () => {
    compararEliminar(0, 1);
}

//Para remover lista antigar e adicionar novo PROBLEMA PAGAR E BOTAR
const compararEliminar = (x, y) => {
    if (timesClassificados[x].gols > timesClassificados[y].gols) {
        classificados.push({nome: timesClassificados[x].nome,gols: gerarGols()});
    } else if (timesClassificados[x].gols < timesClassificados[y].gols) {
        classificados.push({nome: timesClassificados[y].nome,gols: gerarGols()});
    } 

}
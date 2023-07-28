const fazerGrupos = (grupo) => {
    do {
      let sortearNumber = Math.floor(Math.random() * tirandoTime);
      grupo.push({ nome: todosOsTimes[sortearNumber], pontos: 0, saldoGols: 0 })
      todosOsTimes = todosOsTimes.filter(item => item != todosOsTimes[sortearNumber]);
      tirandoTime--
    } while (grupo.length < 4);
  }
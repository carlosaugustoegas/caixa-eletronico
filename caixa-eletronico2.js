const saque = (valorDoSaque) => {
  const notasEmoedas = [
    { valor: 200, tipo: "notas" },
    { valor: 100, tipo: "notas" },
    { valor: 50, tipo: "notas" },
    { valor: 25, tipo: "notas" },
    { valor: 10, tipo: "notas" },
    { valor: 5, tipo: "notas" },
    { valor: 2, tipo: "notas" },
    { valor: 1, tipo: "moedas" },
    { valor: 0.5, tipo: "moedas" },
    { valor: 0.25, tipo: "moedas" },
    { valor: 0.1, tipo: "moedas" },
    { valor: 0.05, tipo: "moedas" },
    { valor: 0.01, tipo: "moedas" },
  ];

  notasEmoedas.forEach((el) => {
    if (el.tipo === "notas") {
      let qtdNotas = Math.floor(valorDoSaque / el.valor);
      valorDoSaque = valorDoSaque % el.valor;
      console.log(`${qtdNotas} ${el.tipo} de R$ ${el.valor}.00`);
    } else {
      let qtdMoedas = Math.floor(valorDoSaque / el.valor);
      valorDoSaque = (valorDoSaque % el.valor).toFixed(2);
      console.log(`${qtdMoedas} ${el.tipo} de R$ ${el.valor.toFixed(2)}`);
    }
  });
};

saque(568.84);


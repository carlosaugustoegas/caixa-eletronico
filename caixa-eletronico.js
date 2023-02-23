function saque(valor) {
    console.log("NOTAS: ")
    let duzentos = Math.floor(valor / 200);
    valor = valor % 200;
    console.log(`${duzentos} notas de R$ 200.00`);
  
    let cem = Math.floor(valor / 100);
    valor = valor % 100;
    console.log(`${cem} notas de R$ 100.00`);
  
    let cinquenta = Math.floor(valor / 50);
    valor = valor % 50;
    console.log(`${cinquenta} notas de R$ 50.00`);
  
    let vinte = Math.floor(valor / 20);
    valor = valor % 20;
    console.log(`${vinte} notas de R$ 20.00`);
  
    let dez = Math.floor(valor / 10);
    valor = valor % 10;
    console.log(`${dez} notas de R$ 10.00`);
  
    let cinco = Math.floor(valor / 5);
    valor = valor % 5;
    console.log(`${cinco} notas de R$ 5.00`);
  
    let dois = Math.floor(valor / 2);
    valor = valor % 2;
    console.log(`${dois} notas de R$ 2.00`);
  
    console.log("MOEDAS: ")
  
    let umReal = Math.floor(valor / 1)
    valor = (valor % 1).toFixed(2);
    console.log(`${umReal} moeda(s) de R$ 1.00`);
  
    let cinquentaCentavos = Math.floor(valor / 0.50)
    valor = (valor % 0.50).toFixed(2);
    console.log(`${cinquentaCentavos} moeda(s) de R$ 0.50`);
  
    let vinteCincoCentavos = Math.floor(valor / 0.25)
    valor = (valor % 0.25).toFixed(2);
    console.log(`${vinteCincoCentavos} moeda(s) de R$ 0.25`);
  
    let dezCentavos = Math.floor(valor / 0.10)
    valor = (valor % 0.10).toFixed(2);
    console.log(`${dezCentavos} moeda(s) de R$ 0.10`);
  
    let cincoCentavos = Math.floor(valor / 0.05)
    valor = (valor % 0.05).toFixed(2);
    console.log(`${cincoCentavos} moeda(s) de R$ 0.05`);
  
    let umCentavo = Math.floor(valor / 0.01)
    valor = (valor % 0.01).toFixed(2);
    console.log(`${umCentavo} moeda(s) de R$ 0.01`);
  }
  
  saque(267.77);
  
  
  


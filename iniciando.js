//Apenas Criando 4 times e gerando resultados aleatórios  
let times = ['Palmeiras', 'Vasco', 'Guarani', 'Criciuma'];
let gols = Math.floor(Math.random() * 165 + 1);
let a, b,c,d;

a = times[Math.floor(Math.random() * 4)]; //Definiu primeiro time
times = times.filter(item => item != a); //Retirou do cortes

b = times[Math.floor(Math.random() * 3)]; //Definiu segundo time
times = times.filter(item => item != b); //Retirou do cortes

c = times[Math.floor(Math.random() * 2)];
times = times.filter(item => item != c); 

d = times[Math.floor(Math.random() * 1)]; 
times = times.filter(item => item != d); 

const verificarGols = (gols) => {
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
 


console.log(a + " " + verificarGols(gols) + ' x ' + verificarGols(gols) + " " + b);
console.log(c + " " + verificarGols(gols) + ' x ' + verificarGols(gols) + " " + d);
var h = new Date().getHours();
var m = new Date().getMinutes();
// pega informações de hora e minuto do sistema, em tempo real

console.log(`Agora são exatamente ${h}:${m} horas.`);

if (h < 5) {
  console.log("Vai dormir!");
} else if (h < 12) {
  console.log("Bom dia!");
} else if (h <= 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}

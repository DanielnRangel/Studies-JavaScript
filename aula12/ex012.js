var agora = new Date();
var hour = agora.getHours();

console.log(`Agora são exatamente ${hour} horas.`);
if (hour > 5 && hour < 12) {
  console.log("Bom dia!");
} else if (hour >= 12 && hour < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}

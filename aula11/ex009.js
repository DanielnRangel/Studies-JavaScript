vel = 90.5;
console.log(`A velocidade do seu carro é: ${vel}Km/h`);

console.log(`Dirija com cuidado!`);

if (vel > 80) {
  console.log("Diminua a velocidade. Você está acima do limite.");
} else {
  console.log("Você está dentro do limite de velocidade.");
}

msg = vel > 90 ? "Você foi multado." : "Você não foi multado.";

console.log(msg);

pais = "Brasil";

if (pais == "Brasil") {
  console.log("Você é Brasileiro!");
} else {
  console.log("Você é estrangeiro.");
}

// let data = new Date();
// let ano = data.getFullYear();

// function calculo(num) {
//   calc = ano - num;
//   return console.log(`${num} anos atrás foi ${calc}`);
// }

// calculo(5);

// function paridade(num) {
//   // num nesse caso seria um número inserido pelo usuário
//   res = num % 2;
//   if (res == 0) {
//     return console.log(`O número ${num} é par.`);
//   } else {
//     return console.log(`O número ${num} é ímpar.`);
//   }
// }

// paridade(1023);

function fatorial(num) {
  let fat = 1;
  for (let i = num; i > 1; i--) {
    fat *= i;
  }
  return console.log(fat);
}

fatorial(5);

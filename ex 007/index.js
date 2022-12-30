let preçoProduto1 = 13.29;
let preçoProduto2 = 2.80;
let preçoProduto3 = 4.85;

let custo = 0;

if (preçoProduto1 <= 18) {
    console.log("Comprei o produto 1");
    custo += preçoProduto1;
}

if (preçoProduto2 < 3) {
   if (preçoProduto2 >= 1.5) {
    console.log("comprei o produto 2");
    custo += preçoProduto2;
   } else {
    console.log("Tem algo errado com o produto 2");
   }
}

console.log("Comprei o produto 3");
custo += preçoProduto3;
console.log("Gastei: R$", custo)
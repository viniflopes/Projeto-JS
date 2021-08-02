console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)
const idadeComprador = 14; // Alterando a const idadeComprador podemos alterar a permissão do if abaixo
const estaAcompanhada = true; // true sinaliza acompanhado, false desacompanhado, dando condição ou não à condição de comprar passagem
console.log("Destinos Possíveis");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1)
} else if (estaAcompanhada) {
        console.log("Comprador acompanhado");
        listaDeDestinos.splice(1, 1)
    } else {
        console.log("Menor de idade não pode realizar compra sozinho");
    }

console.log(listaDeDestinos);
console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)
const idadeComprador = 18; // Alterando a const idadeComprador podemos alterar a permissão do if abaixo
const estaAcompanhada = false; // true sinaliza acompanhado, false desacompanhado, dando condição ou não à condição de comprar passagem
const temPassagemComprada = true;
const foiEducado = true;

console.log("Destinos Possíveis");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!");
    listaDeDestinos.splice(2, 1)
    } else {
        console.log("Menor de idade não pode realizar compra sozinho");
    }
    console.log("Embarque: \n\n")

if(idadeComprador >= 18 && temPassagemComprada && foiEducado) {
        console.log("Boa viagem");
    } else {
        console.log("Você não pode embarcar");
    } 

console.log(listaDeDestinos);
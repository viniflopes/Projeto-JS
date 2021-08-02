console.log(`Trabalhando com Listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

listaDeDestinos.push(`Curitiba`) //adicionando dinamicamente itens à lista
console.log("Destinos Possíveis");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1)
console.log(listaDeDestinos); //Apagando um elemento, primeiro a posição do item e depois a quantidade


console.log(listaDeDestinos[1]); //Apenas o elemento na posição 1 


console.log("\n Trabalhando com condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)
const idadeComprador = 18; 
const estaAcompanhada = false; 
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos Possíveis");
console.log(listaDeDestinos);

const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true);
    
let contador = 0
let destinoExiste=false;
    while(contador<3){
        if(listaDeDestinos[contador] == destino){
            console.log("Destino existe") 
            destinoExiste=true
            break;
        }
        contador += 1;
    } 

    console.log("Destino existe: ", destinoExiste);

    if(podeComprar && destinoExiste){ 
        console.log("Boa Viagem");
    }else{
        console.log("Desculpe tivemos um erro!");
    }

    //Corpo do FOR
    //for(let i = 0 ; i <3 ; i++){
    //if(listaDeDestinos[contador] == destino){
      //  destinoExiste = true;
//}
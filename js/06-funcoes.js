`use strict`; // MODO RESTRITO/ESTRITO

/* Funções são blocos de código que podem ser executados e reaproveitados em praticamente  qualquer parte de sua aplicação


Usar funções tambem é uma forma de separar a lógica e organizar melhor sua programação.*/




//Sixtaxe tradicional
function linha(){
    console.log("***********");

}

let curso= "Programador web"
let escola= "Senac"
let ano= 2022;

console.log(`Curso ${curso}`);
linha();
console.log(`Escola ${escola}`);
linha();
console.log(`Ano: ${ano}`);

            //Parametros/argumentos
function soma(valor1, valor2){
    let total= valor1+valor2;
    return total; 

}


console.log ( soma(10,5));
//console.log(total); erro, pois é variavél local

let resultado= soma(100,50);
console.log(resultado);

if(resultado<1000){
    console.log("Abaixo da meta")
}


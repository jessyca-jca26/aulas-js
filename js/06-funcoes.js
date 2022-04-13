`use strict`; // MODO RESTRITO/ESTRITO

/* Funções são blocos de código que podem ser executados e reaproveitados em praticamente  qualquer parte de sua aplicação


Usar funções tambem é uma forma de separar a lógica e organizar melhor sua programação.*/




//Sixtaxe tradicional
function linha() {
    console.log("***********");

}

let curso = "Programador web"
let escola = "Senac"
let ano = 2022;

console.log(`Curso ${curso}`);
linha();
console.log(`Escola ${escola}`);
linha();
console.log(`Ano: ${ano}`);

//VERSÃO 1 :
//Parametros/argumentos
/*function soma(valor1, valor2) {
    let total = valor1 + valor2;
    return total;

}
*/

//Versão 2: sixtase ARROW FUCTION(FUNÇÃO SETA/FLECHA)

const soma= (valor1, valor2) =>{
    let total=valor1 + valor2;
    return total;
};



// Arrow Fuction com retorno IMPLICITO
const soma1=(valor1,valor2)=>valor1+valor2;




console.log(soma(150, 55));
//console.log(total); erro, pois é variavél local




let resultado = soma1(100, 50);
//Console.log(total); // erro, pois é variavel local


console.log(resultado);

if (resultado < 1000) {
    console.log("Abaixo da meta")
}

linha();

//Versão: Tradicional
/*function dobra(numero){
    let resultado= numero * 2;
    return resultado;
}; */

/*function dobra(numero){
    return numero *2;
}*/


//Versão2: arrow fuction
/*const dobra=(numero)=>{
    let resultado= numero *2;
    return resultado;
};*/

/*const dobra=(numero)=>{
    return numero * 2;
};*/

//retorno IMPLICITO(remove {} e return)
//obs: Como só temos um parâmetro(numero), pode tirar os()
const dobra=numero=> numero * 2;


console.log( dobra(10));
console.log(dobra(150));

linha();

let nota1= 8.5;
let nota2= 7.4;

const calculaMedia=(n1,n2)=>(n1 + n2) / 2;

console.log( calculaMedia(nota1,nota2));

//Obs: se não tem parametros, tambem precisa usar ()
const linha2=()=> consolole.log("*****");








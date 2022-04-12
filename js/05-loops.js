/* Estruturas tradicionas :

while      -> enquanto
do/while   -> faça enquanto
 for       -> para
*/

// Exemplo loop while(enquanto)
console.log("while");

// Variavel de controle de loop
let i= 1;

while(i <=10){
    console.log(`valor de i: ${i}`);
    i++; //incremento



}

console.log("-----------------");
console.log("do/while");

let j= 100; //variavel de controle 
do{
    console.log(`J vale ${j}`);
    j++

} while(j <=3) // ou j <4


console.log("---------------");
console.log("FOR");


for( let i=1; i <=5; i++ ) {
    console.log(`I vale: ${i}`);


}

console.log("---------------------");

console.log("Loop e Estrura de Dados");


//ARRAY(vetor)

let alunos=["Eduardo", "Vagner", "Thalia", "Claudio", "Jessica"];

for( let i = 0; i <5; i++){
    console.log( alunos [i]);


}

/* sort()-> função para ordenar as arrays */
// console.log( alunos.sort() );


console.log("-------------------------")

console.log("Loops exclusivos do JS");

//For/of: Ótimo para Arrays
for( let aluno of alunos){
    console.log(aluno);
}

//Objeto
let livro= {
    titulo: "Senhor dos Anéis",
    ano:1954,
    volumes:3


};

//for in
for(let dados in livro){
    console.log(livro[dados]);
}
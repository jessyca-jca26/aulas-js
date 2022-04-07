let alunos = ["Tiago", "João", "Marilia", "Vagner"];


// Acessando o aluno armazenado no indice 1
console.log(alunos[1]); // João
console.log(alunos[3]); //Vagner

// Da forma abaixo conseguimos ver o indice 
console.log(alunos);


// Exercicio Array://


let dados = ["Jessica Caroline", 26, "São Paulo", "SP"];

console.log(
    `${dados[0]} é da cidade de ${dados[2]} e tem ${(dados[1])} anos.`
);

console.log("-----------------------");

// Objeto//
// Lista de dados não indexados//

let filme = {
    //Propiedade Filme
    titulo: "Homem Aranha",
    ano: 2021,
    genero: "Ação/Ficção",
    classificação:16,


};

console.log(filme.titulo);
console.log(filme.genero);
console.log(
    `${filme.titulo}foi lançado em ${filme.ano} com 
    classificação de +${filme.classificação}`
);


console.log("-----------------------");

//Exercicios

let pedido = {
    data:"07/04/2021",
    produto:"Playstation",
    preco:2000,
    prazo:7   
     
};

console.log(
    `O produto ${pedido.produto} foi comprado em ${pedido.data} com entrega em ${pedido.prazo} dias utéis` 

);


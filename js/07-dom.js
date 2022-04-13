/*Funções ou (método) de acesso /seleção ao DOM

-getElementById   -> Seleciona UM elemento através do id
-querySelector     -> Seleciona UM elemento através do selector
-querySelectorA11   -> Seleciona VÁRIOS elementos através de um seletor
*/

//Exemplos
//const titulo= document.getElementById("titulo-principal");
const titulo= document.querySelector("#titulo-principal");
const subtitulos= document.querySelectorAll("h2");

console.log(titulo);
console.log(subtitulos);
console.log(subtitulos[0]);

//Leitura do conteúdo
console.log(titulo.textContent);
console.log(subtitulos[1].textContent);

//Alteração do conteúdo
titulo.textContent = "Olá DOM meu velho amigo.";
subtitulos[0].innerHTML="<i>Aprendendo DOM</>";

//Manipulando CSS via JS

// 1) Inline
const pagina=document.querySelector("body");
pagina.style.backgroundColor = "pink";
pagina.style.fontFamily= "verdana";
pagina.style.margin=0;


// 2) Classe 
const primeiroItem= document.querySelector("#lista-editores li:first-child");
console.log(primeiroItem);

primeiroItem.classList.add("destaque-item");
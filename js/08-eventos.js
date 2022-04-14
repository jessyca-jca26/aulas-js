/*EXEMPLO*/
const subExemplo01 = document.querySelector("#subtitulo-exemplo01");
const msg = document.querySelector("#mensagem");

//MOnitor/Ouvinte de Evento
subExemplo01.addEventListener("click", function () {
    msg.textContent = "Oláaaaaaaaaaaa!!!";
    msg.style.fontSize = "25px";
    subExemplo01.style.backgroundColor = "yellow"
});


subExemplo01.addEventListener("dblclick", function () {
    msg.textContent = "";
});

//mouseover, mouseout

/* Exemplo 02: modo noturno */
const botao = document.querySelector("#noturno");
const pagina = document.querySelector("body");

botao.addEventListener("click", function () {
    pagina.classList.toggle("modo-noturno");

    /* Se o texto do botão for ativar...*/
    if (botao.textContent == 'Ativar') {
        // então, mudamos para desativar:
        botao.textContent = "Desativar";

    } else {
        //senão,mudamos para ativar
        botao.textContent = "Ativar";

    }


});

/* Exemplo 03: simulação de cadastro*/
const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divResultados = document.querySelector("#resultados");


//Detectar o acionamento do formulário
//Obs.: a função dentro do Listener, é chamada de Callback
formulario.addEventListener("submit", function (event) {
    /* Anulando comportamento padrão do navegador(redirecionar o formulário*/
    event.preventDefault();


    // 1) Capturar os dados digitados no campos
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);//- Parsefloat indicar que são numeros que podem ser quebrados  
    let nota2 = parseFloat(campoNota2.value);


    //2) Calcular as médias das notas
    // correção Exercicio 1
    let media = (nota1 + nota2) / 2;
    let situacao; // inicilializada
    if (media >= 7) {
        situacao = "aprovado";

    } else {
        situacao = "reprovado";

    }



    // 3) Criando elemento dinamicamente via JS



    // 3.1) Criar o elemento/Tag
    let paragrafo = document.createElement("p");

    // 3.2) Montar o conteúdo da tag
    paragrafo.innerHTML = `<b>${nome}</b> - <i>${media}</i> - ${situacao}`;

    //3.3) Adicionar tag/ conteúdo a div de resultados
    divResultados.appendChild(paragrafo);

    // Desafio: Faça com que os campos do formulario seja resultados.
    formulario.reset();

    // Devolvendo o foco (cursor para o campo nome )
    campoNome.focus();





});
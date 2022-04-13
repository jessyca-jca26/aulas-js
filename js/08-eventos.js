/*EXEMPLO*/
const subExemplo01= document.querySelector("#subtitulo-exemplo01");
const msg = document.querySelector("#mensagem");

//MOnitor/Ouvinte de Evento
subExemplo01.addEventListener("click", function(){
    msg.textContent="Oláaaaaaaaaaaa!!!";
    msg.style.fontSize="25px";
    subExemplo01.style.backgroundColor="yellow"
});


subExemplo01.addEventListener("dblclick", function(){
    msg.textContent= "";
});

//mouseover, mouseout

/* Exemplo 02: modo noturno */
const botao= document.querySelector("#noturno");
const pagina= document.querySelector("body");

botao.addEventListener("click",function(){
    pagina.classList.toggle("modo-noturno");

});
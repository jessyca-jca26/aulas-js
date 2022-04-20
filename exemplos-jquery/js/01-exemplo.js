// Acessando elemento com jQuery
const titulo = $("h1");


// Mudar o texto do elemento
titulo.text("Olá JQuery");

//CSS via jQuery
//titulo.css("color", "blue");
titulo.css({
    "color": "blue",
    "text-align": "center",
    "font-size": "25px"
});


titulo.on("click", function () {
    $("body").css("background-color", "yellow");
    $("h2").text("Clicou")

    titulo.fadeOut();
});
// Crie uma lista: string de frutas, Filtrar frutas que começa com a letra M, filtrar frutas
// que tenham mais de 4 letras e buscar uma fruta que começe com a letra G e ordenar em ordem alfabética

var frutas = ["Melancia","Maça","Goiaba","Pera","Abacate","Pitaya","Kiwi","Abacaxi","Banana"];

function filtroIniciaM(fruta){
    return fruta[0] == "M";
}

console.log("Frutas com M", frutas.filter(filtroIniciaM))

console.log("Fruta com Mais de 4 Letras: ", frutas.filter(function(fruta){
    return fruta.length > 4
}));

console.log("Fruta com G: ", frutas.find(function(fruta){
    return fruta[0] == "G";
}))

console.log("Ordena em ordem alfabética: ", frutas.sort());
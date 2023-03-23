var coresFavoritas = ["Roxo","Preto","Rosa","Azul"]; //array

console.log("Tamanho da Lista: ", coresFavoritas.length);

console.log("Original: ",coresFavoritas);
coresFavoritas[1] = "Cinza";
console.log("Alterada: ",coresFavoritas);
coresFavoritas[4] = "Verde Musgo";
console.log("Adicionada: ",coresFavoritas);
coresFavoritas.push("Ciano");
console.log("Adicionada Push: ",coresFavoritas);
//Exclui o ultimo item e devolve ele
console.log(coresFavoritas.pop(),coresFavoritas)

/** Métodos de consulta de lista */
console.log("Retorna o indice de um item: ", coresFavoritas.indexOf("Verde Musgo"));
console.log(coresFavoritas.filter(function (valor, indice){
    return typeof valor === 'string';
}));
// Devolve uma nova lista a partir dos valores de uma lista existente
var nova_lista = coresFavoritas.map(function (item, indice){
  return (`A cor ${item} está no indice ${indice}`);
})

console.log(nova_lista);

coresFavoritas.forEach(function(item, indice){
    console.log( item +" " +indice);
})
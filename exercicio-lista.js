// Percorrer uma lista de objetos (Filme, Classificação), e exibir seus titulos e sua nota;
var filmes = [
  {
    titulo: "Venom",
    nota: 10,
  },
  {
    titulo: "O espetacular Homem-Aranha",
    nota: 9.5,
  },
  {
    titulo: "Lucca",
    nota: 8,
  },
  {
    titulo: "Carros",
    nota: 7,
  },
  {
    titulo: "A ilha do medo",
    nota: 10,
  },
];


console.log("Filme com nota maior que 7", filmes.find(function(filme){
  return filme.titulo[0] == "V"
}));

filmes.forEach(function (item, indice) {
  console.log("Titulo do filme: ", item.titulo);
  console.log("Nota do filme: ", item.nota);
  console.log("---");
});

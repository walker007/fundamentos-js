var coresFavoritas = ["Roxo","Preto","Azul","Rosa"]; //array

var pessoa = {
    nome: "Alex Júnior",
    idade: 25,
    altura: 1.71,
    genero: "M",
    peso: 88.8,
    acordado: true,
    coresFavoritas: coresFavoritas
};

pessoa.musicaFavorita = "Sad but True - Metallica";

console.log("Nome: " + pessoa.nome);
console.log("Idade: " + pessoa.idade);
console.log("Altura: " + pessoa.altura);
console.log("Gênero: " + pessoa.genero);
console.log("Peso: " + pessoa.peso );
console.log("Acordado: " + pessoa.acordado);
console.log("Sua musica favorita: ",pessoa.musicaFavorita);
console.log("Sua cor favorita: ", pessoa.coresFavoritas[1]);


console.log("======== Calculadora de IMC ==========");
var IMC = pessoa.peso / pessoa.altura ** 2;
pessoa['imc'] = IMC;
console.log("Olá, " + pessoa.nome);
console.log("Seu IMC é: " + pessoa.imc);



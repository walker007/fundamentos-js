function olaMundo() {
    console.log("Olá mundo");
}

olaMundo();

function bomDia(nome){
   return (`Bom dia, ${nome}!`);
}

console.log(bomDia("Alex"));
var _bomDia = bomDia("Fulano");
console.log(_bomDia);

function soma(valor1, valor2){
    return valor1 + valor2;
}

var resultado = soma(null, null);
console.log(resultado);

var pessoa = {
    nome: "Alex Júnior",
    idade: 17,
    altura: 1.71,
    genero: "m",
    peso: 88.8,
    acordado: true,
    dormir: function (){
        pessoa.acordado = false;
    },
    acordar: function (){
        pessoa.acordado = true;
    },
    aniversario: ()=>{
        pessoa.idade+=1
    }
}
console.log(pessoa);
pessoa.dormir();
pessoa.aniversario();
console.log(pessoa);

(function (){
    console.log("Fui executada");
})()

const funcaoAleatoria = function(numero){
    console.log("Buuum", Math.random(), numero);
}

funcaoAleatoria(2);

const arrowFunction = () => {
    console.log("Buuum", Math.random() * 10)
}

arrowFunction();
var pessoa = {
    nome: "Alex Júnior",
    idade: 17,
    altura: 1.71,
    genero: "m",
    peso: 88.8,
    acordado: true,
}

if(pessoa.acordado){
    console.log(`${pessoa.nome} está acordado(a)`);
} else {
    console.log(`${pessoa.nome} não está acordado(a)`);
}

if(pessoa.idade >= 18){
    console.log(`${pessoa.nome} tem 18 anos ou mais`);

} else if (pessoa.idade < 18 && pessoa.acordado) {

    console.log(`${pessoa.nome} não tem 18 e está acordado(a)`);
} else {

    console.log(`${pessoa.nome} não tem 18`);
}

switch(pessoa.genero){
    case "m":
    case "M":
        console.log(`${pessoa.nome} é do gênero Masculino`);
    break;
    case "f":
    case "F":
        console.log(`${pessoa.nome} é do gênero Feminino`);
    break;
    default:
        console.log("O gênero informado não está classificado")
        break;
}
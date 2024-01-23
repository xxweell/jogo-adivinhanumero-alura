// Criar uma função que exibe "Olá, mundo!" no console.
function exibeNoConsole() {
    console.log("Olá, mundo!");
}

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibeNoConsoleComParametro(nome) {
    console.log(`Olá, ${nome}!`);
}

exibeNoConsoleComParametro('Wellington');

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calculaDobroDeUmNumero(numero) {
    return numero * 2
}

let dobroDeUmNumero = calculaDobroDeUmNumero(5);
console.log(dobroDeUmNumero)

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}

let valorMedia = media(2, 56, 15);
console.log(valorMedia.toFixed(2));

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function verificaMaiorNumero(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}

let maiorNumero = verificaMaiorNumero(2, 5);
console.log(maiorNumero);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicaNumeroPorEleMesmo(numero) {
    return numero * numero
}

let numeroMultiplicadoPorEleMesmo = multiplicaNumeroPorEleMesmo(5)
console.log(numeroMultiplicadoPorEleMesmo)
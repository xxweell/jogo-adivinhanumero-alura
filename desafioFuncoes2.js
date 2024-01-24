// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculaIMC(peso, altura) {
    let imc = peso / (altura*altura);
    return imc;
}

console.log(calculaIMC(80, 1.70));

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
    // Verifica se o número é não-negativo
    if (numero < 0) {
      return "Erro: Não é possível calcular o fatorial de um número negativo.";
    }
  
    // Caso base: fatorial de 0 é 1
    if (numero === 0) {
      return 1;
    }
  
    // Inicializa o resultado com 1
    let resultado = 1;
  
    // Calcula o fatorial multiplicando os números de 1 até o número dado
    for (let i = 1; i <= numero; i++) {
      resultado *= i;
    }
  
    return resultado;
  }
  
  const numeroParaCalcularFatorial = 5;
  const resultadoFatorial = calcularFatorial(numeroParaCalcularFatorial);

  // Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
  let cotacao = 4.80;
  function converteDolarParaReal(valorDolar) {
    return valorDolar * cotacao;
  }

  let valorConvertido = converteDolarParaReal(5);
  console.log(valorConvertido);

  // Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
  function calcularAreaEPerimetro(altura, largura) {
    // Verifica se altura e largura são valores válidos
    if (altura <= 0 || largura <= 0) {
      console.log("Erro: Altura e largura devem ser valores positivos.");
      return;
    }
  
    // Calcula a área da sala retangular
    const area = altura * largura;
  
    // Calcula o perímetro da sala retangular
    const perimetro = 2 * (altura + largura);
  
    // Exibe os resultados na tela
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  }
  
  // Exemplo de uso da função
  const alturaDaSala = 5; 
  const larguraDaSala = 8; 
  
  calcularAreaEPerimetro(alturaDaSala, larguraDaSala);

  // Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calcularAreaEPerimetroCircular(raio) {
    // Verifica se altura e largura são valores válidos
    if (raio <= 0) {
      console.log("Erro: Raio deve ser um valore positivo.");
      return;
    }

    const pi = 3.14; 
    let areaCircular = pi * (raio * raio);
    let perimetroCircular = 2 * pi * raio;

    console.log(`Área da sala circular: ${areaCircular} metros quadrados`);
    console.log(`Perímetro da sala Circular: ${perimetroCircular} metros`);
}

calcularAreaEPerimetroCircular(5)

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function calculaTabuada(numero) {
    for(let i = 0; i < numero; i++) {
        let resultado = numero * i;
        return resultado;
    }
    
}

console.log(calculaTabuada(5));
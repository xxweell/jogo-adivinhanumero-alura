let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio.';

function consoleClick() {
    console.log('O botão foi clicado.');
}

function exibeAlerta() {
   alert('Eu amo JS.');
}

function exibeCidade() {
    let cidade = prompt('Digite uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function somaNumeros() {
    let valor1 = parseInt(prompt('Digite o primeiro valor: '));
    let valor2 = parseInt(prompt('Digite o segundo valor: '));
    let soma = valor1 + valor2;

    alert(`Soma: ${soma}.`);
}
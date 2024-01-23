alert('Boas vindas ao nosso site!')
let nome = 'Lua'
let idade = 25
let numeroDeVendas = 50
let saldoDisponivel = 1000
alert('Erro! Preencha todos os campos.')
let mensagemDeErro = 'Erro! Preencha todos os campos.'
alert(mensagemDeErro)
nome = prompt('Digite seu nome: ')
idade = prompt('Digite sua idade: ')

if(idade >= 18) {
    alert('Pode tirar a habilitação.')
}


let diaDaSemana = prompt("Que dia da semana é hoje?")

if(diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo') {
    alert('Bom final de semana!')
}

let num = prompt('Digite um número positivo ou negativo')

if(num < 0) {
    alert('Número negativo')
} else (
    alert('Número positivo.')
)

let suaPontuacao = prompt('Informe sua Pontuação: ')

if(suaPontuacao >= 1000) {
    alert('Parabéns, você venceu!!')
} else {
    alert('Tente novamente para vencer!')
}

let saldoAtual = 1000
alert(`Seu saldo atual é de: R$ ${saldoAtual}`)

let seuNome = prompt('Informe seu nome: ')
alert(`Seu nome é: ${seuNome}`)

// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contatador = 1
while (contatador <= 10){
    alert(contatador)
    contatador++
}

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contatador1 = 10
while (contatador1 >= 0){
    alert(contatador1)
    contatador1--
}

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let seuContador = prompt('Digite um número para contagem regressiva: ')

while(seuContador >= 0){
    alert(`T - ${seuContador}`)
    seuContador--
}

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let seuNumero = prompt('Digite um número para contagem progressiva: ')
let seuContador2 = 0

while(seuContador2 <= seuNumero){
    alert(`T + ${seuContador2}`)
    seuContador2++
}




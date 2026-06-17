let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

const botao = document.getElementById('botaotentar')
const resultado = document.getElementById('resultado')

botao.addEventListener('click', function() {
    let palpite = Number(document.getElementById('palpite').value);
});

tentativas++;

if (palpite > numeroSecreto) {
    resultado.textContent='Mais baixo que isso!'
} else if (palpite < numeroSecreto) {
    resultado.textContent = 'Mais alto que isso!'
} else {
    resultado.textContent = 'Acertou em' + tentativas + 'tentativas';
    botao.disabled = true
}

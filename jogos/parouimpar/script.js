const choiceSelect = document.getElementById('choice');
const playerNumberInput = document.getElementById('playerNumber');
const playButton = document.getElementById('playButton');
const resultDiv = document.getElementById('result');

playButton.addEventListener('click', () => {
    const playerChoice = choiceSelect.value; // "par" ou "impar"
    const playerNum = parseInt(playerNumberInput.value);

    // Validação básica: verifica se o número foi digitado e é válido
    if (isNaN(playerNum) || playerNum < 0 || playerNum > 10) {
        resultDiv.textContent = "Por favor, digite um número válido entre 0 e 10.";
        return;
    }

    // Gera um número aleatório para o computador (0 a 10)
    const computerNum = Math.floor(Math.random() * 11);

    const sum = playerNum + computerNum;
    const isSumEven = sum % 2 === 0; // Operador de módulo: resto da divisão por 2
    const winner = isSumEven ? "Par" : "Ímpar";

    let message = `Você jogou ${playerNum}, o computador jogou ${computerNum}. A soma é ${sum}.`;

    if ((playerChoice === "par" && isSumEven) || (playerChoice === "impar" && !isSumEven)) {
        message += ` Você ganhou!`;
    } else {
        message += ` Você perdeu!`;
        
    }

    resultDiv.textContent = message;
});

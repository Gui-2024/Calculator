function appendToDisplay(value) {
  var display = document.querySelector('.display');
  // Verifica se o valor é um número antes de formatá-lo
  if (!isNaN(value)) {
    // Formata o número com pontos para separar as casas de milhar
    value = parseFloat(value).toLocaleString('pt-BR');
  }
  display.value += value;
}

  function calculate() {
    const displayValue = document.querySelector('.display').value;

    // Verifica se a expressão contém o símbolo '%' para tratar como porcentagem
    if (displayValue.includes('%')) {
      // Remove o símbolo '%' da expressão
      const cleanExpression = displayValue.replace('%', '');
      // Avalia a expressão sem o símbolo '%' e converte o resultado em um número
      const result = eval(cleanExpression);
      // Calcula a porcentagem (dividindo o resultado por 100)
      const percentResult = result / 100;
      // Define o resultado da porcentagem no display
      document.querySelector('.display').value = percentResult;
    } else {
      // Avalia a expressão matemática normalmente
      const result = eval(displayValue);
      // Define o resultado no display
      document.querySelector('.display').value = result;
    }
  }

function clearDisplay() {
  document.querySelector('.display').value = '';
}

const data = [
  [3, 8],
  [6, 7],
  [6, 8],
  [7, 4],
  [7, 6],
  [7, 7],
  [7, 8],
  [8, 6],
  [8, 7],
  [9, 7],
  [9, 8],
];

function numAleatorio() {
  return Math.random() * 10;
}

function numAleatorioSinCero() {
  let number = numAleatorio();
  while (number === 0) {
    number = numAleatorio();
  }
  return number;
}

function numDB() {
  let number = Math.random() * 100;
  while (number < 1 || number > 99) {
    number = numAleatorio();
  }
  const [num1, num2] = data[Math.floor(number / 9)];
  return { num1, num2, str: `${num1} X ${num2} = ` };
}

function incorrectoOff() {
  setTimeout(incorrecto.setAttribute('data-active', 'false'), 1000);
}

function validar(num1, num2) {
  const inputValue = document.getElementById('resultInput');
  const correcto = document.getElementById('correcto');
  const incorrecto = document.getElementById('incorrecto');
  if (num1 * num2 === Number(inputValue.value)) {
    correcto.setAttribute('data-active', 'true');
    setTimeout(comenzar, 1000);
  } else {
    incorrecto.setAttribute('data-active', 'true');
    setTimeout(incorrectoOff, 1000);
  }
}

function comenzar() {
  const question = document.getElementById('question');
  let { num1, num2, str } = numDB();
  question.innerHTML = str;
  const answer = document.getElementById('answer');
  const posibleDiv = answer.firstChild;
  if (posibleDiv) answer.removeChild(posibleDiv);

  const resultInput = document.createElement('input');
  resultInput.type = 'number';
  resultInput.id = 'resultInput';
  resultInput.min = 0;
  resultInput.max = 100;
  resultInput.setAttribute('autofocus', true);
  resultInput.addEventListener('keyup', e => {
    let keycode = e.keyCode || e.which;
    if (keycode == 13) validar(num1, num2);
  });
  answer.appendChild(resultInput);

  posibleDiv2 = document.getElementById('btnValidar');
  if (posibleDiv2 !== null) posibleDiv2.remove();
  const btnValidar = document.createElement('button');
  btnValidar.innerHTML = 'Validar';
  btnValidar.id = 'btnValidar';
  btnValidar.setAttribute('onclick', `validar(${num1}, ${num2})`);
  answer.appendChild(btnValidar);

  posibleDiv3 = document.getElementById('comenzar');
  if (posibleDiv3) posibleDiv3.remove();

  setTimeout(correcto.setAttribute('data-active', 'false'), 1000);
}

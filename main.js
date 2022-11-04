/* 
1. Comprueba si hay contenido en div #question y en div #answer y lo borra.
2. Ejecutar funcion que de un número aleatorio y lo guarde en una variable num1
3. Ejecutar funcion que de un número aleatorio y lo guarde en una variable num2
4. Crear elemento p
5. Crear nodo de texto y rellenarlo con num1
6. Ponerlo dentro de div #question seguido de espacio y X
7. Crear elemento p
8. Crear nodo de texto y rellenarlo con num1
9. Ponerlo dentro de div #question seguido de espacio y =
10. Crear input
11. Crear botón para validar respuesta, que guarde el input en una variable y compruebe si el valor del input es igual a la multiplicación de num1 y num2
12. Si es correcto, dibujar un check y si no es correcto una cruz.
*/

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
  console.log(inputValue.value);
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

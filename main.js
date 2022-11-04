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

function validar(num1, num2) {
  const inputValue = document.getElementById('resultInput');
  console.log(inputValue.value);
  if (num1 * num2 === Number(inputValue.value)) {
    console.log('CORRECTO');
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
  answer.appendChild(resultInput);

  posibleDiv2 = document.getElementById('btnValidar');
  if (posibleDiv2 !== null) posibleDiv2.remove();
  const btnValidar = document.createElement('button');
  btnValidar.innerHTML = 'Validar';
  btnValidar.id = 'btnValidar';
  btnValidar.setAttribute('onclick', `validar(${num1}, ${num2})`);
  answer.appendChild(btnValidar);
  console.log(answer);
}

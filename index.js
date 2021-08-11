document.addEventListener('DOMContentLoaded', function () {

  /* |---- Theme changer vars ----|*/
  const theme_one = document.getElementById('theme-one');
  const theme_two = document.getElementById('theme-two');
  const theme_three = document.getElementById('theme-three');

  const ball_swicht = document.getElementById('switch-ball');

  const body = document.getElementsByTagName('body');

  /* |---- Calculator vars ----|*/

  const nums = document.querySelectorAll('.btn-calc');

  const operators = document.querySelectorAll('.operator')

  /* |---- calculator screen ----|*/

  const screen = document.getElementById('result');


  /* |---- functions ----|*/

  /* |---- Values in screen ----|*/
  function printCharacter(value) {
    var previewVal = screen.textContent;

    if (previewVal == '0') {
      previewVal = value
      screen.innerText = previewVal;
    } else {
      screen.innerText = previewVal + value
    }

  }


  /* |---- Delete characters ----|*/
  function Del() {
    let arrayResult = screen.textContent.split(""); // <-- Use split for convert String on array

    arrayResult.pop(); // <- Use pop to delete last position on array

    if (arrayResult.length == 0) {
      arrayResult.push('0');
    }

    let newResut = arrayResult.join("");

    screen.innerText = newResut;
  }


  /* |---- Delete all values ----|*/
  function Reset() {
    let arrayReset = screen.textContent.split(); // <-- Use split for convert String on array

    for (let i = 0; i < arrayReset.length; i++) {
      arrayReset.pop();
    }

    if (arrayReset.length == 0) {
      arrayReset.push('0');
    }

    screen.innerText = arrayReset;

  }

  /* |---- Operations ----|*/
  function sum(num1, num2) {
    return num1 + num2;
  }

  function res(num1, num2) {
    return num1 - num2;
  }

  function mul(num1, num2) {
    return num1 * num2;
  }

  function div(num1, num2) {
    return num1 / num2;
  }

  /* |---- Results ----|*/
  function Execute() {

    /* |---- Text in screen ----|*/
    let textExecute = screen.textContent;

    /* |---- sum ----|*/
    let resultExecuteSum = textExecute.includes('+'); // <-- search the + in string.

    let arrayExecuteSum = textExecute.split('+'); // <- cut the string and convert in array.

    if (resultExecuteSum == true) {

      let value1 = arrayExecuteSum[0];
      let value2 = arrayExecuteSum[1];

      if (value1.includes('.') == true) {
        value1 = parseFloat(arrayExecuteSum[0]);
      } else {
        value1 = parseInt(arrayExecuteSum[0])
      }
      if (value2.includes('.') == true) {
        value2 = parseFloat(arrayExecuteSum[1]);
      } else {
        value2 = parseInt(arrayExecuteSum[1])
      }

      let resultsum = sum(value1, value2);

      screen.textContent = resultsum;
    }

    /* |---- rest ----|*/

    let resultExecuteRes = textExecute.includes('-'); // <-- search the - in string.

    let arrayExecuteRes = textExecute.split('-'); // <- cut the string and convert in array.

    if (resultExecuteRes == true) {

      let value1 = arrayExecuteRes[0];
      let value2 = arrayExecuteRes[1];

      if (value1.includes('.') == true) {
        value1 = parseFloat(arrayExecuteRes[0]);
      } else {
        value1 = parseInt(arrayExecuteRes[0])
      }
      if (value2.includes('.') == true) {
        value2 = parseFloat(arrayExecuteRes[1]);
      } else {
        value2 = parseInt(arrayExecuteRes[1])
      }

      let resultres = res(value1, value2);

      screen.textContent = resultres;
    }

    /* |---- mult ----|*/

    let resultExecuteMul = textExecute.includes('x'); // <-- search the x in string.

    let arrayExecuteMul = textExecute.split('x'); // <- cut the string and convert in array.

    if (resultExecuteMul == true) {

      let value1 = arrayExecuteMul[0];
      let value2 = arrayExecuteMul[1];

      if (value1.includes('.') == true) {
        value1 = parseFloat(arrayExecuteMul[0]);
      } else {
        value1 = parseInt(arrayExecuteMul[0])
      }
      if (value2.includes('.') == true) {
        value2 = parseFloat(arrayExecuteMul[1]);
      } else {
        value2 = parseInt(arrayExecuteMul[1])
      }

      let resultmul = mul(value1, value2);

      screen.textContent = resultmul;
    }


    /* |---- Div ----|*/

    let resultExecuteDiv = textExecute.includes('/'); // <-- search the / in string.

    let arrayExecuteDiv = textExecute.split('/'); // <- cut the string and convert in array.

    if (resultExecuteDiv == true) {

      let value1 = arrayExecuteDiv[0];
      let value2 = arrayExecuteDiv[1];

      if (value1.includes('.') == true) {
        value1 = parseFloat(arrayExecuteDiv[0]);
      } else {
        value1 = parseInt(arrayExecuteDiv[0])
      }

      if (value2.includes('.') == true) {
        value2 = parseFloat(arrayExecuteDiv[1]);
      } else {
        value2 = parseInt(arrayExecuteDiv[1])
      }

      let resultdiv = div(value1, value2);

      screen.textContent = resultdiv;
    }
  }

  /* Calculator */
  /* |---- Theme changer ----|*/
  theme_one.addEventListener('change', () => {
    if(theme_one.checked == true) {
      document.body.classList.remove('theme-two');
      document.body.classList.remove('theme-three');
      ball_swicht.style.left = '4px';
    }  
  })

  theme_two.addEventListener('change', () => {
    if(theme_two.checked == true) {
      document.body.classList.remove('theme-three');
      document.body.classList.add('theme-two');
      ball_swicht.style.left = '36px';
    }  
  })

  theme_three.addEventListener('change', () => {
    if(theme_three.checked == true) {
      document.body.classList.remove('theme-two');
      document.body.classList.add('theme-three');
      ball_swicht.style.left = '70px';
    }  
  })

  /* |---- numbers ----|*/
  nums.forEach(boton => (
    boton.addEventListener('click', () => {
      printCharacter(boton.value);
    })))

  /* |---- Operators ----|*/
  operators.forEach(operator => (
    operator.addEventListener('click', () => {
      if (operator.value == "DEL") {
        Del();
      } else if (operator.value == "RESET") {
        Reset();
      } else if (operator.value == "PLUS") {
        printCharacter(operator.textContent);
      } else if (operator.value == "NEG") {
        printCharacter(operator.textContent);
      } else if (operator.value == "MULT") {
        printCharacter(operator.textContent);
      } else if (operator.value == "SLASH") {
        printCharacter(operator.textContent);
      } else if (operator.value == "POINT") {
        printCharacter(operator.textContent);
      } else if (operator.value == "RESULT") {
        Execute();
      }
    })
  ))

})
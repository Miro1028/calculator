const result = document.getElementById('input');
let selectedOperator = '', numbers = '', oldNums = '', res = '';

const clearNumbers = () => {
  result.innerHTML = ''
  selectedOperator = ''
  numbers = ''
  oldNums = ''
  res = ''
}

const calcRes = (op, num1, num2) => {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2
  }
}

document.addEventListener("click", (e) => {
  if (e.target.id != '') {
    let selected = e.target.innerText
    if (Number(selected) || selected == '.' || selected == '0') {
      //? darsan toog renderlej bga.
      result.innerHTML = (result.innerHTML + selected)
      numbers += selected
    } else {
      if(selected == '=') {
        res = calcRes(selectedOperator, Number(oldNums), Number(numbers))
        result.innerHTML = res;
        numbers = res;
        oldNums = '';
        console.log('=: ', res);
        return;
      }

      if (oldNums != '') {
        res = calcRes(selectedOperator, Number(oldNums), Number(numbers))
        result.innerHTML = res;
        numbers = res;
        console.log('res: ', res)
      } else {
        result.innerHTML = ''
      }
      
        selectedOperator = selected;
        oldNums = numbers;
        numbers = ''
        console.log('numbers: ', numbers)
        console.log('oldNums: ', oldNums)
        console.log('op: ', selectedOperator)
    }
  }
});

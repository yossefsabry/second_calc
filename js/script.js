let input = document.querySelector("input[name='display']");


input.focus()

function clearInput() {
    input.value = "";
};
function sliceInput() {
  input.value = input.value.slice(0, -1);
};

function showresults(el) {
  input.value += el;
};
function clacMath() {
  try {
    let evalInputValue = eval(input.value);
    input.value = evalInputValue.toFixed(2); // change the decimal to two decimal number only
  }catch {
    input.value = "Pls Enter A Number";
  }  
}


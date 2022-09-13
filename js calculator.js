let numButtonArray = [];
let funcButtonArray = [];
let othButtonArray = [];

const ArrayMaker = (arrayName, buttontype) => {
  for (
    let index = 0;
    index < document.getElementsByClassName(buttontype).length;
    index++
  ) {
    let buttonObj = {
      button: document.getElementsByClassName(buttontype)[index],
      id: document.getElementsByClassName(buttontype)[index].id,
      value: document.getElementsByClassName(buttontype)[index].innerHTML,
    };
    arrayName.push(buttonObj);
  }
};

ArrayMaker(numButtonArray, "num_button");
ArrayMaker(funcButtonArray, "func_button");
ArrayMaker(othButtonArray, "oth_button");

numButtonArray = numButtonArray.reverse();

let input = document.getElementById("input");

let lastChar = "";
let funcLastChar = "";

const changeInput = (array, index) => {
  let mybutton = array[index].button;
  mybutton.onclick = () => {
    input.value = input.value + array[index].value;
    beforLastChar = input.value.slice(-3, -2);
    lastChar = input.value.slice(-2, -1);
    funcLastChar = array[index].value;

    if (
      funcLastChar == "." &&
      (lastChar == "-" ||
        lastChar == "/" ||
        lastChar == "+" ||
        lastChar == "*" ||
        lastChar == "")
    ) {
      input.value = input.value.slice(0, input.value.length - 1);
      input.value = input.value + "0";
      input.value = input.value + ".";
    }

    if (
      (lastChar == "." ||
        lastChar == "-" ||
        lastChar == "/" ||
        lastChar == "+" ||
        lastChar == "*") &&
      (funcLastChar == "+" || funcLastChar == "/" || funcLastChar == "*")
    ) {
      input.value = input.value.slice(0, input.value.length - 1);
      input.value = input.value.slice(0, input.value.length - 1);
      input.value = input.value + array[index].value;
    }

    if (
      (lastChar == "" || lastChar == "-") &&
      beforLastChar == "" &&
      (funcLastChar == "+" || funcLastChar == "/" || funcLastChar == "*")
    ) {
      input.value = input.value.slice(0, input.value.length - 1);
    }


  };
};

changeInput(numButtonArray, 0);
changeInput(numButtonArray, 1);
changeInput(numButtonArray, 2);
changeInput(numButtonArray, 3);
changeInput(numButtonArray, 4);
changeInput(numButtonArray, 5);
changeInput(numButtonArray, 6);
changeInput(numButtonArray, 7);
changeInput(numButtonArray, 8);
changeInput(numButtonArray, 9);

changeInput(funcButtonArray, 0);
changeInput(funcButtonArray, 1);
changeInput(funcButtonArray, 2);
changeInput(funcButtonArray, 3);

changeInput(othButtonArray, 0);

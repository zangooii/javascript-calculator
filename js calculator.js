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
let container = document.getElementById("first-value");

let lastChar = "";
let funcLastChar = "";
let firstValue = "";
let secondValue = "";
let lastSign = "";
let editedValue = "";
const changeInput = (array, index) => {
  let mybutton = array[index].button;
  mybutton.onclick = () => {
    funcLastChar = array[index].value;
    input.innerHTML = input.innerHTML + array[index].value;
    lastChar = input.innerHTML.slice(-2, -1);

    if (funcLastChar == ".") {
      deleted = input.innerHTML.replace(".", "");
      if (deleted.indexOf(".") != -1) {
        secondDeleted = [...input.innerHTML].reverse().join("");
        secondDeleted = secondDeleted.replace(".", "");
        input.innerHTML = [...secondDeleted].reverse().join("");
      }
    }
  };
};

optFucn = (array, index) => {
  array[index].button.onclick = function () {
    if (input.innerHTML != "") {
      if (firstValue == "") {
        firstValue = parseFloat(input.innerHTML);
        secondValue = firstValue;
      } else {
        firstValue = parseFloat(input.innerHTML);
        lastOptFunc();
      }
      input.innerHTML = "";
      container.innerHTML = secondValue;
      lastSign = array[index].value;
    }
  };
};

lastOptFunc = () => {
  if (lastSign == "+") {
    secondValue = secondValue + firstValue;
  } else if (lastSign == "-") {
    secondValue = secondValue - firstValue;
  } else if (lastSign == "/") {
    secondValue = secondValue / firstValue;
  } else if (lastSign == "*") {
    secondValue = secondValue * firstValue;
  }
};

optFucn(funcButtonArray, 0);
optFucn(funcButtonArray, 1);
optFucn(funcButtonArray, 2);
optFucn(funcButtonArray, 3);

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

changeInput(othButtonArray, 0);

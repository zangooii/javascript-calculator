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
let splitString = "";
let reverseArray = "";
let joinArray = "";
let joinArraybefor = "";
let firstValue = "";
let secondValue = "";
let lastSign = "";
let beforLastSign = "";

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

    splitString = input.value.split("");
    reverseArray = splitString.reverse();
    joinArray = reverseArray.join("");
    joinArraybefor = joinArray.replace(".", "");

    if (funcLastChar == "." && joinArraybefor.indexOf(".") != -1) {
      if (
        ((joinArray.indexOf(".") < joinArray.indexOf("+") ||
          joinArray.indexOf(".") < joinArray.indexOf("-") ||
          joinArray.indexOf(".") < joinArray.indexOf("*") ||
          joinArray.indexOf(".") < joinArray.indexOf("/")) &&
          (joinArraybefor.indexOf(".") < joinArraybefor.indexOf("+") ||
            joinArraybefor.indexOf(".") < joinArraybefor.indexOf("-") ||
            joinArraybefor.indexOf(".") < joinArraybefor.indexOf("*") ||
            joinArraybefor.indexOf(".") < joinArraybefor.indexOf("/"))) ||
        (joinArraybefor.indexOf("+") == -1 &&
          joinArraybefor.indexOf("/") == -1 &&
          joinArraybefor.indexOf("*") == -1 &&
          joinArraybefor.indexOf("-") == -1)
      ) {
        input.value = input.value.slice(0, input.value.length - 1);
      }
    }
  };
};

optFucn = (array, index) => {
  array[index].button.onclick = function () {
    if (input.value != "") {
      if (firstValue == "") {
        firstValue = parseFloat(input.value);
        secondValue = firstValue;
      } else {
        firstValue = parseFloat(input.value);
        lastOptFunc();
      }
      input.value = "";
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

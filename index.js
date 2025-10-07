const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const symbolsChar = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const numbersChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const generatePasswordsBtn = document.getElementById("generate-passwords-btn");
const firstPasswordEl = document.getElementById("first-password-el");
const secondPasswordEl = document.getElementById("second-password-el");

const passwordLengthInput = document.getElementById("input-password-length");
const symbolsToggleEl = document.getElementById("symbols-toggle");
const numbersToggleEl = document.getElementById("numbers-toggle");

let passwordLength = 15;
let isSymbolsIncluded = true;
let isNumbersIncluded = true;

generatePasswordsBtn.addEventListener("click", function () {
  generatePasswords(characters);
});

function getPasswords(characterCollection, limit, lengthOfPassword) {
  let passwords = [];

  for (let i = 0; i < 2; i++) {
    let password = "";

    for (let i = 0; i < lengthOfPassword; i++) {
      let randomIndex = Math.floor(Math.random() * limit);
      password += characterCollection[randomIndex];
    }

    passwords.push(password);
  }

  return passwords;
}

function renderPasswords(firstPassword, secondPassword) {
  firstPasswordEl.textContent = firstPassword;
  secondPasswordEl.textContent = secondPassword;
}

function generatePasswords(charsCollection) {
  if (!isSymbolsIncluded) {
    charsCollection = charsCollection.filter(function (char) {
      return !symbolsChar.includes(char);
    });
  }

  if (!isNumbersIncluded) {
    charsCollection = charsCollection.filter(function (char) {
      return !numbersChar.includes(char);
    });
  }

  const passwordsArray = getPasswords(
    charsCollection,
    charsCollection.length,
    passwordLength
  );

  renderPasswords(passwordsArray[0], passwordsArray[1]);
}

function clearPasswords() {
  renderPasswords("", "");
}

passwordLengthInput.addEventListener("input", function (e) {
  const inputValue = e.target.value;

  // setting the min value to 0
  if (inputValue < 0) {
    inputValue = 0;
  }

  // setting the max value to 20
  if (inputValue > 20) {
    inputValue = 20;
  }

  passwordLength = inputValue;
});

symbolsToggleEl.addEventListener("change", (e) => {
  if (e.target.checked) {
    isSymbolsIncluded = true;
    clearPasswords();
  } else {
    isSymbolsIncluded = false;
    clearPasswords();
  }
});

numbersToggleEl.addEventListener("change", (e) => {
  if (e.target.checked) {
    isNumbersIncluded = true;
    clearPasswords();
  } else {
    isNumbersIncluded = false;
    clearPasswords();
  }
});

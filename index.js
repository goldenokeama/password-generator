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

const generatePasswordsBtn = document.getElementById("generate-passwords-btn");
const firstPasswordEl = document.getElementById("first-password-el");
const secondPasswordEl = document.getElementById("second-password-el");
const symbolsToggleEl = document.getElementById("symbols-toggle");

let modifiedCharacters = [];
let isSymbolsIncluded = true;

generatePasswordsBtn.addEventListener("click", generatePasswords);

let passwordLength = 15;

function getPassword(characterCollection, limit, lengthOfPassword) {
  let password = "";

  for (let i = 0; i < lengthOfPassword; i++) {
    let randomIndex = Math.floor(Math.random() * limit);
    password += characterCollection[randomIndex];
  }
  // console.log(password.length);
  return password;
}

function renderPasswords(firstPassword, secondPassword) {
  firstPasswordEl.textContent = firstPassword;
  secondPasswordEl.textContent = secondPassword;
}

function generatePasswords() {
  if (modifiedCharacters.length === 0) {
    const firstPassword = getPassword(
      characters,
      characters.length,
      passwordLength
    );
    const secondPassword = getPassword(
      characters,
      characters.length,
      passwordLength
    );

    renderPasswords(firstPassword, secondPassword);
  } else {
    const firstPassword = getPassword(
      modifiedCharacters,
      modifiedCharacters.length,
      passwordLength
    );
    const secondPassword = getPassword(
      modifiedCharacters,
      modifiedCharacters.length,
      passwordLength
    );

    renderPasswords(firstPassword, secondPassword);
  }
}

symbolsToggleEl.addEventListener("change", (e) => {
  if (e.target.checked) {
    isSymbolsIncluded = true;
    setState();
  } else {
    isSymbolsIncluded = false;
    setState();
  }
});

function setState() {
  // clearing the generated passwords if any
  renderPasswords("", "");

  if (isSymbolsIncluded) {
    modifiedCharacters = [];
  } else {
    const indexOfStartingSymbol = characters.indexOf("~");
    modifiedCharacters = characters.slice(0, indexOfStartingSymbol);
  }
}

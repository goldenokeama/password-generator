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

generatePasswordsBtn.addEventListener("click", generatePasswords);

let passwordLength = 15;

function getPassword(maxLimit) {
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * maxLimit);
    password += characters[randomIndex];
  }
  // console.log(password.length);
  return password;
}

function renderPasswords(firstPassword, secondPassword) {
  firstPasswordEl.textContent = firstPassword;
  secondPasswordEl.textContent = secondPassword;
}

function generatePasswords() {
  const firstPassword = getPassword(characters.length);
  const secondPassword = getPassword(characters.length);

  // console.log("firstPassword :", firstPassword);
  // console.log("secondPassword :", secondPassword);

  renderPasswords(firstPassword, secondPassword);
}

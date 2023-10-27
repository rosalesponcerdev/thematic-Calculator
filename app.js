let t = localStorage.getItem("theme");

try {
  t = JSON.parse(t).theme ? JSON.parse(t).theme : 1;
} catch (error) {
  t = 1;
}

var result = 0;

var firstView = 0;
var secondView = 0;
var inOperation = null;

const toggleRef = document.querySelector("#toggle-element");
const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll("button.calc__button");
const equal = document.querySelector("#equal");

const addThemeNumber = (i, element) => {
  document.body.dataset.theme = i;
  element.dataset.t = i;

  localStorage.setItem("theme", JSON.stringify({ theme: i }));
};

const setNewValue = (value) => {
  screen.value = `${screen.value}${value}`;

  result = Number(screen.value);

  if (inOperation) secondView = result;
};

const operations = (type) => {
  if (type === "=") {
    makeOperation(inOperation);
    inOperation = null;

    return;
  }

  if (type === "del") {
    screen.value = screen.value.slice(0, -1);
    result = Number(screen.value);

    return;
  }

  if (type === "reset") {
    screen.value = "";
    result = 0;

    return;
  }

  inOperation = type;
  firstView = result;
  result = null;

  screen.value = result;
};

const makeOperation = (inOperation) => {
  let operation = {
    "/": () => firstView / secondView,
    x: () => firstView * secondView,
    "-": () => firstView - secondView,
    "+": () => firstView + secondView,
  };

  try {
    screen.value = `${operation[inOperation]()}`;
    result = Number(screen.value);
  } catch (error) {
    console.error(error);
  }
};

validateKeyBoardInput = (event) => {
  event.stopPropagation();

  let { data } = event;
  let isValid = /[0-9]|[=]|[/]|[x]|[-]|[+]/gu.test(data) || data === null;

  if (!isValid) {
    screen.value = result;
    return;
  }

  if (["=", "/", "x", "-", "+"].includes(data)) initAction(data);
  else {
    result = Number(screen.value);
    if (inOperation) secondView = result;
  }
};

const initAction = (value, event) => {
  event && event.stopPropagation();

  if (!["reset", "=", "/", "x", "-", "+", "del"].includes(value)) {
    if (value === "." && screen.value.includes(".")) return;

    setNewValue(value);
  } else operations(value);
};

addThemeNumber(t, toggleRef);

toggleRef.addEventListener("click", (e) => {
  e.stopPropagation();

  t = t === 3 ? 1 : ++t;

  addThemeNumber(t, toggleRef);
});

buttons.forEach((button) =>
  button.addEventListener("click", (e) => initAction(button.value, e))
);

screen.addEventListener("input", (e) => validateKeyBoardInput(e));
screen.addEventListener(
  "keypress",
  ({ keyCode }) => keyCode === 13 && inOperation && equal.click()
);

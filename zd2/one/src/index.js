import "./styles.css";
const messageError = document.getElementById("errorText");
const inputValid = document.getElementById("in");
let value;
inputValid.addEventListener("input", validation);

function validation() {
  messageError.innerHTML = "";
  value = inputValid.value;
  try {
    if (value === "") throw new Error("Введите значение");
    if (isNaN(value)) throw new Error("Введите число");
    value = Number(value);
    if (value < 5) throw new Error("Введите значение большее 5");
    if (value > 10) throw new Error("Введите значение меньшее 10");
  } catch (err) {
    messageError.innerHTML = err;
  }
}

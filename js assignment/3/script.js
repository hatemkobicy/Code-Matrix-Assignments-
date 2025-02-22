function appendCharacter(char) {
  document.getElementById("display").value += char;
}
function clearDisplay() {
  document.getElementById("display").value = "";
}
function calculateResult() {
  try {
    document.getElementById("display").value = eval(
      document.getElementById("display").value
    );
  } catch {
    document.getElementById("display").value = "Error";
  }
}

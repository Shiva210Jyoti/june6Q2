function multiply() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("result").textContent = "Invalid input!";
      return;
    }
    const result = num1 * num2;
    document.getElementById("result").textContent = result;
  }
  
  function divide() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("result").textContent = "Invalid input!";
      return;
    }
    if (num2 === 0) {
      document.getElementById("result").textContent = "Cannot divide by zero!";
      return;
    }
    const result = num1 / num2;
    document.getElementById("result").textContent = result;
  }
  
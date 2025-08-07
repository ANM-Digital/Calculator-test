function convertTemperature() {
  const input = document.getElementById("tempInput").value;
  const unit = document.getElementById("unitSelect").value;
  const result = document.getElementById("result");

  if (input === "" || isNaN(input)) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  let output;
  if (unit === "celsius") {
    output = (input * 9 / 5) + 32;
    result.textContent = `${input}°C = ${output.toFixed(2)}°F`;
  } else {
    output = (input - 32) * 5 / 9;
    result.textContent = `${input}°F = ${output.toFixed(2)}°C`;
  }
}


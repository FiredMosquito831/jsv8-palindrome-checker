window.addEventListener("DOMContentLoaded", () => {
  const inputEl = document.getElementById("text-input");
  const checkBtn = document.getElementById("check-btn");
  const resultEl = document.getElementById("result");

  checkBtn.addEventListener("click", () => {
    const value = inputEl.value;
    if (value === "") {
      alert("Please input a value.");
      return;
    }
    const normalized = value.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = normalized.split("").reverse().join("");
    if (normalized === reversed) {
      resultEl.textContent = `${value} is a palindrome`;
    } else {
      resultEl.textContent = `${value} is not a palindrome`;
    }
  });
});

const consoleInput = document.getElementById("console");
const body = document.body;
const image = document.getElementById("main-image");

consoleInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const cmd = this.value.trim().toLowerCase();

    if (cmd === "thememode -saber -f") {
      body.className = "saber-theme";
      image.src = "saberplush.jpg";
      alert("Saber mode activated!");
    } else {
      alert("Unknown command.");
    }

    this.value = "";
  }
});
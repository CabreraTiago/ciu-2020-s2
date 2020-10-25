function menuToggle() {
  let nav = document.getElementById("nav");
  nav.classList.toggle("active");
  let toggle = document.getElementById("toggle");
  toggle.classList.toggle("active");
}

var desktop = "Lenovo";
let notebook = "Dell";
const allInOne = "HP";

if (desktop) {
  var desktop = "Asus";
  console.log(`Adentro del if: ${desktop}`); // Output: Asus
}
console.log(`Afuera del if: ${desktop}`); // Output: Asus

if (notebook) {
  let notebook = "Acer";
  console.log(`Adentro del if: ${notebook}`); // Output: Acer
}
console.log(`Afuera del if: ${notebook}`); // Output: Dell

console.log(`Constante: ${allInOne}`); // Output: HP

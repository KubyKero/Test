const getal1 = parseFloat(prompt("Eerste getal:"));
const operatie = prompt("Kies (+, -, *, /):");
const getal2 = parseFloat(prompt("Tweede getal:"));

let resultaat;

if (operatie === "+") {
    resultaat = getal1 + getal2;
} else if (operatie === "-") {
    resultaat = getal1 - getal2;
} else if (operatie === "*") {
    resultaat = getal1 * getal2;
} else if (operatie === "/") {
    resultaat = getal2 !== 0 ? getal1 / getal2 : "Kan niet delen door nul!";
} else {
    resultaat = "Ongeldige operatie!";
}
console.log("Resultaat:", resultaat);
alert("Resultaat: " + resultaat);

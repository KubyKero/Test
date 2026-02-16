$getal1 = [double](Read-Host "Voer het eerste getal in")
$operatie = Read-Host "Kies een operatie (+, -, *, /)"
$getal2 = [double](Read-Host "Voer het tweede getal in")

if ($operatie -eq "+") {
    $resultaat = $getal1 + $getal2
} elseif ($operatie -eq "-") {
    $resultaat = $getal1 - $getal2
} elseif ($operatie -eq "*") {
    $resultaat = $getal1 * $getal2
} elseif ($operatie -eq "/") {
    $resultaat = $getal1 / $getal2
} else {
    $resultaat = "Ongeldige operatie!"
}

Write-Host "Het resultaat is: $resultaat" -ForegroundColor Cyan

getal1 = float(input("Eerste getal: "))
operatie = input("Kies (+, -, *, /): ")
getal2 = float(input("Tweede getal: "))

if operatie == "+":
    print(f"Resultaat: {getal1 + getal2}")
elif operatie == "-":
    print(f"Resultaat: {getal1 - getal2}")
elif operatie == "*":
    print(f"Resultaat: {getal1 * getal2}")
elif operatie == "/":
    print(f"Resultaat: {getal1 / getal2}")
else:
    print("Oeps, ongeldige operatie!")

class fahrzeug{
    hoehe = 1.6
    breite = 2
    laenge = 3
    hersteller
    sitzplaetze
    farbe

    constructor(fabrikant, farbe, sitzplaetze) {
        this.hersteller = fabrikant
        this.farbe = farbe
        this.sitzplaetze = sitzplaetze
    }

    Farbbestimmung(){
        if(farbe === rot){
            alert("rot")
        }
    }


}

function testFahrzeug(){
    vehikel = new fahrzeug("BMW", "rot", "7")
    vehikel2 = new fahrzeug("Mercedes", "grau", "5")

}
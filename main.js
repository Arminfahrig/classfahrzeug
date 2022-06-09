let stückzahl = 100
class buch{
    Vorhandenheit = true
    verlag
    autor
    genre
    name


    constructor(verlag, autor, genre, name) {
        this.verlag = hersteller
        this.autor = autor
        this.genre = genre
        this.name = titel
    }

    verfuegbar(){
        if(Vorhandenheit === true){
            document.getElementById("Anzahl").innerHTML = "Es sind noch " + stückzahl + " Bücher vorhanden."
            console.log("Es sind noch " + stückzahl + " Bücher vorhanden.")
        }else {
            alert("Das Buch ist ausverkauft.")
        }
    }
    verkauft(){
        stückzahl = stückzahl - 1
        document.getElementById("Anzahl").innerHTML = "Es sind noch " + stückzahl + " Bücher vorhanden."


    }


}

let lager = ["exemplar1", "exemplar2"]

function init(){
    exemplar1 = new buch("Luebbe", "KingSteven", "Thriller", "Shining")
    exemplar2 = new buch("Argon", "EbertSabine", "HistorischerRoman", "Schwert&Krone")
}

init()



let stückzahl = 100
let vorhandenheit = true
class buch{
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
        if (stückzahl = 0){
            vorhandenheit = false}
        if(vorhandenheit === true){
            document.getElementById("Anzahl").innerHTML = "Es sind noch " + stückzahl + " Bücher vorhanden."
            console.log("Es sind noch " + stückzahl + " Bücher vorhanden.")
        } else {
            alert("Das Buch ist ausverkauft.")
        }
    }

    verkauft(){
        if(stückzahl > 0){
        stückzahl = stückzahl - 1
        document.getElementById("Anzahl").innerHTML = "Es sind noch " + stückzahl + " Bücher vorhanden."

        }
    }





}

let lager = ["exemplar1", "exemplar2", "exemplar3", "exemplar4"]

function init(){
    exemplar1 = new buch("Luebbe", "KingSteven", "Thriller", "Shining")
    exemplar2 = new buch("Argon", "EbertSabine", "HistorischerRoman", "Schwert&Krone")
    exemplar3 = new buch("Ullstein", "KlingMarc-Uwe", "Komödie", "KänguruTriologie")
    exemplar4 = new buch("Luebbe", "FolletKen", "HistorischerRoman", "Kingsbridge")
}

init()

function ausDemSortiment(name){

}


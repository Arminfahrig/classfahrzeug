let stueckzahl = 100
let vorhandenheit = true
let lager = []


class buch{
    verlag
    autor
    genre
    name


    constructor(verlag, autor, genre, name, stueckzahl) {
        this.verlag = verlag
        this.autor = autor
        this.genre = genre
        this.name = name
        this.stueck
    }



    verfuegbar(){
        if (stueckzahl === 0){
            vorhandenheit = false}
        if(vorhandenheit === true){
            document.getElementById("Anzahl").innerHTML = "Es sind noch " + stueckzahl + " Bücher vorhanden."
            console.log("Es sind noch " + stueckzahl + " Bücher vorhanden.")
        } else {
            alert("Das Buch ist ausverkauft.")
        }
    }

    verkauft(){
        if(stueckzahl > 0){
        stueckzahl = stueckzahl - 1
        document.getElementById("Anzahl").innerHTML = "Es sind jetzt noch " + stueckzahl + " Bücher vorhanden."

        }
    }

}


function init(){
    exemplar1 = new buch("Luebbe", "KingSteven", "Thriller", "Shining")
    exemplar2 = new buch("Argon", "EbertSabine", "HistorischerRoman", "Schwert&Krone")
    exemplar3 = new buch("Ullstein", "KlingMarc-Uwe", "Komödie", "KänguruTriologie")
    exemplar4 = new buch("Luebbe", "FolletKen", "HistorischerRoman", "Kingsbridge")

    lager.push(exemplar1,exemplar2,exemplar3,exemplar4)

}

init()
console.log(lager)

function ausDemSortiment(name){
    lager.slice(2)
    console.log(lager)

}
function lagerListeTitel() {






    console.log(lager)

}
function lagerListe() {

    if(lager[0] < 100){
        console.log("leider nur noch wenige vorhanden")

    }



}

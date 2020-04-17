function genBingoTabelle(file) {
    tabelle = [
        "Stairway to Heaven",
        "Britney, Kylie oder Madonna Cover Version",
        "Beatles Cover Version",
        "ABBA Cover Version",
        "Ein instrumental Lied",
        "Eine Original Version",
        "Eine Akustik Version",
        "\"Blood\", \"Sweat\" oder \"Tears\"",
        "\"Planes\", \"Trains\" oder \"Automobiles\"",
        "\"Month\" oder \"Day\"",
        "\"Fruit\" oder \"Flower\"",
        "\"Rain\"",
        "\"Clothing\"",
        "\"Night\"",
        "Sex, Drugs, Rock\'n Roll",
        "two, too, to",
        "John, Paul, George, Ringo",
        "Gleiches Wort mehr als einmal im Titel",
        "Banjo, Sitar oder Mundharmonika",
        "Lied, zu dem ich stehend mitgesungen habe",
        "Lied, gesungen von Tom Jones",
        "Lied mit einem \"Instrument\" im Titel",
        "Lied im Cuntry oder Bluegrass Stil",
        "Lied mit einer Frage im Titel",
        "Lied, mit einer Stadt im Titel",
        "Lied, zu dem ich getanzt habe",
        "Lied, zu dem ich ein Bild gemalt habe",
        "Lied, das nach einem Film benannt ist",
        "Rumba, Raggaton, Oompah oder Polka",
        "Reggae oder Ska",
        "Walzer oder Tango",
        "3/4 Takt",
        "Erde, Wasser, Feuer, Luft",
        "Farben",
        "Essen",
        "Transportation",
        "Himmel",
        "Pflanzen",
        "Royalty",
        "Religion",
        "Wetter",
        "nicht Deutsch oder Englisch",
        "ein deutsches Lied",
        "Körperteile",
        "Gaga, Gogo, GooGoo",
        "Bläser oder Streicher"
    ]

    tabelle = shuffle(tabelle)
    tabelle[12] = "<h2><b>Eine Cover Version</b></h2>"

    return tabelle
}

function shuffle(array) { // Taken from https://bost.ocks.org/mike/shuffle/
    var m = array.length, t, i;

    while (m) {

        i = Math.floor(Math.random() * m--);

        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

function genBingo() {

    var tabelle = genBingoTabelle("bingoFelder.txt")
    var out = "<center><table>"
    var counter = 0

    for (i = 0; i < 5; i++) {

        out += "<tr>"

        for (j = 0; j < 5; j++) {
            out += "<td>" + tabelle[counter++] + "</td>"
        }

        out += "</tr>"
    }

    out += "</table></center>"

    replaceLabel("bingoFeld", out)

}
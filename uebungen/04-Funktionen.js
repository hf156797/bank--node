console.log("FUNKTIONEN")
console.log("==========")
//Funktionen führen operationen aus
let laenge = 3
let breite = 5

let flaecheninhalt = laenge * breite
console.log("Flächeninhalt: " + flaecheninhalt)

//Jetzt die Berechnung in einer Funktion:

//Zuerst wird die Funktion erstellt:

function berechneFlaecheninhalt(laenge, breite){
    return laenge * breite
}

//In einem zweiten Schritt wird die Funktion aufgerufen:

console.log("Flächeninhalt: " + berechneFlaecheninhalt(10,10))

//Der Vorteil von Funktionen ist, dass die Berechnung im Rumpf nur einmal ausformuliert werden muss.
//Die Funktion kann dann an vielen Stellen aufgerufen werden.

//So werden Funktionen erstellt:

//1. Das reservierte Wort Function
//2. Ein sprechender Name. D.h. der Name soll beschreiben, was die Funktion macht.
//3. Runde Klammern am Ende nehmen Parameter entgegen. Parameter sind das was die Funktion als
// Input zur erechnung benötigt. Funktionen können mehrere oder auch keine parameter entgegennehmen.
//4. In den geschweiften Klammern wird die Logik ausprogrammiert 
//5. Mit den reservierten Wort return wird das Ergebnis zurückgegeben.

console.log("Aufgabe 1")
console.log("=========")
//Berechgne das Volumen eines Quaders mit einer Funktion:

function berechneVolumen(laenge,breite,hoehe){
    return laenge * breite * hoehe
}
console.log("Volumen: " + berechneVolumen(5,6,7))

console.log("Aufgabe 2")
console.log("=========")
//Berechne den Bruttopreis aus den Nettropreis

function berechneBruttopreis(nettopreis,mehrwertsteuersatz){
    return nettopreis + mehrwertsteuersatz * nettopreis
}

console.log("Bruttopreis: " + berechneBruttopreis(100,0.19))

console.log("Aufgabe 3")
console.log("=========")
//Berechme die Schulnote aus der Abitur-Punktzahl

let Punktzahl = 10

function berechnePunktzahl(Mathe,Deutsch,Englisch,BWL,WI){
    if(punkte === 13) return "1+"
    else if(punkte === 14) return "1"
    else if(punkte === 13) return "1-"
    else if(punkte === 12) return "2+"
    else if(punkte === 11) return "2"
    else if(punkte === 10) return "2-"

}

let punkte = 10;

let note = berechnePunktzahl(10)

console.log("Note: " + note)


console.log("Aufgabe 4")
console.log("=========")

//Funktionen können auch innerhalb von Klassen definiert werden.
//Beispiel: Kredit


class Kredit {
    constructor(betrag, laufzeit, zinssatz) {
        this.betrag = betrag; // Kreditbetrag
        this.laufzeit = laufzeit; // Laufzeit in Monaten
        this.zinssatz = zinssatz; // Zinssatz in Prozent
    }

    // Funktion zur Berechnung der monatlichen Rate
    berechneMonatlicheRate() {
        const monatlicherZinssatz = this.zinssatz / 100 / 12; // Zinssatz pro Monat
        const zahlungen = this.laufzeit; // Anzahl der Zahlungen (Monate)

        // Berechnung der monatlichen Rate mit der Formel für Annuitätenkredite
        const monatlicheRate = (this.betrag * monatlicherZinssatz) / (1 - Math.pow(1 + monatlicherZinssatz, -zahlungen));

        return monatlicheRate;
    }
}

// Beispiel der Verwendung der Klasse
const meinKredit = new Kredit(100, 10, 5); // 100 Euro, 10 Monate, 5% Zinssatz
const rate = meinKredit.berechneMonatlicheRate();
console.log(`Monatliche Rate: ${rate.toFixed(2)} Euro`); // Ausgabe der monatlichen Rate

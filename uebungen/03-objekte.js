console.log("Objekte")
console.log("=======")

// Bislang speichern wir Werte in Variablen. 
// Bsp. let "vorname" = "Hans"
// Jede Variable nimmt genau einen Wert auf. In den Beispiel ist der Wert "Hans"
// In der realen Welt gibt es objekte, über die mehrere Werte abgespeichert werden sollen.
// beispiel: Schüler/innen in Schulverwaltungsprogram 
// Interessierende Eigenschaften: Vorname, Nachname, Geburtsdatum, Geburtsort, Klasse, Anschrift ... 
// Bislang haben wir das so gelöst: 
// let "vorname" = "Hans"
// let "Klasse" = "GW23A"
// let...
// Problem: Die Eigenschaften stehen in keinen Zusammenhang. 
// In den Zusammenhang zwischen werten herzustellen 
// Zunächst legt der Programmierer zur Entwicklungszeit die Baupläne (Klasse) fest, nach dem man Objekte zur
// Laufzeit erstellt werden. Und das geht so: 

class Schüler{
    constructor(){
        this.Vorname
        this.Nachname
        this.Klasse
    }
}

// Die Objekte werden nun aus den Bauplan (Klasse) wie folgt erzeugt:

let schüler = new Schüler()
schüler.Vorname = "Hans" 
schüler.Nachname = "Mayer"
schüler.Klasse = "GW23A"

// Die Werte können ausgegeben werden:

console.log("Nachname:" + schüler.Nachname = + "Vorname" + schüler.Vorname)

let schüler2 = new Schüler()
schüler2.Nachname = "Müller"
schüler2.Vorname = "Pit"
schüler2.Klasse = "GW23A"

// um aus den Bauplan (Klasse) ein konkretes objekt zu erzeugen, sind 3 Schritte notwendig.
// 1. DEKLATATION let schüler
//                 bei der Deklatation wird bekannt gegeben dass es ein objekt namens schüler geben soll.
// 2. INSTANTZINIERUNG: = new schüler 
//                        bei der Instantzinierung werden Speicherzellen in Arbeitsspeicher reserviert, um 
// Eigenschaftswerte aufzunehmen
// 3. INITIANIALISIERUNG; = schüler.nachname = "Schmitt"
// bei der Initianlisierung werden konkrete Werte in die Speicherzeile geschrieben

console.log("Aufgabe 1")
// für eine Autovermietung sollen Autos verwalten werden. Erstelle den Bauplan, um dann drei Objekte zu instantzieren

class Fahrrad{
    constructor(){
        this.type
        this.Preis 
        this.Farbe
    }
}

let fahrrad = new Fahrrad()
fahrrad.typ = "MountainBike" 
fahrrad.Preis = 1000
fahrrad.Farbe = "Rot"

console.log("Fahrrad:" + fahrrad.typ = + "Fahrrad" + fahrrad.Preis = + "Fahrrad" + fahrrad.Farbe)


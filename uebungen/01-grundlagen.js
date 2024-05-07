const { acceptsLanguage } = require("express/lib/request");

console.log("GRUNDLAGEN");
console.log("==========");

console.log("Aufgabe 1 ");
console.log("Erstelle zwei Variablen namens a und b. Initialisiere mit den Werten 1 und 2.");

//Der Wert 1 wird zugewiesen (=) an eine Variable namens a,  
let a = 1;
let b = 2;


// Mit dem Plus-Operator findet eine String-Verkettung statt. Ein String ist eine Zeichenkette, eingerahmt mit Hochkommas.
console.log("Der Wert der Variablen a ist:" + a);

console.log("Aufgabe 2 ");
console.log("Gib das Ergebnis der Addition von a und b aus.");

// Wenn links oder rechts vom Plus-Operator ein String steht, wird verkettet.
// Wenn links und rechts Zahlen stehen, wird addiert.
console.log(a+b);
console.log("Das Ergebnis der Addition:" + (a + b));

console.log("Aufgabe 3 ");
console.log("Gib das Ergebnis der Subtraktion, Multiplikation, Division von a und b aus");

console.log(a-b);
console.log(a*b);
console.log(a/b);

console.log("Aufgabe 4 ");
console.log("Der Wert von C sei das Ergebnis der Addition von a und b.");

let c = a + b;
console.log("C hat den Wert: " + c);

console.log("Aufgabe 5 ");
console.log("a und b sind die Seitenlängen der Katheten einen rechtwinkligen Dreiecks. Bestimme die Länge der Hypotheuse.");

// cQuadrat ist in Kamelhöcker-Notation geschrieben. Das heißt zuerst ein Kleinbuchstabe. Verbundene Wörter beginnen groß.
let cQuadrat = a * a + b * b;

// javascript kennt eine Bibliothek namens Math. In der Bibliotek gibt es eine Funktion namens sqrt. Als Parameter in den
// runden Klammern erwartet sqrt eien Zahl, aus der dann eine Wurzel gezogen wird.
c = Math.sqrt(cQuadrat);

console-log("Die Hypothenuse ist " + c + " lang.");

console.log("Aufgabe 6 ");
console.log("Ein Kunde legt 100 Euro auf dem Sparbuch an. Jedes Jahr bekommt er 10% Zinsen. Wie viel bekommt der Kunde nach 2 Jahren ausgezahlt. Beachte den Zinseszinseffekt.");

let laufzeit = 2;
let startkapital = 100;
let zinssatz = 0.1; 


let zinsenNachEinemJahr = startkapital = (1 + zinssatz);

console.log("Kapital nach einem Jahr; " + KapitalNachEinemJahr + " EUR.");

let KapitalNachZweiJahren ("KapitalNachEinemJahr (1 + zinssatz");

console.log("Kapital nach zwei Jahren")

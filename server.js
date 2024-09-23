/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
 
'use strict';
 
const express = require('express');
 
// Constants
// Die anweisungen werden von oben nach unten abgearbeitet. DEr  Wert 3000 wird von rechts nach links zugewiesen an die Konstante Namens Port. DAs einfache gleichheits Zeichen lässt sich also übeersetzen mit wird zugewiesen an.
const PORT = 3000;
 
//DER Wert`.0.0.0.0´ wird zugewiesen an die Kostante Namens HOST
const HOST = '0.0.0.0';
 
// App
const app = express();
app.get('/', (req, res) => {
   
    // Res ist dei antwort des servers an den Browser.
    //send() ist die anweisung etwas an den Browser zu senden
    //Helllo..... ist der wert der an die Anweisung send() übergeben wird
 
   
    //res.send('Hello remote world!\n');
// Das res-Objekt kann noch mehr als nur eine Zeichenkette an den Browser zu senden. Das res Objekt kann mit der Funktion render , eine HTML an den Browser senden.
 res.render("index.ejs",{});
});
 
 
// Mit listen wird der server angewiesen , Auf den angegebenen Host un d Port zu lauschen
app.listen(PORT, HOST);
 
// Mit der Anweeisung Konsole.log() Wird dem Server Administrator auf der Konsole angezeigt, waa der server macht.  Der Programmierer sxchreibt dazu in die runden Klammern  den ausdruck den ausdruck,  der auf konsole angezeigt werden soll. die werte der beiden Konstaten Host und port werden in den Ausdruck übergeben. ein Verb mit anschliessenden klammer steht immer für eine Anweisung etwas zu tun.
console.log(`Running on http://${HOST}:${PORT}`);

require("./uebungen/03-objekte.js");  //Mit der Funktion require wird die Datei in den runden Klammern eingelesen.
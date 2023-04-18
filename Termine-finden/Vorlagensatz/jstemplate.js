// ++++++++++ Anleitung ++++++++++
//
// Hier kann die Datenbank konfiguriert werden.
// Einfach den jeweiligen Wert hinter dem "=" verändern.
// Nach Änderungen muss ggf. mit [Strg + F5] aktualisiert werden!
//
// ++++++++++ EINSTELLUNGEN ++++++++++

// ++++++++++ Moodle-Namen für Teilnehmer:innen erzwingen ++++++++++

const MoodleName = false;               // false = Eigene Eingabe; true = Moodle-Name

// ++++++++++ Video-Tutorial für Teilnehmer:innen ein-/ausblenden ++++++++++

const VideoTutorial = false;            // false = ausgeblendet; true = eingeblendet

// ++++++++++ Eigene Hinweise über den Tabellen ++++++++++

// Die Hinweise-Texte unterstützen HTML Text-Formattierungen (fett, kursiv etc.)

const HinweisEintrag = false;           // false = ausgeblendet; true = eingeblendet
const TextEintrag = "Platzhalter";      // Hinweis über "Eintrag hinzufügen"

const HinweisEinzel = false;            // false = ausgeblendet; true = eingeblendet
const TextEinzel = "Platzhalter";       // Hinweis über "Einzelansicht"

const HinweisListe = false;             // false = ausgeblendet; true = eingeblendet
const TextListe = "Platzhalter";        // Hinweis über "Listenansicht"

// +++++++++++++++ Spalten konfigurieren +++++++++++++++

const TextSpalte00 = "Stunde"           // Überschrift Spalte 0 (Kann nicht ausgeblendet werden)
const AbkSpalte00 = "Std."              // Kurzer Text für schmale Bildschirme


const AnzahlSpalten = 5                 // Anzahl der Spalten (1-7), die eingeblendet werden


const TextSpalte01 = "Montag"           // Überschrift Spalte 1
const AbkSpalte01 = "Mo"                // Kurzer Text für schmale Bildschirme

const TextSpalte02 = "Dienstag"
const AbkSpalte02 = "Di"

const TextSpalte03 = "Mittwoch"
const AbkSpalte03 = "Mi"

const TextSpalte04 = "Donnerstag"
const AbkSpalte04 = "Do"

const TextSpalte05 = "Freitag"
const AbkSpalte05 = "Fr"

const TextSpalte06 = "Samstag"
const AbkSpalte06 = "Sa"

const TextSpalte07 = "Sonntag"
const AbkSpalte07 = "So"

// +++++++++++++++ X Zeilen ein-/ausblenden +++++++++++++++

// "AnzahlZeilen" = 0, dann werden die Zeilen durch die Einstellungen unten ein-/ausgeblendet.
// "AnzahlZeilen" = 8, dann werden 8 Zeilen eingeblendet, unabhängig von den Einstellungen unten.

const AnzahlZeilen = 0                  // Mögliche Anzahl: 1 - 17  |   0 = deaktiviert

// +++++++++++++ Zeilen individuell konfigurieren +++++++++++++

// Um Zeilen einzeln ein-/auszublenden, muss die Zeile "AnzahlZeilen" mit "//" auskommentiert sein.

let Zeile01Anzeigen = true;             // false = ausgeblendet true = eingeblendet
const TextZeile01 = "1. Stunde"         // Fetter Text, der in der ersten Spalte der ersten Zeile steht
const ZeitZeile01 = "07:45 - 08:30"     // Normaler Text, der darunter steht

let Zeile02Anzeigen = true;
const TextZeile02 = "2. Stunde"
const ZeitZeile02 = "08:30 - 09:15"

let Zeile03Anzeigen = true;
const TextZeile03 = "1. Pause"
const ZeitZeile03 = "09:15 - 09:35"

let Zeile04Anzeigen = true;
const TextZeile04 = "3. Stunde"
const ZeitZeile04 = "09:35 - 10:20"

let Zeile05Anzeigen = true;
const TextZeile05 = "4. Stunde"
const ZeitZeile05 = "10:20 - 11:05"

let Zeile06Anzeigen = true;
const TextZeile06 = "2. Pause"
const ZeitZeile06 = "11:05 - 11:30"

let Zeile07Anzeigen = true;
const TextZeile07 = "5. Stunde"
const ZeitZeile07 = "11:30 - 12:15"

let Zeile08Anzeigen = true;
const TextZeile08 = "6. Stunde"
const ZeitZeile08 = "12:15 - 13:00"

let Zeile09Anzeigen = true;
const TextZeile09 = "Mittagspause"
const ZeitZeile09 = "13:00 - 13:50"

let Zeile10Anzeigen = true;
const TextZeile10 = "7. Stunde"
const ZeitZeile10 = "13:50 - 14:35"

let Zeile11Anzeigen = true;
const TextZeile11 = "8. Stunde"
const ZeitZeile11 = "14:35 - 15:20"

// +++++++ 5 weitere Zeilen konfigurieren (standardmäßig ausgeblendet) +++++++

let Zeile12Anzeigen = false;            // false = ausgeblendet true = eingeblendet
const TextZeile12 = "9. Stunde"         // Fetter Text, der in der ersten Spalte der 12. Zeile steht
const ZeitZeile12 = "15:30 - 16:15"     // Text, der darunter steht

let Zeile13Anzeigen = false;
const TextZeile13 = "10. Stunde"
const ZeitZeile13 = "16:15 - 17:00"

let Zeile14Anzeigen = false;
const TextZeile14 = "11. Stunde"
const ZeitZeile14 = "17:00 - 17:45"

let Zeile15Anzeigen = false;
const TextZeile15 = "12. Stunde"
const ZeitZeile15 = "17:45 - 18:30"

let Zeile16Anzeigen = false;
const TextZeile16 = "13. Stunde"
const ZeitZeile16 = "18:30 - 19:15"

let Zeile17Anzeigen = false;
const TextZeile17 = "14. Stunde"
const ZeitZeile17 = "19:15 - 20:00"

// ++++++++++++ Einzelne Zeilen dunkel hervorheben  ++++++++++++

const DunkleZeile01 = false             // false = Zeile nicht dunkler; true = Zeile dunkler
const DunkleZeile02 = false
const DunkleZeile03 = true
const DunkleZeile04 = false
const DunkleZeile05 = false
const DunkleZeile06 = true
const DunkleZeile07 = false
const DunkleZeile08 = false
const DunkleZeile09 = true
const DunkleZeile10 = false
const DunkleZeile11 = false
const DunkleZeile12 = false
const DunkleZeile13 = false
const DunkleZeile14 = false
const DunkleZeile15 = false
const DunkleZeile16 = false
const DunkleZeile17 = false


// +++++++++++++++++ EINSTELLUNGEN ENDE +++++++++++++++++


// Termine finden v1.0.3 - Copyright (C) 2023, @margomius - https://margomius.com/
// GNU General Public Licence 3.0 - http://www.gnu.de/documents/gpl-3.0.en.html
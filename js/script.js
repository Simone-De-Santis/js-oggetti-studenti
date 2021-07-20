/*
Descrizione:
ES 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo (in pagina) attraverso un ciclo for-in tutte le proprietà dell'oggetto.
ES 2
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
Consigli del giorno:
Iniziate col riflettere sugli step che dovete eseguire, scrivendoli in italiano sotto forma di commenti
Facciamo un passo alla volta e verifichiamo i nostri passi col console.log.
Quando tutto funziona col console.log possiamo preoccuparci di eseguire in pagina!
Ragazzi il bonus per questo esercizio, solo dopo che avete controllato che funziona tutto, è inserire l'utente tramite input HTML al posto del prompt. Buona lavoro a tutti.
 */

//! creazione ogetto singolo

var student = {
  name: "simone",
  surname: "de santis",
  age: 28,
};

var display = document.getElementById("student-property");
var content = "";
for (var key in student) {
  content += "<li>" + key + " : " + student[key] + "</li>";
}
display.innerHTML = content;

//! *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
//! creazione classe e stampa in pagina nome e cognome

var classroom = [
  { name: "simone", surname: "de santis", age: "28" },
  { name: "agngelo", surname: "de falco", age: "28" },
  { name: "marco", surname: "de angelis", age: "28", height: "1.80 M" },
  { name: "fabio", surname: "de michelis", age: "28" },
  { name: "francesco", surname: "de boris", age: "28" },
];

//? cicliamo nell'array
// var content2 = "";
// for (var i = 0; i < classroom.length; i++) {
//   var currentStudent = classroom[i];
//   //* stampiamo nome e cognome

//   // content2 += "<li>" + "<span>Nome :  </span>" + currentStudent.name + "   " + "<span>Cognome :</span>" + currentStudent.surname + "</li>";
//   //* stampiamo tutte le proprietà

//   content2 += "<li>";
//   //* cicliamo su tutte le preprieta per ogni aray
//   for (var key in currentStudent) {
//     content2 += "<span>" + key + ":</span>" + currentStudent[key] + "<br/>";
//   }
//   content2 += "</li>";
// }
var display = document.getElementById("student-property-2");

printObjectArray(classroom, display);

// //? ************************************************************
//! chiediamo all'utente con 3 prompt di inserire in un nuovo ogetto
var newName = prompt("inserisci nome");
var newSurname = prompt("inserisci cognome");
var newAge = prompt("inserisci età");
var newStudent = {
  name: newName,
  surname: newSurname,
  age: newAge,
};

// inseriamo il nuovo stutante nell'array di oggetti classroom...... non appare in pagina perchè la stampa e prima della creazione del nuovo studente
//creiamo una funzione per stampare

classroom.push(newStudent);

console.table(classroom);
printObjectArray(classroom, display);

//! FUNCION DECLARATION
/**
 * Stampa in pagina un array
 * @param {array} //Array di oggetti
 * @param {HTMLElement} //id elemento html
 */
function printObjectArray(objectArray, targetElement) {
  var content = "";
  for (var i = 0; i < objectArray.length; i++) {
    var currentItem = objectArray[i];
    content += "<li>";
    for (var key in currentItem) {
      content += "<span>" + key + ": </span>" + currentItem[key] + "<br/>";
    }
    content += "</li>";
  }
  targetElement.innerHTML = content;
}

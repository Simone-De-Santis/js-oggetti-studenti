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
 */

//* creazione ogetto singolo

var student = {
  name: "simone",
  surname: "de santis",
  age: "28",
  fullName: function () {
    return this.name + " " + this.surname;
  },
};

document.getElementById("student-property").innerHTML = student.fullName();
// *console log ogetto singolo

console.log(student);

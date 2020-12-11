//  creo tre variabili con  tre prompt per le tre domande che farò all utente

var nome = prompt('Come ti Chiami?');
var cognome = prompt('Il tuo cognome?');
var colorePreferito = prompt('Il tuo colore preferito?');

// ora creo la variabile per la data corrente
// var annoCorrente = new Date().getFullYear();
// var annoDiNascita = annoCorrente - age;

// ora queste risposte dovranno essere stampante sul mio html del div output cosi da vederle stampate

var outputBox = document.getElementById('output');
// outputBox.innerText= 'nome' + 'congome' + 'colorePreferito'; sbagliato

outputBox.append(nome + cognome + colorePreferito + 19);








// var risposta = prompt('Come ti chiami?');
// console.log('Il tizio si chiama: ' + risposta);
// // document.writeln(risposta);
// var outputContainer = document.getElementById('output');
// outputContainer.innerText = 'ciao ' + risposta;
// // funzione per "appendere", aggiungere, alla variabile outputContainer il suo argomento.
// outputContainer.append('\nquesto è un append');  // diverso da innerHTML, perché lo "aggiunge".
// //^variabile    ^funzione        ^argomento/parametro
// var age = prompt(' Ciao ' + risposta + '. Quanti anni hai?');
// console.log('Il tizio ha: ' + age + ' anni');
// var annoCorrente = new Date().getFullYear();
// var annoDiNascita = annoCorrente - age;
// outputContainer.append('\nla tua data di nascita è ' + annoDiNascita);

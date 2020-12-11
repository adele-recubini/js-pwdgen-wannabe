//  creo tre variabili con  tre prompt per le tre domande che farò all utente

var nome = prompt('Come ti Chiami?');
var cognome = prompt('Il tuo cognome?');
var colorePreferito = prompt('Il tuo colore preferito?');

// ora creo la variabile per la data corrente
var age = 33;
var annoCorrente = new Date().getFullYear();
var annoDiNascita = annoCorrente - age;

// ora queste risposte dovranno essere stampante sul mio html del div output cosi da vederle stampate

var outputBox = document.getElementById('output');
// outputBox.innerText= 'nome' + 'congome' + 'colorePreferito'; sbagliato

outputBox.append(nome + cognome + colorePreferito + annoCorrente);

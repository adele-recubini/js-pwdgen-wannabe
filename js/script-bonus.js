// bonus 1


// creo la viariabile nome e la faccio come domanda
var nome = prompt('Come ti Chiami?');
// dove andra a stamparmi le risposte
var outputBox = document.getElementById('output');

// se la risposta è uguale a quella allora stampami ciao adele senno stampami che non mi conosci

if(nome === 'Adele') {
  outputBox.append('Ciao ' + nome)
} else {
  outputBox.append('non ti conosco.')
}

// bonus 2

// morra cinese
var ludopatia = prompt('se vinco mi darai 6 milioni di euro, ok?');
var outputBox = document.getElementById('output');

if(ludopatia ==='ok'){
  outputBox.append('iniziamo!')
}

if(ludopatia !== 'ok') {
  outputBox.append('hai fatto bene, avresti perso.')
}



var domanda =prompt('carta,sasso,forbici ?')

if( domanda==='forbici'){
  outputBox.append('sasso' + '\nhai perso!')
}

if( domanda==='carta'){
  outputBox.append('sasso' + '\nhai perso!')
}

if( domanda==='sasso'){
  outputBox.append('carta!' + '\nhai perso!')
}

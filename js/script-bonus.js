// // creo la viariabile nome e la faccio come domanda
// var nome = prompt('Come ti Chiami?');
// // dove andra a stamparmi le risposte
// var outputBox = document.getElementById('output');
//
// // se la risposta è uguale a quella allora stampami ciao adele senno stampami che non mi conosci
//
// if(nome === 'Adele') {
//   outputBox.append('Ciao ' + nome)
// } else {
//   outputBox.append('non ti conosco.')
// }


// carta forbici sasso

var domanda =prompt('carta,mani,forbici?')
var outputBox = document.getElementById('output');

if( domanda==='forbici'){
  outputBox.append('sasso' + '\nhai perso!')
}

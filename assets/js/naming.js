/* stringa "gatto" assegnato al variabile 1pet_preferito e mette in display sulla console*/
var $1pet_preferito = 'gatto';
    console.log($1pet_preferito);

var pet = 'gatto';//stringa "gatto" assegnato al variabile pet

var Pet = 'cane';//stringa "cane" assegnato al variabile pet sovrascrivendo il "gatto"

var petPreferito1 = 'criceto';
var PetPreferito2 = 'coniglio';

document.getElementById('test').innerHTML+= petPreferito1 + ' e ' + PetPreferito2;

var $pet = 'giraffa';
console.log($pet);
var _pet = 'leone';
console.log(_pet);

/* var _pet2 = 'pantera';
document.write(_pet2); */
var numero = '12';

//function bottone1
document.getElementById('btn').addEventListener('click', bomba);
function bomba() {
    document.write('<h1>Boom!</h1>');
}

//Function bottone2
function somma() {
    alert(4 + 4);
}
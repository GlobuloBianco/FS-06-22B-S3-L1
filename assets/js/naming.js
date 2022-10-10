//bottone reset pagina

document.getElementById("resetBtn").onclick = function() {
    location.reload();
}

// Username-----------------------------------------------

document.getElementById("submitUser").onclick = function() {
    username = document.getElementById("myText").value;
    //console.log(username);
    document.getElementById("myLabel").innerHTML = "Ciao " + username;
}

// Biscotto-----------------------------------------------
document.getElementById("biscottoBtn").onclick = function() {
    if (document.getElementById("biscottoBox").checked) {
        document.getElementById("biscottoH2").innerHTML = "Grazie! :D";
    }
    else {
        document.getElementById("biscottoH2").innerHTML = "Dovevi spuntare il biscotto >:C";
    }
}

// Addizione e Sottrazione-----------------------------------------------
//aumento
document.getElementById("incBtn").onclick = function() {
    theNumber = document.getElementById("theNumber").textContent;
    theNumber = Number(theNumber);
    theNumber +=1;
    document.getElementById("theNumber").innerHTML = theNumber;
}
//reset number
document.getElementById("resBtn").onclick = function() {
    document.getElementById("theNumber").innerHTML = "0";
}
//diminuisco
document.getElementById("decBtn").onclick = function() {
    theNumber = document.getElementById("theNumber").textContent;
    theNumber = Number(theNumber);
    theNumber -=1;
    document.getElementById("theNumber").innerHTML = theNumber;
}

//nuke button-------------------------------------------
document.getElementById('btn').addEventListener('click', bomba);
function bomba() {
    alert('Bruh... Human have smol brain :C')
    document.write('<h2>Boom!</h2>');
    document.write('<button type="button" id="resetBtn" class="btn">Rewind</button>');
    document.write('<script type="text/javascript" src="assets/js/naming.js"></script>');
}


// 🡣🡣🡣🡣🡣🡣 Roba dell'esercizio 🡣🡣🡣🡣🡣🡣

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


//Function bottone2
function somma() {
    alert(4 + 4);
}
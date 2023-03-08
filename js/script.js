alert("Questo è un programma in fase sperimentale");

//prezzo biglietto 0.21€ al KM
//sconto 20% minorenni son 40% over 65% minorenni
//risultati in decimale  
const kmtrNumber = prompt("Inserire il numero di KM");

// applichiamo un primo controllo sull'inserimento dell'eta
console.log(isNaN(kmtrNumber));
 if ((isNaN(kmtrNumber))) {
    document.getElementById("main-txt").innerHTML = "Si prega di inserire un numero evitando di utilizzare le lettere";
}else {
    const userAge = prompt("Inserire anno di nascita  ES:'2023'");
    //controllo per inserimento anno di nascita
    if ( (isNaN(userAge)) || userAge.length !== 4  ) {
        document.getElementById("main-txt").innerHTML = "Si prega di inserire una data di 4 cifre<br>Es. 1884";
    }


}



//funzione di ricarica pagina
function reloadPage()
{
location.reload();
}
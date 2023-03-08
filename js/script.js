alert("Questo è un programma in fase sperimentale");

//prezzo biglietto 0.21€ al KM
//sconto 20% minorenni son 40% over 65% minorenni
//risultati in decimale  
const kmtrNumber = prompt("Inserire il numero di KM");

// applichiamo un primo controllo sull'inserimento dell'eta
console.log(isNaN(kmtrNumber));
 if ((isNaN(kmtrNumber)) || kmtrNumber.length == 0) {
    document.getElementById("main-txt").innerHTML = "Si prega di inserire un numero evitando di utilizzare le lettere";
}else {
    const userYear = prompt("Inserire anno di nascita  ES:'2023'");
    //controllo per inserimento anno di nascita
    if ( (isNaN(userYear)) || userYear.length !== 4  ) {
        document.getElementById("main-txt").innerHTML = "Si prega di inserire una data di 4 cifre<br>Es. 1884";
    }else {
        //ricaviamo il prezzo del biglietto
        const mainPrice = (0.21 * kmtrNumber);
        console.log(mainPrice);
        //troviamo l'età dell'utente 
        const userAge = ( 2023 - userYear);
        console.log(userAge);
        let disountedPrice = "";
        //controllo per lo sconto
        if (userAge < 18) {
            disountedPrice = (mainPrice * 0.80).toFixed(2)
            console.log(disountedPrice);
            document.getElementById("main-txt").innerHTML = `Il prezzo del biglietto è: ${disountedPrice}€`;
        }else if (userAge > 65) {
            disountedPrice = (mainPrice * 0.60).toFixed(2)
            document.getElementById("main-txt").innerHTML = `Il prezzo del biglietto è: ${disountedPrice}€`;
        }else {
            document.getElementById("main-txt").innerHTML = `Il prezzo del biglietto è: ${(mainPrice).toFixed(2)}€`;
        }

    }
}



//funzione di ricarica pagina
function reloadPage()
{
location.reload();
}
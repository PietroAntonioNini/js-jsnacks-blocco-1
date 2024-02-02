//PROGRAMMA NUMERI DISPARI

//creo un array vuota
const oddNumbers = [];

//chiedo all'utente 6 numeri
for(let i = 0; i < 6; i++ ) {
    let number = Number(prompt("Inserisci un numero casuale"));

    if(!isNaN(number)) {
        if(i % 2 !== 0) {
            oddNumbers.push(number);
        }
    } else {
        alert("Inserisci un numero!");
         //ricarico la pagina
        location.reload(true);
    }
}

//stampo i numeri dispari 
document.querySelector("#list").innerText = oddNumbers;
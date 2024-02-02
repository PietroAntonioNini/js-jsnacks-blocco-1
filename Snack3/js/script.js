//PROGRAMMA NUMERI DISPARI

//creo un array vuota
const oddNumbers = [];

//chiedo all'utente 6 numeri
for(let i = 0; i < 6; i++ ) {
    let number = Number(prompt("Inserisci un numero casuale"));

    if(i % 2 !== 0) {
        oddNumbers.push(i);
    }
}

//stampo i numeri dispari 
document.querySelector("#list").innerText = oddNumbers;
//PROGRAMMA NUMERI DISPARI

//creo un array vuota
const oddNumbers = [];
console.log(oddNumbers);

//chiedo all'utente 6 numeri
for(let i = 0; i < 6; i++ ) {
    let number = Number(prompt("Inserisci un numero casuale"));

    if(i % 2 !== 0) {
        oddNumbers.push(i);
    }
}

console.log(oddNumbers);

document.querySelector("#list").innerText = oddNumbers;
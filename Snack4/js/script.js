//PROGRAMMA SOMMA LE CIFRE DI UN NUMERO
let number;
//controllo che il numero sia esattamente di 4 cifre
while(true) {
    let number = Number(prompt("Inserisci un numero di 4 cifre"));

    if(number.length === 4 && !isNaN(number)) {
        break;
    }
}

console.log(number);


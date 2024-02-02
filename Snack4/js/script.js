//PROGRAMMA SOMMA LE CIFRE DI UN NUMERO
let number;

//controllo che il numero sia esattamente di 4 cifre
while(true) {
    number = prompt("Inserisci un numero di 4 cifre");

    if(number.length === 4 && !isNaN(number)) {
        break;
    }
}

console.log(number);

let sum = 0

for(let i = 0; i < number.length; i++) {
    sum += parseInt(number[i]);
}

console.log(sum);
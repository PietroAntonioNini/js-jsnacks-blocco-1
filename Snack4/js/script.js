//PROGRAMMA SOMMA LE CIFRE DI UN NUMERO
let number;

//controllo che il numero sia esattamente di 4 cifre
while(true) {
    number = prompt("Inserisci un numero di 4 cifre");

    if(number.length === 4 && !isNaN(number)) {
        break;
    }
}

//creo una variabile della somma dei numeri
let sum = 0

//sommo tra loro i numeri che compongono il numero di 4 cifre
for(let i = 0; i < number.length; i++) {
    sum += parseInt(number[i]);
}

//stampo la somma
document.querySelector("#sum").innerText = sum;
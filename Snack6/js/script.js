//PROGRAMMA SOMMA E MEDIA DEI PRIMI 10 NUMERI
let sum = 0;
let average = 0;

for(let i = 1; i <= 10; i++) {

    //sommo i primi 10 numeri
    sum += i;

    //faccio la media dei primi 10 numeri
    average += i / 10;
}

//stampo i risultati
document.querySelector("#sum").innerText = sum;
document.querySelector("#average").innerText = average;


//PROGRAMMA SOMMA DI 10 NUMERI

//Salvo una variabile della somma dei numeri
let number;
let sum = 0;

//Ciclo per chiedere 10 volte un numero all'utente, 
//Se non inserisce un numero viene contato come fosse 0
for(let i = 0; i < 10; i++) {
    number = Number(prompt("inserisci un numero"));
    sum += parseInt(number);

    console.log(number);
    console.log(sum);
}

//stampo la somma dei 10 numeri
document.querySelector("#sum").innerText = sum;


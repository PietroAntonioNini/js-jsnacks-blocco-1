
//PROGRAMMA SOMMA DI 10 NUMERI

//Salvo una variabile della somma dei numeri
let number;
let sum = 0;

//Ciclo per chiedere 10 volte un numero all'utente, 
for(let i = 0; i < 10; i++) {
    number = Number(prompt("inserisci un numero"));

    if(!isNaN(number)) {
        sum += parseInt(number);

    } else {
        alert("Inserisci un valore numerico, devi ricominciare da capo:(")
        //ricarico la pagina
        location.reload(true);       
    }
}

//stampo la somma dei 10 numeri
document.querySelector("#sum").innerText = sum;


//PROGRAMMA CALCOLA LUNGHEZZZA PAROLE

//salvo due variabili contenenti le parole inserite dall'utente
let word1 = prompt("Inserisci una parola");
let word2 = prompt("Inserisci un'altra parola");

console.log(word1);
console.log(word2);

//stampo le parole inserite
document.querySelector("#word-1").innerText = word1;
document.querySelector("#word-2").innerText = word2;

//controllo la loro lunghezza e stampo dei risultati diversi
if(word1.length > word2.length) {
    document.querySelector("#word-1").innerText = word2;
    document.querySelector("#word-2").innerText = word1;
}

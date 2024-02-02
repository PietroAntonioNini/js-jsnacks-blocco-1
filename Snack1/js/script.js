//PROGRAMMA CALCOLA LUNGHEZZZA PAROLE

//salvo una variabile contenente la prima parola
let word1 = prompt("Inserisci la prima parola");
//salvo una variabile contenente la seconda parola
let word2 = prompt("Inserisci un'altra parola");

//controllo che il campo non sia vuoto
if(word1 === "" || word2 === "") {
    alert("Inserisci qualcosa! Non riesco a confrontare se non ho 2 parole!")
    //ricarico la pagina
    location.reload();

} else {
    //stampo le parole inserite
    document.querySelector("#word-1").innerText = word1;
    document.querySelector("#word-2").innerText = word2;

    //controllo la loro lunghezza e stampo dei risultati diversi
    if(word1.length > word2.length) {
        document.querySelector("#word-1").innerText = word2;
        document.querySelector("#word-2").innerText = word1;
    }
}



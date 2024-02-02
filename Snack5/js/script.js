//PROGRAMMA CUBO DEI PRIMI 10 NUMERI

//chiedo all'utente un numero da 1 a 100
let number = prompt("Inserisci un numero da 1 a 100");

//controllo se è effettivamente un numero e se va da 1 a 100
if(number >= 1 && number <= 100 && !isNaN(number)) {

    let cube = "I cubi dei numeri fino a " + number + " sono: <br>";

    for(let i = 1; i <= number; i++) {
        let numberCube = i ** 3;

        console.log(numberCube);

        cube += "il cubo di " + i + " è: " + numberCube + "<br>";

        //stampo i cubi di ogni numero
        document.querySelector("#cube").innerHTML = cube;
    }
} else {
    alert("Inserisci un valore numerico e da 1 a 100!");
}

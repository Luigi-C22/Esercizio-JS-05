// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/

/*function giveMeRandom(n) {
    let array = [];
    let randomNum = 0;
    if (typeof n !== 'number') return "Inserire un numero"
    if (n >= 0) {
        for (let i = 0; i < n; i++) {
            randomNum = Math.floor(Math.random()*10);
            array.push(randomNum);
        } return array;
    } else return "Insrire un numero positivo"
}
causalArray = giveMeRandom(4)
console.log(causalArray)
function checkArray(arr) {
    let somma = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > 5) {
            console.log(true);
            somma += arr[index]
        }
        else console.log(false);
    }
    return somma;
}
console.log("La somma dei numeri superiori a 5 è: " + checkArray(causalArray))*/

/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/

/*let shoppingCart = [
    {
        prezzo: 10,
        nome: "oggetto1",
        id: 111,
        quantita: 1,
    },

    {   
        prezzo: 15,
        nome: "oggetto2",
        id: 222,
        quantita: 3,

    },

    {
        prezzo: 5,
        nome: "oggetto3",
        id: 333,
        quantita: 4,
    },

    {
        prezzo: 12,
        nome: "oggetto4",
        id: 444,
        quantita: 2,
    },

    {
        prezzo: 8,
        nome: "oggetto5",
        id: 555,
        quantita: 1
    }
]

function shoppingCartTotal(array) {
    let total = 0;
    let partial = 0;
    for (let i = 0; i < array.length; i++) {
        partial = array[i].prezzo * array[i].quantita;
        total += partial;
    }
    return total;
}
console.log(shoppingCartTotal(shoppingCart));
*/

/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/
/*
let shoppingCart = [
    {
        prezzo: 10,
        nome: "oggetto1",
        id: 111,
        quantita: 1,
    },

    {   
        prezzo: 15,
        nome: "oggetto2",
        id: 222,
        quantita: 3,

    },

    {
        prezzo: 5,
        nome: "oggetto3",
        id: 333,
        quantita: 4,
    },

    {
        prezzo: 12,
        nome: "oggetto4",
        id: 444,
        quantita: 2,
    },

    {
        prezzo: 8,
        nome: "oggetto5",
        id: 555,
        quantita: 1
    }
]
let newObj = {
    prezzo: 8,
    nome: "oggetto6",
    id: 666,
    quantita: 1
} 
function addToShoppingCart(newItem){
    shoppingCart.push(newItem);
    return shoppingCart;
}
console.log(addToShoppingCart(newObj));
console.log("numero totale oggetti è: " + shoppingCart.length);
*/


/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/

/* function maxShoppingCart(array) {
    let max = 0;
    let max1 = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].prezzo>max) {
            max = array[i].prezzo
            max1 = i;        
        }
    }
    return max1;
}
let maxCost = (maxShoppingCart(shoppingCart));
console.log("L'oggetto più costoso è: " + shoppingCart[maxCost].nome + " con un costo di: " + shoppingCart[maxCost].prezzo + " euro") 
*/
/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/

/* function latestShoppingCart(array) {
    let latest = array.length - 1;
    return latest;
}
let ultimo = latestShoppingCart(shoppingCart);
console.log("L'ultimo articolo aggiunto al carrello è: " + shoppingCart[ultimo].nome) 
*/

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/

 /*function loopUntil(x) {
    if (x<0 || x>9) return "Inserire un numero tra 0 e 9"
    let random = 0;
    for (let i = 0; i < 3;) {
        random = Math.floor(Math.random()*10);
        if (random > x) {
            console.log(random);
            i++
        }
    }
}
console.log(loopUntil(1)) ;*/

/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/

/* let numbers = [1,2,1,2,1,'pollice',2];
function average(array) {
    let media = 0;
    let somma = 0;
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number') {
            counter++;
        }
        else {
            somma += array[i]; 
        }       
    }
    media = somma / (array.length - 1);
    return media;
}
console.log(average(numbers)) */


/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

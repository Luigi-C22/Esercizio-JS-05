/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/*function area(l1, l2){
   let area = l1 * l2;
return area;
}  
 console.log(area(3,4))
*/


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/*function crazySum(num1, num2){
    let sum = num1 + num2;
    if (num1 === num2){
        sum = sum*3
    }
    return sum
}
console.log(crazySum(3,3));
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/*function crazyDiff(num1){
    
    let diff = num1 - 19;
    if(diff > 19){
        diff = diff * 3;
    }
return diff;
}console.log(crazyDiff())
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e
  ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/*function boundary(num1){
    if(num1 !== parseInt(num1)) return"Inserire un numero intero:";
    if(num1 >= 20 && num1 <= 100 || num1 === 400) return true;
    
}console.log(boundary(25))
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato,
  ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/*function codify(name1){
    let codeString = "code" + name1;
    if (name1.startsWith("code")){
        return name1
    } else {
    return codeString;
    }
}
console.log(codify("codi"))
*/

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/*function check3and7(num1){
   
    if(num1 % 3 === 0 || num1 % 7 === 0){
        return true;
    } else {
        return false;
    } 
}console.log(check3and7(14))
*/

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/*function reverseString(myString) {
    let splitString = myString.split("");
    console.log(splitString);
    let reverse = splitString.reverse();
    let reverseString = reverse.join("");
    return reverseString;
    }
console.log(reverseString("bologna"))
*/

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro
  e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/*function upperFirst(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, (l) => l.toUpperCase());
  }console.log(upperFirst("cane")); 
  
  ---------------------------------*/

 /* function upperFirst(str) {
    let words = str.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
  
      if (!word) continue;
  
      words[i] = word[0].toUpperCase() + word.slice(1);
    }
  
    return words.join(' ');
  }
  
  console.log(upperFirst("tutto quel che scrivo viene con la maiuscola"));*/
 
/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/*function cutString(name4){
    return name4.slice(1, -1);
}
console.log(cutString("troncatura"))
*/


/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 11));
    }
    return arr;
}console.log(giveMeRandom(9));
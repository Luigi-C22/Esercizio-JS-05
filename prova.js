const upperFirstPhrase = function (str) {
    //phrase as param
    let words = str.split(' ') //dividi stringa in array
    let finalString = []
    for (let i = 0; i < words.length; i++) { //scorri array
      let firstChar = words[i].charAt(0) //prendi la prima lettera
      console.log(firstChar)
      let uppercaseChar = firstChar.toUpperCase()  //rendi il carattere maiuscolo
      let cutString = words[i].slice(1) //crea copia della porzione selezionata
      let finalWord = uppercaseChar + cutString //unisci il primo carattere in maiuscola al resto
      finalString.push(finalWord)
    }
    console.log(finalString.join('')) //crea stringa da array
  }
  upperFirstPhrase('hello world')
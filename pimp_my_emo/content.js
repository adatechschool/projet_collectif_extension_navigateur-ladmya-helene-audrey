let askWord = prompt(''); 

const dicoEmojis =  {
  "ballon": "π",
  "lettre": "π",
  "cΕur": "π",
  "canard": "π¦",
  "caca":"π©",
  "banane": "π",
  "feu": "π₯",
  "fantΓ΄me": "π»",
  "singe": "π",
  "abeille": "π",
};
// word & correspondance : variable creation
// [word, correspondance]: key : value = 'ballon','π';

for (const [word, correspondance] of Object.entries(dicoEmojis)) {
askWord = askWord.replace(word,correspondance);
askWord = askWord.toLowerCase().replace(word,correspondance);
askWord = askWord.toUpperCase().replace(word,correspondance);
}
console.log(askWord);
   

/*
Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
  });

const dicoEmojis =  {
    "ballon": "π",
    "lettre": "π",
    "cΕur": "π",
    "canard": "π¦",
    "caca":"π©",
    "banane": "π",
    "feu": "π₯",
    "fantΓ΄me": "π»",
    "singe": "π",
    "abeille": "π",
};

//HTML: Balise parent =>  Head & Body : Balises enfants : => Balises enfants & petits-enfants : toutes les balises qu'il y a dedans
// Childnodes =  selectionne tous les elts ^m invisibles (sauts Γ  la ligne, comments, ...)
let askWord = prompt('');

function translate(toTranslate) { 
  replacedText = toTranslate.replace(toTranslate.dicoEmojis[toTranslate]);
  replacedText = toTranslate.replace(toTranslate.toLowerCase(), dicoEmojis[toTranslate]);
  replacedText = toTranslate.replace(toTranslate.toUpperCase(),dicoEmojis[toTranslate]);
  replacedText = toTranslate.replace(toTranslate.capitalize(),dicoEmojis[toTranslate]);
  return replacedText;
}
const result = translate(askWord);
translate();
console.log(result);
*/


/* Object.defineProperty(String.prototype,'capitalize', {
  value: function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false
});
*/

/*  
METHODE KEVIN
//for (const [word, correspondance] of Object.entries(dicoEmojis)) {}  

const monDico = {
  'bonjour': 'π',
  'monde': 'π'
}

let hello = ''
hello = 'bonjour tt le monde'

console.log(hello)

for (const [mot, correspondance] of Object.entries(monDico)) {
  //console.log(mot+' deviendra '+correspondance)
  hello = hello.replace(mot, correspondance)
}

console.log(hello)
*/
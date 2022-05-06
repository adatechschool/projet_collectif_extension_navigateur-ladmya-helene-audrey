let askWord = prompt(''); 

const dicoEmojis =  {
  "ballon": "🎈",
  "lettre": "💌",
  "cœur": "💔",
  "canard": "🦆",
  "caca":"💩",
  "banane": "🍌",
  "feu": "🔥",
  "fantôme": "👻",
  "singe": "🐒",
  "abeille": "🐝",
};
// word & correspondance : variable creation
// [word, correspondance]: key : value = 'ballon','🎈';

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
    "ballon": "🎈",
    "lettre": "💌",
    "cœur": "💔",
    "canard": "🦆",
    "caca":"💩",
    "banane": "🍌",
    "feu": "🔥",
    "fantôme": "👻",
    "singe": "🐒",
    "abeille": "🐝",
};

//HTML: Balise parent =>  Head & Body : Balises enfants : => Balises enfants & petits-enfants : toutes les balises qu'il y a dedans
// Childnodes =  selectionne tous les elts ^m invisibles (sauts à la ligne, comments, ...)
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
  'bonjour': '👋',
  'monde': '🌍'
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
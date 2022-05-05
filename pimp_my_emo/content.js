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
console.log(result);     

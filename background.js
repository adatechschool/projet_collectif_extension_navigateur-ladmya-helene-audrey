// API memory
function masquerlediv(){
  var container_Elt = document.getElementById('ledivamasquer');
  container_Elt.classList.add("le_div_masque");
  container_Elt.classList.remove("le_div_visible");
}
let askWord = document.getElementsByClassName('.text').value
let showEmoji = document.getElementsByClassName('.emoji-translation')


const dicoEmojis =  {
  "ballon": "🎈",
  "lettre d'amour": "💌",
  "aime":"♥️",
  "cœur brisé": "💔",
  "aime plus": "💔",
  "aimes plus": "💔",
  "canard": "🦆",
  "canards": "🦆",
  "caca":"💩",
  "banane": "🍌",
  "feu": "🔥",
  "brûle": "🔥🔥",
  "fantôme": "👻",
  "singe": "🐒",
  "abeille": "🐝",
  "morte de rire":"🤣",
  "mort de rire":"🤣",
  "clin d'oeil":"😉",
  "embrasse":"😘",
  "envie":"😍",
  "s'il-te-plaît":"🥺",
  "énerve":"😤",
  "énerves":"😤",
  "énerver":"😤",
  "mortel":"☠️",
  "ok":"👍",
  "daccord":"👍",
  "nul":"👎🏽",
  "danser":"💃🏽",
  "danses":"💃🏽",
  "danse":"💃🏽",
  "fumer":"🚬 😶‍🌫️",
  "fièvre":"🤒",
  "rhume":"🤧",
  "covid":"🤮🤧🤒",
  "malade":"🤢",
  "code":"💻🤯",
  "coder":"🤯",
  "codes":"🤯",
  "nounours":"🧸",
  "peluche":"🧸",
  "dragon":"🐉",
  "cadeau":"🎁",
  "ninja":"🥷🏼",
  "discret":"🥷🏼",
  "heureux":"😁",
  "heureuse":"😁",
  "joyeux":"😁",
  "joyeuse":"😁",
  "tais-toi":"🤫",
  "taire":"🤫",
  "rien vu":"🙈",
  "rien entendu":"🙉",
  "rien dis":"🙊",
  "poulpe":"🐙",
  "chat":"🐈‍⬛",
  "chatte":"🐈‍⬛",
};
// word & correspondance : variable creation
// [word, correspondance]: key : value = 'ballon','🎈';

for (const [word, correspondance] of Object.entries(dicoEmojis)) {
showEmoji = askWord.replace(word,correspondance);
showEmoji = showEmoji.toLowerCase().replace(word,correspondance);
showEmoji = showEmoji.toUpperCase().replace(word,correspondance);
}
console.log(showEmoji);

/*chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ dicoEmojis });
  console.log('DicoEmojis', `dicoEmojis: ${dicoEmojis}`);
});
*/

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
// API memory
function masquerlediv(){
  var container_Elt = document.getElementById('ledivamasquer');
  container_Elt.classList.add("le_div_masque");
  container_Elt.classList.remove("le_div_visible");
}
let askWord = document.getElementsByClassName('.text').value
let showEmoji = document.getElementsByClassName('.emoji-translation')


const dicoEmojis =  {
  "ballon": "๐",
  "lettre d'amour": "๐",
  "aime":"โฅ๏ธ",
  "cลur brisรฉ": "๐",
  "aime plus": "๐",
  "aimes plus": "๐",
  "canard": "๐ฆ",
  "canards": "๐ฆ",
  "caca":"๐ฉ",
  "banane": "๐",
  "feu": "๐ฅ",
  "brรปle": "๐ฅ๐ฅ",
  "fantรดme": "๐ป",
  "singe": "๐",
  "abeille": "๐",
  "morte de rire":"๐คฃ",
  "mort de rire":"๐คฃ",
  "clin d'oeil":"๐",
  "embrasse":"๐",
  "envie":"๐",
  "s'il-te-plaรฎt":"๐ฅบ",
  "รฉnerve":"๐ค",
  "รฉnerves":"๐ค",
  "รฉnerver":"๐ค",
  "mortel":"โ ๏ธ",
  "ok":"๐",
  "daccord":"๐",
  "nul":"๐๐ฝ",
  "danser":"๐๐ฝ",
  "danses":"๐๐ฝ",
  "danse":"๐๐ฝ",
  "fumer":"๐ฌ ๐ถโ๐ซ๏ธ",
  "fiรจvre":"๐ค",
  "rhume":"๐คง",
  "covid":"๐คฎ๐คง๐ค",
  "malade":"๐คข",
  "code":"๐ป๐คฏ",
  "coder":"๐คฏ",
  "codes":"๐คฏ",
  "nounours":"๐งธ",
  "peluche":"๐งธ",
  "dragon":"๐",
  "cadeau":"๐",
  "ninja":"๐ฅท๐ผ",
  "discret":"๐ฅท๐ผ",
  "heureux":"๐",
  "heureuse":"๐",
  "joyeux":"๐",
  "joyeuse":"๐",
  "tais-toi":"๐คซ",
  "taire":"๐คซ",
  "rien vu":"๐",
  "rien entendu":"๐",
  "rien dis":"๐",
  "poulpe":"๐",
  "chat":"๐โโฌ",
  "chatte":"๐โโฌ",
};
// word & correspondance : variable creation
// [word, correspondance]: key : value = 'ballon','๐';

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
    "ballon": "๐",
    "lettre": "๐",
    "cลur": "๐",
    "canard": "๐ฆ",
    "caca":"๐ฉ",
    "banane": "๐",
    "feu": "๐ฅ",
    "fantรดme": "๐ป",
    "singe": "๐",
    "abeille": "๐",
};

//HTML: Balise parent =>  Head & Body : Balises enfants : => Balises enfants & petits-enfants : toutes les balises qu'il y a dedans
// Childnodes =  selectionne tous les elts ^m invisibles (sauts ร  la ligne, comments, ...)
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
  'bonjour': '๐',
  'monde': '๐'
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
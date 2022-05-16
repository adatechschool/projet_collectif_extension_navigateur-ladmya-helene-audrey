// Test traduction phrases
let showEmoji = document.querySelector('.emojis');
console.log(showEmoji);

const dicoEmojis =  {
  "ballon": " 🎈  ",
  "lettre d'amour": " 💌  ",
  "aime":" 💗  ",
  "cœur brisé": " 💔  ",
  "coeur brisé": " 💔  ",
  "aime plus": " 💔  ",
  "aimes plus": " 💔  ",
  "canard": " 🦆  ",
  "canards": " 🦆🦆  ",
  "caca":" 💩  ",
  "crotte":" 💩  ",
  "crottes":" 💩  ",
  "chocolat":" 🍫  ",
  "tablette de chocolat":" 🍫  ",
  "tablettes de chocolat":" 🍫  ",
  "cookies":" 🍪  ",
  "donut":" 🍩  ",
  "donuts":" 🍩  ",
  "donut au chocolat":" 🍩  ",
  "bière":" 🍺  ",
  "bières":" 🍻  ",
  "banane": " 🍌  ",
  "feu": " 🔥  ",
  "brûle": " 🔥🔥  ",
  "fantôme": " 👻  ",
  "singe": " 🐒  ",
  "abeille": " 🐝  ",
  "abeilles": " 🐝 🐝   ",
  "morte de rire":" 🤣  ",
  "mort de rire":" 🤣  ",
  "clin d'oeil":" 😉  ",
  "embrasse":" 😘  ",
  "envie":" 😍  ",
  "s'il-te-plaît":" 🥺  ",
  "énerve":" 😤  ",
  "énerves":" 😤  ",
  "énerver":" 😤  ",
  "mortel":" ☠️  ",
  "ok":" 👍  ",
  "daccord":" 👍  ",
  "nul":" 👎🏽  ",
  "danser":" 💃🏽  ",
  "danses":" 💃🏽  ",
  "danse":" 💃🏽  ",
  "fumer":" 🚬 😶‍🌫️  ",
  "fumes":" 🚬 😶‍🌫️  ",
  "fume":" 🚬 😶‍🌫️  ",
  "fièvre":" 🤒  ",
  "rhume":" 🤧  ",
  "covid":" 🤮🤧🤒  ",
  "malade":" 🤢  ",
  "code":" 💻🤯  ",
  "coder":" 🤯  ",
  "codes":" 🤯  ",
  "nounours":" 🧸  ",
  "peluche":" 🧸  ",
  "dragon":" 🐉  ",
  "cadeau":" 🎁  ",
  "ninja":" 🥷🏼  ",
  "discret":" 🥷🏼  ",
  "heureux":" 😁  ",
  "heureuse":" 😁  ",
  "joyeux":" 😁  ",
  "joyeuse":" 😁  ",
  "tais-toi":" 🤫  ",
  "taire":" 🤫  ",
  "rien vu":" 🙈  ",
  "rien entendu":" 🙉  ",
  "rien dis":" 🙊  ",
  "poulpe":" 🐙  ",
  "chat":" 🐈‍⬛  ",
  "chatte":" 🐈‍⬛  ",
  "minou":" 🐈‍⬛  ",
  "miel":" 🍯  ", 
};

// Activation du bouton pour traduire 
let submit = document.querySelector(".submit");
submit.addEventListener("click",()=> {
let askWord = document.querySelector('.text').value
 for (const [word, emoji] of Object.entries(dicoEmojis)) {
    askWord = askWord.replace(word,emoji);
    askWord = askWord.toLowerCase().replace(word,emoji);
    askWord = askWord.toUpperCase().replace(word,emoji);  
    console.log(askWord);  
}
showEmoji.innerHTML = askWord;
});







/*
// Récupération des champs 
//let askWord = document.querySelector('.text').value;
//console.log(askWord);
let showEmoji = document.querySelector('.emoji-translation');
console.log(showEmoji);

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
  "minou":"🐈‍⬛"
};

// word & correspondance : variable creation
// [word, correspondance]: key : value = 'ballon','🎈';


// function translation(){
// for (const [word, correspondance] of Object.entries(dicoEmojis)) {
// showEmoji = askWord.replace(word,correspondance);
// showEmoji = showEmoji.toLowerCase().replace(word,correspondance);
// showEmoji = showEmoji.toUpperCase().replace(word,correspondance);
// }
// showEmoji.innerHTML = 'emoji-translation'
// console.log(showEmoji);
// }

// Activation du bouton pour traduire 
let submit = document.querySelector(".submit");
submit.addEventListener("click",()=> {

  let askWord = document.querySelector('.text').value
  Object.keys(dicoEmojis).forEach(function(key) {
   // console.log(key, dicoEmojis[key]);
    if (key === askWord ) {
    console.log(dicoEmojis[key]);
    showEmoji.innerHTML = dicoEmojis[key];
    }
});
  }); 

  */
  //  (const [word, correspondance] of Object.entries(dicoEmojis)) {
  //  // showEmoji = askWord.replace(word,correspondance);
  //  console.log(dicoEmojis[word]);
  //  console.log(dicoEmojis[correspondance]);
  //   console.log(askWord.replace(word,correspondance));
  //   showEmoji = showEmoji.toLowerCase().replace(word,correspondance);
  //   showEmoji = showEmoji.toUpperCase().replace(word,correspondance);
  //   }
    
  //  console.log(showEmoji);


 
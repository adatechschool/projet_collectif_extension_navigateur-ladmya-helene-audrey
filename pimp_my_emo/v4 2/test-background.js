// Test traduction phrases
let showEmoji = document.querySelector('.emojis');
console.log(showEmoji);

const dicoEmojis =  {
  "ballon": " ๐  ",
  "lettre d'amour": " ๐  ",
  "aime":" ๐  ",
  "cลur brisรฉ": " ๐  ",
  "coeur brisรฉ": " ๐  ",
  "aime plus": " ๐  ",
  "aimes plus": " ๐  ",
  "canard": " ๐ฆ  ",
  "canards": " ๐ฆ๐ฆ  ",
  "caca":" ๐ฉ  ",
  "crotte":" ๐ฉ  ",
  "crottes":" ๐ฉ  ",
  "chocolat":" ๐ซ  ",
  "tablette de chocolat":" ๐ซ  ",
  "tablettes de chocolat":" ๐ซ  ",
  "cookies":" ๐ช  ",
  "donut":" ๐ฉ  ",
  "donuts":" ๐ฉ  ",
  "donut au chocolat":" ๐ฉ  ",
  "biรจre":" ๐บ  ",
  "biรจres":" ๐ป  ",
  "banane": " ๐  ",
  "feu": " ๐ฅ  ",
  "brรปle": " ๐ฅ๐ฅ  ",
  "fantรดme": " ๐ป  ",
  "singe": " ๐  ",
  "abeille": " ๐  ",
  "abeilles": " ๐ ๐   ",
  "morte de rire":" ๐คฃ  ",
  "mort de rire":" ๐คฃ  ",
  "clin d'oeil":" ๐  ",
  "embrasse":" ๐  ",
  "envie":" ๐  ",
  "s'il-te-plaรฎt":" ๐ฅบ  ",
  "รฉnerve":" ๐ค  ",
  "รฉnerves":" ๐ค  ",
  "รฉnerver":" ๐ค  ",
  "mortel":" โ ๏ธ  ",
  "ok":" ๐  ",
  "daccord":" ๐  ",
  "nul":" ๐๐ฝ  ",
  "danser":" ๐๐ฝ  ",
  "danses":" ๐๐ฝ  ",
  "danse":" ๐๐ฝ  ",
  "fumer":" ๐ฌ ๐ถโ๐ซ๏ธ  ",
  "fumes":" ๐ฌ ๐ถโ๐ซ๏ธ  ",
  "fume":" ๐ฌ ๐ถโ๐ซ๏ธ  ",
  "fiรจvre":" ๐ค  ",
  "rhume":" ๐คง  ",
  "covid":" ๐คฎ๐คง๐ค  ",
  "malade":" ๐คข  ",
  "code":" ๐ป๐คฏ  ",
  "coder":" ๐คฏ  ",
  "codes":" ๐คฏ  ",
  "nounours":" ๐งธ  ",
  "peluche":" ๐งธ  ",
  "dragon":" ๐  ",
  "cadeau":" ๐  ",
  "ninja":" ๐ฅท๐ผ  ",
  "discret":" ๐ฅท๐ผ  ",
  "heureux":" ๐  ",
  "heureuse":" ๐  ",
  "joyeux":" ๐  ",
  "joyeuse":" ๐  ",
  "tais-toi":" ๐คซ  ",
  "taire":" ๐คซ  ",
  "rien vu":" ๐  ",
  "rien entendu":" ๐  ",
  "rien dis":" ๐  ",
  "poulpe":" ๐  ",
  "chat":" ๐โโฌ  ",
  "chatte":" ๐โโฌ  ",
  "minou":" ๐โโฌ  ",
  "miel":" ๐ฏ  ", 
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
// Rรฉcupรฉration des champs 
//let askWord = document.querySelector('.text').value;
//console.log(askWord);
let showEmoji = document.querySelector('.emoji-translation');
console.log(showEmoji);

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
  "minou":"๐โโฌ"
};

// word & correspondance : variable creation
// [word, correspondance]: key : value = 'ballon','๐';


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


 
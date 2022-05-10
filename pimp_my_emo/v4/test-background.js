// fonction qui masque les émojis substitus. Elle agit grâce à un click à la textarea .text
function masquerlediv(){
    var container_Elt = document.getElementById('ledivamasquer').textContent;
    container_Elt.classList.add("ledivmasquer");
    container_Elt.classList.remove("le_div_visible");
  }







// fonction traduction appelée par le bouton "Let's Go!"
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


function translation(){
for (const [word, correspondance] of Object.entries(dicoEmojis)) {
showEmoji = askWord.replace(word,correspondance);
showEmoji = showEmoji.toLowerCase().replace(word,correspondance);
showEmoji = showEmoji.toUpperCase().replace(word,correspondance);
}
showEmoji.innerHTML = '.emoji-translation'
console.log(showEmoji);
}

  // fonction nettoyage appelée par le bouton "Clear"

  function clearContent() {
      let clear = document.getElementsByClassName('text','emoji-translation')
      clear.value = ""
  }
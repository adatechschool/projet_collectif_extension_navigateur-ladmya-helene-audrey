// fonction qui masque les émojis substitus. Elle agit grâce à un click à la textarea .text

// fonction nettoyage appelée par le bouton "Clear"

var input = document.querySelector('#clear');
var textarea = document.querySelector('.text');
var emoClear = document.querySelector('.emojis')

input.addEventListener('click', function () {
    textarea.value = '';
    emoClear.innerHTML = '';
}, false);
// fonction qui masque les émojis substitus. Elle agit grâce à un click à la textarea .text
// function masquerlediv(){
//     var container_Elt = document.getElementById('ledivamasquer').textContent;
//     container_Elt.classList.add("ledivmasquer");
//     container_Elt.classList.remove("le_div_visible");
//   }


   // fonction nettoyage appelée par le bouton "Clear"

  /* function clearContent() {
    let clear = document.getElementById("clear")
    clear.value = ""
}*/

function clear_text(){
    inputs=document.getElementsById('text')
    for(input of inputs){
    	input.value=' '
    }}

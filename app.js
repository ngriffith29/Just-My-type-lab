$(document).ready(function (){
    //This will hide the Keyboard on the page load
$("#keyboard-upper-container").hide()
    //
let upperKeys = $("#keyboard-upper-container");
let lowerKeys = $("#keyboard-lower-container");
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
//
$(document).keydown(function (e){
    if(e.which === 16){
        upperKeys.show()
        lowerKeys.hide()
    }
})
//
$(document).keyup(function (e){
    if(e.which === 16){
        upperKeys.hide()
        lowerKeys.show()
    }
})
//
$(document).keypress(function (e){
    let key = e.which
    $("#"+key).css("background-color", "yellow")
    //
    $(document).keyup(function (){        
        $("#"+key).css("background-color", "")
    })   
})
//
$("#sentence").append(sentences)








})
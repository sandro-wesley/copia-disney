var header = document.getElementById('header')
var logo = document.getElementById('logo-header')
var btnAssinar = document.getElementById('btn-assine')


var main =   document.getElementById('main')

function fixar() {
   
    header.style.position = "fixed";
    header.style.width = "96vw";
    
    logo.style.visibility = "visible"

    btnAssinar.style.visibility = "visible"

    main.style.marginTop = "0px"

}

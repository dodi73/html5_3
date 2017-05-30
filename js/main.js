//Elemek kiválasztása.
//@param selector: string, az elemet kiválasztó selector.
function _q( selector ) {
    var elements = document.querySelectorAll( selector );
    return elements;
}

// Profil beviteli mező megjelenítése
function showProfile() {
    var div = document.querySelector(".profile-div");

    if ( div.classList.contains("show") ) {
        div.classList.remove("show");
    } else {
        div.classList.add("show");    
    }
}
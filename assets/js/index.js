const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet: {smooth: true},
    smartphone: {smooth: true}
});

//body color changes
scroll.on("scroll", () => {
    //console.log("ca scroll!!") //cela permet de verifier que l'evenement
    
    if (document.querySelector("#color.is-inview")) {//je selectionne l'element color qui a aussi la classe is-inview (pas d'espace)
                                                    // ce statut est possible grace a la bibliotheque locomotive
        document.body.style.background = "#000101";   //si l'element est visible alors on garde le background (noir dans ce cas)
        document.body.style.color = "#fefeff";         //et la couleur de la police est blanc (comme prevu a la base)
    } else { //si l'element n'est pas visible alors les couleurs sont inversees
        document.body.style.background = "#fefeff";
        document.body.style.color = "#000101";
    }
});
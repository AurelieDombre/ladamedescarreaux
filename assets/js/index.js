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
        document.body.style.background = "#704214";   //si l'element est visible alors on garde le background (noir dans ce cas)
        document.body.style.color = "#fefeff";         //et la couleur de la police est blanc (comme prevu a la base)
    } else { //si l'element n'est pas visible alors les couleurs sont inversees
        document.body.style.background = "#fefeff";
        document.body.style.color = "#000101";
    }
});



document.addEventListener("DOMContentLoaded", () => {
    let allGridItems = [...document.getElementsByClassName("grid-item")];
    let popupBg = document.getElementById("popup-bg");
    let popupImg = document.getElementById("popup-img");

    const openPopup = (e) => {
        let clickedImageSrc = e.target.src;
        console.log('Image clicked:', clickedImageSrc); // Log for debugging
        popupBg.classList.add("active");
        popupImg.src = clickedImageSrc;
    };

    const closePopup = () => {
        console.log('Popup closed'); // Log for debugging
        popupBg.classList.remove("active");
    };

    allGridItems.forEach((el) => el.addEventListener("click", openPopup));
    popupImg.addEventListener("click", (e) => e.stopPropagation());
    popupBg.addEventListener("click", closePopup);

    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
    }
    
    function blurFunc() {
        let parent = this.parentNode;
        if (this.value == "") {
            parent.classList.remove("focus");
        }
    }
    
    inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
    });
    




});

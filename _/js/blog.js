
/** ===========================================
  # Object-fit Cover IE Fix
============================================ */

window.onload = function () {

    // Detect IE
    function detectIE() {
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        // other browser
        return false;
    }


    var isIE = detectIE();

    if (isIE != false) {

        var obCoverImgs = document.querySelectorAll('.cover');
        var imgLength;
        imgLength = obCoverImgs.length;
        var thisParent;
        var newDiv;
        var thisSRC;

        for (var i = 0; i < imgLength; i++) {

            thisSRC = obCoverImgs[i].src;
            thisParent = obCoverImgs[i].parentNode;

            if (thisSRC) {

                obCoverImgs[i].className += " hidden";

                newDiv = document.createElement("div");
                newDiv.className = "image-hero-container";

                newDiv.style.backgroundImage = "url('" + thisSRC + "')";

                // If image is using height classes, take those for the containing div. These will override the fallback of height on page load.
                for (var j = 0; j < obCoverImgs[i].classList.length; j++) {
                    if (obCoverImgs[i].classList[j].match(/^h-/)) {
                        newDiv.className += " " + obCoverImgs[i].classList[j];
                    }
                }
                newDiv.style.height = obCoverImgs[i].clientHeight + "px";


                newDiv.appendChild(obCoverImgs[i]);
                thisParent.insertBefore(newDiv, thisParent.firstChild);

            }
        }
    }
};

/** ===========================================
  # Excerpt Function for Blog & Resources
============================================ */
window.onload = function () {
    var postIntros = document.getElementsByClassName('post-intro');
    var newPostIntro;

    for (var i = 0; i < postIntros.length; i++) {
        if (postIntros[i].textContent.length > 244) {
            newPostIntro = document.createTextNode(postIntros[i].textContent.substring(0, 70) + "...");

            postIntros[i].textContent = "";
            postIntros[i].appendChild(newPostIntro);
        } else {
            newPostIntro = document.createTextNode(postIntros[i].textContent.substring(0, 50) + "...");

            postIntros[i].textContent = "";
            postIntros[i].appendChild(newPostIntro);
        }
    }

    var postIntrosSmall = document.getElementsByClassName('post-intro-small');
    var newPostIntroSmall;

    for (var i = 0; i < postIntrosSmall.length; i++) {
        if (postIntrosSmall[i].textContent.length > 22) {
            newPostIntroSmall = document.createTextNode(postIntrosSmall[i].textContent.substring(0, 18) + "...");

            postIntrosSmall[i].textContent = "";
            postIntrosSmall[i].appendChild(newPostIntroSmall);
        }
    }
};


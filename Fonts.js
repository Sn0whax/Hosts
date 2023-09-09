// ==UserScript==
// @name         Replace Google and MS Fonts with Arial
// @version      1.1
// @description  Replace Google and MS Fonts in HTML markup with Arial
// @author       Sn0whax
// @icon         https://i.ibb.co/QrGH2vd/Alien-Lines.png
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to replace Google Fonts, Microsoft Fonts in the HTML with Arial
    function replaceFonts() {
        var elements = document.querySelectorAll('[href*="fonts.googleapis.com"], [href*="fonts.gstatic.com"], [href*="fs.microsoft.com"]');
        elements.forEach(function(element) {
            element.setAttribute('href', '');
            // Replace font-family declarations with Arial
            var style = element.closest('style, link[rel="stylesheet"]');
            if (style) {
                style.textContent = style.textContent.replace(/['"]?font-family: [^;]*;/g, 'font-family: Arial;');
            }
        });
    }

    // Run the replacement function when the page loads
    window.addEventListener('load', replaceFonts);
})();

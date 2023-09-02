// ==UserScript==
// @name         Reddit and Imgur Redirect
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  Redirects Reddit.com to Old.Reddit.com and Imgur.com to alternative domains.
// @author       Sn0whax
// @match        https://www.reddit.com/*
// @match        https://imgur.com/*
// @icon         https://i.ibb.co/QrGH2vd/Alien-Lines.png
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Define a function to perform the redirection
    function performRedirection() {
        // Check if the current URL is Reddit
        if (window.location.hostname === 'www.reddit.com' && window.location.pathname !== '/media') {
            // Replace "www.reddit.com" with "old.reddit.com"
            var oldRedditURL = window.location.href.replace('www.reddit.com', 'old.reddit.com');

            // Redirect to the old Reddit URL
            window.location.href = oldRedditURL;
        } else if (window.location.hostname === 'imgur.com' && window.location.hostname !== 'i.redd.it') {
            // Redirect to rimgo.totaldarkness.net or rimgo.us.projectsegfau.lt
            var newImgurURL = window.location.href.replace('imgur.com', 'rimgo.totaldarkness.net');
            // You can use the alternative domain like this:
            // var newImgurURL = window.location.href.replace('imgur.com', 'rimgo.us.projectsegfau.lt');

            // Redirect to the new Imgur URL
            window.location.href = newImgurURL;
        }
    }

    // Perform redirection immediately
    performRedirection();
})();

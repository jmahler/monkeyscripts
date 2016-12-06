// ==UserScript==
// @name         Wiki heading link
// @version      0.2
// @description  Create an easy to copy section heading link.
// @updateURL    https://github.com/jmahler/monkeyscripts/raw/master/wiki-link.js
// @downloadURL  https://github.com/jmahler/monkeyscripts/raw/master/wiki-link.js
// @homepageURL  https://github.com/jmahler/monkeyscripts
// @supportURL   https://github.com/jmahler/monkeyscripts
// @author       jmahler
// @copyright    2016, Jeremiah Mahler <jmmahler@gmail.com> (https://github.com/jmahler)
// @license      GNU GPLv3; https://www.gnu.org/licenses/gpl-3.0.en.html
// @grant        none
// @include      http*://*.wikipedia.org/*
// @include      http*://w.*
// @include      http*://wiki.*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    var hs = document.getElementsByClassName('mw-headline');
    var n = hs.length;
    for (var i = 0; i < n; i++) {
        var h = hs[i];
        var new_span = document.createElement('span');
        new_span.innerHTML = "&nbsp;[<a href=#" + h.id + ">link</a>]";
        h.appendChild(new_span);
    }
})();

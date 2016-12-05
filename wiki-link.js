// ==UserScript==
// @name         Wiki heading link.
// @version      0.1
// @description  Create an easy to copy section heading link.
// @source       https://raw.githubusercontent.com/jmahler/monkeyscripts/master/wiki-link.js
// @homepage     https://github.com/jmahler/monkeyscripts
// @author       Jeremiah Mahler <jmmahler@gmail.com>
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

// ==UserScript==
// @name         Wiki heading link
// @version      0.4
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
// @exclude      *
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

	// <h2><span class="mw-headline">...</span></h2>
    var headlines = document.getElementsByClassName('mw-headline');
    var n = headlines.length;
    for (var i = 0; i < n; i++) {
        var headline = headlines[i];

		// wrap the current <span> in an <a> to make it a link

		var headline_copy = headline.cloneNode(true);

		// <a href="#"><span class="mw-headline">...</span></a>
        var outer_a = document.createElement('a');
		outer_a.href = "#" + headline_copy.id;
		outer_a.appendChild(headline_copy, outer_a);

		// <h2><a href="#"><span ... </span></a></h2>
		headline.parentNode.replaceChild(outer_a, headline);
    }
})();

// ==UserScript==
// @name         WebEngage
// @namespace    http://tampermonkey.net/
// @version      2024-10-12
// @description  Fix some issues on WebEngage panel
// @author       Hadi Abedzadeh
// @match        *://*.webengage.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=webengage.com
// @grant        none

// ==/UserScript==

(function() {
    'use strict';

    // PLUGIN INJECTED AND ACTIVATED COLOR
    document.body.style.backgroundColor = "#CAD9F0";

    // TEXTAREA SIZE
    document.querySelectorAll('.redactor_helpTextEnabled').forEach(element => {
        element.style.height = '500px';
    });

    // IFRAME
    const iframes = document.getElementsByTagName('iframe');
    for (let i = iframes.length - 1; i >= 0; i--) {
        if (iframes[i].id === 'webklipper-publisher-widget-container-notification-frame') {
            iframes[i].parentNode.removeChild(iframes[i]);
        }
    }

    new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.tagName === 'IFRAME' && node.id === 'webklipper-publisher-widget-container-notification-frame') {
                    node.remove();
                }
            });
        });
    }).observe(document.body, { childList: true, subtree: true });


})();

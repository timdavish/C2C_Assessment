/**
 * @desc This file handles the page's events
 * @author Tim Davis
 */
 
// Strict mode
'use strict';

(function() {
    
    let swapped = false;
    
    window.onload = function() {
        // Set up button handler
        $('logo').onclick = swapLogo;
    }
    
    function swapLogo() {
        swapped = !swapped;
        
        if (swapped) {
            // Show my name
            this.innerHTML = 'Tim Davis';
        } else {
            // Show facebook logo
            this.innerHTML = 'facebook';
        }
    }
    
    // Helper for getting an element by it's id
    function $(id) {
        return document.getElementById(id);
    }
    
})();
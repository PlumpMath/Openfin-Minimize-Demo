(function() {
    'use strict';
    //event listeners.
    document.addEventListener('DOMContentLoaded', function() {
        //OpenFin is ready
        fin.desktop.main(function() {
            document.getElementById("bmin").onclick = function() {
                fin.desktop.Window.getCurrent().minimize();
            };
        });
    });
}());

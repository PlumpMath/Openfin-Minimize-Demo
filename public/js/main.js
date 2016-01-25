(function() {
    'use strict';
    //event listeners.
    document.addEventListener('DOMContentLoaded', function() {
        //OpenFin is ready
        fin.desktop.main(function() {
            var app1 = new fin.desktop.Application({
                url: "localhost:5000/generic.html",
                uuid: "app1",
                name: "app1",
                mainWindowOptions: {
                    defaultHeight: 600,
                    defaultWidth: 800,
                    defaultTop: 300,
                    defaultLeft: 300,
                    autoShow: true
                }
            }, function() {
                console.log("Application successfully created");
                app1.run();
            }, function() {
                console.log("Error creating application");
            });

            var app2 = new fin.desktop.Application({
                url: "localhost:5000/generic.html",
                uuid: "app2",
                name: "app2",
                mainWindowOptions: {
                    defaultHeight: 600,
                    defaultWidth: 800,
                    defaultTop: 300,
                    defaultLeft: 300,
                    autoShow: true
                }
            }, function() {
                console.log("Application successfully created");
                app2.run();
            }, function() {
                console.log("Error creating application");
            });

            var app3 = new fin.desktop.Application({
                url: "localhost:5000/generic.html",
                uuid: "app3",
                name: "app3",
                mainWindowOptions: {
                    defaultHeight: 600,
                    defaultWidth: 800,
                    defaultTop: 300,
                    defaultLeft: 300,
                    autoShow: true
                }
            }, function() {
                console.log("Application successfully created");
                app3.run();
            }, function() {
                console.log("Error creating application");
            });
        });
    });
}());

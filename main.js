//console.log("Hola")
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString("Estudiante de Ingeniería Biomédica")
//pausa
    .pauseFor(2000) 
    .deleteAll()
    .typeString('Desarrolladora Front End Jr.')
    .pauseFor(2000)
    .deleteChars(13)
    .typeString('<strong> Back End Jr.</strong>')
    .pauseFor(2100)
    .start();

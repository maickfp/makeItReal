var asistentes = ["Gina", "Juan", "Luz", "Michael"];
var asistencia = [true, true, false, true];

console.log("Estudiantes: " + asistentes.length );
for(var i=0; i< asistentes.length; i++){
    console.log(asistentes[i] + (asistencia[i] ? " asistió" : " no asistió"));
}

console.log("");

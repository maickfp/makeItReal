for(var i= 10; i>= 0; i = i - 2){
    console.log("El valor de i es: " + i);
}

console.log("");

var asistentes = ["Michael", "Gabriel", "Bibiam"];
for(var i=0; i< 3; i++){
    console.log("El asistente " + (i+1) + " es: " + asistentes[i]);
}

console.log("");

console.log("Existen " + asistentes.length + " asistentes:");
for(var i=0; i< asistentes.length; i++){
    console.log("Asistente #" + (i+1) + " es: " + asistentes[i]);
}
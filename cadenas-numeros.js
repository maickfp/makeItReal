var tel = "3200000";
var cel = "3102227781";

var numCorrecto = true;
if(tel.length == 7){
    for(var i=0; i<tel.length; i++){
        if(tel[i] == " "){
            numCorrecto = false;
        }
    }
}else{
    numCorrecto = false;
}

if(numCorrecto){
    console.log("El número de teléfono parece ser correcto")
}else{
    console.log("El número de teléfono parece ser incorrecto")
}

numCorrecto = true;
if(cel.length == 10){
    for(var i=0; i<cel.length; i++){
        if(cel[i] == " "){
            numCorrecto = false;
        }
    }
}else{
    numCorrecto = false;
}

if(numCorrecto){
    console.log("El número de celular parece ser correcto")
}else{
    console.log("El número de celular parece ser incorrecto")
}
var linea = "Michael Fernández;29;M;Calle 48 # 43 - 104";
var datos = linea.split(";");

var fullName = datos[0];
var nameData = fullName.split(" ");

var lastName = nameData[1];

console.log("Su apellido es: " + lastName);

// ----------------------------------------------------------------------

var lineas = [
    "Jesus Estrada;36;M;Calle 1 # 2", 
    "Rosa Vergara;33;F;Calle 3 # 4", 
    "Fernando Castillo;34;M;Calle 5 # 2"
];

var sumEdad = 0;
for(var i=0; i<lineas.length; i++){
    var data = lineas[i].split(";");
    sumEdad += parseInt(data[1]);
}
console.log("El promedio de edad es: " + (sumEdad/3));

// ----------------------------------------------------------------------

var lineas = [
    "Jesus Estrada;36;M;Calle 1 # 2", 
    "Rosa Vergara;33;F;Calle 3 # 4", 
    "Fernando Escobar;34;M;Calle 5 # 2"
];

var sumEdad = 0;
var cantidad = 0;
for(var i=0; i<lineas.length; i++){
    var data = lineas[i].split(";");
    var apellido = data[0].split(" ")[1];
    if(apellido.startsWith("E")){
        sumEdad += parseInt(data[1]);
        cantidad += 1;
    }
}
console.log("El promedio de edad de apellidos E es: " + (sumEdad/cantidad));
function promedio(num1, num2, num3){
    console.log("El promedio es: " + ((num1+num2+num3)/3));
}

promedio(3,4,3);

var promerdioFlecha = (num1, num2, num3) => { return ((num1+num2+num3)/3).toString().substring(0, 3); }

console.log("El promedio con flecha es: " + promerdioFlecha(3,4,3));
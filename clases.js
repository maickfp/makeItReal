"use strict";
/*
Definir una clase Persona con los atributos: nombre, apellido, género, fecha de nacimiento (DD-MM-AAAA).
- Crear métodos para establecer y obtener los valores de cada atributo. Mostrar el resultado por consola.
- Crear un método para obtener la edad de la persona, con base en la fecha actual. Mostrar el resultado por consola.
*/
class Persona {
    // constructor
    constructor(
        nombre, 
        apellido, 
        genero, // M - F
        fechaNacimiento // DD-MM-YYYY
    ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.genero = genero;
        this.fechaNacimiento = fechaNacimiento;
    }

    // calcular edad
    obtenerEdad(){
        const hoy = new Date();
        const hoyYMD = `${hoy.getFullYear()}${hoy.getMonth()<9?'0':''}${hoy.getMonth()+1}${hoy.getDate()}`
        const fncYMD = this.fechaNacimiento.substr(6, 4) + this.fechaNacimiento.substr(3, 2) + this.fechaNacimiento.substr(0, 2);
        const difYMD = parseInt(hoyYMD) - parseInt(fncYMD);
        const edad = parseInt(difYMD/10000);
        console.log(`Calculo de edad: ${edad}`);
        return edad;
    }

    // setters
    setNombre(nombre){
        console.log(`Definiendo nombre con: ${nombre}`);
        this.nombre = nombre;
    }
    
    setApellido(apellido){
        console.log(`Definiendo apellido con: ${apellido}`);
        this.apellido = apellido;
    }

    setGenero(genero){
        console.log(`Definiendo genero con: ${genero}`);
        this.genero = genero;
    }

    setFechaNacimiento(fechaNacimiento){
        console.log(`Definiendo fechaNacimiento con: ${fechaNacimiento}`);
        this.fechaNacimiento = fechaNacimiento;
    }

    // getters
    getNombre(){
        console.log(`Obteniendo nombre: ${this.nombre}`);
        return this.nombre;
    }

    getApellido(){
        console.log(`Obteniendo apellido: ${this.apellido}`);
        return this.apellido;
    }

    getGenero(){
        console.log(`Obteniendo genero: ${this.genero}`);
        return this.genero;
    }

    getFechaNacimiento(){
        console.log(`Obteniendo fechaNacimiento: ${this.fechaNacimiento}`);
        return this.fechaNacimiento;
    }

}

// Prueba:

// persona 1
const persona_1 = new Persona("Michael", "Fernandez", "M", "06-02-1991");
// persona 2
const persona_2 = new Persona();
persona_2.setNombre("Gabriel");
persona_2.setApellido("Fernández");
persona_2.setGenero("M");
persona_2.setFechaNacimiento("28-02-2020");
// persona 3
const persona_3 = new Persona("Bibiam", "Mejía", "F", "20-07-1987");

console.log(`Nombre de persona 1: ${persona_1.getNombre()} - Fecha Nacimiento: ${persona_1.getFechaNacimiento()} - Edad: ${persona_1.obtenerEdad()}`);
console.log(`Apellido de persona 2: ${persona_2.getApellido()} - Fecha Nacimiento: ${persona_2.getFechaNacimiento()} - Edad: ${persona_2.obtenerEdad()}`);
console.log(`Genero de persona 3: ${persona_3.getGenero()} - Fecha Nacimiento: ${persona_3.getFechaNacimiento()} - Edad: ${persona_3.obtenerEdad()}`);


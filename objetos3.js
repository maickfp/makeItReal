var personas = [
    {
        edad: 29,
        nombre: "Michael",
        sexo: "M",
        idiomas: ["EN", "ES"],
        verEdad: function(){
            console.log("La edad de " + this.nombre + " es: " + this.edad);
        }
    },{
        edad: 25,
        nombre: "David",
        sexo: "M",
        idiomas: ["IT", "ES", "FR"],
        verEdad: function(){
            console.log("La edad de " + this.nombre + " es: " + this.edad);
        }
    },{
        edad: 30,
        nombre: "Rocio",
        sexo: "F",
        idiomas: ["ES"],
        verEdad: function(){
            console.log("La edad de " + this.nombre + " es: " + this.edad);
        }
    },{
        edad: 40,
        nombre: "Andrea",
        sexo: "M",
        idiomas: ["IT"],
        verEdad: function(){
            console.log("La edad de " + this.nombre + " es: " + this.edad);
        }
    },{
        edad: 25,
        nombre: "Gabriel",
        sexo: "M",
        idiomas: ["EN", "IT", "ES", "FR"],
        verEdad: function(){
            console.log("La edad de " + this.nombre + " es: " + this.edad);
        }
    }
]

for(var i in personas){
    var persona = personas[i];
    if(persona.idiomas.includes("EN")){
        persona.verEdad();
    }
}
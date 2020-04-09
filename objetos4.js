var saludar = () => {
    console.log("Hola a todos!");
}

saludar();

saludar = (name="NN", lastName="NN") => {
    console.log(`Hola a ${name} ${lastName}!`);
}

saludar();
saludar("Maick");
saludar("Maick","Fernandez");
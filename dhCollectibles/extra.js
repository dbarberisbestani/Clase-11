let numeros = [10, 11, 5, 9, 12, 6, 450, 35, 22, 87];

let [num0, , num2, , num4] = numeros

function nuevoArray(num0,num2,num4,...numeros){
    return numeros
}

console.log(nuevoArray(10,5,9,numeros))

let mascota = {
    nombre : "Rocket",
    tipoDeMascota : "perro",
    color : "marron",
    raza : "Dachshund"
}

let {nombre,tipoDeMascota,color,raza} = mascota

//console.log(`Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipoDeMascota}, de
//color: ${color} y su raza es: ${raza}`)
"use strict";
// // let message: string = "Hola, todos son unos putos";
// // console.log(message);
// let Name: String = "Saru";
// const Perro: String = "Mia";
// console.log(`Hola, mi nombre es ${Name} y mi mascota se llama ${Perro}`);
// if (Name == Perro) {
//     console.log("Los nombres son iguales");
// } 
// const array: String[] = ["saru, mia, angela, gero, julian, y pablo"];
// // array.forEach((element) => {
// //     console.log(element);
// // });
// for (let i = 0; i < array.length;) {
//     console.log(array[i]);
//     i++;
// }
// let bol:Boolean = true? false : true;
// const Animales ={
//     perro: "Mia"
// }
// interface Animal{
//     nombre: string;
// }
//  //js
//  function main (){
//  }
//  function naame(nombre:String): void {
//  }
// function element (): String{
//     return ""
// }
// function x (): String[]{
//     return [];
// }
// const y:() => String[] = ():String[] =>{
//     return [];
// }
// let z:() => String = (a:number = 0, b:number = 10):String => {
//     let result:Number = a + b;
//     return `${a}`
// }
// interface Personas{
//     nombre: string;
//     data: ()=>{
//     }
//      info: Function
// }
class Artists {
    constructor(nombre) {
        this.nombre = nombre;
    }
    sing() {
        console.log(`El artista ${this.nombre} está cantando`);
    }
}
class Cantante extends Artists {
    constructor(nombre) {
        super(nombre);
    }
    paint() {
        console.log(`El artista ${this.nombre} no pinta sino que canta`);
    }
    cantar() {
        console.log(`Este artista ${this.nombre} está cantando`);
    }
    mostrarCanto() {
        this.cantar();
    }
    static mostrarTipo() {
        console.log(`El tipo de artista es ${Cantante.tipo}`);
    }
}
Cantante.tipo = "cantante";
class Pintor extends Artists {
    constructor(nombre) {
        super(nombre);
    }
    paint() {
        console.log(`El artista ${this.nombre} está pintando`);
    }
    pintar() {
        console.log(`Este artista ${this.nombre} está pintando`);
    }
    mostrarPintura() {
        this.pintar();
    }
    static mostrarTipo() {
        console.log(`El tipo de artista es ${Pintor.tipo}`);
    }
}
Pintor.tipo = "pintor";
function MostrarTipoDeArte(artistas) {
    artistas.forEach((artista) => {
        artista.sing(); // Método común para todos los artistas
        if (artista instanceof Cantante) {
            artista.paint(); // Cantante implementa paint
            artista.mostrarCanto(); // Muestra el método privado de Cantante
            Cantante.mostrarTipo(); // Muestra el tipo del Cantante
        }
        else if (artista instanceof Pintor) {
            artista.paint(); // Pintor implementa paint
            artista.mostrarPintura(); // Muestra el método privado de Pintor
            Pintor.mostrarTipo(); // Muestra el tipo del Pintor
        }
    });
}
// Creación de objetos y llamada a la función
const artista1 = new Cantante("Karol G");
const artista2 = new Pintor("Vincent van Gogh");
MostrarTipoDeArte([artista1, artista2]);

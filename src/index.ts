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
abstract class Artists {
    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    abstract paint(): void;

    sing(): void {
        console.log(`El artista ${this.nombre} está cantando`);
    }
}

class Cantante extends Artists {
    constructor(nombre: string) {
        super(nombre);
    }

    paint(): void {
        console.log(`El artista ${this.nombre} no pinta sino que canta`);
    }

    private cantar(): void {
        console.log(`Este artista ${this.nombre} está cantando`);
    }

    public mostrarCanto(): void {
        this.cantar();
    }

    static tipo: string = "cantante";

    static mostrarTipo(): void {
        console.log(`El tipo de artista es ${Cantante.tipo}`);
    }
}

class Pintor extends Artists {
    constructor(nombre: string) {
        super(nombre);
    }

    paint(): void {
        console.log(`El artista ${this.nombre} está pintando`);
    }

    private pintar(): void {
        console.log(`Este artista ${this.nombre} está pintando`);
    }

    public mostrarPintura(): void {
        this.pintar();
    }

    static tipo: string = "pintor";

    static mostrarTipo(): void {
        console.log(`El tipo de artista es ${Pintor.tipo}`);
    }
}

function MostrarTipoDeArte(artistas: Artists[]): void {
    artistas.forEach((artista) => {
        artista.sing(); 

        if (artista instanceof Cantante) {
            artista.paint(); 
            artista.mostrarCanto(); 
            Cantante.mostrarTipo(); 
        } else if (artista instanceof Pintor) {
            artista.paint(); 
            artista.mostrarPintura(); 
            Pintor.mostrarTipo(); 
        }
    });
}

const artista1 = new Cantante("Karol G");
const artista2 = new Pintor("Vincent van Gogh");

MostrarTipoDeArte([artista1, artista2]);







  
//1.1 var
var nombre = "Melisa";
console.log("Primer nombre:", nombre);

nombre = "Ana";
console.log("Nuevo nombre:", nombre);//si deja hacerlo ya que var sí permite reasignar valores.

//1.2
const nombre = "Melisa";
console.log("Primer nombre:", nombre);

nombre = "Ana"; //ERROR
console.log("Nuevo nombre:", nombre);//No puedes cambiar su valor después de asignarlo.

//1.3
if (false) {
  let edad = 17;
}

console.log(edad); //  ERROR let tiene alcance de bloque.
//Como está dentro del if, solo existe dentro de esas llaves {}

//parte 1 
//var → global o función, se puede cambiar
//let → solo dentro del bloque {}, sí se puede cambiar
//const → solo dentro del bloque {}, no se puede cambiar


//2.1
// String
let nombre = "Melisa";
console.log(typeof nombre); // string

// Number
let edad = 20;
console.log(typeof edad); // number

// Boolean
let esEstudiante = true;
console.log(typeof esEstudiante); // boolean

// Null
let valorNulo = null;
console.log(typeof valorNulo); // object 

// Undefined
let valorIndefinido;
console.log(typeof valorIndefinido); // undefined

//2.2
// Objeto
let persona = {
  nombre: "Melisa",
  edad: 17
};

console.log(typeof persona); // object

// Array
let hobbies = ["leer", "dibujar", "escuchar música"];

console.log(typeof hobbies); // object

//3.1
let numero1 = 10;      // number
let numero2 = "5";     // string

// Suma
console.log(numero1 + numero2); // "105"

// Multiplicación
console.log(numero1 * numero2); // 50

//3.2
// Convertir número a string
let texto = String(25);
console.log(texto); // "25"
console.log(typeof texto); // string

// Convertir string a número
let numero = Number("100");
console.log(numero); // 100
console.log(typeof numero); // number

// Convertir a boolean
let vacio = Boolean("");
console.log(vacio); // false

let palabra = Boolean("hola");
console.log(palabra); // true

//4.1
console.log(10 === "10"); // false
console.log(10 == "10");  // true

//4.2
let number = 7;

if (number % 2 === 0) {
  console.log("Es par");
} else {
  console.log("Es impar");
}

//4.3
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//4.4
try {
  throw new Error("Este es un error.");
} catch (error) {
  console.log("Ocurrió un problema, pero todo está bien");
}

//seccion 5
//5.1
function multiplicar(a, b) {
  return a * b;
}
let resultado = multiplicar(4, 5);
console.log(resultado); // 20

//5.2
const multiplicar = (a, b) => a * b;

console.log(multiplicar(4, 5)); // 20

//5.3
const saludar = () => "¡Hola a todos bienvenidossssss!";

console.log(saludar());


//seccion 6
let global = "Hola"; // variable global

function prueba() {
  let local = "Adiós"; // variable local

  console.log(global); //funciona
  console.log(local);  // funciona
}

prueba();

console.log(global); // funciona
console.log(local);  // error


let carro = {
  marca: "Mazda",
  mostrarMarca() {
    console.log(this.marca);
  }
};

coche.mostrarMarca(); // mazda

let frutas = ["mango", "fresa"];
console.log(frutas);

frutas.push("Naranja"); // agregar
console.log(frutas);

frutas.pop(); // eliminar último
console.log(frutas);

let numeros = [4, 5, 6];

// multiplicar por 2
let dobles = numeros.map(n => n * 2);
console.log(dobles);

// mayores a 1
let mayores = numeros.filter(n => n > 1);
console.log(mayores);

let frutas = ["cherry", "mango", "papaya"];

// recorrer
frutas.forEach(fruta => console.log(fruta));

// buscar "Banana"
let encontrada = frutas.find(f => f === "cherry");
console.log(encontrada);

// índice de "Manzana"
let indice = frutas.findIndex(f => f === "papaya");
console.log(indice);

let libro = {
  titulo: "el jardin de las mariposas",
  autor: "Dolchez",
  mostrarInfo() {
    console.log(this.titulo + " - " + this.autor);
  }
};

libro.mostrarInfo();


class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    return "Hola, soy " + this.nombre;
  }
}

let animal1 = new Animal("yousepe");
console.log(animal1.saludar());


class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre); // llama a la clase padre
    this.raza = raza;
  }
}

let perro1 = new Perro("thor", "rodwailer");
console.log(perro1.saludar());
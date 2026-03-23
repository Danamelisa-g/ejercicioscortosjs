//1.1
var nombre="daniel"
console.log(nombre);
nombre = "Andrés";
console.log(nombre)
//1.2
const ciudad = "Cali";
ciudad = "Bogotá";
console.log(ciudad)
//1.3
if (false) {
  let edad = 25;
}
console.log(edad);

1.4
let texto    = "Hola";
let numero   = 42;
let activo   = true;
let vacio    = null;
let sinValor = undefined;
 
console.log(typeof texto);    // string
console.log(typeof numero);   // number
console.log(typeof activo);   // boolean
console.log(typeof vacio);    // object  ← bug histórico de JS
console.log(typeof sinValor); // undefined
 
let persona = { nombre: "Ana", edad: 30 };
let hobbies = ["Leer", "Correr", "Cocinar"];
console.log(typeof persona);         // object
console.log(Array.isArray(hobbies)); // true
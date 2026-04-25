/*
Dado un número, crea una función que verifique si es primo. Un número es primo 
si es mayor que 1 y no tiene divisores aparte de 1 y él mismo.
 */

// function primo(n) {
//   if (n <= 1) return false;

//   let contador = 0;

//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       contador++;
//     }
//   }

//   return contador === 2;
// }
// //Me falta un contador

/*
 Crea una función que calcule la diferencia entre el número más grande y el más 
 pequeño en un arreglo de números.  
*/

// function diferencia(arr) {
//   let mayor = arr[0];
//   let menor = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > mayor) {
//       mayor = arr[i];
//     }

//     if (arr[i] < menor) {
//       menor = arr[i];
//     }
//   }

//   return mayor - menor;
// }

// let numeros = [3, 7, 1, 9, 4];

// console.log(diferencia(numeros)); // resultado 8 por la resta de el mayor y menos (9-1)

/* El sistema debe calcular la propina de una cuenta en un restaurante. Si el total 
de la cuenta es mayor a 50, se aplica una propina del 15%. Si es menor o igual a 
50, se aplica una propina del 10%. 
 */

// function calcularPropina(total) {
//   let propina;

//   if (total > 50) {
//     propina = total * 0.15;
//   } else {
//     propina = total * 0.10;
//   }

//   return propina;
// }

// let totalCuenta = Number(prompt("Ingresa el total de la cuenta:"));

// let propina = calcularPropina(totalCuenta);

// alert("La propina es: " + propina);

/*En un sistema de autenticación de usuarios, se requiere verificar si las 
credenciales ingresadas coinciden con las almacenadas. Si son correctas, el 
usuario obtiene acceso; si no, debe intentar de nuevo hasta un máximo de 3 
intentos.  
const usuariosRegistrados = [  
{ usuario: "admin", contrasena: "1234" },  
{ usuario: "user", contrasena: "abcd" }  
]; 
 */

// const usuariosRegistrados = [
//   { usuario: "admin", contrasena: "1234" },
//   { usuario: "user", contrasena: "abcd" }
// ];

// let intentos = 0;
// let acceso = false;

// while (intentos < 3 && !acceso) {
//   let user = prompt("Usuario:");
//   let pass = prompt("Contraseña:");

//   for (let i = 0; i < usuariosRegistrados.length; i++) {
//     if (
//       user === usuariosRegistrados[i].usuario &&
//       pass === usuariosRegistrados[i].contrasena
//     ) {
//       acceso = true;
//       break;
//     }
//   }

//   if (!acceso) {
//     intentos++;
//     alert("Datos incorrectos. Intento " + intentos);
//   }
// }

// if (acceso) {
//   alert("Acceso concedido ");
// } else {
//   alert("Acceso denegado ");
// }

/*Tienes un arreglo con las edades de un grupo de personas. El sistema necesita 
contar cuántas personas son menores de edad (menores de 18 años) y cuántas 
son adultas.  
let edades = [12, 18, 25, 15, 30, 17];
 */

// function contarEdades(arr) {
//   let menores = 0;
//   let adultos = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 18) {
//       menores++;
//     } else {
//       adultos++;
//     }
//   }

//   return { menores, adultos };
// }

// let edades = [12, 18, 25, 15, 30, 17];

// let resultado = contarEdades(edades);

// console.log("Menores:", resultado.menores);
// console.log("Adultos:", resultado.adultos);

/*
En un restaurante, los pedidos se gestionan a través de un sistema en línea. 
Cada cliente realiza un pedido que contiene múltiples platos. Cada plato tiene 
un nombre y un precio. El sistema necesita calcular el total del pedido sumando 
el precio de todos los platos solicitados y aplicar un descuento del 15% si el total 
supera los $100. Si el total es menor o igual a $100, no se aplica ningún 
descuento.  
let pedido = [  
{ nombre: "Pizza", precio: 40 },  
{ nombre: "Pasta", precio: 50 },  
{ nombre: "Ensalada", precio: 20 }  
];
 */
// let pedido = [
// { nombre: "Pizza", precio: 40 },
// { nombre: "Pasta", precio: 50 },
// { nombre: "Ensalada", precio: 20 }
// ];

// function calcularTotal(pedido) {
//   let total = 0;

//   for (let i = 0; i < pedido.length; i++) {
//     total = total + pedido[i].precio;
//   }

//   if (total > 100) {
//     let descuento = total * 0.15;
//     total = total - descuento;
//   }

//   return total;
// }

// let pedido = [
//   { nombre: "Pizza", precio: 40 },
//   { nombre: "Pasta", precio: 50 },
//   { nombre: "Ensalada", precio: 20 }
// ];

// console.log(calcularTotal(pedido));

/*
En una sala de seguridad, se permite el acceso solo a los empleados que hayan 
autenticado correctamente. El sistema de acceso recibe una contraseña y 
debe verificar si coincide con las contraseñas almacenadas en el sistema. Sin 
embargo, los empleados tienen hasta 3 intentos antes de que su acceso sea 
bloqueado por seguridad.  
let contraseñasValidas = ["admin123", "empleado456", "jefe789"] 

*/

// let contraseñasValidas = ["admin123", "empleado456", "jefe789"];

// let intentos = 0;
// let acceso = false;

// while (intentos < 3 && acceso === false) {
//   let ingreso = prompt("Ingresa tu contraseña:");

//   for (let i = 0; i < contraseñasValidas.length; i++) {
//     if (ingreso === contraseñasValidas[i]) {
//       acceso = true;
//     }
//   }

//   if (acceso === false) {
//     intentos++;
//     alert("Contraseña incorrecta. Intento " + intentos);
//   }
// }

// if (acceso === true) {
//   alert("Acceso permitido");
// } else {
//   alert("Acceso bloqueado");
// }

/*El sistema necesita validar si una contraseña es segura. Para que la contraseña 
sea válida, debe tener al menos 8 caracteres, contener al menos una letra 
mayúscula y al menos un número.  
Contraseña = "Password123"
*/

// let contraseña = "Password123";

// function esSegura(pass) {
//   let tieneMayuscula = false;
//   let tieneNumero = false;

//   for (let i = 0; i < pass.length; i++) {
//     let caracter = pass[i];

//     if (caracter >= "A" && caracter <= "Z") {
//       tieneMayuscula = true;
//     }

//     if (caracter >= "0" && caracter <= "9") {
//       tieneNumero = true;
//     }
//   }

//   if (pass.length >= 8 && tieneMayuscula && tieneNumero) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let contraseña = "Password123";

// console.log(esSegura(contraseña)); //-> La contraseña viene a ser verdadera :)

/*
Un sistema de reservas en línea para un hotel necesita verificar si hay 
habitaciones disponibles en el rango de fechas proporcionado por el usuario.  
let habitacionesDisponibles = [  
{ numero: 101, disponible: true },  
{ numero: 102, disponible: false },  
{ numero: 103, disponible: true } 
];  

*/

// let habitacionesDisponibles = [
// { numero: 101, disponible: true },
// { numero: 102, disponible: false },
// { numero: 103, disponible: true }
// ];

// function buscarHabitacion(lista) {
//   let encontrada = false;

//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i].disponible === true) {
//       console.log("Habitación disponible:", lista[i].numero);
//       encontrada = true;
//     }
//   }

//   if (encontrada === false) {
//     console.log("No hay habitaciones disponibles");
//   }
// }

// buscarHabitacion(habitacionesDisponibles);

/*
El sistema debe verificar si el código de promoción ingresado es válido. Los 
códigos válidos son: "PROMO10", "DESCUENTO20", y "AHORRO30".
*/

// let codigosValidos = ["PROMO10", "DESCUENTO20", "AHORRO30"];

// let codigoIngresado = "PROMO10"; // puedes cambiarlo

// let esValido = false;

// for (let i = 0; i < codigosValidos.length; i++) {
//   if (codigoIngresado === codigosValidos[i]) {
//     esValido = true;
//   }
// }

// if (esValido) {
//   console.log("Código válido ");
// } else {
//   console.log("Código inválido ");
// }

/*En una aerolínea, el sistema de reservas debe verificar si hay asientos 
disponibles para un vuelo en una fecha específica.  
let vuelos = [  
{ vuelo: "A123", fecha: "2023-12-15", asientosDisponibles: 50 },  
{ vuelo: "B456", fecha: "2023-12-15", asientosDisponibles: 0 },  
{ vuelo: "C789", fecha: "2023-12-16", asientosDisponibles: 30 } 
]; 
 */

// let vuelos = [
//   { vuelo: "A123", fecha: "2023-12-15", asientosDisponibles: 50 },
//   { vuelo: "B456", fecha: "2023-12-15", asientosDisponibles: 0 },
//   { vuelo: "C789", fecha: "2023-12-16", asientosDisponibles: 30 }
// ];

// function obtenerVueloDisponible(lista, fechaBuscada) {
//   for (let i = 0; i < lista.length; i++) {
//     if (
//       lista[i].fecha === fechaBuscada &&
//       lista[i].asientosDisponibles > 0
//     ) {
//       return lista[i];
//     }
//   }

//   return null;
// }

// let vuelos = [
//   { vuelo: "A123", fecha: "2023-12-15", asientosDisponibles: 50 },
//   { vuelo: "B456", fecha: "2023-12-15", asientosDisponibles: 0 },
//   { vuelo: "C789", fecha: "2023-12-16", asientosDisponibles: 30 }
// ];

// let vuelo = obtenerVueloDisponible(vuelos, "2023-12-15");

// if (vuelo) {
//   console.log("Vuelo asignado:", vuelo.vuelo);
// } else {
//   console.log("No hay vuelos disponibles");
// }

/*
Un profesor necesita un programa que: reciba 5 notas, calcule el promedio e 
indique si el alumno aprobó (>= 13) o desaprobó. 
 */

// function evaluarAlumno(notas) {
//   let suma = 0;

//   for (let i = 0; i < notas.length; i++) {
//     suma = suma + notas[i];
//   }

//   let promedio = suma / notas.length;

//   if (promedio >= 13) {
//     console.log("Aprobó");
//   } else {
//     console.log("Desaprobó");
//   }
// }

// let notas = [14, 12, 15, 10, 13];

// evaluarAlumno(notas);

/*
 En un Cajero automático Un usuario tiene S/1500, debe poder retirar dinero. Si 
intenta retirar más de lo disponible, mostrar “Fondos insuficientes”. 

*/

// let saldo = 1500;

// let retiro = 800;
// if (retiro > saldo) {
//   console.log("Fondos insuficientes");
// } else {
//   saldo = saldo - retiro;
//   console.log("Retiro exitoso ");
//   console.log("Nuevo saldo:", saldo);
// }

/*
Para un Inventario de productos, tienes un array de productos y debes mostrar 
cuáles tienen stock menor a 5. 

let stock = [10, 2, 7, 1, 15]; 
 */

// function productosBajoStock(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 5) {
//       console.log("Stock bajo:", arr[i]);
//     }
//   }
// }

// let stock = [10, 2, 7, 1, 15];

// productosBajoStock(stock);

/*
En un Sistema de descuentos, una tienda aplica: 20% si compra supera 500, 10% 
si supera 200, caso contrario sin descuento. 
 */

// function calcularDescuento(total) {
//   let descuento = 0;

//   if (total > 500) {
//     descuento = total * 0.20;
//   }
//   else if (total > 200) {
//     descuento = total * 0.10;
//   }
//   else {
//     descuento = 0;
//   }

//   let totalFinal = total - descuento;

//   return totalFinal;
// }

// let compra = 650;

// console.log(calcularDescuento(compra));

/*
Sistema de votación, contar votos para el candidato A y candidato B. 
let votos = ["A", "B", "A", "A", "B"]; 
*/

// function contarVotos(votos) {
//   let votosA = 0;
//   let votosB = 0;

//   for (let i = 0; i < votos.length; i++) {
//     if (votos[i] === "A") {
//       votosA++;
//     } else if (votos[i] === "B") {
//       votosB++;
//     }
//   }

//   console.log("Votos A:", votosA);
//   console.log("Votos B:", votosB);
// }

// let votos = ["A", "B", "A", "A", "B"];

// contarVotos(votos);

/*
Calcular el total de productos y agregar IGV. 
let productos = [50, 80, 100, 130, 190];
*/

// function calcularTotalConIGV(lista) {
//   let total = 0;

//   for (let i = 0; i < lista.length; i++) {
//     total = total + lista[i];
//   }

//   let igv = total * 0.18;

//   let totalFinal = total + igv;

//   console.log("Total sin IGV:", total);
//   console.log("IGV:", igv);
//   console.log("Total con IGV:", totalFinal);
// }

// let productos = [50, 80, 100, 130, 190];

// calcularTotalConIGV(productos);

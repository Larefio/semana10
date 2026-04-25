/*
Dado un número, crea una función que verifique si es primo. Un número es primo 
si es mayor que 1 y no tiene divisores aparte de 1 y él mismo.
 */

function primo(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

/*
 Crea una función que calcule la diferencia entre el número más grande y el más 
 pequeño en un arreglo de números.  
*/

function diferencia(arr) {
  let mayor = arr[0];
  let menor = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > mayor) {
      mayor = arr[i];
    }

    if (arr[i] < menor) {
      menor = arr[i];
    }
  }

  return mayor - menor;
}

let numeros = [3, 7, 1, 9, 4];

console.log(diferencia(numeros));
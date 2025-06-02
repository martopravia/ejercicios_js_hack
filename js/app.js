// Ejercicio 1 (6)
// crear funcion digits que retorne string con los 10 digitos del 0 al 9, ej:  "0123456789"
function digits() {
  let result = "";
  for (let i = 0; i < 10; i++) {
    result += i;
  }
  return result;
}
// console.log(digits()); solo usado para probar

// Ejercicio 2 (7)
// crear funciuon countVowels que recibe un str y retorne el numero de vocales que tiene
function countVowels(str) {
  let vowels = "aeiouAEIOUáéíóúÁÉÍÓÚ";
  return str.split("").filter((letter) => vowels.includes(letter)).length;
}
console.log(countVowels("hola"));
console.log(countVowels("hola MUNDO"));

// Ejercicio 3 (8)
// crear funcion removeVowels que recibe un str y retorne nuevo str igual pero sin vocales
function removeVowels(str) {
  let vowels = "aeiouAEIOUáéíóúÁÉÍÓÚ";
  let newStr = "";
  for (let letter of str) {
    if (!vowels.includes(letter)) {
      newStr += letter;
    }
  }
  return newStr;
}
console.log(removeVowels("Hola"));
console.log(removeVowels("Hola Mundo"));
console.log(removeVowels("Hola URUGUAY"));

function removeVowels2(str) {
  let vowels = "aeiouAEIOUáéíóúÁÉÍÓÚ";
  return str
    .split("")
    .filter((letter) => !vowels.includes(letter))
    .join("");
}
console.log(removeVowels2("Hola"));
console.log(removeVowels2("Hola Mundo"));
console.log(removeVowels2("Hola URUGUAY"));

// ejercicio 4 (9)
// crear funcion convert con un str y un num de parametros, el num correspende a distancia y el segundo la unidad, puede ser km o millas (mi)
// debe retornar str con la cantidad convertida de una a otra 100 millas son 160.93kg y 100 km 62.14 millas, no puede tener mas de 2 decimales
function convert(num, unit) {
  let str = unit.toLowerCase();

  if (num === 0) return "0 km";
  if (num === 0) return "0 mi";
  if (str === "mi") {
    return (num * 1.6093).toFixed(2) + " km";
  }
  if (str === "km") {
    return (num * 0.6214).toFixed(2) + " mi";
  }
}
console.log(convert(0, "mi"));
console.log(convert(0, "km"));
console.log(convert(100, "mi"));
console.log(convert(100, "km"));

// ejercicio 5 (10)
// function sumMultiples recibe un numero entero, y retorna la suma de todos los numeros multiplos de 3 0 5 recorridos entre 0 y los numeros menores
// si es multiplo de 3 y 5 se considera 1 sola vez
function sumMultiples(num) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumMultiples(1));
console.log(sumMultiples(2));
console.log(sumMultiples(3));
console.log(sumMultiples(6));
console.log(sumMultiples(10));

// ejercicio 6 (11)
// function oddOccurrencesNumber, recibe un arr y retorna aquel numero que este una impar cantidad de veces
function oddOccurrencesNumber(arr) {
  return arr.find((num) => arr.filter((n) => n === num).length % 2 !== 0);
}

console.log(oddOccurrencesNumber([8]));
console.log(oddOccurrencesNumber([2, 2, 2, 2, 8, 2, 2]));
console.log(
  oddOccurrencesNumber([
    20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5,
  ])
);

// ejercicio 7 (12)
// function correctParentheses que recibe un str de paréntesis curvos, deben estar ordenados, abrir y cerrar de
// forma consistente, retornar true y sino false.
function correctParentheses(str) {
  let count = 0;
  for (let symbol of str) {
    if (symbol === "(") {
      count++;
    } else if ((symbol = ")")) {
      count--;
      if (count < 0) return false;
    }
  }
  return count === 0;
}
//   return str.includes(design);
console.log(correctParentheses("()"));
console.log(correctParentheses(")("));
console.log(correctParentheses("(()"));
console.log(correctParentheses("("));

// ejercicio 8 (13)
// funcion optimalPath, recibe arr que puede ser "NORTE", "SUR", "ESTE" Y "OESTE", indica el camino a seguir para un determinado destino
// puede no ser optimo ej ["norte", "sur"] porque en ese caso es mejor quedarse quieto
// considerar Norte y Sur opuestos, al igual que Este y Oeste y se cancelan entre si, en ese caso devolver array vacio
// ej:
// optimalPath([”NORTE”, “SUR”]) => []
// optimalPath(["NORTE", "SUR", "SUR"]) => ["SUR"]
// optimalPath(["NORTE", "SUR", "SUR", "SUR"]) => ["SUR", "SUR"]
// optimalPath(["NORTE", "SUR", "SUR", "ESTE", "OESTE", "NORTE", "OESTE"]) => ["OESTE"]
// optimalPath(["NORTE", "OESTE", "SUR", "ESTE"]) => ["NORTE", "OESTE", "SUR", "ESTE"]

function optimalPath(arr) {
  let opposites = {
    NORTE: "SUR",
    SUR: "NORTE",
    ESTE: "OESTE",
    OESTE: "ESTE",
  };

  let result = [];
  for (let cardinalDirection of arr) {
    if (opposites[cardinalDirection] === result[result.length - 1]) {
      result.pop();
    } else {
      result.push(cardinalDirection);
    }
  }
  return result;
}

console.log(optimalPath(["NORTE", "SUR"]));
console.log(optimalPath(["NORTE", "SUR", "SUR"]));
console.log(optimalPath(["NORTE", "SUR", "SUR", "NORTE"]));
console.log(optimalPath(["NORTE", "SUR", "SUR", "SUR"]));
console.log(
  optimalPath(["NORTE", "SUR", "SUR", "ESTE", "OESTE", "NORTE", "OESTE"])
);
console.log(optimalPath(["NORTE", "OESTE", "SUR", "ESTE"]));

// Ejercicio 9 (14)
// function encrypt13 recibe un strg y retorna nuevo str encriptado
// debe tener las letras corridas 13 lugares, ej: la A es la N, tanto minuscula, cómo mayúscula, a la T la G (t => g), solo alfabeto ingles
function encrypt13(str) {
  let abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRS";
  let strSplit = str.split("");
  let result = "";
  for (let letter of strSplit) {
    let newLetter = abc.indexOf(letter);
    result += abc[newLetter + 13];
  }
  return result;
}
console.log(encrypt13("hola"));
console.log(encrypt13("CHAU"));
console.log(encrypt13("Titulo"));
console.log(encrypt13("Hack academy 2022"));

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
// crear funcion countVowels que recibe un str y retorne el numero de vocales que tiene
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
console.log(correctParentheses("(())((()())())"));

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
console.log(optimalPath(["NORTE", "SUAR", "SUR"]));
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
  let abc = "abcdefghijklmnopqrstuvwxyzBCDEFGHIJKLMNOPQRSTUVWXYZ";
  let strSplit = str.split("");
  let result = "";
  for (let letter of strSplit) {
    let index = abc.indexOf(letter);

    if (index === -1) {
      result += letter;
    } else if (index < 26) {
      let newIndex = (index + 13) % 26;
      result += abc[newIndex];
    } else {
      let newIndex = ((index - 26 + 13) % 26) + 26;
      result += abc[newIndex];
    }
  }
  return result;
}
console.log(encrypt13("hola"));
console.log(encrypt13("CHAU"));
console.log(encrypt13("Título"));
console.log(encrypt13("HACK academy 2022"));

// ejercicio 10 (15)
// resolverse con .map, funcion passOrFail parametros un array de objetos, cada objeto tiene 3 propiedades: firstname (str)
// lastname(str) y grade (number), la f(x) debe examinar la propiedad grade y si la nota es >= 5, agregar una propiedad result
// con str pass, los menores no se agrega nada
// debe retornar un nuevo arr creado por map, con misma cantidad de objetos que el arr de entrada pero con result agregado

// Ejemplo 1:
// passOrFail([
//   { firstname: 'John', lastname: 'Doe', grade: 7 },
//   { firstname: 'Alice', lastname: 'Smith', grade: 3 },
//   { firstname: 'Bob', lastname: 'Johnson', grade: 6 },
// ])

// // Respuesta 1:
// [
//     { firstname: 'John', lastname: 'Doe', grade: 7, result: 'pass' },
//     { firstname: 'Alice', lastname: 'Smith', grade: 3 },
//     { firstname: 'Bob', lastname: 'Johnson', grade: 6, result: 'pass' },
// ]
let estudiantes = [
  { firstname: "John", lastname: "Doe", grade: 7 },
  { firstname: "Alice", lastname: "Smith", grade: 3 },
  { firstname: "Bob", lastname: "Johnson", grade: 6 },
];

function passOrFail(estudiantes) {
  return estudiantes.map((estudiante) => {
    if (estudiante.grade > 5) {
      return {
        ...estudiante,
        result: "pass",
      };
    } else {
      return {
        ...estudiante,
      };
    }
  });
}

console.log(passOrFail(estudiantes));

// ejercicio 11 (16) se debe de resolver con dictionary, crear piedra papel o tijera, f(x) play recibe un str que puede ser piedra, papel o
// tijera, la funcion debe definir que movimiento hace la computadora de manera aleatoria y determinar un ganador, usar math.

// | `play("Piedra")` | `"La computadora eligió Papel. Perdiste.”` |
// | `play("Piedra")` | `"La computadora eligió Tijeras. Ganaste.”` |
// | `play("Papel")` | `"La computadora eligió Papel. Empataron.”` |
// | `play("Papel")` | `"La computadora eligió Tijeras. Perdiste.”` |

function play(election) {
  let options = {
    1: "Piedra",
    2: "Papel",
    3: "Tijera",
  };
  let randomPcElections = Math.floor(Math.random() * 3 + 1);
  let resultPc = options[randomPcElections];

  // optimizarlo desde acá

  //   if (eleccion === "Piedra" && resultPc === "Tijera")
  //     return `La computadora eligió ${resultPc}. Ganaste`;
  //   if (eleccion === "Piedra" && resultPc === "Papel")
  //     return `La computadora eligió ${resultPc}. Perdiste`;
  //   if (eleccion === "Tijera" && resultPc === "Papel")
  //     return `La computadora eligió ${resultPc}. Ganaste`;
  //   if (eleccion === "Tijera" && resultPc === "Piedra")
  //     return `La computadora eligió ${resultPc}. Perdiste`;
  //   if (eleccion === "Papel" && resultPc === "Piedra")
  //     return `La computadora eligió ${resultPc}. Ganaste`;
  //   if (eleccion === "Papel" && resultPc === "Tijera")
  //     return `La computadora eligió ${resultPc}. Perdiste`;
  //   else return `No es una opción válida, seleccione Piedra, Papel o Tijera`;
  let validOptions = ["Piedra", "Papel", "Tijera"];

  if (!validOptions.includes(election)) {
    return `No es una opción válida, seleccione Piedra, Papel o Tijera`;
  }

  if (election === resultPc)
    return `La computadora eligió ${resultPc}. Empataron`;

  let winnersCombinations = {
    Piedra: "Tijera",
    Papel: "Piedra",
    Tijera: "Piedra",
  };

  if (winnersCombinations[election] === resultPc) {
    return `La computadora eligió ${resultPc}. Ganaste.`;
  } else {
    return `La computadora eligió ${resultPc}. Perdiste.`;
  }
}
console.log(play("Tijera"));
console.log(play("Papel"));
console.log(play("Piedra"));
console.log(play("Botella"));

// ejercicio 12 (17) crear f(x) durationForHumans que recibe un numero representando segundos y retorne str con texto que indique la cantidad
// de tiempo transcurrido, contemplando un año de 365 dias
// durationForHumans(0)
// "ahora”
// durationForHumans(62)
// "1 minuto y 2 segundos”
// durationForHumans(3662)
// "1 hora, 1 minuto y 2 segundos”
// durationForHumans(43424234)
// "1 año, 137 días, 14 horas, 17 minutos
// y 14 segundos”
// durationForHumans(4342440)
// "50 días, 6 horas y 14 minutos”

function durationForHumans(seconds) {
  if (seconds === 0) return "ahora";

  const years = Math.floor(seconds / (365 * 24 * 60 * 60));
  seconds = seconds % (365 * 24 * 60 * 60);

  const days = Math.floor(seconds / (24 * 60 * 60));
  seconds = seconds % (24 * 60 * 60);

  const hours = Math.floor(seconds / (60 * 60));
  seconds = seconds % (60 * 60);

  const minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;

  let result = [];

  if (years > 0) {
    result.push(`${years} año${years > 1 ? "s" : ""}`);
  }
  if (days > 0) {
    result.push(`${days} día${days > 1 ? "s" : ""}`);
  }
  if (hours > 0) {
    result.push(`${hours} hora${hours > 1 ? "s" : ""}`);
  }
  if (minutes > 0) {
    result.push(`${minutes} minuto${minutes > 1 ? "s" : ""}`);
  }
  if (seconds > 0) {
    result.push(`${seconds} segundo${seconds > 1 ? "s" : ""}`);
  }
  if (result.length === 1) return result[0];
  return result.slice(0, -1).join(", ") + " y " + result.slice(-1);
}
console.log(durationForHumans(0));
console.log(durationForHumans(62));
console.log(durationForHumans(3662));
console.log(durationForHumans(43424234));
console.log(durationForHumans(4342440));

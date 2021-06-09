---
title: "¿Cómo reducir valores repetidos en array de objetos?"
description: "Te explicare como usar el método reduce para resolver este tipo de problema."
date: "2021-06-08"
image: "/posts/js.jpeg"
---

Comenzare explicando el método **reduce((accumulator, currentValue, index, array) => { ... }, initialValue)**, en el ejemplo te mostrara la suma de ahorros, el **return** se guarda en el **initialVale** que por es devuelto como el **accumulator** y el **current** es el valor iterado actual, como si fuera el **value de los métodos forEach, map**.

```javascript
const mySavings = [500, 1200, 30, 60, 80]
const totalSavings = mySavings.reduce(function (accumulator, current) {
  return accumulator + current
}, 0) //result 1870
```

Comenzaremos a usar **array-objects** y ver que nos retorna si usar el **return** veras que el **initialVale** puede ser cualquier otro tipo de variable, por lo tanto al mostrar el acumulador por consola después del primero nos sale undefined y **es porque no usamos el return para acumular la respuesta** esa es la clave para el entendimiento del método reduce.

```javascript
const arrayObjectExample = [
  { value: 1 },
  { value: 1 },
  { value: 1 },
  { value: 2 },
  { value: 2 },
]
const getNotRepeated = arrayObjectExample.reduce(
  function (accumulator, currentValue) {
    console.log(accumulator, currentValue)
    /*
{ accumulator: { result: 0 }, currentValue: { value: 1 } }
{ accumulator: undefined, currentValue: { value: 1 } }
{ accumulator: undefined, currentValue: { value: 1 } }
{ accumulator: undefined, currentValue: { value: 2 } }
{ accumulator: undefined, currentValue: { value: 2 } }
  */
  },
  { result: 0 } /*initialVale*/
)
```

Ahora les mostrare un ejemplo mas fácil como obtener los valores no repetidos siendo validados desde el primer objeto inicial del array.

```javascript
const arrayObjectExample = [
  { value: 1 },
  { value: 1 },
  { value: 1 },
  { value: 2 },
  { value: 2 },
]
const getNotRepeated = arrayObjectExample.reduce(
  function (accumulator, currentValue) {
    const { value } = currentValue
    //Validando después de inicializar el acumulador y
    //verifica si el valor iterado actual es diferente al valor guardado
    if (accumulator.value && accumulator.value !== value) {
      console.log("valor no repetido:", value /*2*/)
      return { ...accumulator }
    }
    return { ...accumulator, value }
  },
  { result: 0 }
)
console.log(getNotRepeated) //{ result: 0, value: 1 }
```

> Solo obtiene el valor no repetido validando desde el primero

En este ultimo ejemplo es mas completo, estaremos usando el método reduce como **Callback function**

```javascript
function addValue(copyAccumulator, current) {
  // obtiene el index del valor ya guardado
  const index = copyAccumulator.values.findIndex(
    (acc) => acc.value === current.value
  )
  if (index >= 0) {
    //suma a los valores repetidos ya guardados
    copyAccumulator.values[index].repeated++
  } else {
    //Agrega al valor nuevo no repetido o nuevo
    copyAccumulator.values.push({
      value: copyAccumulator.lastValue,
      repeated: copyAccumulator.counter,
    })
  }
  return copyAccumulator
}

function getValuesRepeated(accumulator, current) {
  const { lastValue } = accumulator
  let copyAccumulator = { ...accumulator }
  //para obtener el numero de veces repetidos
  copyAccumulator.counter++
  // para obtener el ultimo valor
  copyAccumulator.lastValue = current.value
  if (lastValue) {
    //reset contador para el nuevo valor repetido
    lastValue !== current.value && (copyAccumulator.counter = 1)
    // values guarda el valor repetido y la veces
    copyAccumulator = addValue(copyAccumulator, current)
  }
  return copyAccumulator
}

// Inline callback function
arrayObjectExample.reduce(
  getValuesRepeated /*function*/,
  { values: [], lastValue: 0, counter: 0 } /*initialValue*/
)
/*result
{
  values: [ { value: 1, repeated: 3 }, { value: 2, repeated: 2 } ],
  lastValue: 2,
  counter: 2
}
*/
```

---
title: "How to reduce repeated values in array of objects?"
description: "Te explicare como usar el método reduce para resolver este tipo de problema."
date: "2021-06-08"
image: "/posts/js.jpeg"
---

I will start by explaining the **reduce((accumulator, currentValue, index, array) => { ... }, initialValue)**, in the example it will show you the sum of savings, the **return** is stored in the **initialValue** which is returned as the **accumulator** and the **current** is the current iterated value, as if it were the **value of the forEach, map** methods.

```javascript
const mySavings = [500, 1200, 30, 60, 80]
const totalSavings = mySavings.reduce(function (accumulator, current) {
  return accumulator + current
}, 0) //result 1870
```

We will start using **array-objects** and see what we get back if we use the **return** you will see that the **initialVale** can be any other type of variable, therefore when we show the accumulator by console after the first one we get undefined and **it is because we do not use the return to accumulate the answer** that is the key to the understanding of the reduce method.

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

Now I will show you an easier example of how to obtain the non-repeated values being validated from the first initial object of the array.

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
    //Validating after initializing the accumulator y
    //checks if the current iterated value is different from the saved value
    if (accumulator.value && accumulator.value !== value) {
      console.log("value not repeated:", value /*2*/)
      return { ...accumulator }
    }
    return { ...accumulator, value }
  },
  { result: 0 }
)
console.log(getNotRepeated) //{ result: 0, value: 1 }
```

> Only obtains the non-repeated value by validating from the first one.

In this last example is more complete, we will be using the reduce method as **Callback function**.

```javascript
function addValue(copyAccumulator, current) {
  //gets the index of the already saved value
  const index = copyAccumulator.values.findIndex(
    (acc) => acc.value === current.value
  )
  if (index >= 0) {
    //adds to the repeated values already stored
    copyAccumulator.values[index].repeated++
  } else {
    //adds to new non-repeated or new value
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
  //to obtain the number of times repeated
  copyAccumulator.counter++
  //to obtain the last value
  copyAccumulator.lastValue = current.value
  if (lastValue) {
    //reset counter for the new repeated value
    lastValue !== current.value && (copyAccumulator.counter = 1)
    //values saves the repeated value and the number of times
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

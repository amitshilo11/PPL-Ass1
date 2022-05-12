/* Implementing some and every with map and reduce */

const someExercise = (pred,arr) => arr.map(pred).reduce(
    (acc,curr) => acc || curr,
     false);
     
const even = (x) => x % 2 === 0;
const arr1 = [0, 1, 2, 3];
const arr2 = [1, 3];

console.log(`arr1HasEvenNumbers = ${someExercise(even, arr1)}`); // ==> arr1HasEvenNumbers = true
console.log(`arr2HasEvenNumbers = ${someExercise(even, arr2)}`); // ==> arr2HasEvenNumbers = false

function everyExercise(pred, arr) {
    return arr.map(pred).reduce((acc, curr) => {
        return acc && curr;
    }, true);
}

console.log(`allInArr1AreEven = ${everyExercise(even, arr1)}`); // ==> allInArr1AreEven = false
console.log(`allInArr3AreEven = ${everyExercise(even, arr3)}`); // ==> allInArr3AreEven = true

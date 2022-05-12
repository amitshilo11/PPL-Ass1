/* Implementing some and every with map and reduce */

// Every with ramda map and reduce and TypeScript types.
import { map, reduce } from "ramda";

const even = (x: number) => x % 2 === 0;
const arr1 = [0, 1, 2, 3];
const arr2 = [0, 2];

// Note the requirement to cast 'true' as boolean
const everyExercise2 = <T>(pred: (x: T) => boolean, arr: T[]) =>
    reduce(
        (acc: boolean, cur: boolean) => acc && cur,
        <boolean>true,
        map(pred, arr)
    );

console.log(`allInArr1AreEven = ${everyExercise2(even, arr1)}`); // ==> allInArr1AreEven = false
console.log(`allInArr2AreEven = ${everyExercise2(even, arr2)}`); // ==> allInArr2AreEven = true
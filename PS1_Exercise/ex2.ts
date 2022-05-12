// Using the more compact => notation and the ternary ( test ? then : else ) expression
const filter2 = (pred : any, elements : any) =>
    elements.reduce((acc : any, cur : any) => (pred(cur) ? acc.concat(cur) : acc), []);

filter2((x: any) => x % 2 === 0, [0, 1, 2, 3, 4]); // ==> [ 0, 2, 4 ]

// Using the Ramda reduce operator instead of the array method elements.reduce()
// With TypeScript type declarations - note the usage of Array<T>() instead of [] to denote an empty array of type T[]
import { reduce } from "ramda";
const filter3 = <T>(pred: (x: T) => boolean, elements: T[]) =>
    reduce(
        (acc, cur) => (pred(cur) ? acc.concat(cur) : acc),
        Array<T>(),
        elements
    );

console.log(filter3(x => x % 2 === 0, [0, 1, 2, 3, 4])); // ==> [ 0, 2, 4 ]

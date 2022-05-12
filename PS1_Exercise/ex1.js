import * as R from "ramda";

/* Implementing map with reduce */
const mapExercise = (f, elements) =>
    elements.reduce((acc, curr) => { // reducer
        acc.push(f(curr));
        return acc;
    }, []);

console.log(mapExercise(x => x * x, [0, 1, 2, 3, 4, 5, 6])); // ==> [ 0, 1, 4, 9, 16, 25, 36 ]
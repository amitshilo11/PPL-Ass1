/* Implementing filter with reduce */

function filterExercise(pred, elements) {
    return elements.reduce((acc, curr) => {
        if (pred(curr)) {
            acc.push(curr);
        }
        return acc;
    }, []);
}

console.log(filterExercise(x => x % 2 === 0, [0, 1, 2, 3, 4, 5, 6])); // ==> [ 0, 2, 4, 6 ]


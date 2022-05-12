import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
const vowels: string[] = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
const isVowel = (c: string) => R.includes(c, vowels)
export const countVowels = R.pipe(
    (str: string) => stringToArray(str),
    (arr: string[]) => arr.filter(isVowel),
    (arr: string[]) => arr.length
)


/* Question 2 */
const mix = (y: number, x?: string) =>
    y === 1 ? [(R.concat([x], [""])).join("")] :
        [(R.concat([x], [y])).join("")]
const isEmptyy = (text: string[]): boolean => text.length === 0
const solve = (ans: string[], text: string[], prev: string | undefined, count: number): string[] =>
    isEmptyy(text) ? R.concat(ans, mix(count, prev)) :
        text[0] === prev ? solve(ans, text.slice(1), text[0], count + 1) :
            solve(R.concat(ans, mix(count, prev)), text.slice(1), text[0], 1);

export const runLengthEncoding = R.pipe(
    (text: string) => stringToArray(text),
    (arr: string[]) => solve([], arr, arr[0], 0),
    (arr: string[]) => arr.join("")
);


/* Question 3 */
const parenthesesArray = (arr: string[]) => arr.filter((c: string) => isStarting(c) || isClosing(c))
const isEmpty: (array: string[]) => boolean = array => array === undefined || array.length === 0
const isStarting = (c: string): boolean => c == '(' || c == '[' || c == '{';
const isClosing = (c: string): boolean => c == ')' || c == ']' || c == '}';
const isMatching: (open: string, close: string) => boolean = (open, close) =>
    close === ')' ? open === '(' :
        close === ']' ? open === '[' :
            close === '}' ? open === '{' :
                false;
const isBalanced: (array: string[], stack: string[]) => boolean = (array, stack) =>
    isEmpty(array) ? isEmpty(stack) :
        isStarting(array[0]) ? isBalanced(array.slice(1), R.concat([array[0]], stack)) :
            isClosing(array[0]) ? (!isEmpty(stack) && isMatching(stack[0], array[0])) && isBalanced(array.slice(1), stack.slice(1)) :
                false;

export const isPaired = R.pipe(
    (str: string) => stringToArray(str),
    (arr: string[]) => parenthesesArray(arr),
    (arr: string[]) => isBalanced(arr, [])
)
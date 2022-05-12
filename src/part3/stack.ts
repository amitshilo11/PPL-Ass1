import { State, bind } from "./state";

export type Stack = number[];

const insert = (x: number) => (q: Stack) => <Stack>[x].concat(q)
const remove = (s: Stack) => <Stack>s.slice(1)


export const push = (x: number): State<Stack, undefined> =>
    (s: Stack) => [insert(x)(s), undefined]

export const pop: State<Stack, number> = 
    (s: Stack) => [remove(s), s[0]]

export const stackManip: State<Stack, unknown> = (s: Stack) => 
    bind(pop, (n: number) => push(n*n + pop(s)[1]))(s)
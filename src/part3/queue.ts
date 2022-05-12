import { State, bind } from "./state";

export type Queue = number[];

const insert = (x: number) => (q: Queue) => <Queue>q.concat([x])
const remove = (q: Queue) => <Queue>q.slice(1)


export const enqueue = (x: number): State<Queue, undefined> =>
    (q: Queue) => [insert(x)(q), undefined]


export const dequeue: State<Queue, number> =
    (q: Queue) => [remove(q), q[0]]


export const queueManip: State<Queue, number | unknown> = (q: Queue) => 
    dequeue(bind(dequeue, 
                (n: number) => 
                        (qu: Queue) => enqueue(n/3)(enqueue(2*n)(qu)[0]))(q)[0])

export type State<S, A> = (initialState: S) => [S, A];

export const bind = <S, A, B>(state: State<S, A>, f: (x: A) => State<S, B>): State<S, B> => 
    (s: S) =>
        f(state(s)[1])(state(s)[0])

export const cons = (x, y) => (f) => f(x, y);

export const car = (f) => f((x) => x);
export const cdr = (f) => f((x, y) => y);

export default (x, y) => cons(x, y);

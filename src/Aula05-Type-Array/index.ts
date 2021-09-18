export function multiplyArgs(...args: Array<number>): number {
    return args.reduce((ac, value) => ac * value, 1);
};

export function concatenateStrings(...args: string[]) : string {
    return args.reduce((ac, value) => ac + value);
}

export function toUpperCase(...args: string[]) : string[] {
    return args.map(value => value.toUpperCase());
}

const result = multiplyArgs(1, 2, 3);

const result2 = concatenateStrings('a', 'b', 'c');
const result3 = toUpperCase('a', 'b', 'c');

console.log(result);

console.log(result2);

console.log(result3);

export { result };


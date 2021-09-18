// Tipos básicos
let nome: string = 'Rodrigo'; // Qualquer tipo de string '', "", ``
let age: number = 30; // 10, 1.57, -5.55, 0xf00d. 0b1010, 0o7744
let adult: boolean = true; // true ou false
let symbol: symbol = Symbol('Any-symbol'); // symbol
//let big: bigint = 10n; // bigint

// Arrays

let arrayNumbers: Array<number> = [1, 2, 3];
let arrayNumbers2: number[] = [1, 2, 3];
let arrayStrings: Array<string> = ["a", "b", "c"];
let arrayStrings2: string[] = ['a', 'b', 'c'];

// Objects
// ? deixa como opcional
let person: { nome: string, age: number, adult?: boolean } = {
    age: 30,
    nome: 'Rodrigo',
};

// Functions

function sum(x: number, y: number): number {
    return x + y;
};

const result = sum(2, 2);

const sum2: (x: number, y: number) => number = (x, y) => x + y;
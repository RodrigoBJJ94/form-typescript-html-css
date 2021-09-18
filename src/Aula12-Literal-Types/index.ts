let x = 10;

x = 0b1010;
const y = 10; // Tipo literal
let a: 100 = 100; // Tipo literal, mas não recomendado de usar
let b = 100 as const; // Tipo literal, mas não recomendado de usar

const person = {
    name: 'Rodrigo' as const,
    lastname: 'Brentano' as const,
};

function chooseColor(color: 'Red' | 'Yellow' | 'Blue'): string { // Tipos Literais
    return color;
};

console.log(chooseColor('Red'));

export default 1; // Module mode
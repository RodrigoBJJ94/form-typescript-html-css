let x: any;
x = 100;
x = 'Rodrigo';
x = 900;
x = '10';
const y = 800;
console.log(x + y);

let a: unknown; // É como se fosse uma versão mais segura de any
a = 100;
a = 'Rodrigo';
a = 900;
a = '10';
const b = 800;
if (typeof a === 'number') console.log(a + b);

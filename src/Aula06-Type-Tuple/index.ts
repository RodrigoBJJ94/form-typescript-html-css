// Tuple
const dataClient: /* readonly */ [number, string] = [1, 'Rodrigo'];
// Com o readonly, não posso mais alterar o array, e também não posso mais usar o pop ou o push
const dataClient2: [number, string, string?] = [2, 'Rodrigo']; // ? = Opcional
const dataClient3: [number, string, ...string[]] = [3, 'Rodrigo', 'Brentano'];

dataClient[0] = 100;
dataClient[1] = 'Brentano';
dataClient.pop(); // Com o pop posso burlar o typescript, o que não é o desejado
dataClient.push(88); // Com o push posso burlar o typescript, o que não é o desejado

console.log(dataClient);
console.log(dataClient2);
console.log(dataClient3);

// Arrays readonly
const array1: readonly string[] = ['Rodrigo', 'Brentano']; // Mesmo resultado
const array2: ReadonlyArray<string> = ['Rodrigo', 'Brentano'] // Mesmo resultado
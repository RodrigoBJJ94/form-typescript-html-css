// Condicional, recomendável, se você não tem certeza
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red'; 

// Non-null assertion, não recomendável
const body2 = document.querySelector('body')!;
// ! = Não pode ser nulo
body2.style.background = 'red';

// Type assertion, recomendável, se você tem certeza
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Anything';

// Caso precise fazer uma conversão maluca nesse caso para um number
const body4 = (document.querySelector('body') as unknown) as number;


// Tipo void, não retorna nada
function noReturn(...args: string[]): void {
    console.log(args.join(' '));
};

const person = {
    nome: 'Rodrigo',
    lastname: 'Brentano',

    showName(): void {
        console.log(this.nome + ' ' + this.lastname);
    },
};

noReturn('Rodrigo', 'Brentano');

person.showName();

export { person };
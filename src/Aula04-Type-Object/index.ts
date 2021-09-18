const objectA: {
    readonly keyA: string; // Com o readonly eu não posso alterar a chave
    keyB: string;
    keyC?: string; // ? Deixa como opcional
    [key: string]: unknown;
} = {
    keyA: 'Value A',
    keyB: 'Value B',
};

//objectA.keyA = 'Another value';
objectA.keyC = 'New key';

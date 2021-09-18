enum Colors { // Junta os dois enum com o mesmo nome
    RED = 3,   // 3
    BLUE,   // 4
    YELLOW, // 5
    //PURPLE = 'Purple',
};

enum Colors { // Junta os dois enum com o mesmo nome
    GREEN = 201,
    ROSE, // 202
};

console.log(Colors);
console.log(Colors.RED);
console.log(Colors[4]);

function chooseColor(color: Colors): void {
    console.log(Colors[color]);
};

chooseColor(Colors.BLUE)
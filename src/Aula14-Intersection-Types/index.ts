type HaveName = { name: string };
type HaveLastname = { lastname: string };
type HaveAge = { age: number };
type Person = HaveName & HaveLastname & HaveAge;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersection = AB & AC & AD;

const person: Person = {
    age: 30,
    name: 'Rodrigo',
    lastname: 'Brentano',
};

console.log(person)

export { person }; // Module mode
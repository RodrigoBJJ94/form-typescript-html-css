type Old = number;
type Person = {
    name: string,
    age: Old;
    salary: number;
    favoriteColor?: string;
};
type ColorRGB = 'Red' | 'Green' | 'Blue';
type ColorCMYK = 'Cian' | 'Magenta' | 'Yellow' | 'Black';
type FavoriteColor = ColorRGB | ColorCMYK;

const person: Person = {
    name: 'Rodrigo',
    age: 27,
    salary: 200_000,
};

export function setFavoriteColor(person: Person, color: FavoriteColor): Person {
    return { ...person, favoriteColor: color};
};

console.log(setFavoriteColor(person, 'Blue'));

export { person };
import Dog from './dog';
import { v4 as uuidv4 } from 'uuid';

export const dogsData: Array<Dog> = [
    {
        name: 'Floofus',
        species: 'Puppy',
        favFoods: ['marshmallows'],
        birthYear: 2020,
    },
    {
        name: 'Doofus',
        species: 'Doggo',
        favFoods: ['porridge, dog food'],
        birthYear: 2010,
    },
    {
        name: 'Goofus',
        species: 'Dog',
        favFoods: ['bouncy balls'],
        birthYear: 2015,
    },
];

dogsData.forEach(dog => dog.id = uuidv4());
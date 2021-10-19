// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Input:
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]
*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    let petsArray = [];

    arr.forEach(pet => {
        petsArray.push(pet.name)
    });
    return petsArray;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    let petsArray = [];

    arr.forEach(pet => {
        petsArray.unshift(pet.type)
    });
    return petsArray;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    let petsArray = [];

    arr.forEach(pet => {
        // let name = `nombre:${pet.name}`, 
        // let type = petsArray.type; 

        petsArray.push({nombre: `${pet.name}`, tipo: `${pet.type}`});
    });
    
    return petsArray;
}
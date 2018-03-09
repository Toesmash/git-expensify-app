// const person = {
//     name: 'Tomas',
//     age: 24,
//     location: {
//         city: 'Bratislava',
//         temp: -8
//     }
// }
// const {name = 'Anonym', age, } = person;
// const {city, temp: temperature} = person.location;


// console.log(`${name} is ${age}`);
// console.log(`It's ${temperature} in ${city}`)


// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {title, author} = book;
// const {name: publisherName = 'Self-published'} = book.publisher;

// console.log(publisherName);


//
//  Array destructuring
//

const address = ['Bukova 5', 'Bratislava', 'Slovensko', '81102'];
const [street, city, state = 'Kosice', zip] = address;

console.log(`You are in ${city}, ${state}`);


const menu = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [item, , medium, ] = menu;

console.log (`A medium ${item} costs ${medium}`)

// let l = [];

choices = [
    "NY",
    "Casablanca",
    "Dubai",
    "Shanghai",
];

assoc_choices = [];
for (const [index, choice] of choices.entries()) {
    // console.log(index, e);
    assoc_choices.push({number: index + 1, text: choice});
}

console.log(typeof(assoc_choices[0]));

// function random(r_min, r_max) {
//     return parseInt(Math.random() * (r_max - r_min) + r_min);
// }

// function shuffle(array) {
//     return array.sort(() => Math.random() - 0.5);
// }

// function shuffle_copy(array) {
//     return [...array].sort(() => Math.random() - 0.5);
// }

// for (let i=0; i<10; i++)
//     l.push(i);

// l.sort(() => Math.random() - 0.5);
// l.sort((a, b) => a - b);
// l.forEach(v => console.log(v));

// let ll = shuffle_copy(l);

// console.log(l);
// console.log(ll);
// Build Tower

// Difficulty:
// Medium

// Concepts:
// Loops, Logic

// Write a function that takes in a number. It should return a “tower” of *. The tower will be an array of strings.

// The number passed in tells you how many floors the tower should have.
// The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on.
// Each block is represented by a *.
// For example, a tower of 3 floors looks like this (note the spacing):
// [
//     '  *  ',
//     ' *** ',
//     '*****'
// ]

////////// CODE HERE //////////

function buildTower(number) {
    let tower = [];
    for (let i = 0; i < number; i++) {
        tower.push(" ".repeat(number - i - 1)
        + "*".repeat((i * 2) + 1)
        + " ".repeat(number - i - 1))
    }
    return tower;
}
console.log(buildTower(19));

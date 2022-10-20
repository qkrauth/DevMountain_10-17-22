const {returnTwo, greeting, add} = require("../functions.js")

test("Does returnTwo equal 2", () => {
    expect(returnTwo()).toEqual(2);
})

test("Does greeting return the right output", () => {
    expect(greeting("James")).toBe("Hello James");
})

test("Does the add function add num1 plus num2 and give the correct answer", () => {
    expect(add(5, 9)).toEqual(14);
})
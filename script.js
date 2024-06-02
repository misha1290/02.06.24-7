// Завдання 1
let numbers = [1, 2, 3]
numbers[1] = 10
console.log(numbers)

// Завдання 2
let strings = ["один", "два", "три"]
strings[3] = ("чотири")
console.log(strings)

// Завдання 3
console.log(numbers[0] + numbers[1] + numbers[2])

// Завдання 4
let numbersFive = [5, 10, 15, 20, 25];
for (let i = 0; i < numbersFive.length; i++) {
    console.log(numbersFive[i])
}

// Завдання 5
let stringsFive = ["123", "1234", "12345", "123456", "1234567"]
for (let i = 0; i < stringsFive.length; i++) {
    if (stringsFive[i].length > 5) {
        console.log(stringsFive[i])
    }
}

// Завдання 6
let numbersTen = [3, 7, 12, 19, 23, 35, 42, 50, 61, 88]
let maxNumber = Math.max(...numbersTen)
console.log(maxNumber)

// Завдання 7
for (let i = 0; i < numbersTen.length; i++) {
    if (numbersTen[i] % 2 === 0) {
        console.log(numbersTen[i]);
    }
}
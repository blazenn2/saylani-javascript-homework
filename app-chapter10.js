// Chapter 17 - 20

// Question 1

var abcd = [
    [],
    [],
    []
]

// Question 2

function Question2k() {
    var numbers = [
        [0, 1, 2, 3],
        [1, 0, 1, 2],
        [2, 1, 0, 1]
    ]

    for (var i = 0; i < numbers.length; i++) {
        document.write(numbers[i] + "<br>")
    }
}

// Question 3

function Question3k() {
    for (var i = 1; i <= 10; i++) {
        document.write(i + "<br>")
    }

}

// Question 4

function Question4k() {
    var multi = parseInt(prompt("Enter a number to show its multiplication"))
    var length_multi = parseInt(prompt("Enter length multiplication table"))

    document.write("Multiplication table of " + multi + "<br>Length " + length_multi + "<br><br>")

    for (i = 1; i <= length_multi; i++) {
        table = multi * i
        document.write(multi + "x" + i + "=" + table + "<br>")
    }
}

// Question 5

function Question5k() {
    var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

    for (var i = 0; i < fruits.length; i++) {
        document.write(fruits[i] + "<br>")
    }
    for (var j = 0; j < fruits.length; j++) {
        document.write("Element at index " + j + " " + "is " + fruits[j] + "<br>")
    }
}

// Question 6
function Question6k() {
    document.write("Counting:<br><br>")
    for (var i = 1; i <= 10; i++) {
        document.write(i)
    }
}

// Question 7
function Question7k() {
    var A = ["cake", "apple pie", "cookie", "chips", "patties"]
    var order = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")

    for (var i = 0; i < A.length; i++) {
        if (order === A[i]) {
            alert(order + " " + "is available")
        } else {
            alert("We are sorry. Pastry is not available in our bakery")
        }
        break
    }
}

// Question 8

function Question8k() {
    var A = [24, 53, 78, 91, 12]
    document.write("Array items: " + A + "<br>")
    var max_A = Math.max(...A)
    document.write(max_A)
}

// Question 9

function Question9k() {
    var A = [24, 53, 78, 91, 12]
    document.write("Array items: " + A + "<br>")
    var min_A = Math.min(...A)
    document.write(min_A)
}

// Question 10

function Question10k() {
    for (var i = 1; i <= 20; i++) {
        multiply = 5 * i
        document.write(multiply+",")
    }
}
//creating a variable with the value of my name
var myName = "Kenneth";
console.log(myName);
// creating a varible with the value of 50 representing the number of states in the U.S
var numberOfState = 50;
console.log(numberOfState);
//adding 4+5
var sum = 4 + 5;
console.log(sum);
var sayHello = function () {
    alert('Hello World');
};
var checkAge = function (name, age) {
    if (age < 21) {
        console.log("Sorry " + name + ", you aren't old enough to view this page!");
    }
    else {
        console.log("Welcome " + name + "!");
    }
};
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
var favFruits = ['Apples', 'Oranges', 'Bananas', 'Grapes', 'Kiwis', 'Strawberries'];
console.log(favFruits);
favFruits.forEach(function (fruit) {
    console.log(fruit);
});
var cat = {
    name: "Stark",
    breed: "Cat"
};
console.log(cat);
var persons = [
    {
        name: 'Kenneth',
        age: 33
    },
    {
        name: 'Kentez',
        age: 18
    },
    {
        name: 'Dj',
        age: 20
    },
    {
        name: 'Kendra',
        age: 31
    },
    {
        name: 'Kennethia',
        age: 34
    }
];
persons.forEach(function (person) {
    console.log("Hello my name is " + person.name + " I'm " + person.age + " years of age.");
});
var getLength = function (word) {
    if (word.length % 2 == 0) {
        console.log('The world is nice and even!');
    }
    else if (word.length % 2 == 1) {
        console.log('The world is an odd place!');
    }
};
getLength('hhd');

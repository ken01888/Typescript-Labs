//creating a variable with the value of my name
let myName:string="Kenneth";
console.log(myName);

// creating a varible with the value of 50 representing the number of states in the U.S
const numberOfState:number = 50;
console.log(numberOfState)

//adding 4+5
let sum:number = 4+5
console.log(sum)

let sayHello = () =>{
    alert('Hello World')
}

let checkAge = (name:string,age:number)=>{
    if(age<21){
        console.log(`Sorry ${name}, you aren't old enough to view this page!`)
    }else{
        console.log(`Welcome ${name}!`)
    }
}
checkAge("Charles",21)
checkAge("Abby",27)
checkAge("James",18)
checkAge("John",17)


let favFruits:string[]=['Apples','Oranges','Bananas','Grapes','Kiwis','Strawberries']
 console.log(favFruits)

 favFruits.forEach(fruit => {
     console.log(fruit)
 });

 interface Animals{
        name:string;
        breed:string;
 }

 let cat: Animals={
     name: "Stark",
     breed:"Cat"
 }

 console.log(cat)

interface People{
    name:string;
    age:number;
}

let persons:People[]=[
{
    name:'Kenneth',
    age:33
},
{
    name:'Kentez',
    age:18
},
{
    name:'Dj',
    age:20
},
{
    name:'Kendra',
    age:31
},
{
    name:'Kennethia',
    age:34
}

]

persons.forEach(person=>{
    console.log(`Hello my name is ${person.name} I'm ${person.age} years of age.`)
})

let getLength  =(word:string):void=>  {
    if (word.length%2==0){
        console.log('The world is nice and even!')
    }else if (word.length%2==1){
        console.log('The world is an odd place!')
    }
}

getLength('hhd')

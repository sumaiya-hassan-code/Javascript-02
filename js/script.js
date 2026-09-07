// Multification table of 5
let namta = 5 

for (let i = 1; i <= 10; i++) {
    console.log(`${namta} x ${i} = ${namta * i}`);
}

// Exampal of array 

let teamMembers = [
    "A",
    "B",
    "C",
    "D",
];
console.log(teamMembers);
console.log(teamMembers.length);

console.log(teamMembers[0]);
console.log(teamMembers[1]);
console.log(teamMembers[2]);
console.log(teamMembers[3]);





let teams = {
    name:"sumaiya",
    age: 19,
    area:"Dhaka",
};
console.log(teams);
console.log(teams.age);
console.log(teams.name);
console.log(teams.area);

// Exampal of function 

function c() {
    let numOne=5
    let numTwo=15
    let result= numOne+numTwo
    console.log(result);
}
c()

function a(x,y) {
    console.log(x+y);
}
a(10,30)
a(50,17)

function b(name , age) {
    console.log(`My name is ${name} age is ${age}`); 
}

b("sumaiya", 19)

// Dark light button

let dark = document.getElementById("dark");
let light = document.getElementById("light");

dark.addEventListener("click",()=>{
    document.body.style.background = "black";
    document.body.style.color = "white";
})

light.addEventListener("click",()=> {
    document.body.style.background = "white";
    document.body.style.color = "Black";
})

// leap year button

let input = document.getElementById("input");
let button = document.getElementById("button");

input.addEventListener("keyup",()=>{
    button.addEventListener("click",()=>{
        if (input.value%400==0 || input.value/100!=0 && input.value%4==0) {
        alert("The year is Leap year")
        } else {
        alert("The year is not Leap year")
        }
    })
})

(year%400==0 || year/100!=0 && year%4==0)
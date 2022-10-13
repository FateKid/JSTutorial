/////////////////////// - [ personal info variables ]

let a_firstName = 'Charles';
let a_lastName = ' Knapp';

let interestRate = 0.3;

////////////////////////////////////////////////////

let fullName = a_firstName + a_lastName;
console.log(fullName);

////////////////////////////// - [ personal objects ]

//Defining the object person with 3 properties
let person = {
    firstName: 'Charles',
    lastName: 'Knapp',
    age: 23
};

//Dot notation
person.firstName = 'Charley';

//Bracket Notation
person['firstName'] = 'Charley';

/////////////////////////////////////// - [ arrays ]

let selectedColors = ['red','blue'];
selectedColors[2] = 'green';
console.log(selectedColors[0]); //selecting red

//Print the length
console.log(selectedColors.length);

//////////////////////////////////// - [ functions ]

//Performing a task
function greet() {
    console.log('Hello, ' + person.firstName)
}

greet();

//Calculating a value
function square(number) {
    return number * number;
}

let number = square(2);
console.log(number)
//or
console.log(square(2));

////////////////////////////////////////////////////
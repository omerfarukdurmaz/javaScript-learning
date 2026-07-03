// let name = "omerddmz";
// let age = 30;
// let isApproved = true;
// let firstName = "Omer";
// let lastName = "Faruk";
// let color = null;

// let person = {
//     name: 'Omer Faruk',
//     age: 23
// };
// console.log(person);
// person.name = 'Omer Faruk Durmaz';
// console.log(person);
// person['name'] = 'Emer Axa';
// console.log(person);

// let selectedColors =['red','blue'];
// selectedColors[2] = 2;
// console.log(selectedColors);

// function greet(name1, lastName1){
//     console.log('Hello ' + name1 + ' ' + lastName1);
// }
// greet('Omer', 'Faruk');
// greet('John', 'Doe');
// //calculate smth
// function square(number){
//     return number * number;
// }
// console.log(square(2));

// let x = 10;
// let y = 3;

// console.log(x + y);

//"===" operator checks for both value and type equality,
// 1===1 is true, 1==='1' is false.
//"==" operator checks for value equality only, allowing type differentiation.
//1==1 is true, 1=='1' is true also true==1 is true (true=1,false=0).


//If a customer has more than 100 points,
//  they are a 'gold' customer,
//  otherwise, they are a 'silver' customer.

let points = 14;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);

function getCustomerType(points){
    if (points > 100) return 'gold';
    else return 'silver';
}

let customer1 =1;
let customer2 =130;
console.log(getCustomerType(customer1));
console.log(getCustomerType(customer2));




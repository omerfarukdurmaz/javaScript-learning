// git add .
// git commit -m "smt"
// git push


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

// let points = 14;
// let type = points > 100 ? 'gold' : 'silver';

// console.log(type);

// function getCustomerType(points){
//     if (points > 100) return 'gold';
//     else return 'silver';
// }

// let customer1 =1;
// let customer2 =130;
// console.log(getCustomerType(customer1));
// console.log(getCustomerType(customer2));

//Logical Operators with booleand
// &&=AND , ||=OR , !=NOT (Same as JAVA)

//Unlike other languages in JavaScript we can use logical operators
//with non-booleans too.
//When we use ! operator with falsys result is true else its always false
//FALSY = 0,''(empty str), null, undefined, NaN, false
//TRUTHY = numbers, strings, empty lists...(anthing that is not Falsy).

//Bitwise operators, we use in bit calculations.
//Bitwise OR = | , bitleri OR lama islemi kisaca(1|0=1) (corg)
//Bitwise AND = & , bitleri AND leme islemi (1&0=0) (corg)

//Example usage for Bitwise operators 
//Read, Write, Exacute
//00000100
//00000010
//00000001

// const readPermission = 4;
// const writePermission = 2;
// const exePermission = 1;

// let myPermission = 0;

// myPermission = myPermission | readPermission | writePermission;

// let message = (myPermission & exePermission) ? 'yes' : 'no';
// console.log(message);


// let a = 'red';
// let b = 'blue';

// console.log(a);
// console.log(b);

// //Exercise: Swap the values in console.

// let c = b;
// b = a;
// a = c;

// console.log(a);
// console.log(b);


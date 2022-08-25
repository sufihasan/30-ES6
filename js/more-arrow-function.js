
const add = (a, b) => a + b;
const mul = (n1, n2) => n1 * n2;
const fullName = (firstName, lastName) => firstName + ' ' + lastName;

const myfriendFullName = fullName('Thamina', 'Akter');
// console.log(myfriendFullName);

// const myfriendFullName = add(10, 20);
// console.log(myfriendFullName);



//one paramiter arrow function

const squre = (num) => num * num;
// console.log(squre(10));

//one paramitar another style
const squreFind = num => num * num;
// console.log(squre(9));

//multiline arrow function 
const findMath = (a, b, c) => {

    const ractangle = a * b;
    const total = a + b + c;
    const finalTotal = ractangle + total;
    return finalTotal;

}

console.log(findMath(2, 3, 4));
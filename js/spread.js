const largest = Math.max(12, 3, 55, 10);
// console.log(largest);

const numbers = [12, 87, 78, 54];
// const maxFind = Math.min(numbers);
const maxFind = Math.min(...numbers);
// console.log(maxFind);



// const num1 = numbers;
// const num1 = [numbers]; //khali arra k dibe 
const num1 = [...numbers]; //array er value ke dibe

numbers.push(119);
num1.push(120);

// console.log(numbers);
// console.log(num1);


const mark = [66, 55, 88, 44, 77];
const [bangla, english] = mark;
console.log(bangla);
console.log(english);


function addtwoNumber(num1, num2) {
    // console.log(num1, num2);

    // if (num2 == undefined) {

    //     num2 = 0;
    // }

    num2 = num2 || 0;

    const sum = num1 + num2;
    return sum;
}


// const total = addtwoNumber(20, 30);

// console.log(total);

const total = addtwoNumber(40, 20);

console.log(total);
const bazar = {
    fish: 130,
    rice: 500,
    milk: 80,
    oil: 200

}

// const fish = bazar.fish;
// console.log(fish);

const { fish } = bazar;
// console.log(fish);


const { rice, milk, oil } = bazar;

// console.log(milk);
// console.log(oil);

const mark = [66, 55, 88, 44, 77];
const [bangla, english, math] = mark;
console.log(bangla);
console.log(english);
console.log(math);

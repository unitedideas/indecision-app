console.log('utils.js is running!!')

const square = (x) => x * x;

const add = (x, y) => x + y;

const subrtact = (a, b) => a - b;

// // or
// export default (a, b) => a - b;

export {
    square,
    add,
    subrtact as
    default
};
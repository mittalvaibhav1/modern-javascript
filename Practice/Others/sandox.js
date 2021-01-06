// Rest parameter
// Bundle up arguents inside a function into a single array parameter

const double = (...nums) => {
    const double = nums.map((num) => 2 * num);
    return double;
}

console.log(double(1,2,3,4,5,6,7,8,9,10));



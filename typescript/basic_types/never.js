function getArea(shape) {
    switch (shape) {
        case 'circle':
            return 3.14;
        case 'squara':
            return 4;
        default:
            var _exhaustive = shape;
            throw new Error("Unknown shape: ".concat(_exhaustive));
    }
}
console.log(getArea('be'));
// console.log(getArea('test'));

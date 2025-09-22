var counter = 0;
while (counter < 5) {
    // console.log(counter);
    counter++;
}
// let list = document.querySelector('#list');
// while (list.firstChild) {
// 	list.removeChild(list.firstChild);
// }
var i = 0;
do {
    // console.log(i);
    i++;
} while (i < 10);
var index = 9;
var count = 0;
do {
    index += 1;
    if (index % 2)
        continue;
    count += 1;
} while (index < 29);
console.log(count);

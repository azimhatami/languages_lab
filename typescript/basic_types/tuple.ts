let skill: [string, number];

skill = ['Programming', 5];

// console.log(skill);

let scors: [number, number, number, number?, string?];

scors = [17, 20, 19];

scors.push(19);
scors.push(18);
scors.push('Twenty');
scors.push(18);

console.log(scors);

let nums: readonly [number, number] = [17, 19];

// nums.push(18); // Error: Property 'push' does not exist on type 'readonly [number, number]'

console.log(nums);

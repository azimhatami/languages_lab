// Partial<T>

// type Point = {x: number, y: number};

// Same as ->  type Point = {x?: number, y?: number};
// type PartialPoint = Partial<Point>;

// let point1: PartialPoint = {};
// let point2: PartialPoint = {x: 5, y: 7};


// Required<T>
// type Point = {x?: number, y?: number};

// Same as ->  type Point = {x: number, y: number};
// type RequiredPoint = Required<Point>;

// let point1: RequiredPoint = {}; // Error
// let point2: RequiredPoint = {x: 5}; // Error
// let point3: RequiredPoint = {x: 5, y: 7};


// Readonly<T>
// type Point = {x: number, y: number};

// Same as {readonly x: number, readonly y: number}
// type ReadonlyPoint = Readonly<Point>;
// let point1: ReadonlyPoint = {x: 5, y: 6};
// point1.x = 44;
// point1.y = 23;


// Record<keys, type>
// type Point = Record<'x' | 'y', number>;

// Same as {x: number, y: number}
// let point: Point = {x: 5, y: 3}


// Omit<type, keys>
// type Point3D = {
// 	x: number,
// 	y: number,
// 	z: number,
// };
 
// type Point2D = Omit<Point3D, 'x'>;

// Same as {y: number, z: number}
// let point: Point2D = {y: 5, z: 5};


////////////////// Pick<type, keys> /////////////////////
// type Point3D = {
// 	x: number,
// 	y: number,
// 	z: number,
// };

// Same as {x: number, z: number}
// type Point2D = Pick<Point3D, 'x' | 'z'>;

// let point1: Point3D = {x: 2, y: 3, z: 7};
// let point2: Point2D = {x: 2, z: 7};

// let point3: Point2D = {x: 2, y: 3, z: 7}; // Error
// let point4: Point2D = {x: 2, y: 3}; // Error


///////////////// Exclude<Union Type, ExcludedMembers> ///////////////////
// type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'
// type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>; // 'c'
// type T2 = Exclude<string | number | (() => void), Function>; // string | number

// type Shape = 
// 	| {kind: 'circle'; radius: number}
// 	| {kind: 'square'; radius: number}
// 	| {kind: 'triangle'; radius: number};
 
// type T3 = Exclude<Shape, {kind: 'circle'}>;


/////////////// Extract<Type, Union> ///////////////
// type T0 = Extract<'a' | 'b' | 'c', 'a' | 'c'>; // 'a' | 'c'
// 
// type T1 = Extract<string | number | (() => void), Function>; // () => void
// 
// type Shape = 
// 	| {kind: 'circle'; radius: number}
// 	| {kind: 'square'; x: number}
// 	| {kind: 'triangle'; x: number; y: number};
// 
// type T3 = Extract<Shape, {kind: 'circle'}>;


////////// NonNullable<Type> ////////////
// type T0 = NonNullable<string | number | undefined>; // string | number
// type isNull = null
// type T1 = NonNullabe<string[] | isNull> // string[]


/////////// Parameters<Type> ////////////
// function getInfo(name: string, age: number) {
// 	return `My name is ${name} and I have ${age} years old`;
// }

// type T1 = Parameters<typeof getInfo>; // [name: string, age: number]

////////// ReturnType<type> ///////////
// function printSomething() {
// 	console.log('I love TypeScript');
// }
// type T0 = ReturnType<typeof printSomething>; // void
 
// function getInfo(name: string, age: number) {
// 	return `My name is ${name} and I have ${age} years old`;
// }
// type T1 = ReturnType<typeof getInfo>; // string


////////// ConstructorParameters<Type> //////////
// class Person {
// 	name;
// 	age;
// 	constructor(name: string, age: number) {
// 		this.name = name;
// 		this.age = age;
// 	}
// }
 
// type T0 = ConstructorParameters<typeof Person>; // [name: string, age: number]
// type T1 = ConstructorParameters<typeof Error>; // [message?: string | undefined]


/// Intrinsic String Manipulation Types
type text = 'my name is Azim';

type Upper = Uppercase<text>;
type Lower = Lowercase<text>;
type Capital = Capitalize<text>;
type unCapital = Uncapitalize<text>;







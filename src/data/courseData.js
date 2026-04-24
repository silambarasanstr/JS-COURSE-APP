export const categories = [
  { name: "Arrays", icon: "📦", description: [
      "An array is a data structure.",
      "In JavaScript, an array is a special type of object used to store multiple values in a single variable. Arrays help manage and manipulate groups of data efficiently.",
      "Arrays in JavaScript are dynamic in size (they are not fixed).",
      "Elements in an array are accessed using index numbers (starting from 0).",
    ],
  },
  { name: "Objects", icon: "🔑", description:
      "An object is a collection of properties, where each property consists of a key-value pair. Objects are used to store and organize data, and they can hold various data types such as strings, numbers, arrays, and even other objects.",
  },
  { name: "Strings", icon: "✂️", description:
      "Explore string manipulation methods for searching, splitting, and transforming text.",
  },
  { name: "Operators", icon: "⚡", description:
      "Understand JavaScript operators including arithmetic, comparison, logical, and modern syntax.",
  },
  { name: "Loops", icon: "🔄", description:
      "Learn iteration patterns for traversing data structures and controlling program flow.",
  },
  { name: "Functions", icon: "⚙️", description:
      "A JavaScript function is a block of reusable code designed to perform a specific task or calculate a value. Functions can take inputs (called parameters), execute a set of instructions, and return a result.",
  },
];

export const methods = [
  // Arrays
  {
    category: "Arrays",
    title: "Array.map()",
    syntax: "array.map((item, index, array) => { ... })",
    parameters: ["item – current element", "index – current element index", "array – original array"],
    example: `const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]`,
  },
  {
    category: "Arrays",
    title: "Array.filter()",
    syntax: "array.filter((item, index, array) => { ... })",
    parameters: ["item – current element", "index – current index", "array – original array"],
    example: `const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]`,
  },
  {
    category: "Arrays",
    title: "Array.reduce()",
    syntax: "array.reduce((accumulator, item) => { ... }, initialValue)",
    parameters: ["accumulator – accumulated value", "item – current element"],
    example: `const numbers = [1,2,3,4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10`,
  },
  {
    category: "Arrays",
    title: "Array.forEach()",
    syntax: "array.forEach((item, index) => { ... })",
    parameters: ["item – current element", "index – current index"],
    example: `const nums = [1,2,3];
nums.forEach(num => console.log(num)); // 1 2 3`,
  },

  // Objects
  {
    category: "Objects",
    title: "Object.keys()",
    syntax: "Object.keys(object)",
    parameters: ["object"],
    example: `const person = { name: "John", age: 30 };
console.log(Object.keys(person)); // ["name", "age"]`,
  },
  {
    category: "Objects",
    title: "Object.values()",
    syntax: "Object.values(object)",
    parameters: ["object"],
    example: `const person = { name: "John", age: 30 };
console.log(Object.values(person)); // ["John", 30]`,
  },
  {
    category: "Objects",
    title: "Object.entries()",
    syntax: "Object.entries(object)",
    parameters: ["object"],
    example: `const person = { name: "John", age: 30 };
console.log(Object.entries(person)); // [["name","John"],["age",30]]`,
  },

  // Strings
  {
    category: "Strings",
    title: "String.split()",
    syntax: "string.split(separator)",
    parameters: ["separator – delimiter string or regex"],
    example: `const str = "a,b,c";
console.log(str.split(",")); // ["a", "b", "c"]`,
  },
  {
    category: "Strings",
    title: "String.slice()",
    syntax: "string.slice(start, end)",
    parameters: ["start – start index", "end – end index (optional)"],
    example: `const str = "Hello";
console.log(str.slice(1,4)); // "ell"`,
  },
  {
    category: "Strings",
    title: "String.toUpperCase()",
    syntax: "string.toUpperCase()",
    example: `console.log("hello".toUpperCase()); // "HELLO"`,
  },
  {
    category: "Strings",
    title: "String.toLowerCase()",
    syntax: "string.toLowerCase()",
    example: `console.log("HELLO".toLowerCase()); // "hello"`,
  },

  // Operators
  {
    category: "Operators",
    title: "Arithmetic Operators",
    syntax: "+, -, *, /, %, **",
    example: `console.log(2 + 3); // 5`,
  },
  {
    category: "Operators",
    title: "Comparison Operators",
    syntax: "==, ===, !=, !==, >, <, >=, <=",
    example: `console.log(2 === 2); // true`,
  },
  {
    category: "Operators",
    title: "Logical Operators",
    syntax: "&&, ||, !",
    example: `console.log(true && false); // false`,
  },

  // Loops
  {
    category: "Loops",
    title: "for Loop",
    syntax: "for(initial; condition; increment) { ... }",
    example: `for(let i=0;i<3;i++){ console.log(i); } // 0 1 2`,
  },
  {
    category: "Loops",
    title: "while Loop",
    syntax: "while(condition) { ... }",
    example: `let i=0; while(i<3){ console.log(i); i++; } // 0 1 2`,
  },
  {
    category: "Loops",
    title: "for...of Loop",
    syntax: "for(const item of iterable) { ... }",
    example: `const arr=[1,2,3]; for(const n of arr) console.log(n); // 1 2 3`,
  },

  // Functions
  {
    category: "Functions",
    title: "Function Declaration",
    syntax: "function funcName(params) { ... }",
    example: `function sum(a,b){ return a+b; } console.log(sum(2,3)); // 5`,
  },
  {
    category: "Functions",
    title: "Arrow Function",
    syntax: "const funcName = (params) => { ... }",
    example: `const sum = (a,b) => a+b; console.log(sum(2,3)); // 5`,
  },
  {
    category: "Functions",
    title: "IIFE",
    syntax: "(function(){ ... })()",
    example: `(function(){ console.log("Hello"); })(); // Hello`,
  },
];
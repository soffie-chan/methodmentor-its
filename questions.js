export const questions = [

  // -------------------------
  // LEVEL –2 (very easy)
  // -------------------------
  {
    question_id: 1,
    type: "coding",
    difficulty: -2,
    prompt: "Fill in the blank to double each number in the list.",
    starterCode: `const list = [1,3,4,7]
const newList = _____.map(x => x * 2)`,
    answer: "list",
    explanation: "You call .map() on the array itself, so the blank is simply 'list'."
  },

  {
    question_id: 2,
    type: "coding",
    difficulty: -2,
    prompt: "Use .map() to add 1 to each number.",
    starterCode: `const list = [1,3,4,7]
const incremented = _____.map(x => x + 1)`,
    answer: "list",
    explanation: "The .map() method must be called on the original array."
  },

  {
    question_id: 3,
    type: "coding",
    difficulty: -2,
    prompt: "Convert each number to a string.",
    starterCode: `const list = [1,3,4,7]
const result = _____.map(x => x.toString())`,
    answer: "list",
    explanation: "The blank is the array being transformed."
  },

  {
    question_id: 4,
    type: "coding",
    difficulty: -2,
    prompt: "Fill in the blank to triple each number.",
    starterCode: `const list = [1,3,4,7]
const tripled = _____.map(x => x * 3)`,
    answer: "list",
    explanation: "The .map() call must be applied to the array."
  },

  {
    question_id: 5,
    type: "coding",
    difficulty: -2,
    prompt: "Use .map() to negate each number.",
    starterCode: `const list = [1,3,4,7]
const neg = _____.map(x => -x)`,
    answer: "list",
    explanation: "The blank is the array name."
  },

  // -------------------------
  // LEVEL –1 (easy)
  // -------------------------
  {
    question_id: 6,
    type: "coding",
    difficulty: -1,
    prompt: "Fill in the missing parameter type.",
    starterCode: `const list = [1,3,4,7]
const doubled = list.map((x: ____): number => x * 2)`,
    answer: "number",
    explanation: "The callback parameter x is a number."
  },

  {
    question_id: 7,
    type: "coding",
    difficulty: -1,
    prompt: "Fill in the array name and type.",
    starterCode: `const list = [1,3,4,7]
const squared = _____.map((n: ____): number => n * n)`,
    answer: "list,number",
    explanation: "You call .map() on list, and n is a number."
  },

  {
    question_id: 8,
    type: "coding",
    difficulty: -1,
    prompt: "Convert each number to a boolean indicating if it's even.",
    starterCode: `const list = [1,3,4,7]
const flags = _____.map((n: ____): boolean => n % 2 === 0)`,
    answer: "list,number",
    explanation: "The callback receives a number and returns a boolean."
  },

  {
    question_id: 9,
    type: "coding",
    difficulty: -1,
    prompt: "Fill in the missing array name.",
    starterCode: `const list = [1,3,4,7]
const halved = _____.map((x: number): number => x / 2)`,
    answer: "list",
    explanation: "The .map() call must be applied to the array."
  },

  {
    question_id: 10,
    type: "coding",
    difficulty: -1,
    prompt: "Fill in the missing type for the callback parameter.",
    starterCode: `const list = [1,3,4,7]
const plusTen = list.map((value: ____): number => value + 10)`,
    answer: "number",
    explanation: "The parameter is a number."
  },

  // -------------------------
  // LEVEL 0 (medium)
  // -------------------------
  {
    question_id: 11,
    type: "coding",
    difficulty: 0,
    prompt: "Fill in both blanks to double each number.",
    starterCode: `const list = [1,3,4,7]
const newList = _____.map((x: ____): number => x * 2)`,
    answer: "list,number",
    explanation: "You call .map() on list, and x is typed as number."
  },

  {
    question_id: 12,
    type: "coding",
    difficulty: 0,
    prompt: "Use .map() to convert numbers to objects.",
    starterCode: `const list = [1,3,4,7]
const objects = _____.map((n: ____): { value: number } => ({ value: n }))`,
    answer: "list,number",
    explanation: "The callback receives a number and returns an object."
  },

  {
    question_id: 13,
    type: "coding",
    difficulty: 0,
    prompt: "Fill in the blanks to multiply each number by its index.",
    starterCode: `const list = [1,3,4,7]
const result = _____.map((value: ____, index: ____): number => value * index)`,
    answer: "list,number,number",
    explanation: "Both parameters are numbers."
  },

  {
    question_id: 14,
    type: "coding",
    difficulty: 0,
    prompt: "Fill in the missing array name and return type.",
    starterCode: `const list = [1,3,4,7]
const strings = _____.map((x: number): ____ => x.toString())`,
    answer: "list,string",
    explanation: "The callback returns a string."
  },

  {
    question_id: 15,
    type: "coding",
    difficulty: 0,
    prompt: "Fill in the missing callback parameter type.",
    starterCode: `const list = [1,3,4,7]
const negatives = list.map((n: ____): number => -n)`,
    answer: "number",
    explanation: "The parameter n is a number."
  },

  // -------------------------
  // LEVEL +1 (hard)
  // -------------------------
  {
    question_id: 16,
    type: "coding",
    difficulty: 1,
    prompt: "Extract the 'name' property from each object.",
    starterCode: `const users = [{name:"A"},{name:"B"}]
const names = _____.map((item: ____): string => item.name)`,
    answer: "users,{name:string}",
    explanation: "Each item is an object with a name property."
  },

  {
    question_id: 17,
    type: "coding",
    difficulty: 1,
    prompt: "Fill in the blanks to map numbers to booleans.",
    starterCode: `const list = [1,3,4,7]
const flags = _____.map((n: ____): boolean => n > 3)`,
    answer: "list,number",
    explanation: "The callback receives a number and returns a boolean."
  },

  {
    question_id: 18,
    type: "coding",
    difficulty: 1,
    prompt: "Fill in the blanks to return objects with doubled values.",
    starterCode: `const list = [1,3,4,7]
const doubled = _____.map((x: ____): { doubled: number } => ({ doubled: x * 2 }))`,
    answer: "list,number",
    explanation: "The callback receives a number and returns an object."
  },

  {
    question_id: 19,
    type: "coding",
    difficulty: 1,
    prompt: "Fill in the missing array name and type.",
    starterCode: `const list = [1,3,4,7]
const indexed = _____.map((value: ____, index: number): string => value + ":" + index)`,
    answer: "list,number",
    explanation: "The first parameter is a number."
  },

  {
    question_id: 20,
    type: "coding",
    difficulty: 1,
    prompt: "Fill in the missing return type.",
    starterCode: `const list = [1,3,4,7]
const bools = list.map((n: number): ____ => n % 2 === 1)`,
    answer: "boolean",
    explanation: "The callback returns a boolean."
  },

  // -------------------------
  // LEVEL +2 (very hard)
  // -------------------------
  {
    question_id: 21,
    type: "coding",
    difficulty: 2,
    prompt: "Map objects to a computed property.",
    starterCode: `const users = [{name:"A",age:20},{name:"B",age:30}]
const ages = _____.map((u: ____): number => u.age * 2)`,
    answer: "users,{name:string,age:number}",
    explanation: "Each user object has name and age."
  },

  {
    question_id: 22,
    type: "coding",
    difficulty: 2,
    prompt: "Fill in all blanks for a typed callback with index.",
    starterCode: `const list = [1,3,4,7]
const result = _____.map((value: ____, index: ____): number => value + index * 10)`,
    answer: "list,number,number",
    explanation: "Both parameters are numbers."
  },

  {
    question_id: 23,
    type: "coding",
    difficulty: 2,
    prompt: "Map numbers to objects with typed keys.",
    starterCode: `const list = [1,3,4,7]
const objs = _____.map((n: ____): { original: number, doubled: number } => ({ original: n, doubled: n * 2 }))`,
    answer: "list,number",
    explanation: "The callback receives a number and returns a typed object."
  },

  {
    question_id: 24,
    type: "coding",
    difficulty: 2,
    prompt: "Fill in the missing array name and return type.",
    starterCode: `const list = [1,3,4,7]
const strings = _____.map((x: number): ____ => \`Value: \${x}\`)`,
    answer: "list,string",
    explanation: "The callback returns a string."
  },

  {
    question_id: 25,
    type: "coding",
    difficulty: 2,
    prompt: "Fill in the missing type for a complex callback.",
    starterCode: `const list = [1,3,4,7]
const complex = list.map((n: ____): { n: number, isBig: boolean } => ({ n, isBig: n > 5 }))`,
    answer: "number",
    explanation: "The callback parameter n is a number."
  }

];

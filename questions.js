export const questions = [

  // -------------------------
  // LEVEL -2
  // -------------------------
  {
    question_id: 401,
    type: "syntax",
    difficulty: -2,
    discrimination: 0.8,
    guess: 0.35,
    prompt: "Fill in the blank to uppercase each string.",
    context: `
const fruits = ["apple", "pear", "kiwi"]
    `,
    hint: ".map traverses through an existing list. Where are we getting our data from?",
maxAttempts: 3,

    template: `
const uppercased =
  ___.map((f: string): string => f.toUpperCase())
    `,

    answer: "fruits",
    explanation: "You must call .map() on the array itself."
  },

  {
    question_id: 402,
    type: "syntax",
    difficulty: -2,

    discrimination: 0.8,
    guess: 0.35,

    prompt: "Fill in the blank to square each number.",

    context: `
const nums = [2, 4, 6]
    `,

    template: `
const squared =
  ___.map((n: number): number => n * n)
    `,
        hint: ".map traverses through an existing list. Where are we getting our data from?",
maxAttempts: 3,


    answer: "nums",
    explanation: "The array name goes before .map()."
  },

  {
    question_id: 403,
    type: "syntax",
    difficulty: -2,

    discrimination: 0.8,
    guess: 0.35,

    prompt: "Fill in the blank to get the length of each string.",

        hint: ".map traverses through an existing list. Where are we getting our data from?",
maxAttempts: 3,

    context: `
const words = ["hi", "hello", "hey"]
    `,

    template: `
const lengths =
  ___.map((w: string): number => w.length)
    `,

    answer: "words",
    explanation: "You must call .map() on the array."
  },
{
  question_id: 404,
  type: "syntax",
  difficulty: -2,
      discrimination: 0.8,
    guess: 0.35,

  prompt: "Fill in the blank to add 10 to each number.",
  context: `
const scores = [5, 12, 20]
  `,
      hint: ".map traverses through an existing list. Where are we getting our data from?",
maxAttempts: 3,

  template: `
const boosted =
  ___.map((s: number): number => s + 10)
  `,
  answer: "scores",
  explanation: "The array name is required before .map()."
},
{
  question_id: 405,
  type: "syntax",
  difficulty: -2,
      discrimination: 0.8,
    guess: 0.35,

  prompt: "Fill in the blank to reverse each string.",
  context: `
const names = ["sam", "lee", "kai"]
  `,
      hint: ".map traverses through an existing list. Where are we getting our data from?",
maxAttempts: 3,

  template: `
const reversed =
  ___.map((n: string): string => n.split("").reverse().join(""))
  `,
  answer: "names",
  explanation: "You must call .map() on the array."
},
{
  question_id: 406,
  type: "syntax",
  difficulty: -1,
      discrimination: 1.0,
    guess: 0.30,

  prompt: "Fill in the missing type for the iterator variable.",
  context: `
const nums = [1, 2, 3]
  `,
      hint: "What will be the type of the items in our outcome list?",
maxAttempts: 3,

  template: `
const doubled =
  nums.map((x: ___): number => x * 2)
  `,
  answer: "number",
  explanation: "The type annotation for x is required."
},
{
  question_id: 407,
  type: "syntax",
  difficulty: -1,
      discrimination: 1.0,
    guess: 0.30,
          hint: "What will be the type of the items in our outcome list?",
maxAttempts: 3,


  prompt: "Fill in the missing type for the iterator variable.",
  context: `
const pets = ["cat", "dog", "rat"]
  `,
  template: `
const excited =
  pets.map((p: ___): string => p + "!")
  `,
  answer: "string",
  explanation: "The iterator variable must have a type."
},
{
  question_id: 408,
  type: "syntax",
  difficulty: -1,
  discrimination: 1.0,
        hint: "What will be the type of the items in our outcome list?",
maxAttempts: 3,

    guess: 0.30,
  prompt: "Fill in the missing type for the iterator variable.",
  context: `
const temps = [70, 72, 68]
  `,
  template: `
const celsius =
  temps.map((t: ___): number => (t - 32) * 5/9)
  `,
  answer: "number",
  explanation: "The type annotation is missing."
},
{
  question_id: 409,
  type: "syntax",
  difficulty: -1,
  discrimination: 1.0,
        hint: "What will be the type of the items in our outcome list?",
maxAttempts: 3,

    guess: 0.30,
  prompt: "Fill in the missing type for the iterator variable.",
  context: `
const foods = ["pie", "cake", "taco"]
  `,
  template: `
const lengths =
  foods.map((f: ___): number => f.length)
  `,
  answer: "string",
  explanation: "The iterator variable must have a type."
},
{
  question_id: 410,
  type: "syntax",
  difficulty: -1,
  discrimination: 1.0,
        hint: "What will be the type of the items in our outcome list?",
maxAttempts: 3,

    guess: 0.30,
  prompt: "Fill in the missing type for the iterator variable.",
  context: `
const nums = [10, 20, 30]
  `,
  template: `
const halved =
  nums.map((n: ___): number => n / 2)
  `,
  answer: "number",
  explanation: "The type annotation goes inside the parentheses."
},
{
  question_id: 411,
  type: "syntax",
  difficulty: 1,
        hint: "What does the prompt want us to do with each item?",
maxAttempts: 3,

  discrimination: 1.5,
    guess: 0.20,
  prompt: "Fill in the expression to uppercase each string.",
  context: `
const animals = ["cow", "pig", "hen"]
  `,
  template: `
const loud =
  animals.map((a: string): string => ___)
  `,
  answer: "a.toUpperCase()",
  explanation: "The transformation goes after the arrow."
},
{
  question_id: 412,
  type: "syntax",
  difficulty: 1,
  discrimination: 1.5,
          hint: "What does the prompt want us to do with each item?",
maxAttempts: 3,

    guess: 0.20,
  prompt: "Fill in the expression to get the first letter.",
  context: `
const names = ["Lia", "Tom", "Zoe"]
  `,
  template: `
const initials =
  names.map((n: string): string => ___)
  `,
  answer: "n[0]",
  explanation: "The right side of the arrow is missing."
},
{
  question_id: 413,
  type: "syntax",
  difficulty: 1,
  discrimination: 1.5,
    guess: 0.20,
  prompt: "Fill in the expression to cube each number.",
  context: `
const nums = [2, 3, 4]
  `,
          hint: "What does the prompt want us to do with each item?",
maxAttempts: 3,

  template: `
const cubed =
  nums.map((x: number): number => ___)
  `,
  answer: "x * x * x",
  explanation: "The transformation is missing."
},
{
  question_id: 414,
  type: "syntax",
  difficulty: 1,
  discrimination: 1.5,
    guess: 0.20,
            hint: "What does the prompt want us to do with each item?",
maxAttempts: 3,

  prompt: "Fill in the expression to append '?' to each string.",
  context: `
const words = ["why", "how", "what"]
  `,
  template: `
const questioned =
  words.map((w: string): string => ___)
  `,
  answer: "w + '?'",
  explanation: "The transformation goes after the arrow."
},
{
  question_id: 415,
  type: "syntax",
  difficulty: 1,
  discrimination: 1.5,
          hint: "What does the prompt want us to do with each item?",
maxAttempts: 3,

    guess: 0.20,
  prompt: "Fill in the expression to convert each number to a string.",
  context: `
const nums = [1, 2, 3]
  `,
  template: `
const strings =
  nums.map((n: number): string => ___)
  `,
          hint: "What does the prompt want us to do with each item?",
maxAttempts: 3,

  answer: "String(n)",
  explanation: "The right-hand side of the arrow is missing."
},
{
  question_id: 416,
  type: "syntax",
  difficulty: 2,
  discrimination: 1.8,
    guess: 0.15,
  prompt: "Fill in the transformation to return the last letter of each string.",
          hint: "What does the prompt want us to do with each item?",
maxAttempts: 3,

  context: `
const fruits = ["apple", "pear", "plum"]
  `,
  template: `
const lastLetters =
  fruits.map((f: string): string => ___)
  `,
  answer: "f[f.length - 1]",
  explanation: "You must compute the last character."
},
{
  question_id: 417,
  type: "syntax",
  difficulty: 2,
  discrimination: 1.8,
    guess: 0.15,

  prompt: "Fill in the transformation to return the square root of each number.",
  context: `
const nums = [9, 16, 25]
  `,
          hint: "What does the prompt want us to do with each item?",
maxAttempts: 3,

  template: `
const roots =
  nums.map((n: number): number => ___)
  `,
  answer: "Math.sqrt(n)",
  explanation: "A more complex transformation is required."
},
{
  question_id: 418,
  type: "syntax",
  difficulty: 2,
    discrimination: 1.8,
            hint: "What does the prompt want us to do with each item?",
maxAttempts: 3,

    guess: 0.15,

  prompt: "Fill in the transformation to reverse each string.",
  context: `
const names = ["sam", "lee", "kai"]
  `,
  template: `
const reversed =
  names.map((s: string): string => ___)
  `,
  answer: "s.split('').reverse().join('')",
  explanation: "This requires multiple string operations."
},
{
  question_id: 419,
  type: "syntax",
  difficulty: 2,
    discrimination: 1.8,
            hint: "What does the prompt want us to do with each item?",
maxAttempts: 3,

    guess: 0.15,

  prompt: "Fill in the transformation to return the number of vowels in each string.",
  context: `
const words = ["apple", "sky", "orange"]
  `,
  template: `
const vowelCounts =
  words.map((w: string): number => ___)
  `,
  answer: "w.match(/[aeiou]/gi)?.length || 0",
  explanation: "This uses regex and optional chaining."
},
{
  question_id: 420,
  type: "syntax",
  difficulty: 2,
    discrimination: 1.8,
            hint: "What does the prompt want us to do with each item?",
maxAttempts: 3,

    guess: 0.15,

  prompt: "Fill in the transformation to return the number doubled and then minus 3.",
  context: `
const nums = [5, 10, 15]
  `,
  template: `
const transformed =
  nums.map((n: number): number => ___)
  `,
          hint: "What does the prompt want us to do with each item?",
maxAttempts: 3,

  answer: "(n * 2) - 3",
  explanation: "A multi‑step numeric transformation."
}

];


export const questions1 = [
  {
  question_id: 421,
  type: "coding",
  difficulty: 1,
  discrimination: 1.2,
  guess: 0.20,
  maxAttempts: 3,

  prompt: "Write code that multiplies every number in the list by two.",
  context: `
const nums = [2, 4, 6, 8]
  `,

  answer: `
const doubled = nums.map(n => n * 2)
  `.trim(),

  explanation: "Using .map lets you apply the same transformation to each number cleanly."
},
{
  question_id: 422,
  type: "coding",
  difficulty: 1,
  discrimination: 1.1,
  guess: 0.20,
  maxAttempts: 3,

  prompt: "Return a new list where each string is converted to uppercase.",
  context: `
const words = ["apple", "banana", "kiwi"]
  `,

  answer: `
const upper = words.map(w => w.toUpperCase())
  `.trim(),

  explanation: "Strings have a built‑in .toUpperCase() method, and .map applies it to each item."
},
{
  question_id: 423,
  type: "coding",
  difficulty: 2,
  discrimination: 1.6,
  guess: 0.18,
  maxAttempts: 3,

  prompt: "Write code that filters out numbers less than 10.",
  context: `
const values = [3, 12, 7, 25, 10]
  `,

  answer: `
const filtered = values.filter(v => v >= 10)
  `.trim(),

  explanation: "The .filter method keeps only items that satisfy the given condition."
},

{
  question_id: 424,
  type: "coding",
  difficulty: 2,
  discrimination: 1.7,
  guess: 0.15,
  maxAttempts: 3,

  prompt: "Return a list of the lengths of each string. Store it in a variable called lengths.",
  context: `
const pets = ["cat", "parrot", "hamster"]
  `,

  answer: `
const lengths = pets.map(p => p.length)
  `.trim(),

  explanation: "Each string has a .length property, and .map collects those values into a new list called "
},

{
  question_id: 426,
  type: "coding",
  difficulty: 1,
  discrimination: 1.2,
  guess: 0.20,
  maxAttempts: 3,

  prompt: "Create a new list called doubled that contains each number multiplied by 2.",
  context: `
const nums = [3, 7, 11]
  `,

  answer: `
const doubled = nums.map(n => n * 2)
  `.trim(),

  explanation: "Using .map applies the same transformation to each number and returns a new list."
},
{
  question_id: 427,
  type: "coding",
  difficulty: 1,
  discrimination: 1.1,
  guess: 0.20,
  maxAttempts: 3,

  prompt: "Make a new list called upperWords where each string is uppercase.",
  context: `
const words = ["sun", "cloud", "rain"]
  `,

  answer: `
const upperWords = words.map(w => w.toUpperCase())
  `.trim(),

  explanation: "Strings have a .toUpperCase() method, and .map applies it to each element."
},
{
  question_id: 428,
  type: "coding",
  difficulty: 1,
  discrimination: 1.3,
  guess: 0.20,
  maxAttempts: 3,

  prompt: "Create a new list called lengths that stores the length of each string.",
  context: `
const pets = ["dog", "turtle", "fish"]
  `,

  answer: `
const lengths = pets.map(p => p.length)
  `.trim(),

  explanation: "Each string has a .length property, and .map collects those values."
},
{
  question_id: 429,
  type: "coding",
  difficulty: 2,
  discrimination: 1.6,
  guess: 0.18,
  maxAttempts: 3,

  prompt: "Make a new list called bigNumbers that contains only numbers greater than 50.",
  context: `
const values = [12, 99, 51, 3, 77]
  `,

  answer: `
const bigNumbers = values.filter(v => v > 50)
  `.trim(),

  explanation: "The .filter method keeps only the items that satisfy the condition."
},
{
  question_id: 430,
  type: "coding",
  difficulty: 2,
  discrimination: 1.7,
  guess: 0.15,
  maxAttempts: 3,

  prompt: "Create a new list called initials that stores the first letter of each name.",
  context: `
const names = ["Sophie", "Liam", "Ava", "Noah"]
  `,

  answer: `
const initials = names.map(n => n[0])
  `.trim(),

  explanation: "Indexing with [0] extracts the first character of each string."
}



]


export function getQuestionSet(mode, mastery) {

  // MAP LESSON
  if (mode === "map") {

    if (mastery < 85) {
      return questions;
    }

    return questions1;
  }

  // FILTER LESSON
  if (mode === "filter") {

    if (mastery < 85) {
      return questions2;
    }

    return questions3;
  }

  return [];
}
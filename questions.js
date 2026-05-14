const missing = token => code => !code.includes(token);
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
  feedbackChecks: [
  {
    test: missing("const"),
    message: "You're missing 'const'!"
  },

  {
    test: missing(".map"),
    message: "Remember to use .map()!"
  },
  {
    test: missing("words"),
    message: "Remember to use the initial list!"
  },
  {
    test: missing("=>"),
    message: "Hey... where'd that arrow go?"
  },{
    test: missing("toUpperCase()"),
    message: "But we need these in uppercase!"
  },
  
],

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
  feedbackChecks: [
  {
    test: missing("const"),
    message: "You're missing 'const'!"
  },

  {
    test: missing(".map"),
    message: "Remember to use .map()!"
  },
  {
    test: missing("values"),
    message: "Remember to use the initial list!"
  },
  {
    test: missing("=>"),
    message: "Hey... where'd that arrow go?"
  },{
    test: missing("<"),
    message: "But we need the lower numbers!"
  },
  
],

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
  feedbackChecks: [
  {
    test: missing("const"),
    message: "You're missing 'const'!"
  },

  {
    test: missing(".map"),
    message: "Remember to use .map()!"
  },
  {
    test: missing("pets"),
    message: "Remember to use the initial list!"
  },
  {
    test: missing("=>"),
    message: "Hey... where'd that arrow go?"
  },{
    test: missing("length"),
    message: "How can I find the length of the words?"
  },
  
],

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
  feedbackChecks: [
  {
    test: missing("const"),
    message: "You're missing 'const'!"
  },

  {
    test: missing(".map"),
    message: "Remember to use .map()!"
  },
  {
    test: missing("words"),
    message: "Remember to use the initial list!"
  },
  {
    test: missing("=>"),
    message: "Hey... where'd that arrow go?"
  },{
    test: missing("toUpperCase()"),
    message: "But we need these in uppercase!"
  },
  
],

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
  feedbackChecks: [
  {
    test: missing("const"),
    message: "You're missing 'const'!"
  },

  {
    test: missing(".map"),
    message: "Remember to use .map()!"
  },
  {
    test: missing("pets"),
    message: "Remember to use the initial list!"
  },
  {
    test: missing("=>"),
    message: "Hey... where'd that arrow go?"
  },{
    test: missing("length"),
    message: "How can I find the length?"
  },
  
],

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
  feedbackChecks: [
  {
    test: missing("const"),
    message: "You're missing 'const'!"
  },

  {
    test: missing(".map"),
    message: "Remember to use .map()!"
  },
  {
    test: missing("values"),
    message: "Remember to use the initial list!"
  },
  {
    test: missing("=>"),
    message: "Hey... where'd that arrow go?"
  },{
    test: missing(">"),
    message: "But we need the greater numbers!"
  },
  
],

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
  feedbackChecks: [
  {
    test: missing("const"),
    message: "You're missing 'const'!"
  },

  {
    test: missing(".map"),
    message: "Remember to use .map()!"
  },
  {
    test: missing("names"),
    message: "Remember to use the initial list!"
  },
  {
    test: missing("=>"),
    message: "Hey... where'd that arrow go?"
  },{
    test: missing("n[0]"),
    message: "How do I find the first index again...?"
  },
  
],

  explanation: "Indexing with [0] extracts the first character of each string."
}
]

export const questions2 = [
{
  question_id: 436,
  type: "syntax",
  difficulty: 1,
  discrimination: 1.2,
  guess: 0.20,
  maxAttempts: 3,

  prompt: "Filter numbers greater than 10.",
  context: `
const nums = [3, 12, 7, 25]
  `,
  template: `
const result = nums.filter(n => ___)
  `,
  answer: "n > 10",
  hint: "What does the prompt need us to filter?",
  explanation: "Filtering keeps only items that satisfy the condition."
},
{
  question_id: 437,
  type: "syntax",
  difficulty: 1,
  discrimination: 1.1,
  guess: 0.20,
  maxAttempts: 3,

  prompt: "Keep only strings with length 3.",
  context: `
const words = ["cat", "bird", "sun"]
  `,
  template: `
const result = words.filter(w => w.length ___ 3)
  `,
  answer: "=== 3",
    hint: "What does the prompt need us to filter?",

  explanation: "Use strict equality to match the exact length."
},
{
  question_id: 438,
  type: "syntax",
  difficulty: 1,
  discrimination: 1.3,
  guess: 0.20,
  maxAttempts: 3,

  prompt: "Filter even numbers.",
  context: `
const nums = [2, 5, 8, 11]
  `,
  template: `
const evens = nums.filter(n => n % 2 ___ 0)
  `,
  answer: "===",
    hint: "What does the prompt need us to filter?",

  explanation: "Even numbers have a remainder of 0 when divided by 2."
},
{
  question_id: 439,
  type: "syntax",
  difficulty: 1,
  discrimination: 1.2,
  guess: 0.20,
  maxAttempts: 3,

  prompt: "Keep only words starting with 'a'.",
  context: `
const items = ["apple", "pear", "ant", "berry"]
  `,
  template: `
const result = items.filter(x => x[0] ___ "a")
  `,
    hint: "What does the prompt need us to filter?",

  answer: "===",
  explanation: "Index 0 gives the first character of each string."
},
{
  question_id: 440,
  type: "syntax",
  difficulty: 1,
  discrimination: 1.4,
  guess: 0.20,
  maxAttempts: 3,

  prompt: "Filter numbers less than 5.",
  context: `
const nums = [1, 9, 4, 12]
  `,
  template: `
const small = nums.filter(n => ___)
  `,
  answer: "n < 5",
    hint: "What does the prompt need us to filter?",

  explanation: "A simple comparison filters out larger values."
},
{
  question_id: 442,
  type: "syntax",
  difficulty: 2,
  discrimination: 1.7,
  guess: 0.18,
  maxAttempts: 3,

  prompt: "Filter objects with age >= 18.",
  context: `
const people = [
  { name: "Ava", age: 17 },
  { name: "Leo", age: 22 }
]
  `,
  template: `
const adults = people.filter(p => p.age ___ 18)

  `,
  answer: ">=",
    hint: "What does the prompt need us to filter?",

  explanation: "Filtering objects works by checking their properties."
},
{
  question_id: 443,
  type: "syntax",
  difficulty: 2,
  discrimination: 1.8,
  guess: 0.18,
  maxAttempts: 3,

  prompt: "Keep only numbers divisible by 3.",
  context: `
const nums = [3, 10, 12, 14]
  `,
  template: `
const result = nums.filter(n => n % 3 ___ 0)
  `,
  answer: "===",
    hint: "What does the prompt need us to filter?",

  explanation: "Divisible means remainder 0."
},
{
  question_id: 444,
  type: "syntax",
  difficulty: 2,
  discrimination: 1.7,
  guess: 0.18,
  maxAttempts: 3,

  prompt: "Filter strings longer than 4 characters.",
  context: `
const items = ["pen", "marker", "pad"]
  `,
  template: `
const longOnes = items.filter(i => i.length ___ 4)
  `,
  answer: ">",
    hint: "What does the prompt need us to filter?",

  explanation: "Length comparisons are common in filtering text."
},
{
  question_id: 445,
  type: "syntax",
  difficulty: 1,
  discrimination: 1.2,
  guess: 0.20,
  maxAttempts: 3,

  prompt: "Filter numbers greater than 10.",
  context: `
const nums: number[] = [3, 12, 7, 25]
  `,
  template: `
const result = nums.filter((n: number) => ___)
  `,
  answer: "n > 10",
    hint: "What does the prompt need us to filter?",

  explanation: "Filtering keeps only values that satisfy the condition."
},
{
  question_id: 446,
  type: "syntax",
  difficulty: 1,
  discrimination: 1.1,
  guess: 0.20,
  maxAttempts: 3,

  prompt: "Keep only strings with length 3.",
  context: `
const words: string[] = ["cat", "bird", "sun"]
  `,
  template: `
const result = words.filter((w: string) => w.length ___ 3)
  `,
  answer: "===",
    hint: "What does the prompt need us to filter?",

  explanation: "Strict equality checks for exact length."
},
{
  question_id: 447,
  type: "syntax",
  difficulty: 1,
  discrimination: 1.3,
  guess: 0.20,
  maxAttempts: 3,

  prompt: "Filter even numbers.",
  context: `
const nums: number[] = [2, 5, 8, 11]
  `,
  template: `
const evens = nums.filter((n: number) => n % 2 ___ 0)
  `,
  answer: "===",
    hint: "What does the prompt need us to filter?",

  explanation: "Even numbers have remainder 0 when divided by 2."
},
{
  question_id: 452,
  type: "syntax",
  difficulty: 2,
  discrimination: 1.8,
  guess: 0.18,
  maxAttempts: 3,

  prompt: "Keep only numbers divisible by 3.",
  context: `
const nums: number[] = [3, 10, 12, 14]
  `,
  template: `
const result = nums.filter((n: number) => n % 3 ___ 0)
  `,
  answer: "===",
    hint: "What does the prompt need us to filter?",

  explanation: "Divisible means remainder 0."
},
{
  question_id: 453,
  type: "syntax",
  difficulty: 2,
  discrimination: 1.7,
  guess: 0.18,
  maxAttempts: 3,

  prompt: "Filter strings longer than 4 characters.",
  context: `
const items: string[] = ["pen", "marker", "pad"]
  `,
  template: `
const longOnes = items.filter((i: string) => i.length ___ 4)
  `,
  answer: ">",
    hint: "What does the prompt need us to filter?",

  explanation: "Length comparisons are common in filtering text."
}
]

export const questions3= [
  {
  question_id: 500,
  type: "coding",
  difficulty: -2,
  discrimination: 1.1,
  guess: 0.25,
  maxAttempts: 3,

  prompt: "Create a list called smallNums that keeps only numbers less than 5.",
  context: `
const nums = [1, 9, 4, 12]
  `,

  answer: `
const smallNums = nums.filter(n => n < 5)
  `.trim(),

  feedbackChecks: [
    { test: missing("const"), message: "Don't forget to declare your list with const!" },
    { test: missing(".filter"), message: "Use .filter() to keep only certain items." },
    { test: missing("nums"), message: "Use the original list: nums." },
    { test: missing("=>"), message: "Arrow function missing!" },
    { test: missing("<"), message: "We only want numbers less than 5." }
  ],

  explanation: "Filtering with a simple comparison keeps only the values you want."
},
{
  question_id: 501,
  type: "coding",
  difficulty: -1,
  discrimination: 1.3,
  guess: 0.22,
  maxAttempts: 3,

  prompt: "Make a list called shortWords that keeps only words with length 3.",
  context: `
const words = ["cat", "bird", "sun", "tree"]
  `,

  answer: `
const shortWords = words.filter(w => w.length === 3)
  `.trim(),

  feedbackChecks: [
    { test: missing("const"), message: "Declare your new list with const!" },
    { test: missing(".filter"), message: "Remember to use .filter()!" },
    { test: missing("words"), message: "Use the original list: words." },
    { test: missing("w.length"), message: "How do we check the length again?" },
    { test: missing("==="), message: "We need strict equality here." }
  ],

  explanation: "Checking w.length lets you filter strings by size."
},
{
  question_id: 502,
  type: "coding",
  difficulty: 0,
  discrimination: 1.5,
  guess: 0.20,
  maxAttempts: 3,

  prompt: "Make a list called startsWithA that keeps only words starting with 'a'.",
  context: `
const items = ["apple", "pear", "ant", "berry"]
  `,

  answer: `
const startsWithA = items.filter(x => x[0] === "a")
  `.trim(),

  feedbackChecks: [
    { test: missing("const"), message: "Declare your list with const!" },
    { test: missing(".filter"), message: "Use .filter() here." },
    { test: missing("items"), message: "Use the items list." },
    { test: missing("[0]"), message: "How do we check the first letter?" },
    { test: missing("==="), message: "Strict equality needed!" }
  ],

  explanation: "Index 0 gives the first character of each string."
},
{
  question_id: 503,
  type: "coding",
  difficulty: 0,
  discrimination: 1.6,
  guess: 0.20,
  maxAttempts: 3,

  prompt: "Create a list called containsE that keeps only words containing 'e'.",
  context: `
const words = ["map", "tree", "stone", "cup"]
  `,

  answer: `
const containsE = words.filter(w => w.includes("e"))
  `.trim(),

  feedbackChecks: [
    { test: missing("const"), message: "Don't forget const!" },
    { test: missing(".filter"), message: "Use .filter()!" },
    { test: missing("words"), message: "Use the words list." },
    { test: missing("includes"), message: "Try using .includes()!" },
    { test: missing("'e'"), message: "We're checking for the letter e." }
  ],

  explanation: "The .includes method checks if a substring appears in a string."
},
{
  question_id: 504,
  type: "coding",
  difficulty: 1,
  discrimination: 1.8,
  guess: 0.18,
  maxAttempts: 3,

  prompt: "Make a list called divisibleBy3 that keeps only numbers divisible by 3.",
  context: `
const nums = [3, 10, 12, 14, 21]
  `,

  answer: `
const divisibleBy3 = nums.filter(n => n % 3 === 0)
  `.trim(),

  feedbackChecks: [
    { test: missing("const"), message: "Declare your list with const!" },
    { test: missing(".filter"), message: "Use .filter()!" },
    { test: missing("nums"), message: "Use the nums list." },
    { test: missing("%"), message: "Modulo checks divisibility." },
    { test: missing("==="), message: "Divisible means remainder 0." }
  ],

  explanation: "n % 3 === 0 means the number is divisible by 3."
},
{
  question_id: 505,
  type: "coding",
  difficulty: 2,
  discrimination: 2.0,
  guess: 0.15,
  maxAttempts: 3,

  prompt: "A teacher wants to keep only the students who passed (score >= 70). Create a list called passed.",
  context: `
const students = [
  { name: "Kai", score: 88 },
  { name: "Mia", score: 65 },
  { name: "Noah", score: 72 }
]
  `,

  answer: `
const passed = students.filter(s => s.score >= 70)
  `.trim(),

  feedbackChecks: [
    { test: missing("const"), message: "Use const to declare passed!" },
    { test: missing(".filter"), message: "Use .filter() to select passing students." },
    { test: missing("students"), message: "Use the students list." },
    { test: missing("s.score"), message: "Check the score property." },
    { test: missing(">="), message: "Passing means score >= 70." }
  ],

  explanation: "Filtering objects by a numeric property is a common data‑processing pattern."
},
{
  question_id: 506,
  type: "coding",
  difficulty: 2,
  discrimination: 2.1,
  guess: 0.15,
  maxAttempts: 3,

  prompt: "A store wants to keep only items that are in stock (qty > 0). Create a list called available.",
  context: `
const inventory = [
  { name: "pencil", qty: 10 },
  { name: "pen", qty: 0 },
  { name: "marker", qty: 4 }
]
  `,

  answer: `
const available = inventory.filter(item => item.qty > 0)
  `.trim(),

  feedbackChecks: [
    { test: missing("const"), message: "Declare available with const!" },
    { test: missing(".filter"), message: "Use .filter() to keep in‑stock items." },
    { test: missing("inventory"), message: "Use the inventory list." },
    { test: missing("item.qty"), message: "Check the qty property." },
    { test: missing(">"), message: "We only want quantities greater than 0." }
  ],

  explanation: "Filtering objects by a property lets you remove unavailable items."
}

]


export function getQuestionSet(mode, mastery) {

  if (mode === "map") {

    if (mastery < 85) {
      return questions;
    }

    return questions1;
  }

  if (mode === "filter") {

    if (mastery < 85) {
      return questions2;
    }

    return questions3;
  }

  return [];
}
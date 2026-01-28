// Q1) Remove state names starting with vowels using filter
let states = [
    "Andhra Pradesh", "Bihar", "Odisha", "Karnataka",
    "Uttar Pradesh", "Maharashtra", "Assam", "Gujarat"
];

let filteredStates = states.filter(state =>
    !["A", "E", "I", "O", "U"].includes(state[0].toUpperCase())
);

console.log("Q1:", filteredStates);


// Q2) Reverse words in a sentence
let str = "I love my India";
let reversedSentence = str.split(" ").reverse().join(" ");
console.log("Q2:", reversedSentence);


// Q3) Convert 'INDIA' to 'INDONESIA' using splice
let stringArr = "INDIA".split("");
stringArr.splice(3, 0, "O", "N", "E", "S");
let newString = stringArr.join("");
console.log("Q3:", newString);


// Q4) Count vowels and consonants
let longString = "JavaScript is a powerful programming language";
let vowels = 0, consonants = 0;

for (let ch of longString.toLowerCase()) {
    if (/[a-z]/.test(ch)) {
        if ("aeiou".includes(ch)) vowels++;
        else consonants++;
    }
}

console.log("Q4:", { vowels, consonants });


// Q5) Replace wrong word with correct word
function correctfn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}

console.log(
    "Q5:",
    correctfn("I love Javscript", "Javscript", "JavaScript")
);


// Q6) Filter numbers greater than 5
let inputArr = [1,2,3,9,10,7,5,4,3];
let resultArr = inputArr.filter(num => num > 5);
console.log("Q6:", resultArr);


// Q7) Calculate average scores using map and reduce
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

let studentAverages = students.map(student => {
    let total = student.scores.reduce((sum, score) => sum + score, 0);
    let avg = total / student.scores.length;
    return { name: student.name, average: avg };
});

console.log("Q7:", studentAverages);


// Q8) Repeated sum of digits until single digit
function repeatedSum(num) {
    while (num >= 10) {
        num = num
            .toString()
            .split("")
            .reduce((sum, digit) => sum + Number(digit), 0);
    }
    return num;
}

console.log("Q8:", repeatedSum(456));


// Q9) Count number of words in a paragraph
function wordCount(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}

console.log(
    "Q9:",
    wordCount("JavaScript is very easy to learn and powerful")
);


// Q10) Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("Q10:", reverseString("Hello"));


// Q11) Find average marks for each student
let marksData = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};

let avgResult = {};

for (let student in marksData) {
    let scores = Object.values(marksData[student]);
    let average = scores.reduce((a, b) => a + b, 0) / scores.length;
    avgResult[student] = { average };
}

console.log("Q11:", avgResult);

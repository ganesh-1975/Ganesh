console.clear();

// object
let person = {
  name: "Ganesh",
  age: 21,
};

// dot notation
person.name = "gowtham";
console.log(person.name);

// bracket notation
person["name"] = "suresh";

console.log(person);

// array
console.clear();

let selecttedColor = ["red", "blue"];
selecttedColor[2] = "green";
selecttedColor[3] = "4";

console.log(selecttedColor.length);

console.log(selecttedColor[0]);

// funtions
console.clear();

function greet(lastName) {
  console.log("Hello " + lastName);
}

greet("john");
greet("kumar");

// type of functions
console.clear();
// calculating a value
function square(number) {
  return number * number;
}

console.log(square(2));

// template literls
console.clear();
let x;
const name = "john";
const age = 20;
x = `my name is ${name} and iam ${age} years old.`;
console.log(x);

// string properties and Methods
const s = "Hello World";

// access value by key
x = s[4];
x = s.charAt(4);
x = s.indexOf("H");
x = s.substring(2, 7);
x = s.substring(7);
// in slice can use negative  for access value
x = s.slice(-11, -6);
x = "              Hello";
x = x.trim();

x = s.length;

// shows different methods
x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();
x = s.replace("World", "Java");
x = s.includes("h");
x = s.split("");

console.log(x);

// capitalize
console.clear();
const mystring = "developer";

let myNewString;
myNewString = mystring[0].toUpperCase() + mystring.slice(1);

console.log(myNewString);

// numbers
console.clear();
let g;

const num = new Number(5);

g = num.toString();
g = num.toString().length;
// decimal upto 2
g = num.toFixed(2);
g = num.toPrecision(2);
g = num.toExponential(2);
g = num.toLocaleString("en-US");
g = Number.MAX_VALUE;
g = Number.MIN_VALUE;

console.log(g);

function printme(firstname, lastname) {
  const sent = "my" + firstname + "and" + lastname;
  console.log(sent);
  return sent;
}

printme("suresh", "kumar");

const printMe = (firstname, lastname) => {
  const sent = "my" + firstname + "and" + lastname;
  console.log(sent);
  return sent;
};

printMe("suresh", "kumar");

//create profile - firstname, lastname, age, bm, by, height, weight - return objext
//.fullname .bmi .ageband getagebyyear() getbirthmonthlabel getdoblabel(mm/yyyy)

// bmi = kg/m2   /100
function calculateBMI(weight, height) {
  let heightInMeter = height / 100;
  let bmi = weight / (heightInMeter * heightInMeter);
  bmi = bmi.toPrecision(3);
  return bmi;
}

let result = calculateBMI(80, 165);
console.log("BMI :" + result);

function fullName(first, last) {
  return first + last;
}

result = fullName("suresh ", "kumar");
console.log(result);

result = ageband(19);
console.log(result);

function getagebyyear(birthYear, year) {
  let age = year - birthYear;
  return age;
}

result = getagebyyear(2002, 2023);
console.log(result);

function getbirthmonthlabel(bmNumber) {
  const month = [
    "No month in 0",
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let num = month[bmNumber];
  return num;
}

result = getbirthmonthlabel(12);
console.log(result);

function getdoblabel(bm, by) {
  bm = bm.toPrecision(2);
  bmi = by.toPrecision(4);
  let dob = bm + "/" + by;

  return dob;
}

result = getdoblabel(4, 2023);
console.log(result);

//create profile - firstname, lastname, age, bm, by, height, weight - return objext
//.fullname .bmi .ageband getagebyyear() getbirthmonthlabel getdoblabel(mm/yyyy)

// --------------------------------------------------------------------------------------------------------------------
console.clear();

function ageband(age) {
  if (age < 11) {
    return "KID";
  } else if (age >= 10 && age < 20) {
    return "TEEN";
  } else {
    return "ADULT";
  }
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

// function task(firstname, lastname, bm, by, height, weight) {
//     let heightInMeter = height / 100;
//     let bmi = weight / (heightInMeter * heightInMeter);
//     bmi = bmi.toPrecision(3);

//     let age = 2023 - by;

//     let month_label = MONTHS[bm - 1];

//     let dob = bm + "/" + by;

//     const getagebyyear = (year) => {
//       let age = year - by;
//       return age;
//     };

//     return {
//       fullName: firstname + " " + lastname,
//       bmi: bmi,
//       ageBand: ageband(age),
//       getagebyyear: getagebyyear,
//       getbirthmonthlabel: month_label,
//       getdoblabel: dob,
//     };
//   }

//   // firstname, lastname, bm, by, height, weight
//   let profile = task("suresh", "Kumar", 5, 2022, 165, 80);
//   console.log("Fullname : ", profile.fullName);
//   console.log("BMI : ", profile.bmi);
//   console.log("AgeBand : ", profile.ageBand);
//   console.log("Getbirthmonthlabel: ", profile.getbirthmonthlabel);
//   console.log("Getdoblabel: ", profile.getdoblabel);
//   console.log("getagebyyear: ", profile.getagebyyear(2032));

function calculateBMI(height, weight) {
  let heightInMeter = height / 100;
  let bmi = weight / (heightInMeter * heightInMeter);
  return bmi.toPrecision(3);
}

const getagebyYear = (year, by) => {
  let age = year - by;
  return age;
};

function validateInputs(firstname, lastname, bm, by) {
  if (
    !firstname ||
    !lastname ||
    typeof firstname !== "string" ||
    typeof lastname !== "string"
  ) {
    throw Error("Pls enter correct name values");
  }

  if (bm > 12 || bm < 1 || typeof bm !== "number") {
    throw Error("Birth month thappu");
  }

  if (by < 1920 || by > 2023 || typeof by !== "number") {
    throw Error("Birth year thappu");
  }

  if (height < 30 || weight < 5) {
    throw Error("Enter correct height and weight");
  }
}

function task(firstname, lastname, bm, by, height, weight) {
  validateInputs(firstname, lastname, bm, by);

  let age = 2023 - by;

  return {
    fullName: firstname + " " + lastname,
    bmi: calculateBMI(height, weight),
    ageBand: ageband(age),
    getagebyYear: (year) => getagebyYear(year, by),
    getbirthmonthlabel: MONTHS[bm - 1],
    getdoblabel: bm + "/" + by,
  };
}

// firstname, lastname, bm, by, height, weight
// let profile = task("suresh", "Kumar", 12, 2022, 155, 80);
let profile = task("Varun", "suresh", 11, 2022, 155, 80);
console.log("Fullname : ", profile.fullName);
console.log("BMI : ", profile.bmi);
console.log("AgeBand : ", profile.ageBand);
console.log("Getbirthmonthlabel: ", profile.getbirthmonthlabel);
console.log("Getdoblabel: ", profile.getdoblabel);
console.log("getagebyyear: ", profile.getagebyYear(2032));

let student = createStudent("Varun", "suresh", 11, 2022);
console.log("Fullname : ", student.fullName); // FName LName
console.log("Getdoblabel: ", student.doblabel); // MM/YYYY
console.log("Get subjects: ", student.subjects); // [S1, S2, S3, S4]
console.log("Add subject: ", student.addSubject()); // inp("S5")
console.log("Get subjects: ", student.subjects); // [S1, S2, S3, S4, S5]
console.log("Remove subject: ", student.removeSubject()); // inp("S4")
console.log("Get subjects: ", student.subjects); // [S1, S2, S3, S5]
console.log("Get marks: ", student.marks); // {S1: 20, S2: 30, S3: 25, S5: 90}
console.log("Update marks: ", student.updateMarks()); // inp("S3", 80)
console.log("Get marks: ", student.marks); // {S1: 20, S2: 30, S3: 80, S5: 90}

// console.log("BMI : ", profile.bmi);
// console.log("AgeBand : ", profile.ageBand);
// console.log("Getbirthmonthlabel: ", profile.getbirthmonthlabel);
// console.log("getagebyyear: ", profile.getagebyYear(2032));

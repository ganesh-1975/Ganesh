// variable

// let const var

var d;

var c = 3;

console.log(d);

if (true) {
  var d = 54;
  console.log(6666, d);
}
d = 999;

console.log(4444, c);
console.log(5555, d);

console.clear();

let _2ue = true;
let False = true;

let number = 3;
let arr = [3, 2, 4, 76, 89, 22, 53, 79];

if (number === 0) {
  console.log(number, "is zero");
} else if (number % 2 == 0) {
  console.log(number, "is even number");
} else {
  console.log(number, "is odd number");
}

// Ternary operator
number === 0
  ? console.log(number, "is zero")
  : number % 2 === 0
  ? console.log(number, "is even number")
  : console.log(number, "is odd number");

for (let i = 0; i < arr.length; i++) {
  console.log(
    i,
    arr[i],
    "is " + (arr[i] % 2 === 0 ? "even" : "odd") + " number"
  );
}

arr.forEach((ele, ind) => {
  console.log(ind, ele, "is " + (ele % 2 === 0 ? "even" : "odd") + " number");
});

function calcOddorEvenFn(ele, ind) {
  console.log(ind, ele, "is " + (ele % 2 === 0 ? "even" : "odd") + " number");
}

const calcOddorEvenArrowFn = (ele, ind) => {
  console.log(ind, ele, "is " + (ele % 2 === 0 ? "even" : "odd") + " number");
};

arr.forEach(calcOddorEvenFn);
arr.forEach(calcOddorEvenArrowFn);

console.clear();

let arr2 = [3, 2, 4, 76, 89, 22, 53, 79];

// push pop
arr2.push(9999);
arr2.unshift(11111);

arr2.pop();
arr2.shift();

arr2[3] = 76;

// slice splice

console.log(arr2); // undestructive
// console.log(arr2.slice(0, 3)); // undestructive
// console.log(arr2.slice(3, 2)); // undestructive

// console.log(
//   arr2.splice(3, "new item", "new", "9999999999", "varun", "gowtham")
// ); // !destructive

arr2.splice(-3, 2);

console.log(arr2);

// map, filter, reduce

console.clear();

let arr3 = [3, 2, 0, undefined, NaN, 0, "", 4, 76, 89, 22, 0, 53, 79];

// let arr4 = [];
// for (let i = 0; i < arr3.length; i++) {
//   arr4[i] = arr3[i] % 2 === 0 ? "even" : arr3[i];
// }

// let arr4 = [];
// arr3.forEach((ele, ind) => {
//   arr4[ind] = ele % 2 === 0 ? "even" : ele;
// });

// let arr4 = arr3.map((ele) => {
//     return ele % 2 === 0 ? "even" : ele;
//   });

// let arr4 = arr3.map((ele) => (ele % 2 === 0 ? "even" : ele));

// filter

let arr4 = arr3.filter((ele) => {
  //   if (isNaN(ele)) return false;
  if (ele === 0) return true;
  //   return typeof ele == "number";
  return !!ele;
});

console.log(arr3);
console.log(arr4.join("---"));
console.log("3---2---0---0---4---76---89---22---0---53---79".split("---"));

console.clear();

let qes = "madam";

// function isPalidrome(String) {
//     let revString = String.split("").reverse().join("");

//     return String === revString;
//   }

// function isPalidrome(String) {
//   let revString = "";
//   for (let i = 0; i < String.length; i++) {
//     revString = String[i] + revString;
//   }
//   return String === revString;
// }

// function isPalidrome(String) {
//     for (let i = 0; i < String.length; i++) {
//       if (String[i] !== String[String.length - i - 1]) {
//         return false;
//       }
//     }

//     return true;
//   }

function isPalidrome(String) {
  for (let i = 0; i < String.length; i++) {
    console.log(String[i]);
    if (String[i] !== String[String.length - i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(isPalidrome(qes));

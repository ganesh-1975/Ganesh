console.clear()

// object 
let person = {
    name: 'Ganesh',
    age:21
}

// dot notation 
person.name = 'gowtham'
console.log(person.name)

// bracket notation 
person['name'] = 'suresh'

console.log(person)

// array 
console.clear()

let selecttedColor = ['red', 'blue']
selecttedColor[2] = 'green'
selecttedColor[3] = '4'


console.log(selecttedColor.length)

console.log(selecttedColor[0])

// funtions
console.clear()

function greet(lastName){
    console.log('Hello ' + lastName)
}

greet('john')
greet('kumar')

// type of functions
console.clear()
// calculating a value 
function square(number){
    return number*number
}

console.log(square(2))



// template literls 
console.clear()
let x;
const name = 'john';
const age = 20;
x = `my name is ${name} and iam ${age} years old.`
console.log(x)

// string properties and Methods 
const s = 'Hello World'

// access value by key 
x = s[4]
x = s.charAt(4)
x = s.indexOf('H')
x = s.substring(2,7)
x = s.substring(7)
// in slice can use negative  for access value
x = s.slice(-11, -6)
x = '              Hello'
x = x.trim()


x = s.length


// shows different methods
x = s.__proto__;

x = s.toUpperCase()
x = s.toLowerCase()
x = s.replace('World', 'Java')
x = s.includes('h')
x = s.split('')

console.log(x)


// capitalize 
console.clear()
const mystring = 'developer'

let myNewString;
myNewString = mystring[0].toUpperCase() + mystring.slice(1)

console.log(myNewString)

// numbers 
console.clear()
let g;

const num = new Number(5)

g = num.toString()
g = num.toString().length
// decimal upto 2 
g = num.toFixed(2)
g = num.toPrecision(2)
g = num.toExponential(2)
g = num.toLocaleString('en-US')
g = Number.MAX_VALUE
g = Number.MIN_VALUE







console.log(g)






function printme(firstname, lastname){
    const sent = 'my' + firstname + 'and' + lastname
     console.log(sent)
     return sent
}

printme('suresh', 'kumar')


const printMe = (firstname, lastname) => {
    const sent = 'my' + firstname + 'and' + lastname
    console.log(sent)
    return sent
}

printMe('suresh', 'kumar')


//create profile - firstname, lastname, age, bm, by, height, weight - return objext 
//.fullname .bmi .ageband getagebyyear() getbirthmonthlabel getdoblabel(mm/yyyy)






// bmi = kg/m2   /100
function calculateBMI(weight, height){
    let heightInMeter = height/100;
    let bmi = weight/(heightInMeter * heightInMeter);
    bmi = bmi.toPrecision(3)
    return bmi
}

let result = calculateBMI(80, 165) 
console.log('BMI :'  + result)

function fullName(first, last){
    return first + last
}

result = fullName('suresh ', 'kumar')
console.log(result)



function ageband(age){
    if (age < 11){
        return "Ageband is KID";
    } else if (age >= 10  && age < 20){
        return "Ageband is Teen";
    } else {
        return "Ageband is Adult";
    }
}

result = ageband(19)
console.log(result)

function getagebyyear( birthYear, year){
    let age = year - birthYear;
    return age
}

result = getagebyyear(2002, 2023)
console.log(result)




function getbirthmonthlabel(bmNumber){
    const month = ['No month in 0' , 'Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let num = month[bmNumber];
    return num
}

result = getbirthmonthlabel(12)
console.log(result)

function getdoblabel(bm, by){
    bm = bm.toPrecision(2)
    bmi = by.toPrecision(4)
    let dob = bm + '/' + by;

    return dob
}

result = getdoblabel(4, 2023)
console.log(result)


console.clear()

function task(firstname, lastname, bm, by, height, weight, year){
    let heightInMeter = height/100;
    let bmi = weight/(heightInMeter * heightInMeter);
    bmi = bmi.toPrecision(3)

    let age = year - by;

    const month = ['No month in 0' , 'Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let num = month[bm];

    bm = bm.toPrecision(2)
    bmi = by.toPrecision(4)
    let dob = bm + '/' + by;
    
    return {
        

        fullName : firstname + lastname,
        bmi : bmi ,
        getagebyyear  : age,
        getbirthmonthlabel : num ,
        getdoblabel : dob
    
    
    }

}

// firstname, lastname, age, bm, by, height, weight, year 
let profile = task('suresh', 'Kumar', 5,2002, 165, 80, 2056 )
console.log("profile Info : ", profile)

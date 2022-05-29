console.log("hello");
const presence = true;

function checkPresence(presence) {
    if (presence) {
        console.log("Welcome to the class")
    } else {
        console.log("You are missing a great class")
    }
};
checkPresence(presence);

const studentAge = 18;

function checkDrivEligibility(eligibleAge) {
    if (eligibleAge > studentAge) {
        console.log(" They can get a driving licence")
    } else {
        console.log("They can't get a driving licence")
    }
};
checkDrivEligibility(10);


function checkHaircut(lastHaircut) {
    if (lastHaircut < 1) {
        console.log(" You just got a haircut, or?")
    } else if (lastHaircut < 3) {
        console.log(" Hm, it is not so long time ago, but maybe?")
    } else if (lastHaircut < 6) {
        console.log(" Half a year is quite some time for hair to grow")
    } else {
        console.log("Wow a year is a long time, you must have long hair by now")
    }
};
checkHaircut(20);


let i = 17;
while (i > 18) {
    console.log(` You are just ${i} years old, you cants drive yet`);

}

let y = 19;

do {
    console.log(` You are just ${i} years old, you cants drive yet`);
    i++
} while (i > 18)

let whatever = 0;
for (let whatever = 0; whatever < 0; whatever++) {
    console.log(whatever)
}
// Exercise toi find largest number

let arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log("The largest number is " + largest);

//exercise to ask students 
const studentsArray = ["Lucia", "Reenu", "Lokesh", "Prakash"];


for (let i = 0; i < studentsArray.length; i++) {
    console.log("Are you present " + studentsArray[i] + "?")
}


// lets buy a falafal
let myMoney = 200;
const falafalPrice = 20;

for (let myMoney = 200; myMoney > 0; myMoney -= falafalPrice) {
    console.log("you bought a falafel")
}









// function toAsk(studentsArray) {

//     if (studentsArray[i] = presence) {
//         for (let i = 0; i < studentsArray.length; i++) {
//             student = studentsArray[i];
//         }
//         console.log("Are you present " + studentsArray[i])
//     } else {
//         console.log("I am not present")
//     }

// }



// const studentsArray = ["Lucia", "Reenu", "Lokesh, "Violeta" ] 
// const student = studentsArray[0];
// for (let i = 0; i < studentsArray.length; i++) {
    // student = studentsArray[i];



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

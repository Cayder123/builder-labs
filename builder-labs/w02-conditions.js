let age = 20;
let isStudent = true;
let hasVipCard = false;

if (age < 18 || isStudent) {
    console.log('Giam gia 50%');
} else {
    if (hasVipCard === true) {
        console.log('Giam gia 20%');
    } else {
        console.log('Gia ve tieu chuan');
    }
}

let username = "";
if (username) {
    console.log('Day la Truethy');
} else {
    console.log('Day la Falsy');
}

username = "Le Van Si";
if (username) {
    console.log('Day la Truethy');
} else {
    console.log('Day la Falsy');
}
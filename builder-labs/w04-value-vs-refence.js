let scoreA = 100;
let scoreB = scoreA;

scoreB = 200;

console.log(scoreA);
console.log(scoreB);

let userA = { name: "Van Si", role: "Student" };

let userB = userA;
userB.role = "Senior Engineer";
console.log(userA);
console.log(userB);

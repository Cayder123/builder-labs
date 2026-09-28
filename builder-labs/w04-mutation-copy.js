const playerA = { name: "Van Si", score: 80 };
const playerB = { ...playerA, score: 95 };
console.log(playerA);
console.log(playerB);

const memberA = { name: "Van Si", details: { city: "Da Nang", age: 21 } };
const memberB = { ...memberA };
memberB.details.city = "Ho Chi Minh";
console.log(memberA.details.city);
console.log(memberB.details.city);

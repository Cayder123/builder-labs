const birthYear = 2005;
try {
    birthYear = 2000;
} catch (error) {
    console.log('Khi su dung const: ', error.message);
}
console.log('khi su dung const: ', birthYear);

let BirthYear = 2005
BirthYear = 2000
console.log('Khi su dung Let: ', BirthYear)
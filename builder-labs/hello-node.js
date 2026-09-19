console.log('Hello Node.js');

//thử nghiệm với stdout trực tiếp 

process.stdout.write('In bằng stdout không tự xuống dòng. ');
process.stdout.write('Dòng này xuống dòng \n');

//thử nghiệm với process

console.log('Node version đang chạy:', process.version);
console.log('Thư mục tiến trình đang đứng:', process.cwd());

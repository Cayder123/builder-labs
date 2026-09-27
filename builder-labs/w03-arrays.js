const a = ["Hoc JavaScript", "Tap the duc", "Doc sach"];
console.log(a.length);
console.log(a[0]);
console.log(a[a.length - 1]);

a.push("Nau com");
console.log(a.length);

const finishedTask = a.pop();
console.log("Da xong cong viec: ", finishedTask);

for (const task of a) {
    console.log("Cong viec con lai:", task);
}



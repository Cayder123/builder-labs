const appName = "Builder App";

function checkScope() {
    const setrecCode = 9999;
    console.log(appName);
}
console.log(checkScope());

try {
    console.log(setrecCode);
} catch (error) {
    console.log("Ten loi: ", error.name);

    console.log("Noi dung loi: ", error.message);
}

if (true) {
    const blockVar = "Toi chi song trong khoi if";
}

try {
    console.log(blockVar);
} catch (error) {
    console.log("Ten loi: ", error.name);

    console.log("Noi dung loi: ", error.message);
}

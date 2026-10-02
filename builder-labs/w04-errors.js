function withdrawMoney(balance, amount) {
    if (amount <= 0) {
        throw new Error("So tien rut phai lon hon 0!");
    }
    else if (amount > balance) {
        throw new Error("So du khong du de rut tien");
    }
    return balance - amount;
}

try {
    withdrawMoney(1000000, 2000000);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Cam on quy khach da su dung dich vu!");
}
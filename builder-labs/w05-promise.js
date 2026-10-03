function orderDrink(drinkName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (drinkName == "") {
                reject("Dat nuoc that bai.Ten nuoc khong duoc de trong!");
            }
            else {
                resolve("Dat nuoc thanh cong: " + drinkName);
            }
        }, 1000);
    });
}

orderDrink("Tra Sua Tran Chau")
    .then((result) => {
        console.log("Thanh cong (.then):", result);
    })
    .catch((error) => {
        console.log("That bai (.catch):", error);
    });

orderDrink("")
    .then((result) => {
        console.log("Thanh cong (.then):", result);
    })
    .catch((error) => {
        console.log("That bai (.catch):", error);
    });

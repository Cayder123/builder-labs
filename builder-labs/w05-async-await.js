function orderDrink(drinkName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (drinkName == "") {
                reject("Goi nuoc that bai . Ten nuoc khong duoc de trong");
            } else {
                resolve("Goi nuoc thanh cong: " + drinkName);
            }
        }, 1000);
    });
}
async function handleOrder(drinkName) {
    try {
        const result = await orderDrink(drinkName);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

handleOrder("Tra Dao Cam Sa");
handleOrder("");
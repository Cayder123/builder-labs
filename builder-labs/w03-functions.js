//bài toán 1
function calculateTotal(price, discountPercent) {
    const discountAmount = price * (discountPercent / 100);
    return price - discountAmount;
}
console.log('ket qua sau ham calculateToTal: ', calculateTotal(100, 10));

//bài toán 2
function sayHello(name) {
    console.log("Xin chao " + name)
}

sayHello("Si")
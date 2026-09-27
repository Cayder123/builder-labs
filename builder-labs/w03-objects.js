const customer = {
    id: 101,
    name: "Nguyen Van A",
    age: 25,
    contact: { email: "a@gmail.com", phone: "0901234567" },
    purchasedItems: ["Ao thun", "Quan jean"]
}

console.log("Ten Khach Hang: ", customer.name, "SDT: ", customer.contact.phone)
customer.age = 26;
customer.isVip = true;
customer.purchasedItems.push("Giay The Thao");
const propertyName = "name";

console.log("lay ten bang bien dong:", customer[propertyName]);

console.log(customer.addresss);

console.log(customer);
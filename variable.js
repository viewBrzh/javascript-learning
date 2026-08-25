const users = [
  { id: 1, name: "A", age: 20 },
  { id: 2, name: "B", age: 25 },
  { id: 3, name: "C", age: 30 },
  { id: 4, name: "D", age: 17 }
];
//1. หา users ที่อายุ ≥ 20
console.log(users.filter(user => user.age >= 20));

//2. แสดง name
users.forEach(user => console.log(user.name));
     //หรือ
console.log(users.map(user => user.name));

//3. หา user id = 3
console.log(users.find(user => user.id = 3));

//4. ตรวจว่ามีคนอายุต่ำกว่า 18 หรือไม่
console.log(users.some(user => user.age < 18));

//5. หาค่าเฉลี่ยอายุ
const avarageAge = users.reduce(
    (sum , user) => sum + user.age, 0) / users.length;
console.log(avarageAge);
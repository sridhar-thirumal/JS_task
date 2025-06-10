const users = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 17, active: false },
    { name: "Charlie", age: 30, active: true },
    { name: "David", age: 15, active: true },
    { name: "Eve", age: 22, active: false }];

function main(users) {
    let arr = users
    .filter(user => user.age >= 18 && user.active === true) //1. Filter out users who are under 18 or not active.
    .map(user => {
        return {name: user.name, age: user.age}; //2. From the filtered list, extract only their names and ages.
    })
    .sort((a, b) => b.age - a.age) //3. Sort the result by age in descending order.
    .map(user => `Name: ${user.name}, Age: ${user.age}`); //4. Finally, return the output as an array of strings like this: "Name: Alice, Age: 25"
    console.log(arr);
    console.log(users);
}

main(users);
// todo _-_-_-_-_-_-_-_-_-_-_-_-_-_-_ 1) Closure _-_-_-_-_-_-_-_-_-_-_-_-_-_-_

// function counter(){
//     let count = 0;

//     return function (){
//         count++;
//         return count;
//     }
// }

// const increment = counter();
// console.log(increment());
// console.log(increment());
// console.log(increment());




// todo _-_-_-_-_-_-_-_-_-_-_-_-_-_-_ 2) Promise or Async _-_-_-_-_-_-_-_-_-_-_-_-_-_-_

// ! Promise

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.log(err));

// ! Async

// async function fetchData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await response.json();
//         console.log(data);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// fetchData()




// todo _-_-_-_-_-_-_-_-_-_-_-_-_-_-_ 3) Event Loop _-_-_-_-_-_-_-_-_-_-_-_-_-_-_

// console.log("Start");
// setTimeout(() => console.log("Timeout"), 0);
// console.log("End");




// todo _-_-_-_-_-_-_-_-_-_-_-_-_-_-_ 4) this content _-_-_-_-_-_-_-_-_-_-_-_-_-_-_

// const obj = {
//     name: "Məhəmməd",
//     normalFunc: function () {
//         console.log(this.name);
//     },
//     arrowFunc: () => {
//         console.log(this.name);
//     }
// };

// obj.normalFunc();
// obj.arrowFunc();




// todo _-_-_-_-_-_-_-_-_-_-_-_-_-_-_ 5) Prototype and prototypal inheritance _-_-_-_-_-_-_-_-_-_-_-_-_-_-_

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.showAge = function(){
//     console.log(`Mənim adim ${this.name}, yaşım ${this.age}-dir`)
// }

// const ages = new Person("Məhəmməd", 21);
// ages.showAge()




// todo _-_-_-_-_-_-_-_-_-_-_-_-_-_-_ 6) Debounce and Throttle _-_-_-_-_-_-_-_-_-_-_-_-_-_-_

// function debounce(func, delay) {
//     let timer;
//     return function (...args) {
//         clearTimeout(timer);
//         timer = setTimeout(() => func.apply(this, args), delay);
//     };
// }

// const search = debounce((query) => {
//     console.log("Axtarış nəticəsi:", query);
// }, 500);

// search("JavaScript");
// search("React");




// todo _-_-_-_-_-_-_-_-_-_-_-_-_-_-_ 7) Map, Filter and Reduce _-_-_-_-_-_-_-_-_-_-_-_-_-_-_

// const numbers = [1, 2, 3, 4, 5];
// let mapFunc = numbers.map(nums => console.log(nums * 2));
// let filterFunc = numbers.filter(nums => console.log(nums));
// let reduceFunc = numbers.map((acc, num) => console.log(acc + num), 0);




// todo _-_-_-_-_-_-_-_-_-_-_-_-_-_-_ 8) Hoisting _-_-_-_-_-_-_-_-_-_-_-_-_-_-_

// console.log(a);
// var a = 5;

// console.log(b);
// let b = 10;




// todo _-_-_-_-_-_-_-_-_-_-_-_-_-_-_ 9) Call, Apply and Bind _-_-_-_-_-_-_-_-_-_-_-_-_-_-_

// const user = {
//     name: 'Məhəmməd',
//     showInfo: function(surname, age){
//         console.log(`My name's ${this.name}, surname: ${surname} and age: ${age}`);
//     }
// }

// const user1 = {
//     name: "Məhəmməd"
// }
// const user2 = {
//     name: "Mətin"
// }
// const user3 = {
//     name: "Nihad"
// }

// user.showInfo.call(user1, "Qardaşov", 21)

// user.showInfo.apply(user2, ["Qardaşov", 22]);

// const newFunc = user.showInfo.bind(user3, "Qardaşov", 23);
// newFunc();




// todo _-_-_-_-_-_-_-_-_-_-_-_-_-_-_ 10) Shallow copy and Deep copy _-_-_-_-_-_-_-_-_-_-_-_-_-_-_

// const obj = { name: "Məhəmməd", age: 25, address: { city: "Bakı" } };

// const shallowCopy = { ...obj };
// shallowCopy.address.city = "Gəncə";
// console.log(obj.address.city);


// const deepCopy = JSON.parse(JSON.stringify(obj));
// deepCopy.address.city = "Sumqayıt";
// console.log(obj.address.city);
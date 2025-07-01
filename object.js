// // const person={first:"Esther"};
// // person.last = "Olapade";
// // person.age = 30;
// // person.helpful = true;
// // console.log(person);


// // person.first = "Funmi";
// // person.age = 25;



// // console.log(person);

// const person = {};
// person["First Name"] = "Esther";
// person.talking = function(){
//     return "I'm talking now";
// }
// const val = person.talking();
// console.log(val);

// person.first = "Esther";
// person.last = "Olapade";
// person.full = function(){
//     console.log(this);
//     return `${this.first} ${this.last}`;
// }
// person.welcome =function(personName){
//     return `Hello, ${personName}`;
// }

// console.log(person.full());
// console.log(person.welcome("Esther"));
// console.log(person.welcome(person.full()));

// car object challenge

// const car = {};
// car.color ="Blue";
// car.make ="Ford";
// car.model = "Mustang";
// car.year = 2024;
// car.value = 5000000;
// car.millage = 0;
// car.driving = function(num=100){
//     this.millage+=num;
//     console.log('driving is fun');
// }
// car.stats = function(){
//     car.value -= this.millage;
//     return `${this.color} ${this.make} ${this.model} ${this.year} ${this.value} ${this.millage}`;
// }

// car.driving(1000);
// console.log(car.stats());
// let curStat = car.stats();
// car.driving(1000);
// car.driving(3000);
// car.driving(5000);
// car.driving(1000);
// console.log(curStat);
// console.log(car.stats());


const car1 = {
    make:'Ford',
    model : 'Mustang',
    price : 25000,
    year : 2021,
    color : 'red',
    details : function(){
        return `${this.make} ${this.model} ${this.price} ${this.year} ${this.color}`
    }
};


const car2 = car1;
car2.color ='blue';
car2.year = 2022;
console.log(car1);
console.log(car2);
console.log(car1.details());
console.log(car2.details());

const car3 = object.assign({}, car1);
car3.color = 'Green';
console.log(car1);
console.log(car2);
console.log(car3);


const person = {
  firstName: 'Filipe',
  age: 29,
  hobbies: ['Food', 'Music', 'Tibia'],
  greet() {
    console.log(`Hi, i'm ${this.firstName} ${this.lastName}.`)
  }
}

console.log(person[0])  //undefined
console.log(person.firstName)  // Filipe
console.log(person.hobbies[2])  // Tibia

person.lastName = 'Gomes'
console.log(person)

delete person.age
delete person.hobbies

console.log(person)
person.greet()

const person1 = {
  name: 'Jackie',
  lastname: 'Chan',
  age: 65
}

console.log(person1.name)
console.log(person1.lastname)
console.log(person1.age)

function creatPerson(name, lastname, age) {
  return { name, lastname, age }
}

const person2 = creatPerson('Jackie', 'Chan', 65)
const person3 = creatPerson('Marry', 'Polsk', 18)
const person4 = creatPerson('Victoria', 'Kalmar', 19)

console.log(person1.name, person1.lastname, person1.age)
console.log(person2.name, person2.lastname, person2.age)
console.log(person3.name, person3.lastname, person3.age)
console.log(person4.name, person4.lastname, person4.age)

const person5 = {
  name: 'Jackie',
  lastname: 'Chan',
  age: 65,
  speak() {
    console.log(`My current age is ${this.age}.`)
  },

  increaseAge() {
    this.age++
  }
}

person5.speak()
person5.increaseAge()
person5.speak()

const data1 = new Date('1991-09-18 23:53:00')
const weekday1 = data1.getDay()
let weekdayText1

switch (weekday1) {
  case 0:
    weekdayText1 = 'Sunday';
    break;
  case 1:
    weekdayText1 = 'Monday';
    break;
  case 2:
    weekdayText1 = 'Tuesday';
    break;
  case 3:
    weekdayText1 = 'Wednesday';
    break;
  case 4:
    weekdayText1 = 'Thursday';
    break;
  case 5:
    weekdayText1 = 'Friday';
    break;
  case 6:
    weekdayText1 = 'Saturday';
    break;
  default:
    weekdayText1 = '';
    break;
}

console.log(weekday1, weekdayText1)

function getweekdayText2(weekday) {
  let weekdayText2;
  switch (weekday2) {
    case 0:
      weekdayText2 = 'Sunday';
      return weekdayText2;
    case 1:
      weekdayText2 = 'Monday';
      return weekdayText2;
    case 2:
      weekdayText2 = 'Tuesday';
      return weekdayText2;
    case 3:
      weekdayText2 = 'Wednesday';
      return weekdayText2;
    case 4:
      weekdayText2 = 'Thursday';
      return weekdayText2;
    case 5:
      weekdayText2 = 'Friday';
      return weekdayText2;
    case 6:
      weekdayText2 = 'Saturday';
      return weekdayText2;
    default:
      weekdayText2 = '';
      return weekdayText2;
  }
}

const data2 = new Date('1991-09-18 23:53:00')
const weekday2 = data2.getDay()
const weekdayText2 = getweekdayText2(weekday2)

console.log(weekday2, weekdayText2)

const student = {
  firstName: 'Filipe',
  surname: 'Gomes',
  age: 29,
  address: {
      street: 'Av. Ayrton Senna',
      number: 369
  }
};

// Destructuring assignment
const {firstName, surname, age, address: {street, number}} = student;
console.log(firstName, surname, age, street, number);

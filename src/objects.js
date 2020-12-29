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
const names = ['Boby', 'Wendy', 'Anna', 'John', 'Marie', 'Wendy']
// Index start at zero
console.log(names[1])

for (const el of names) {
  console.log(el)
}

names.push('Wendy')
console.log(names.length)

const findName = names.findIndex(el => el === 'Wendy')
names.splice(2, 1)
console.log(names)
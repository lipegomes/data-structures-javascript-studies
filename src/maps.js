const resultData = new Map()

resultData.set('avarage', 1.69)
resultData.set('lastResult', null)

const brazil = {name: 'Brazil', population: 212}

resultData.set(brazil, 0.69)
for (const el of resultData) {
  console.log(el)
}

resultData.set('average', 28.77)
console.log(resultData)

console.log(resultData.get('average'))
console.log(resultData.average)

resultData.delete({name: 'Brazil', population: 212})
console.log(resultData)

const ids = new Set()

ids.add('Violin')
ids.add('Song')
ids.add(2)
ids.add('Rachmaninoff')
ids.add(2)

for (const el of ids) {
  console.log(el)
}

// console.log(ids[1])
console.log(ids.has('Song'))

ids.delete(2)

console.log(ids)

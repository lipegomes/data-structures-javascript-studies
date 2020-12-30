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

const array = [1, 2, 3]
array.push(4)
array[0] = 'Filipe'
console.log(array)
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for of
for (let numero of numeros) {
  if (numero === 2) {
    console.log("Pulei o numero 2")
    continue
  }

  console.log(numero)

  if (numero === 7) {
    console.log("7 encontrado, saindo...")
    break
  }
}

console.log("---- **** ----")

// for of
for (let i of numeros) {
  let numero = numeros[i]

  if (numero === 2) {
    console.log("Pulei o numero 2")
    continue
  }

  console.log(numero)

  if (numero === 7) {
    console.log("7 encontrado, saindo...")
    break;
  }
}

console.log("---- **** ----")

// while
let i = 0;
while (i < numeros.length) {
  let numero = numeros[i]

  if (numero === 2) {
    console.log("Pulei o numero 2")
    i++
    continue
  }

  console.log(numero)

  if (numero === 7) {
    console.log("7 encontrado, saindo...")
    i++
    break
  }

  i++
}

console.log("---- **** ----")

// do while
let n = 0
do {
  let numero = numeros[n]

  if (numero === 2) {
    console.log("Pulei o numero 2")
    n++
    continue
  }

  console.log(numero);

  if (numero === 7) {
    console.log("7 encontrado, saindo...")
    n++
    break
  }

  n++
} while (n < numeros.length);

const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [firstNum, secondNum, ...rest] = num1
console.log(firstNum, secondNum)
console.log(rest)

const num2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(num2[2][1]);

const num3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [, [, , six]] = num3;
console.log(six);

const num4 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [list1, list2, list3] = num4
console.log(list3);
console.log(list3[0])

const nome = ['Marie', 'Leclarier', 'Austin']

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i])
}

for (let i in nome) {
  console.log(nome[i])
}


for (let valor of nome) {
  console.log(valor);
}

nome.forEach(function (valor, indice, array) {
  console.log(valor, indice, array)
})

const animeCharacter = ['Monkey', 'D.', 'Luffy']

for (let i = 0; i < animeCharacter.length; i++) {
  console.log(animeCharacter[i])
}

for (let i in animeCharacter) {
  console.log([i])  // return indexes
  console.log(animeCharacter[i])  // returns the name
}

for (let valor of animeCharacter) {
  console.log(valor)
}

animeCharacter.forEach(function (valor, indice, array) {
  console.log(valor, indice, array);
})

const teacher = {
  name: 'Eikichi',
  surname: 'Onizuka'
}

for (let key in teacher) {
  console.log(key, teacher[key]);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for of
for (let numero of numeros) {
  if (numero === 2) {
    console.log("Pulei o numero 2")
    continue
  }

  console.log(numero)

  if (numero === 7) {
    console.log("7 encontrado, saindo...")
    break;
  }
}

console.log("---- **** ----")

// for of
for (let i of numeros) {
  let numero = numeros[i]

  if (numero === 2) {
    console.log("Pulei o numero 2")
    continue
  }

  console.log(numero)

  if (numero === 7) {
    console.log("7 encontrado, saindo...")
    break
  }
}

console.log("---- **** ----")

// while
let i = 0
while (i < numeros.length) {
  let numero = numeros[i]

  if (numero === 2) {
    console.log("Pulei o numero 2")
    i++
    continue
  }

  console.log(numero)

  if (numero === 7) {
    console.log("7 encontrado, saindo...")
    i++
    break
  }

  i++
}

console.log("---- **** ----")

// do while
let n = 0
do {
  let numero = numeros[n]

  if (numero === 2) {
    console.log("Pulei o numero 2")
    n++
    continue
  }

  console.log(numero)

  if (numero === 7) {
    console.log("7 encontrado, saindo...")
    n++
    break
  }

  n++
} while (n < numeros.length)

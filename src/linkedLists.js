// const n1 = {
//   data: 100
// }

// const n2 = {
//   data: 200
// }

// n1. next = n2

// console.log(n1)


class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

// const n1 = new Node(100)
// console.log(n1)

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head)
    this.size++
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data)
    let current

    // If empty, make head
    if(!this.head) {
      this.head = node
    } else {
      current = this.head

      while(current.next) {
        current = current.next
      }

      current.next = node
    }

    this.size++
  }
  // Insert at index
  insertAt(data, index) {
    // If index is out of range
    if(index > 0 && index > this.size) {
      return
    }

    // If first index
    if(index === 0) {
      this.head = new Node(data, this.head)
      return
    }

    const node = new Node(data)
    let current, previous

    // Sey current to first
    current = this.head
    let count = 0

    while(count < index) {
      previous = current  // Node before index
      count++
      current = current.next  // Node after index
    }

    node.next = current
    previous.next = node

    this.size++
  }

  // Get at index
  getAt(index) {
    let current = this.head
    let count = 0

    while(current) {
      if(count == index) {
        console.log(current)
      }
      count++
      current = current.next
    }

    return null
  }

  // Remove at index
  removeAt(index) {
    if(index > 0 && index > this.size) {
      return
    }

    let current = this.head
    let previous
    let count = 0

    // Remove first
    if(index === 0) {
      this.head = current.next
    } else {
      while(count < index) {
        count++
        previous = current
        current = current.next
      }

      previous.next = current.next
    }

    this.size--
  }

  // Clear list
  clearList() {
    this.head = null
    this.size = 0
  }

  // Print list data
  printListData() {
    let current = this.head

    while(current) {
      console.log(current.data)
      current = current.next
    }
  }
}

const ll = new LinkedList()

ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)

ll.insertLast(400)
ll.insertLast(500)
ll.insertLast(600)
ll.insertLast(700)
ll.insertLast(800)
ll.insertLast(900)
ll.insertLast(1000)

// ll.insertAt(1100, 2)

ll.removeAt(3)
ll.removeAt(0)

ll.clearList()

ll.printListData()

// ll.getAt(7)

class LinkedList2 {
  constructor() {
    this.head = null  // First element of the list
    this.tail = null  // Last element of the list
  }

  append(value) {
    const newNode = {value: value, next: null}
    if (this.tail) {
      this.tail.next = newNode
    }
    this.tail = newNode
    if (!this.head) {
      this.head = newNode
    }
  }

  toArray() {
    const elements = []

    let curNode = this.head
    while (curNode) {
      elements.push(curNode)
      curNode = curNode.next
    }

    return elements
  }
}

const linkedList3 = new LinkedList2()
linkedList3.append('Nikola Tesla')
linkedList3.append(1914)
linkedList3.append('Volvo')
linkedList3.append('Duque')
linkedList3.append(false)
linkedList3.append(null)
linkedList3.append('Engineer')

console.log(linkedList3.toArray())

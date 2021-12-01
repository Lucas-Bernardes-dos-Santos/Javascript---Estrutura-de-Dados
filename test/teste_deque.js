const Deque = require('../model/Deque')
const deque = new Deque.Deque()

console.log(`Deque está vazio? ${deque.isEmpty()}.\n`)

for (let i = 0; i < 5; i++) {
  deque.addBack(i)
}

console.log(`Elementos do deque: ${deque.toString()}`)

console.log(`Existem ${deque.size()} elementos no Deque.`) 

for (let i = 0; i < 5; i++) {
  deque.addFront(i)
}

console.log(`Elementos do deque: ${deque.toString()}`)

console.log(`O primeiro elemento do Deque é ${deque.front()}`)

console.log(`O último elemento do Deque é ${deque.back()}`)

console.log(`Existem ${deque.size()} elementos no Deque.`)
const Queue = require('../model/Queue')
const queue = new Queue.Queue()

console.log(`Vazia? ${queue.isEmpty()}`)

console.log(`Lucas, Ana, Thiago entraram respectivamente na fila, respectivamente.`)
queue.enqueue('Lucas')
queue.enqueue('Ana')
queue.enqueue('Thiago')

console.log(`Fila atual: ${queue.toString()}\n`)

queue.dequeue()
queue.dequeue()
console.log(`A fila andou duas posições.Fila Atual: ${queue.toString()}\n`);

console.log(`Chegaram Mariana, Rodrigo, Luiza respectivamente na fila, respectivamente.`)
queue.enqueue('Mariana')
queue.enqueue('Rodrigo')
queue.enqueue('Luiza')

console.log(`Fila atual: ${queue.toString()}`)
console.log(`Tamanho atual da filha: ${queue.size()}\n`);

queue.clear()
console.log(`Fila foi esvaziada: ${queue.toString()}`)
import LinkedList from '../model/Linked List.js'

const ListaEncadead = new LinkedList()

console.log(ListaEncadead.isEmpty())

ListaEncadead.push(0)
ListaEncadead.push(1)
ListaEncadead.push(2)
ListaEncadead.push(3)
ListaEncadead.push(4)

console.log(ListaEncadead.removeAt(3))
console.log(ListaEncadead.removeAt(0))

console.log(ListaEncadead.getNodeAt(0))
console.log(ListaEncadead.getNodeAt(1))
console.log(ListaEncadead.getNodeAt(2))

console.log(ListaEncadead.pushAt(0, 0))
console.log(ListaEncadead.pushAt(3, 3))
console.log(ListaEncadead.pushAt(5, 5))
console.log(ListaEncadead.pushAt(1.5, 2))

console.log(ListaEncadead.indexOf(1.5))
console.log(ListaEncadead.indexOf(0))
console.log(ListaEncadead.indexOf(5))

console.log(ListaEncadead.toString());

console.log(ListaEncadead.remove(1.5))
console.log(ListaEncadead.remove(5))

console.log(ListaEncadead.size())
console.log(ListaEncadead.isEmpty())
console.log(ListaEncadead.getHead())

ListaEncadead.clear()
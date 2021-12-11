const Node = require('./Node')

function LinkedList() {
  // Atributos Privados
  let count = 0
  let head = undefined

  //#region Métodos Públicos
  this.equals = (_a, _b) => _a === _b

  this.push = _element => {
    const node = new Node.Node(_element)
    let current = node

    if(head === undefined) {
      head = node
    }
    else {
      current = head
      while(current.next != undefined){
        current = current.next
      }
      current.next = node
    }
    count++
  }

  this.removeAt = _index => {
    if(_index >= 0 && _index < count) {
      let current = head

      // Removendo o primeiro Item
      if(_index === 0) {
        head = current.next
      } 
      else {
        let previous
        for (let i = 0; i < _index; i++) {
          previous = current
          current = current.next
        }
        // Faz a ligação do previous com o current.next, pois o current será deletado
        previous.next = current.next
      }
      count--
      return current.element
    }
    return undefined
  }

  this.getNodeAt = _index => {
    if(_index >= 0 && _index < count){
      let node = head

      for (let i = 0; i < _index && node != null; i++) {
        node = node.next    
      }
      return node
    }
    return undefined
  }

  this.pushAt = (_element, _index) => {
    if(_index >= 0 && _index <= count) {
      const node = new Node.Node(_element)

      if(_index === 0){
        let current = head
        node.next = current
        head = node
      }
      else {
        let previous = this.getNodeAt(_index - 1)
        let current = previous.next
        node.next = current
        previous.next = node
      }
      count++
      return true
    }
    return false
  }
  //#endregion
}

const ListaEncadead = new LinkedList()

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
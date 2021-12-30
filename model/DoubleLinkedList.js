const DoubleNode = require('./DoubleNode')

function DoubleLinkedList() {
  // Atributos Privados
  let count = 0
  let head = new DoubleNode.DoubleNode()
  let tail = new DoubleNode.DoubleNode()

  //#region Métodos Públicos
  this.equals = (_elementA, _elementB) => _elementA === _elementB

  this.push = _element => {
    const doubleNode = new DoubleNode.DoubleNode(_element)
    let current = doubleNode

    if(head.element === undefined) {
      head = doubleNode
      tail = doubleNode
    }
    else {
      tail.next = doubleNode
      doubleNode.previous = tail
      tail = doubleNode
    }
    count++
  }

  this.pushAt = (_index, _element) => {
    if(_index >= 0 && _index <= count) {
      // Criando um nó com o elemento passado
      const doubleNode = new DoubleNode.DoubleNode(_element)

      // Recebendo o endereço do primeiro elemento
      let current = head

      // Caso o novo elemento vá ser inserido na início da lista
      if(_index === 0){
        // Se head estiver vazio
        if(head.element === undefined) {
          head = doubleNode
          tail = doubleNode
        }
        // Caso head não esteja vazio
        else { 
          doubleNode.next = head
          current.previous = doubleNode
          head = doubleNode
        }
      }
      // Caso o novo elemento vá ser inserido no final da lista
      else if(_index === count) {
        current = tail
        current.next = doubleNode
        doubleNode.previous = current
        tail = doubleNode
      }
      // Caso o novo elemento vá ser inserido no meio da lista
      else {
        // Pegando o endereço da posição anterior a onde o novo elemento será inserido
        let aux_previous = this.getNodeAt(_index - 1)
        // Pegando o elemento a frente, local a onde o novo elemento será inserido
        current = aux_previous.next 

        doubleNode.next = current // O novo elemento.next está agora apontando para o elemento a frente
        doubleNode.previous = aux_previous // O novo elemento.previous está agora apontando para o elemento de trás

        current.previous = doubleNode // O elemento que current.previous agora recebe aponta para novo elemento
        aux_previous.next = doubleNode // O elemento aux_previous.next agora aponta para novo elemento
      }
      count++
      return true
    }
    return false
  }

  this.removeAt = _index => {
    if(_index >= 0 && _index <= count) {
      let current = head

      // Remover o primeiro elemento
      if(_index === 0) {
        head = current.next

        // Caso haja apenas um elemento na lista
        if(count === 1) {
          tail = undefined
        }
        else {
          head.previous = undefined // Como o primeiro foi removido o próximo elemente se tornará o primeiro e seus previous deixará de apontar para o antigo head
        }
      }
      // Remover o último elemento da lista
      else if(_index === count - 1) {
        current = tail
        tail = current.previous
        tail.next = undefined
      }
      // Remover um elemento no meio da lista
      else {
        current = this.getNodeAt(_index)
        let aux_previous = current.previous

        // Vai fazer a ligação do aux_previous com o current.next
        aux_previous.next = current.next
        current.next.previous = aux_previous
      }
      count--
      return current
    }
    return undefined
  }

  this.getNodeAt = _index => {
    if(_index >= 0 && _index < count){
      let doubleNode = head

      for (let i = 0; i < _index && doubleNode != null; i++) {
        doubleNode = doubleNode.next    
      }
      return doubleNode
    }
    return undefined
  }

  this.indexOf = _element => {
    let current = head
    for (let i = 0; (i < count) && (current != null); i++) {
      if(this.equals(_element, current.element)) {
        return i
      }    
      current = current.next
    }
    return -1
  }

  this.remove = _element => {
    let index = this.indexOf(_element)
    return this.removeAt(index)
  }

  this.size = () => count

  this.isEmpty = () => this.size() === 0

  this.getHead = () => head

  this.clear = () => {
    while(head != null) {
      this.remove(head.element)
    }
  }

  this.toString = () => {
    if(head.element === undefined) {
      return ''
    }

    let objString = `${head.element}`
    let current = head.next
    while(current != null) {
      objString = `${objString} - ${current.element}`
      current = current.next
    }
    return objString
  }
  //#endregion
}
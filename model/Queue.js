function Queue() {
  // Atributos Privados
  let count = 0
  let first = 0
  let items = {}

  //#region Métodos Publicos
  this.enqueue = _element => {
    items[count] = _element
    count++
  }

  this.dequeue = () => {
    if (this.isEmpty()) {
      return undefined
    }

    let result = items[first]
    delete items[first]
    first++
    return result
  }

  this.isEmpty = () => this.size() === 0

  this.front = () => {
    if (this.isEmpty()) {
      return undefined
    }

    return items[first]
  }

  this.size = () => count - first

  this.clear = () => {
    if (this.isEmpty()) {
      return 'Pilha já está vazia'
    }

    while(!this.isEmpty()){
      this.dequeue()
    }
  }

  this.toString = () => {
    if (this.isEmpty()) {
      return ''
    }

    let objString = `${items[first]}`

    for (let i = first + 1; i < count; i++) {
      objString = `${objString} - ${items[i]}`
    }
    return objString
  }
  //#endregion
}

module.exports = {
  Queue
}
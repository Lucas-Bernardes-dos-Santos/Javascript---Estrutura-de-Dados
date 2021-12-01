function Stack() {
  // Atributos Privados
  let count = 0
  let items = {}

  //#region Métodos Públicos
  this.push = _element => {
    items[count] = _element
    count++
  }

  this.pop = () => {
    if(this.isEmpty()){
      return undefined
    }
    
    this.count--
    let result = items[count]
    delete items[count]
    return result
  }

  this.size = () => count

  this.isEmpty = () => count === 0

  this.peek = () => {
    if(this.isEmpty()){
      return undefined
    }

    return items[count - 1]
  }

  this.clear = () => {
    if(this.isEmpty()){
      return 'Pilha está vazia'
    }

    while(!this.isEmpty()) {
      this.pop()
    }
  }

  this.toString = () => {
    if(this.isEmpty()) {
      return ''
    }
    
    let objString = `${items[0]}`

    for(let i = 0; i < count; i++){
      objString = `${objString}${items[i]}`
    }

    return objString
  }
  //#endregion
}

module.exports = {
  Stack
}
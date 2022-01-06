export default function Deque() {
  // Atributos Privados
  let count = 0
  let first = 0 
  let items = {}

  //#region  Métodos Públicos
  this.addFront = _element => {
    if(this.isEmpty()) {
      this.addBack(_element)
    }
    else {
      first--
      items[first] = _element
    }
  }

  this.addBack = _element => {
    items[count] = _element
    count++
  }

  this.removeFront = () => {
    if (this.isEmpty()) {
      return undefined
    }

    let result = items[first]
    delete items[first]
    first++
    return result
  }

  this.removeBack = () => {
    if(this.isEmpty()){
      return undefined
    }
    
    count--
    let result = items[count]
    delete items[count]
    return result
  }

  this.clear = () => {
    if(this.isEmpty()){
      return 'Pilha está vazia'
    }

    while(!this.isEmpty()) {
      this.removeBack()
    }
  }

  this.isEmpty = () => this.size() === 0

  this.size = () => {
    if(first >= 0) {
      return count - first
    }
    else {
      return (first * -1) + count
    }
  }

  this.front = () => {
    if (this.isEmpty()) {
      return undefined
    }
    return items[first]
  }

  this.back = () => {
    if(this.isEmpty()){
      return undefined
    }
    return items[count - 1]
  }

  this.toString = () => {
    if(this.isEmpty()) {
      return ''
    }
    
    let objString = `{${items[first]}}`

    for(let i = first + 1; i < count; i++){
      objString = `${objString} - {${items[i]}}`
    }
    return objString
  }
  //#endregion
}
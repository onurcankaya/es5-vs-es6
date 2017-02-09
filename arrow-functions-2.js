// Currying
var knight = function(name) {
  return function(weapon) {
    return function(element) {
      return function(weakness) {
        return name + ' uses a ' + weapon + ' made of ' + element + ' but you can stop him with a ' + weakness
      }
    }
  }
}

console.log(knight('Onur')('sword')('fire')('shawarma'))

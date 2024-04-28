function print(variable) {
  const c = 3
  return function(var2){
    console.log(variable)
    console.log(var2)
    console.log(c)
  }
}

const a = print(1)
a(2)
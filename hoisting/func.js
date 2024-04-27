printHello()
printDillion()
// ReferenceError: printDillion is not defined

function printHello() {
  console.log('hello')
  printDillion()

  function printDillion() {
    console.log("dillion")
  }
}
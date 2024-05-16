const set = new Set([1, 2, 3,4, 4, 4 ])
set.add(5)
set.add(2)

console.log(set)
console.log(set.has(3))
console.log(set.has(4))
set.forEach(val => console.log(val))

set.delete(3)
console.log(set)

set.clear()
console.log(set)


function removeDuplicates(array) {
  return [...new Set(array)]
}

console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 5, 8, 9, 9]))
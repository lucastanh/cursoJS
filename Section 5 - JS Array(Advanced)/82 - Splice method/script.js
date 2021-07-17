// The splice() method adds/removes items to/from an array, and returns the removed item(s) in a array .
// Note: This method changes the original array.
// Syntax: array.splice(index, howmany, item1, ....., itemX)
// index --- Required. An integer that specifies at what position to add/remove items.
// howmany --- Optional. The number of items to be removed. If set to 0, no items will be removed.
// item1, ..., itemx --- Optional. The new item(s) to be added to the array


//               -6        -5            -4           -3       -2          -1       
//                0         1             2            3        4           5
const names = ['Lucas', 'Vinicius', 'Castanheiro', 'Maria', 'Sebastião', 'Carla']
// const removeds1 = names.splice(1, 1); // removed ['Vinicius']
// const removeds2 = names.splice(-4, 2); // removed ['Castanheiro', 'Maria]
const removeds3 = names.splice(2, 0, 'Jéssica') // added 'Jéssica' on index 2
// const removeds4 = names.splice(3, 1, 'Jéssica', 'Jõao') // remove 'Maria' and added 'Jéssica' on index 3
// names.splice(0, 0, 'Laercio')
console.log(names)

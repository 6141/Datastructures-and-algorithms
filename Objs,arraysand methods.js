// when we use Objects
// * no order 
// * need faster access insertion/removal
// less space complexity, less time complexity
// insertion, access, removal - O(1)
// searching - O(n)

// Objects.keys(), Object.values(), Object.entries() -- O(n)
// hasOwnProperty-O(1)


// Arrays
// Ordered Data
// insertion removal -- depends
// searching - O(n)
// Access - O(1)
// adding item on the end - O(1) as only last element should be created
// adding/removing at the beginning - every single item should be re indexing - O(n)
// push/pop is fast than shift/unshift
// time complexities
// Methods of Arrays
// push/pop - O(1)
// shift/unshift/concat/slice/splice - O(n)
// sort - O(n* log n)
// foreach/map/reduce/filter - O(n)
/**
 * Garbage collection (GC) is a form of automatic memory management. 
 * The garbage collector attempts to reclaim memory which was allocated by the program, 
 * but is no longer referenced; such memory is called garbage. 
 * Garbage collection relieves the programmer from doing manual memory management, 
 * where the programmer specifies what objects to de-allocate and return to the memory system and when to do so.
 * Garbage Collection is process of reclaiming the runtime unused memory automatically. 
 * In other words, it is a way to destroy the unused objects.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management
 */


let x = {
  a: {
    b: 2,
  },
};
// 2 objects are created. One is referenced by the other as one of its properties.
// The other is referenced by virtue of being assigned to the 'x' variable.
// Obviously, none can be garbage-collected.

let y = x;
// The 'y' variable is the second thing that has a reference to the object.

x = 1;
// Now, the object that was originally in 'x' has a unique reference
// embodied by the 'y' variable.

let z = y.a;
// Reference to 'a' property of the object.
// This object now has 2 references: one as a property,
// the other as the 'z' variable.

y = "John";
// The object that was originally in 'x' has now zero
// references to it. It can be garbage-collected.
// However its 'a' property is still referenced by
// the 'z' variable, so it cannot be freed.

z = null;
// The 'a' property of the object originally in x
// has zero references to it. It can be garbage collected.
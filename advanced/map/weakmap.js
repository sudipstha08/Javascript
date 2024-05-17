// In a Weak Map, every key can only be an object and function. It used to store weak object references.
// WeakMaps are not iterable.
// The garbage collector doesn’t remove a key pointer from “Map” and also doesn’t remove the key from memory.	The garbage collector goes ahead and removes the key pointer from “WeakMap” and also removes the key from memory. WeakMap allows the garbage collector to do its task but not the Map.
const wm1 = new WeakMap();
const wm2 = new WeakMap();
const wm3 = new WeakMap();
const o1 = {};
const o2 = function () {};
const o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // a value can be anything, including an object or a function
wm2.set(o2, undefined);
wm2.set(wm1, wm2); // keys and values can be any objects. Even WeakMaps!

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined, because that is the set value
wm2.get(o3); // undefined, because there is no key for o3 on wm2

wm1.has(o2); // true
wm1.has(o2); // true (even if the value itself is 'undefined')
wm1.has(o3); // false

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false

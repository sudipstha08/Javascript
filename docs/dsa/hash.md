## Hash Table

- A `hash table` is a data structure that stores key-value pairs. 
- It offers efficient insertion, deletion, and retrieval operations, making it suitable for use cases where quick access to data based on a key is required.
- Hash tables offer average-case constant-time complexity (O(1)) for insertion, deletion, and retrieval operations, making them efficient for many applications, including dictionary implementations, caches, symbol tables, and more. However, the performance of hash tables depends on the quality of the hash function and the chosen collision resolution strategy. A good hash function should distribute keys evenly across the array to minimize collisions and maintain performance.
  
- Hash Table consists of
  - `Hash Function`: A hash function is used to map keys to indices in an array. It takes a key as input and computes a hash code, which is typically an integer value. The hash code determines the index where the key-value pair will be stored in the array.
  - `Array`: The hash table internally consists of an array (often referred to as a hash table array or simply hash array) with a fixed or dynamically resizable size.
  - `Collision Handling`: Since different keys may produce the same hash code (known as a collision), hash tables employ collision resolution techniques to handle collisions. Common collision resolution methods include chaining (using linked lists or other data structures to store multiple values at the same index) and open addressing (probing or searching for alternative locations within the array).
  - `Key-Value Storage`: Each entry in the hash table array typically stores both a key and its corresponding value. When inserting a new key-value pair, the hash function is used to determine the index where the pair should be stored. If a collision occurs, the collision resolution strategy is applied to resolve it.







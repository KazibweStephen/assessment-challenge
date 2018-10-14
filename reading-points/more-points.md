Data Stru. & Algorithms.

Algorithms
Searches
* Linear Search: 
    * Sequentially check each element in a data structure until you find the target 
    * Best for small datasets and unsorted data
    * Slower than Binary
    * O(n)  

* Binary Search: 
    * Search a sorted dataset by comparing the target with the middle point. This comparison eliminates half of the set, and we do it recursively until we get to the target 
    * O(log n) since it halves the set at every iteration 
    * Faster than Linear
    * Uses 
        * Git bisect 


* Breadth-First search: 
    * Traverse a tree or graph like data structure by exploring all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level. 
    * O(|v| + |e|) where v is the number of vertices and e is the number of edges  

* Depth First Search 
    * Traverse a tree or graph like data structure by starting at the root node and traversing as far as possible left or right to deeper levels before backtracking. 
    * In-Order 
        * Left, Root, Right 
    * Pre-Order 
        * Root, Left, Right 
    * Post-Order 
        * Left, Right, Root 


* Dijkstra's
    * An algorithm for finding the shortest paths between nodes in a graph 
    * Start with some vertex, figure out distance to neighbors, visit the nearest. Update that. Check the neighbors, then if the tentative distance is less than what was assumed, we visit. Do that until we find the goal. That will be the shortest path 
    * A limitation though is that it treats the weights of the vertices as the absolute source of truth. It does not take into account the direction, only the shortest path  


Data Structures - Anything that can store data
2 Categories 	- Primitive, 
			 -Abstract
				- Linear data structures (sequential, element related to previous and next element, traversed one after the other, easy to implement, can be traversed in single run)
						linked lists, array, stack, queue
				- Non-linear data structures (not sequential, elements related to one or more, can’t be traversed in 1 run, diffifcult, effective mem utulization)
						graphs, tress

Binary Trees: 
* A tree is a collection of nodes, that are connected by edges. A node with no parent is the root of the tree.
* A binary tree is a tree, where the nodes have at most two children. A binary tree has a  left and right child.
* Advantages of a binary tree:
    * They reflect structural relationship in the data.
    * They represent hierarchies.
    * Provide efficient insertion and searching.
* Some of the uses are, it can be used to implement a dictionary and also can be used to implement multilevel indexing in a database. 
B-Tree: 
* Like a binary search tree, except each node can have more than two children 
* Because tree operations are usually dependent on the height of the tree, B-Tree tries to keep the height low 
* This makes it well suited for storage systems that read and write relatively large blocks of data, such as discs 
* Uses: 
    * Databases 
    * File systems 
 
Heaps: 
* A binary heap is a complete binary tree which satisfies the heap ordering property: 
    * Min-heap: the value of each node is greater than or equal to the value of its parent, with the minimum-value element at the root. 
    * Max-heap: the value of each node is less than or equal to the value of its parent, with the maximum-value element at the root. 
* In a heap, the lowest or highest priority  element is always stored at the root, and it is useful when implementing a priority queue.
* It is useful when you want to remove the object with the highest or lowest priority. 

Graphs: 
* A non linear data structure, that contains nodes that are connected by edges.
* Graph can either be Directed or Undirected
    * Undirected graphs have edges that do not have a direction. The edges indicate a two-way relationship.
    * Directed graphs have edges with direction. The edges indicate a one-way relationship.
* Uses 
    * Represent a network of not necessarily hierarchical data, e.g. cities and roads network, computer network, social network (fb , LinkedIn)  
The best data structure for any given situation will often be determined by the kind of data being stored, and which kind of operations we'll be doing on the data more frequently. Different structures trade one thing, like insertion speed, for another, like lookup speed.









OOP

Principles 
* Abstraction  
    * no need to know the implementation details to use it  
* Encapsulation  
    * ability to hide and reveal implementation details as desired 
* Inheritance 
    * classes/objects derived from other classes 
* Polymorphism  
    * The ability to treat objects of different types uniformly as long as they adhere to the same interface  
https://dev.to/kayis/is-react-solid-630
https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa

SOLID: 
* Single Responsibility Principle
    1. The principles states that a module or a class should be able to accomplish one task. Also when a class or module is changed, it should not break any other module or class that depends/inherits it.
    2. A class should only have a single responsibility
    3. eg. Splitting a complex component into smaller components to each handle single tasks. 
* Open-closed Principle
    1. This principle states that a class/ module should be open to extension but not modification.
    2. Extend it without modifying its source code.
    3. eg. Extending RN Button to create CustomButton
    4. An example illustrating this principle is, a method that writes to a file, but has the file in question hard coded in it, this means that the method cannot be used by another class if that class wanted to write to another file. The ideal situation would be that the method takes a parameter that is the file name and writes to that specific file. The software written should be able to change the behaviour without the need to rewrite and recompile the code itself. 
* Liskov substitution principle
    1. This principle is based on inheritance in OOP. It states that the inheriting class should not be in violation of the base class invariants.
    2. Every subclass/derived class should be substitutable for their base/parent class.
    3. eg. CustomButton and Button.
    4. An example of this is when class rectangle which requires parameters length and width and have a class square which inherits from the rectangle class, in as much as the square IS-A special type of  rectangle, we have to set the length or width once either is set. Length should never not be equal to Width, this clearly violates the base class(rectangle) invariant. 
* Interface Separation Principle
    1. This principle states that clients should never be dependent on classes/modules that it does not require.
    2. Many client-specific interfaces are better than one general-purpose interface.
    3. An example of violation of this principle is, a login client which utilizes an interface with functionality like login, logout, register and forgot password, is not correct, as the login client only works with the login and logout functionality, the interface it depends on should only contain login and logout functionality. 
* Dependency Inversion Principle
    1. This principle states that a higher level module should not depend on lower level modules/submodules but rather should depend on abstractions.
    2. High level modules which have logic should not be affected by lower level modules. 

 


Discrete Math

Proof by induction:

* A clear use of the proof of induction is the Fibonacci sequence that is used to show exponential growth over time. It is a recursive algorithm, and is used in the study of recursion. 

Proof by induction It is an ordinary proof whereby every step must be justified. It employs a neat trick where you solve for an arbitrary number, n by first proving it is true when n is 1 and assuming it is true when n is k. A simple example is  in a line of closely arranged dominoes, if the first  domino falls, then all the dominoes will fall because if any one domino falls, it means that the next domino will fall, too. 

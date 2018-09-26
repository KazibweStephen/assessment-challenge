## Learning Points
### Idempotent
Idempotence is sometimes a confusing concept, at least from the definition.

Here is the confusing definition:
> Idempotence, in programming and mathematics, is a property of some operations such that no matter how many times you execute them, you achieve the same result.

For an operation (or service call) to be idempotent, clients can make that same call repeatedly while producing the same results. Re running the same call over and over does not change the state of the resource.

e.g Updating the DB with the same DELETE call multiple times, only the first call takes effect.

Idempotency is important in building a fault-tolerant API. Suppose a client wants to update a resource through POST. Since POST is not a idempotent method, calling it multiple times can result in wrong updates.

### Multiple Inheritance
Multiple inheritance is a feature of some object-oriented computer programming languages in which an object or class can inherit characteristics and features from more than one parent object or parent class.

A perfect example of Multiple Inheritance in real world would be dogs. Let's take for example `Living Creatures`, `Dog` and a `Living Dog`.
The Living Creature has methods like:
 - Grow()
 - Eat()

 The Dog has methods like:
  - Bark()
  - WalkOnFour()

So, the Living Dog it will inherit from both `Living Creature` and `Dog` to create `LivingDog` which will then have all of the above methods which define a Dog 🐶.


Multiple inheritance is useful in the case of an adapter pattern. It allows for one interface to be adapted by another.
> Adapter Pattern is a software design pattern that allows the interface of an existing class to be used as another interface.

However, there are some drawbacks associated with multiple inheritance. Multiple inheritance would need the awareness of dependencies, especially related to method selections. It also  increases ambiguity and complexity when not designed or implemented properly.

JavaScript does not offer multiple inheritance out of the box.
Probably asking why?
> Javascript is not a [class-based object-oriented](https://en.wikipedia.org/wiki/Class-based_programming) language , but rather a [prototypal](https://en.wikipedia.org/wiki/Prototype-based_programming) one. It's simply a design decision.


However, [Mixins](https://en.wikipedia.org/wiki/Mixin) can be used in javascript to achieve the same goal you probably want to solve via multiple inheritance at the moment.

You can also check out this amazing piece on MDN Web Docs about [Prototypal inheritance](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance) in JavaScript. Amazing resource on implementing inheritance in JavaScript.


### Interfaces

In software development, an interface is a structure that enforces specific properties on an object, in most languages this object is a class. An interface defines the behavior an object will have, but it will not actually specify the behavior

> Interface generally defines the set of methods, that an instance of a class that has that interface could respond to.

An interface is similar to a class, it's a collection of abstract methods, a class implements an interface, thereby inheriting the abstract methods of the interface.

I found this amazing analogy of Interfaces on [StackOverflow](https://stackoverflow.com/questions/2866987/what-is-the-definition-of-interface-in-object-oriented-programming):
> "Take a look at your television when it is off. Its interface are the buttons it has, the various plugs and the screen. Its semantics and behavior are that it takes inputs (e.g. cable programming) and has outputs (display on the screen, sound, etc.). However, when you look at a TV that is not plugged in, you are projecting your expected semantics into an interface. For all you know, the TV could just explode when you plug it in. However, based on its "interface" you can assume that it won't make any coffee since it doesn't have a water intake." @eliptical-view

An interface is most certainly not a blueprint for a class. A blueprint, by one definition is a "detailed plan of action". An interface promises nothing about an action!

[Implement.js](https://github.com/Jahans3/Implement.js) is a library that attempts to bring interfaces to JavaScript in the form of runtime type-checking.


### Call backs
Callbacks are just the name of a convention for using JavaScript functions. There isn't a special thing called a 'callback' in the JavaScript language, it's just a convention.

> A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. 

Callbacks are often used to continue code execution after an asynchronous operation has completed

Why callbacks? JavaScript is an event driven language. This means that instead of waiting for a response before moving on, JavaScript will keep executing while listening for other events.

For a more practical guide check out [Callback Hell](http://callbackhell.com/).

### Rebase vs Merge
Both of these commands are designed to integrate changes from one branch into another branch. The key difference lies in how this result is achieved.

By merging feature into master, master obtains a new commit, a “merge commit”. A merge commit represents every change that has occurred on feature since it branched from master.
Merging will create a extraneous merge commit every time which can clutter up your Git logs, and make it much more difficult to understand the flow of your project’s history

At a high level, rebasing can be understood as “moving the base of a branch onto a different position”. Think of it like a redo, “I meant to start here”.
What rebase actually does is pluck commits from a branch one by one (chronologically) and re-attach them to a different commit.

Unlike with merging, rebase does not create an extra commit.  This is a major benefit of rebasing since you get a much cleaner project history.

### References
Idempotency
- http://restcookbook.com/HTTP%20Methods/idempotency/

Multiple Inheritance
- https://www.techopedia.com/definition/20883/multiple-inheritance
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance

Interfaces
- https://www.tutorialspoint.com/java/java_interfaces.htm
- https://stackoverflow.com/questions/2866987/what-is-the-definition-of-interface-in-object-oriented-programming
- https://hackernoon.com/implementing-interfaces-in-javascript-with-implement-js-8746838f8caa

Callbacks
- https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
- http://callbackhell.com/
- https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced

Rebase vs Merge
- https://hackernoon.com/git-merge-vs-rebase-whats-the-diff-76413c117333
- https://www.atlassian.com/git/tutorials/merging-vs-rebasing
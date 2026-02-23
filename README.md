## Answers to Questions



#### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?



### Ans : The are differences are given below : 
## getElementById : getElementById can find an element with specific ID from HTML Page to use and an ID must be unique within a page.It can be used only once.
## getElementsByClassName : getElementsByClassName can find all elements with a specific class namae.
## querySelector :querySelector can find from html file or specific section with the first element ID or class name which is given there for matching.if it match with ID or class querySelector can get it and create a Object to give the output.
## querySelectorAll: It can find all matching element with the class and create a NodeList like array to give the output.



#### 2. How do you create and insert a new element into the DOM?


### Ans : At first I Use the document.createElement() method to create the element and second use appendChild() or append() to add the new element as the last child of a parent element.


#### 3. What is Event Bubbling? And how does it work?


### Ans : Event Bubbling is a fundamental concept in JavaScript.When you click a button, the event doesn't just stay on that button.It triggers all of its parent elements."


#### 4. What is Event Delegation in JavaScript? Why is it useful?


### Ans : Event Delegation is a technique where you add one single event listener to a parent element instead of adding many listeners to every individual child element.It works because of Event Bubbling—when a child is clicked, the event "bubbles up" to its parent.



#### 5. What is the difference between preventDefault() and stopPropagation() methods?



### Ans : In simple terms, preventDefault() stops the browser's default action, while stopPropagation() stops the event from bubbling up to parent elements

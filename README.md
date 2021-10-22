# santanderCoders

# Let's Code | Web Full-Stack Degree

# Exercises

## The Matrix

_Let's have some fun practicing what we learned about arrays methods._

*   Make an array of strings that contains whether or not a person can go to The Matrix movie based on the age (> 18 years).
*   **File: matrix.js**

<p align="center">
    <img width="80%" src="https://user-images.githubusercontent.com/86850247/137995695-8525f0b8-494e-49e1-a159-17de9f7d76e5.png">
</p>


## The Voters

_Let's have some fun practicing what we learned about arrays methods._

*   Given a serie of potential electors, return an object that represents the election results with the total number of potential voters and actual total number of votes according to three age ranges: from 18 to 25 years old, from 26 to 35 years old, and from 36 to 55 years old.
*   **File: voters.js**

<p align="center">
    <img width="80%" src="https://user-images.githubusercontent.com/86850247/137993540-28161f86-8a22-4774-bc3f-1131d02f613a.png">
</p>

## The Calculator Module

_A calculator module!_

*   Create a calculator module that has four functions: "enter", "equals", "list", and "reset". The function named "enter" has to register the input number and/or operator. The function named "equals" has to return the operation's result. The function called "list" shows a history of all operations and its results. Finally, the function called "reset" has to clear operation's and its results history.
*   **File: calculator.js**

<p align="center">
    <img width="80%" src="https://user-images.githubusercontent.com/86850247/138005332-cfa73d07-f259-40c0-b12f-9f98d1c975d1.png">
</p>

## Classes (and Polymorphism)

*   Create three classes named "Person", "Teacher", and "Student". Each class should have properties and methods as shown at the image below.
- **File: classes-polymorphism.js**

<p align="center">
    <img width="80%" src="https://user-images.githubusercontent.com/86850247/138019298-5573cf75-445e-476b-8190-9f7846fceaad.png">
</p>

## The Reading List

Exercise obtained from: https://github.com/gSchool/JS-Intro-OOP-Exercises.
*   **File: reading-list.js**

_"An object-oriented book-list!_

*   Create a class `BookList`
*   Create another class called `Book`

*   **BookLists** should have the following properties:
	*   Number of books marked as read
	*   Number of books marked not read yet
	*   A reference to the next book to read (book object)
	*   A reference to the current book being read (book object)
	*   A reference to the last book read (book object)
	*   An array of all the Books
*   Each **Book** should have several properties:
	*   Title
	*  Genre
	*  Author
	*   Read (true or false)
	*   Read date, can be blank, otherwise needs to be a [JS Date() object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
*   Every **Booklist** should have a few methods: 
	* .add(book)
		* should add a **book** to the books list.
	*   .finishCurrentBook()
		*   should mark the **book** that is currently being read as "read"
		*   Give it a read date of new Date(Date.now())
		*   Change the last **book** read to be the book that just got finished
		*   Change the current **book** to be the next book to be read
		*   Change the next **book** to be read property to be the first unread book you find in the list of books

*   **Booklists** and **Books** might need more methods than that. Try to think of more that might be useful."

class Person {
    constructor(firstName, lastName, age, gender, interest) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.interest = interest;
    }

    name() {
        return `${this.firstName} ${this.lastName}`;
    }

    bio() {
        return `{${this.firstName} ${this.lastName} is ${this.age} years old. They like ${this.interests}.`
    }

    greeting() {
        return `Hi! I'm ${this.firstName} ${this.lastName}`
    }
}

class Teacher extends Person {
    constructor(subject) {
        super(subject);

        this.subject = subject;
    }

    greeting() {
        return `Hello! My name is Ms/Mr ${this.lastName}, and I teach ${subject}`
    }
}

class Student extends Person {

    greeting() {
        return `Yo! I'm ${this.firstName}.`
    }
}

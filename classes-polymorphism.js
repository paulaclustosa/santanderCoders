class Person {
    constructor(firstName, lastName, age, gender, interests) {
        this.name = [firstName, lastName];
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    bio() {
        return `${this.name[0]} ${this.name[1]} is ${this.age} years old. He/She likes ${this.interests}.`
    }

    greeting() {
        return `Hi! I'm ${this.name[0]} ${this.name[1]}.`
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, age, gender, interests, subject) {
        super(firstName, lastName, age, gender, interests)

        this.subject = subject;
    }

    greeting() {
        return `Hello! My name is Ms/Mr ${this.name[1]}, and I teach ${this.subject}.`
    }
}

class Student extends Person {

    greeting() {
        return `Yo! I'm ${this.name[0]}.`
    }
}

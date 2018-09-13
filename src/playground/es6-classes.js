class Person {
    constructor (name, age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting () {
        return 'Hi!';
    }
    getName () {
        // return this.name;

        // es6 template strings
        return `Hi I am ${this.name}`;
    }
    getDescription () {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

const o = new Person("Sagar Patni");


// subclasses

class Student extends Person {
    constructor (name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor () {
        return !! this.major;
    }
    getDescription () {
        let parent_desc = super.getDescription();
        return ` test ${parent_desc}`;
    }
}
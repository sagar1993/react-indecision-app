// es5
const square = function (x) {
    return x * x;
};
// es6 they are anonymous needs to be assigned to variable. 
const squareArrow = (x) => {
    return x*x;
}
// another way for arrow functions
const squareArrow1 = (x) => x*x;



// argument object - no longer bound with arrow function.
const add = function(a, b){
    console.log(arguments);
    // to access all the arguments, add(1,10,100) : 100 also can be accessed 
    return a + b;
}
const add = (a, b) => {
    console.log(arguments);
    // arguments not supported error.
    return a + b;
}


// this keyword - no longer bound

const user = {
    name : "Sagar",
    cities: ["Pune", "Tempe"],
    printPlaces: function(){
        console.log(this.cities);
        this.cities.forEach(function (city) {
            console.log(this.name + " " + city);
            // error name not defined
        })
    }
}
//workaround
const user = {
    name : "Sagar",
    cities: ["Pune", "Tempe"],
    printPlaces: function(){
        console.log(this.cities);
        const that = this;
        this.cities.forEach(function (city) {
            console.log(that.name + " " + city);
        })
    }
}
// with arrow function, function uses parents this value
const user = {
    name : "Sagar",
    cities: ["Pune", "Tempe"],
    printPlaces: function(){
        this.cities.forEach((city) => {
            console.log(this.name + " " + city);
        })
    }
}

// error if we changes parent function to arrow, 
// as arrow takes parents this and there's no parent for object
const user = {
    name : "Sagar",
    cities: ["Pune", "Tempe"],
    printPlaces: () => {
        this.cities.forEach((city) => {
            console.log(this.name + " " + city);
        })
    }
}
// es6 object functions
const user = {
    name : "Sagar",
    cities: ["Pune", "Tempe"],
    printPlaces() {
        this.cities.forEach((city) => {
            console.log(this.name + " " + city);
        });
    },
    getNewCities() {
        const newCities = this.cities.map((city)=>{
            return city;
        });
        return newCities;
    },
}



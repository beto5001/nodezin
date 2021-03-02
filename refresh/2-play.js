const person = {
    name: 'Betin',
    age: 21,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
};

const printName = ({name, greet}) => {
    console.log(name);
}

printName(person);

const {name, age} =  person;
console.log(name, age);

const hobbies = ['Sports', 'Cooking', 'Programming', 'Planting'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
function arrayBrinks() {
    for (let hobby of hobbies){
        console.log(hobby);
    }
    
    console.log(hobbies.map(hobby => (hobbies.indexOf(hobby) + 1) + ': ' + hobby));
    console.log(hobbies);
    console.log('------------------------');
    
    hobbies.forEach(function(item, index, array) {
        console.log(index, item);
    });
    
    console.log('last hobby ', hobbies[hobbies.length - 1]);
}

// hobbies.push('Yoging');
// console.log(hobbies);

function copyBrinks() {
    const copiedArray = [...hobbies];
    console.log(copiedArray);
    
    const copiedPerson = {...person}
    console.log(copiedPerson);
}

function spreadingBrinks() {
    
    const toArray = (...args) => {
        return args;
    }
    
    console.log('array', toArray(1, 2, 3, 4, 5, 6));
}
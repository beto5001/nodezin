const name = 'Betin';
let age = 21;
const hasHobbies = true;


function summ(a, b){
    return a + b;
}
//the same thing of:
const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' + 
        userName + 
        ', age is ' + 
        userAge + 
        ' and the user has hobbie: ' + 
        userHasHobby);
}
//the same of:
const add = (a, b) => a + b;
const addOne = a => a + 1;
const addRandom = () => 1 + 2;

console.log(summarizeUser(name, age, hasHobbies));

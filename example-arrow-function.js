// var names = ['Andrew', 'Julie', 'Jen'];
/*
names.forEach(function (name) {
    console.log('forEach', name);
})

names.forEach((name) => {
    console.log('arrowFunc', name);

});

names.forEach((name) => console.log(name));*/
/*
var returnMe = (name) => name + '!';

console.log(returnMe('Alex'));*/

// var person = {
//     name: 'Alex',
//     greet() {
//         names.forEach( (name) => {
//             console.log(this.name + ' says hi to ' + name);
//         });
//     }
// }
//
// person.greet();

// Challenge

function add (a, b) {
    return a + b;
}

var addExpression = (a, b) =>  a + b;

var addStatement= (a, b) => {
    return a + b
};

console.log(addStatement(1, 4));
console.log(addExpression(8, 8));

var nameVar = 'Shane'

var nameVar = "Mike"

console.log('nameVar', nameVar)

let nameLet =  'Jen'

nameLet = 'juli'

console.log('nameLet', nameLet)

const nameConst = 'Frank'


console.log('nameConst', nameConst)


function getPetName(){
    var petName = 'Hal';
    return petName
}


const petName = getPetName();


console.log(petName);

//Const Block Scoping


const fullName = 'Shane Cheek';
let firstName;

if (fullName){
    firstName = fullName.split(' ')[0]

    console.log(firstName)
}

console.log(firstName)












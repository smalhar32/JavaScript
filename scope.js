debugger
const username = 'Anurag'
const userAge = 25
const z = 30;

var a = 40

// Above variables created are global scope

function add() {
    const x = 5;  // Local Scope
    const y = 8; //Local Scope
    console.log(x+y);
    console.log(username);
    
}
function sub() {
    const username = 'Akash'
    const x = 15;
    const y = 18;
    console.log(x-y);
    console.log(username);
    
    function child() {
        const childName = 'Golu';
        console.log(childName);
        console.log(z);
        
    }
    child();
}

add ()
sub()
// console.log(y);
console.log('Program Ended');

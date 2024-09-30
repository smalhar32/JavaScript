const userName = prompt("Enter Name: ");
const userAge = parseInt(prompt("Enter Age: "));

// console.log(`Name: ${userName}`);
// console.log(`Age: ${userAge}`);
// console.log('User is a working professional');

function userInfo(){
    console.log(`Name: ${userName}`);
    console.log(`Age: ${userAge}`);
}

if (userAge >= 18 && userAge <= 26) {
  userInfo();
  console.log("User is a college student");
}
else if (userAge > 26 && userAge <= 60) {
  userInfo();
  console.log("User is a working professional");
}
else if (userAge > 60 && userAge <=100) {
  userInfo();
  console.log("User is retired");
} else {
  userInfo();
  console.log("User info not available");
}


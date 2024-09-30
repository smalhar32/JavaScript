const userName = prompt("Enter Name: ");
const userAge = parseInt(prompt("Enter Age: "));

function userInfo() {
  console.log(`Name: ${userName}`);
  console.log(`Age: ${userAge}`);
}

switch (true) {
  case userAge >= 18 && userAge <= 26:
    userInfo();
    console.log("User is a college student");
    break;
  case userAge > 26 && userAge <= 60:
    userInfo();
    console.log("User is a working professional");
    break;
  case userAge > 60 && userAge <= 100:
    userInfo();
    console.log("User is retired");
    break;
  default:
    userInfo();
    console.log("User info not available");
    break;
}

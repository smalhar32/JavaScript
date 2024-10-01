const myNmae  = "John";

const username1 = ''
const username2 = ''

const user1 = {
  firstName: "Akash",
//   lastName: "Kumar",
//   age: 23,
//   qualification: "Graduate",
};

// nested objects

const user2 = {
    firstName: "Akash",
    lastName: "Kumar",
    address: {
        city:  "Delhi",
        pinCode:  110001,
        State:  "Delhi",
        moreDetails: {
            landmark:  "Near Metro Station",
            area:   "Connaught Place",
        }
    }
    // age: 23,
    // qualification: "Graduate",
  };

// To print object details

//   console.log(user1.firstName);
//   console.log(user2["lastName"]);
//   console.log(user2[myNmae]);
//   console.log(user2["first"+"Name"]);

// To add content in the object from outside the object

user1.age = 23;
user1["is-student"] = true;
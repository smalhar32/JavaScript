const user = {
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
}
// Object.seal(user)
Object.freeze(user)
console.log('firstName' in user);
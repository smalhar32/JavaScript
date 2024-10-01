function countVovel(str){
    let count = 0;   //variable to store the count of vovel
    const vovels = ['a','e','i','o','u','A','E','I','O','U']
    
    //loop through each character in the string
    for (let char of str){
        //check if the character is a vovel
        if (vovels.includes(char)) {
            count++;
        }
    }
    return count;
}
let totalVovels = countVovel('Hii how are you?');
console.log(totalVovels);
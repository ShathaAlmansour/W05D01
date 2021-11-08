  function Palindrome(str) {
    const arr = string.split('');
    const arr = arr.reverse();
    const reverseString = arr.join('');
    if(str == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
const string = prompt('Enter a string: ');
Palindrome(string);


// Teacher
//  function isPalindrome(x) {    
//    const x.toLowerCase().split("").reverse().join("") === x.toLowerCase();
// return x.toLowerCase () === reverse
//   }

// Teacher 
// function isPalindrome (x) {
//     const str = x.toLowerCase () 
//     let length = str.length - 1 
//     for (let i = 0 ; i < str.length ; i++ ) {
//         if (str [i] !== str [length-i]){
//         }
//     }
// return true 
// }
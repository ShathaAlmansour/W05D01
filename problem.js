  function Palindrome(str) {
    const arr = string.split('');
    const arr = arr.reverse();
    const reverseString = reverseArr.join('');
    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
const string = prompt('Enter a string: ');
Palindrome(string);


// function isPalindrome(x) {
     
//     return x.toLowerCase().split('').reverse().join('') === x.toLowerCase();
//   }

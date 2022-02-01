 // Reverse a string
 const str = "Welcome";

 //change it to array by split
 const splitStr = str.split("");

 //Reverse
 const reverseStr = splitStr.reverse();
 //Join
 const joinStr = reverseStr.join("");

 console.log(joinStr);
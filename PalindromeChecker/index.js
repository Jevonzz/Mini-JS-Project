const input = document.getElementById("input");


function reverseString(str){
    return str.split("").reverse().join("");
}

function check() {
    const value = input.value;
    const reversed = reverseString(value);
    
    if(reversed === value){
        alert("This is a palindrome!");
    }
    else{
        alert("This is not a palindrome!");
    }
    
    input.value= ""
}
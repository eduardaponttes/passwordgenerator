const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordshelf = document.getElementById("password-shelf")
let passwordshelf2 = document.getElementById("password2-shelf")


function passwordgen() {
    let password1 = " "
    let password2 = " ";
    for (let i = 0; i < 15; i++) {
        password1 += characters[Math.floor(Math.random() * characters.length)]
        password2 += characters[Math.floor(Math.random() * characters.length)];
    }
    passwordshelf.textContent = password1;
    passwordshelf2.textContent = password2;
}






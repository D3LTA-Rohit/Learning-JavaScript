function generatePassword() {

    const lowercase = document.getElementById("lowercase");
    const uppercase = document.getElementById("uppercase");
    const symbols = document.getElementById("symbols");
    const numbers = document.getElementById("numbers");
    const length = document.getElementById("length");
    const result = document.getElementById("result");
    
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbolsChars = "~`!@#$%^&*()_+-=/*.<>?;:{[]|\\}";
    const numberChars = "1234567890";

    let allowedChars = "";
    allowedChars += lowercase.checked ? lowercaseChars : "";
    allowedChars += uppercase.checked ? uppercaseChars : "";
    allowedChars += symbols.checked ? symbolsChars : "";
    allowedChars += numbers.checked ? numberChars : "";

    let password = "";
    let passwordLength = length.value;

    if (passwordLength <= 0) {
        result.textContent = `Password length cannot be equals to zero.`;
    } else if (allowedChars.length == 0) {
        result.textContent = `Select at least one option to generate password.`;
    } else {
        for (let i = 0; i < passwordLength; i++) {
            password += allowedChars[Math.floor(Math.random() * allowedChars.length)];
        }
        result.textContent =  password;
    }
}

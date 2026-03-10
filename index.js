// grab the count-el element, store it in a countEl variable
countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count += 1
    // set countEl's innerText to the count
    countEl.textContent = count
}


saveCount = document.getElementById("save-btn")

saveEl = document.getElementById("save-el")

function save(){
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let counter = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += counter // using textContent because it doesn't parse the content as HTML, so it will render the string as it is, without interpreting any HTML tags.
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
    countEl.textContent = 0
    count = 0
}

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// let name = "Bir"
// let greeting = "Hi, my name is "
// myGreeting = greeting + name
// console.log(myGreeting)
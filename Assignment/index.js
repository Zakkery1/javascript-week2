let userPrompt = prompt("Please enter your name!");
alert(`Hello ${userPrompt}!`);


let formHTML = document.getElementById("form");
formHTML.addEventListener('submit', function(){
    event.preventDefault()
    let randomNumber = Math.floor(Math.random() * 200);
    console.log(randomNumber)
    
    let subjectInputHtml = document.getElementById("subject")
    let subjectInput = subjectInputHtml.value;
    subjectInput += " #" + randomNumber;

    let emailInputHtml = document.getElementById("email").value;

    let bodyInputHtml = document.getElementById('body').value;

    window.location.href = `mailto:zakkerycales@gmail.com?subject=${subjectInput}&cc=${emailInputHtml}&body=${bodyInputHtml}`;

    
    setTimeout(function(){
        window.location.href = "./index.html", 5000
    })
})

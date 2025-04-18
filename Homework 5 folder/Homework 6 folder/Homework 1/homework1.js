
const emails = [
    "anahitkarapetyan@gmail.com",
    "hakobpetrosyan@inbox.ru",
    "levonvardanyan@gmail.com",
    "barisamaraci@gmail.com",
    "sargsyan001@yahoo.com"
];

function createEmailInputs(emailArray){
    const container=document.getElementById("email-container");

    emailArray.forEach(email => {
        const input=document.createElement("input");
        input.type="email"; 
        input.placeholder=email; 
        container.appendChild(input); 
    });
}

createEmailInputs(emails);

const data = {
    name: "Karen",
    age: 30,
    profession: "Developer",
    country: "USA"
};
  
// Ֆունկցիա՝ Object-ի պարամետրերը HTML-ում ցուցադրելու համար
function showObjectDetails() {
    const container = document.getElementById("objectDetails");
    container.innerHTML = ""; // Մաքրում է նախորդ արդյունքները
  
    for (const key in data) {
      const detail = document.createElement("p");
      detail.textContent = `${key}: ${data[key]}`;
      container.appendChild(detail);
    }
}
  
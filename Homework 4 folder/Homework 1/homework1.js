let cars = {
  "toyota" : "Toyota",
  "lexus" : "Lexus",
  "audi" : "Audi",
  "byd" : "BYD",
  "porshce" : "Porshce",
  "bmw" : "BMW",
  "mercedes" : "Mercedes",
};
let sel = "<select><option value=''>Cars</option>";
for(let i in cars) {
  sel += "<option value='" + i + "'>" + cars[i] + "</option>";
}
sel += "</select>";
document.write(sel);
let students={
    "student1":{
        "name": "Karine",
        "surname": "Poghosyan",
        "age": 19,
        "salary": 45000,
        "absence": 25,
    },
    "student2":{
        "name": "Gevorg",
        "surname": "Martirosyan",
        "age": 25,
        "salary": 600000,
        "absence": 2,
    },
    "student3":{
        "name": "Alla",
        "surname": "Levonyan",
        "age": 58,
        "salary": 950000,
        "absence": 5,
    },
    "student4":{
        "name": "Stepan",
        "surname": "Karapetyan",
        "age": 21,
        "salary": 53000,
        "absence": 17,
    },
    "student5":{
        "name": "Melanya",
        "surname": "Babayan",
        "age": 21,
        "salary": 142000,
        "absence": 1,
    }
}

let table = "<table border ='1'>";

for(let i in students){
    if(students[i]["absence"]>=6){
        table += "<tr>";
        for(let j in students[i]){
            table += "<th>"+students[i][j]+"</th>";
        }
        table += "</tr>";
    }
}
document.write(table);
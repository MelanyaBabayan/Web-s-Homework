let students={
    "student1":{
        "name": "Karine",
        "surname": "Poghosyan",
        "age": 19,
        "salary": 45000,
    },
    "student2":{
        "name": "Gevorg",
        "surname": "Martirosyan",
        "age": 25,
        "salary": 600000,
    },
    "student3":{
        "name": "Alla",
        "surname": "Levonyan",
        "age": 58,
        "salary": 950000,
    },
    "student4":{
        "name": "Stepan",
        "surname": "Karapetyan",
        "age": 21,
        "salary": 53000,
    }
    ,
    "student4":{
        "name": "Melanya",
        "surname": "Babayan",
        "age": 21,
        "salary": 142000,
    }
}

let table = "<table border ='1'>";

for(let i in students){
    if(students[i]["salary"]>=137400){
        table += "<tr>";
        for(let j in students[i]){
            table += "<th>"+students[i][j]+"</th>";
        }
        table += "</tr>";
    }
}
document.write(table);
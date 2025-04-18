let table = "<table border='1'>";
for(let i=1;i<=4;i++){
    table+="<tr>";
    for(let j=1;j<=7;j++){
        table+="<th>example "+i+"."+j+"</th>";
    }
    table+="</tr>";
}
table += "</table>";
document.write(table);
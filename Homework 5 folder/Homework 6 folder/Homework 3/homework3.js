var mat = [
    ["https://www.nike.com", "https://www.zara.com", "https://www.adidas.com"],
    ["https://www.h&m.com", "https://www.puma.com", "https://www.uniqlo.com"],
    ["https://www.asos.com", "https://www.revolve.com", "https://www.farfetch.com"]
];

// function fun1(mat) {
//     var j=0;
//     for(var i=2; i>=0; i--){
//         if(j<mat[i].length){
//             document.getElementById("container").innerHTML+=mat[i][j]+", ";
//             j++;
//         }
//     }
//     document.getElementById("container").innerHTML+="<br>"; 
// }

function fun2(mat){
    for(var i=0; i<mat.length; i++){ 
        for(var j=0; j<mat[i].length; j++){ 
            document.getElementById("container").innerHTML+=mat[i][j]+" ";
        }
        document.getElementById("container").innerHTML+="<br>";
    }
    document.getElementById("container").innerHTML+="<hr>";
}

function fun3(mat){
    const container=document.getElementById("container");

    const lastRowIndex=mat.length - 1; 
    for(var j=0; j<mat[lastRowIndex].length; j++){
        const input=document.createElement("input"); 
        input.type="url"; 
        input.placeholder=mat[lastRowIndex][j]; 
        container.appendChild(input); 
    }
}

fun2(mat);
fun3(mat);


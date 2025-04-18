function getRandomInt(min, max) {
    return Math.floor(Math.random()*(max - min + 1))+min;
}

const arr=Array.from({ length: 100 }, ()=>getRandomInt(1, 1000));
document.getElementById("random-numbers").textContent = "Random Numbers: " + arr.join(", ");


function perfect(num) {
    if(num<5) return false; 
    let sum = 1; 

    for(let i=2; i<=num/2; i++){
        if(num%i===0){
            sum+=i; 
        }
    }
    return sum === num;
}

let summary=0;
for(let i=0; i<arr.length; i++) {
    if(perfect(arr[i])){
        summary+=1; 
    }
}
document.getElementById("total-perfect-numbers").textContent = "Total Perfect Numbers: " + perfectNumbers.length;


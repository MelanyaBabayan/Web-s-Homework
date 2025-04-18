var i=1;
var res="<ul>"
while(i<=10){
    if(i==3){
        res+="<li>example "+i;
        var k=1;
        while(k<=4){
            res+="<ul>example 3."+k+"</ul>";
            k++;
        }
        res+="</li>"
    }
    else{
        res+="<li>example "+i+"</li>";
    }
    i++;
}
res+="</ul>"
document.write(res)
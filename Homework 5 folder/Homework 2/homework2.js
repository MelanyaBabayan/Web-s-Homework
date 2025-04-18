let res="<ul>";
for(let i=1;i<=10;i++){
    res+="<li> list "+i+"</li>";
    if(i==3){
        res+="<ol>";
        for(let j=1;j<=3;j++){
            res+="<li> mini "+j+"</li>";
        }
        res+="</ol>";
    }
}
res+="</ul>";
document.write(res);
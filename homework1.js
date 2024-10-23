var sel="<select><option value=''>March</option>";
var i=1;
while(i<=31){
    sel+="<option value=''"+i+">"+i+"</option>";
    i++;
}
sel+="</select>"
document.write(sel)
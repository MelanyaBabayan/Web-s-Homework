var month=10,year=2015,day=12;
var sum=0;
switch(month-1){
    case 12: sum+=31;
    case 11: sum+=30;
    case 10: sum+=31;
    case 9: sum+=30;
    case 8: sum+=31;
    case 7: sum+=31;
    case 6: sum+=30;
    case 5: sum+=31;
    case 4: sum+=30;
    case 3: sum+=31;
    case 2: sum+=28;
    case 1: sum+=31;
    default:sum+=0
}
if(year%4==0 && (year%100!=0 || year%400==0) && month>2){
    sum+=1;
}
sum+=day;
document.write(sum)
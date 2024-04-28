/* function Isleapyear(year){
    if(year%4==0 || year%400==0){
        console.log(year+" is a leap year");
    }
    // if(year%100){
    //     console.log(year + " is not a leap year");
    // }
    else{
        console.log("not aleap year");
    }
}

year=prompt("enter year to check if it is leapyear");
Isleapyear(year);
*/

function checkforleap(year){

    if (year%4==0){
        console.log("is divisible by 4");
        if(year%100==0){
            console.log("is divisible by 100")
            if(year%400==0){
                console.log(year+" is a leap year");
            }
            else{
            console.log(year+" is a leap year");
        }
        }
        else{
            console.log(year+" is a leap year");
        }
    }
    else{
        console.log("not a leap year");
    }
}

year=prompt("enter year to check if it is leapyear");
checkforleap(year);
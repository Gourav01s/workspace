var list = [ "Jack" ,"Sam" , "Tim", "Ronin", "Peter"];
console.log(list);

function checklist(name){
    if(list.includes(name)){
        console.log("welcome");
        alert("welcome");
    }
    else{
        console.log("sorry may be next time");
        alert("sorry may be next time");
        
    }
}

var name=prompt("enter your name to check for list");
checklist(name);
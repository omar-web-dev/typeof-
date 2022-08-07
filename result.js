// name      marks
// omar      84
// mamun     78
function great(marks){
    if(marks >= 100){
        console.log('Your Marks incorrect');
    }else if(marks > 80 ){
        console.log('Great A+');
    }else if(marks > 70){
        console.log('Great A');
    }else if(marks > 60){
        console.log('Great A-');
    }else if(marks > 50){
        console.log('Great B');
    }else if(marks > 40){
        console.log('Great C');
    }else if(marks > 32){
        console.log('Great D');
    }else if(marks >= 1 && marks <= 32){
        console.log('Oops! Flied');
    }else{
        console.log('Your Marks incorrect');
    }
    return marks 
}
great(45);
great(95);
great(101);

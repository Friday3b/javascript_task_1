function yourgrade (score){

    let grade;

    switch(true){
        case (score >=85 && score <=100):
            grade = 'A';
            break;
        
        case (score >=75 && score <=85):
            grade = 'B';
            break;
        case (score >=65 && score <=75):
            grade = 'C';
            break;
        case (score >=50 && score <=65):
            grade = 'D';
            break;
        case (score >=0 && score <=50):
        grade = 'F';
        break;
            
        default:
            return "unknown score"

            
    }

    return `your grade is ${grade}`

}

console.log(yourgrade(50));
console.log(yourgrade(80));

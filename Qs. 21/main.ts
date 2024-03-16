// Question 21
// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
 console.log("\tQuestion 21:\n");


type infoData = {
    Course:string,  
    Department: string,
    Assignment: string,
    submitTo: {
        SirName:string,
    }
    submitBy: {
        Name: string,
        RollNo:number,
        Semester: string
    }

    Result: {
        comp: number,
        phy: number,
        maths: number,
        eng: number,
        PS: number,
    }
        
};

let infoData  =  {
    Course : "Web Developement",
    Department : "Information Technology",
    Assignment: "Assignment 13",
    submitTo: {
        SirName: "Sir Naeem"
    },
    submitBy: {
        Name: "Aizal Fatima",
        RollNo: 556,
        Semester: "1st"
    },

    Result: {
        comp: 29,
        phy: 27,
        maths: 30,
        eng: 25,
        PS: 30,
    }
};

      let stdData  = (stdData: infoData) => {
      let result = infoData.Result;
       return `
       Course: ${infoData.Course};
       Department: ${infoData.Department};
       Assignment : ${infoData.Assignment};
       submitTo : 
            sirName : ${infoData.submitTo.SirName};
      
            submitBy : 
             Name: ${infoData.submitBy.Name};
             RollNo: ${infoData.submitBy.RollNo};
             Semester: ${infoData.submitBy.Semester};

       Result: {
           comp: ${result.comp};
           phy: ${result.phy};
           maths: ${result.maths};
           eng: ${result.eng};
           PS: ${result.PS};
        }`;

       result = infoData.Result;
        return `Obtained Marks: ${result.comp + result.phy + result.maths + result.eng + result.PS}`;
};

let ObtainedMarks = 141;
let TotalMarks = 150;


let percentage = ((ObtainedMarks / TotalMarks ) * 100).toFixed(2);
console.log("\t",stdData(infoData),"\n");
console.log(`\tObtained Marks: ${ObtainedMarks}\n`);
console.log(`\tTotal Marks: ${TotalMarks}\n`);
console.log(`\tPercentage: ${percentage}%\n`);
console.log(`\tGrade: Your grade is A+.\n`);

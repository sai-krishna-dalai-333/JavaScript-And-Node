//there are 2 types of classes they are 1. Class Declarations  2. Class Expressions

//Class Declarations 
//Class Declaration Dont allow the re declaration of the class
class student{
    //Giving a constructor to intialize objects
    constructor(roll,name,address)
    {
        this.roll=roll;
        this.name=name;
        this.address=address;
    }

    //we can writes methods in it:

    display()
    {
        console.log("The student name "+ this.name);
        console.log("The student roll "+ this.roll); 
    }

}

//creating object using new keyword
let s1 = new student(1,"krishna","bobbili");
//calling the method
s1.display();


//Class Expressions
//Class expressions allows re declaring the class

let employee = class{

    //constructor
    constructor(id,name,project)
    {
        this.id=id;
        this.name=name;
        this.project=project;
    }

    //method
    projectDetails()
    {
        console.log("project name : "+ this.project);
    }
}

let e = new employee(1,"krish","centrica");
e.projectDetails();

                                        
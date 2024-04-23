//Creating obbjects in 2 ways 1. Object Literals  2. constructor objects

//Object literals :
// Create an single object.
//nothing but a json object

let ob1 = {
    name :"krishna",
    id:2263041,
    project:"centrica",
    location :"chennai"
}

console.log(ob1);

//Constructor Object
//if you want to create multiple object with same properties then it will be usefull

function object(roll,name,subj,marks)
{
    this.roll= roll;
    this.name=name;
    this.subj=subj;
    this.marks=marks;
}

let obj1 = new object(1,"sai","maths",75);
console.log(obj1);

//can create object by creating instance of an object

let e = new Object();
e.id=12;
e.name ="dalai";                                                                                                                                             
e.peoject="centrica";
console.log(e);
//This prototype is used to acquire the properties from one to another
// syntax classname.prototype.methodnameaOrPropertyname

class student{
     constructor (id,name)
     {
        this.id =id;
        this.name = name;
     }
}



student.prototype.display =function()
{
    console.log(this.id +"    "+ this.name);
}

s = new student(1,"sai");
s.display();
s2= new additionalDetails("bobbili",9110713691);
console.log(s2);
console.log("......");
//INC00407370....9
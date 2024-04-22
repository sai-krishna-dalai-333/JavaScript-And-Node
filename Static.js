//static keyword is used to built static methods
//we dont required to create an insatance to call static methods
//so that the memory will be optimized

class DemoStatic{
    static print()
    {
        console.log("This is a static method..");
    }
}

//call of static method ClassName.functionName

console.log(DemoStatic.print());

//static method in constructor

//We cannot use this keyword directly to call a static method within the non-static method.
// In such case, we can call the static method either using the class name or as the property of the constructor.

class ConsDemo
{
    constructor()
    {
        console.log(ConsDemo.method());
    }

    static method()
    {
        console.log("This is a static method but which is called by the non static.. ");
    }
}

//creating an object
let  ob = new ConsDemo(); 
//when  i created an object the constructor called and intialized the object.




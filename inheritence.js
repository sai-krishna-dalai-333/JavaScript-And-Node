class A{
    runner()
    {
        console.log("Running.");
    }
}

class B extends A{

    runner()
    {
        console.log("overriding runner...");
    }
    sleep()
    {
        console.log("sleeping");
    }
}

let ob = new B();
let ob2 = new A();
ob2.runner();
ob.runner();
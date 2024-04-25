let clickCount=0;
function clickEvent()
{
//    // document.write("I told you don't click ");
//     //console.log("on-Click");
//     var button = document.getElementById("clic");
    
//     // Set a new position for the button (e.g., 100px from the top and 200px from the left)
//     button.style.position = "absolute";
//     button.style.top = "100px";
//     button.style.left = "200px";

    clickCount++;

  // Get the button element
  var button = document.getElementById("clic");

  // Set a new position for the button
  switch (clickCount) {
    case 1:
      button.style.position = "absolute";
      button.style.top = "100px";
      button.style.left = "200px";
      break;
    case 2:
      button.style.top = "300px";
      button.style.left = "400px";
      break;
    case 3:
      button.style.top = "500px";
      button.style.left = "600px";
      document.write("I told you not to click!");
      break;
    default:
        //nothing
}

}

function mouseoverevent()
	{
		document.write("You can't touch me... OK!!");
	}

function onfocusEvent()
{
    document.getElementById("inp1").style.color="red";
    document.getElementById("inp1").style.backgroundColor="aqua";
    
    document.getElementById("inp1").value="Impossible!";
}

function fun() {
    btn.style.width = "250px";
	btn.style.height = "250px";
	btn.style.background = "red";
	btn.style.color = "blue";
}
 
function fun1() {
   document.getElementById("para").innerHTML =  "Going to Blast.";

}
function fun2() {
    btn.style.width = "";
	btn.style.height = "";
	btn.style.background = "";
	btn.style.color = "";
}
var mybtn = document.getElementById("btn");
mybtn.addEventListener("mouseover", fun);
mybtn.addEventListener("click", fun1);
mybtn.addEventListener("mouseout", fun2);

document.getElementById("para2").onclick = function() {  
    fun4()  
    };  
    function fun4() {  
    document.getElementById("para2").innerHTML = "New Format ";  
    document.getElementsByTagName("body")[0].style.color = "blue";  
    document.getElementsByTagName("body")[0].style.backgroundColor = "lightgreen";  
    document.getElementsByTagName("body")[0].style.fontSize = "25px";  
    document.getElementById("para2").style.border = "4px solid black";   
    }  
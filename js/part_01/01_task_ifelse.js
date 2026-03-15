      
let color = prompt("Enter the color:red, green or yellow:");
       function showResult(col)
        {
         if(col=="red")
            {
                console.log("Stop");
            }
            else if (col=="yellow") 
            {
                console.log("Be ready");
            } 
            else if (col == "green")
            {
                console.log("Go");
            } else{
                console.log("You have entered invalid value. choose only red,yellow or green.")
            }
         };

 showResult(color);   

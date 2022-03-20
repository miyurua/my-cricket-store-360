function validateinputs(feild) {
      if(feild.name.value=="")
        alert("You must enter Name");                 //function to detct the empty feilds and give an alert if a feild is empty.
        
      else if(feild.mail.value=="")
        alert("You must enter Email")
        
      else if(feild.choice.value=="")
        alert("Please Select a category")
    
      else if(feild.feedback.value=="")
        alert("Please Ener Description")
      
      else{                                             //Display the form inputs if the form if it is filled succesfully.
        document.getElementById("nameid").innerHTML="Name :"+document.getElementById("uname").value;
        document.getElementById("mailid").innerHTML="Email :"+document.getElementById("email").value;
        document.getElementById("radioid").innerHTML="Subject :"+document.getElementById("choose").value;
        document.getElementById("discid").innerHTML="Details :"+document.getElementById("feedback").value;
      }
   }
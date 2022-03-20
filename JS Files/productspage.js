<!------Form validation code will come here------>
function validate(n){
  if(n.name.value == 0){
     alert("Please provide your first name!");
	 
	 
}
if (n.name2.value == 0){
    alert("Please provide your last name!" );
	
	
}
if(n.Address.value == 0){
	alert("Please provide your adderss !");
	

}
if(n.email.value == 0){
	alert(" Please provide your email !");
	
	
}
if(n.postalcode.value == 0 || isNaN n.postalcode.value ) {
    
            
    alert( "Please provide a postal code in the format #####." );
    
   
}
if(n.cardnumber.value == 0 || isNaN n.cardnumber.value){ 
	alert( "Please provide a card number");
    
	
}
if (n.Expiarymonth.value == 0){
	alert( "Please provide the month");
	
	
}
if (n.ExpiaryYear.value == 0){
	alert( "Please provide the month");
}
else  { document.getElementById("nameid").innerHTML="Name :"+document.getElementById("name").value;
        document.getElementById("lnameid").innerHTML="Last Name :"+document.getElementById("name2").value;
        document.getElementById("adderssid").innerHTML="Address :"+document.getElementById("adderss").value;
        document.getElementById("emailid").innerHTML="Email :"+document.getElementById("email").value;
		document.getElementById("postalcode1").innerHTML="Email :"+document.getElementById("postalcode").value;
		document.getElementById("creditcard1").innerHTML="Email :"+document.getElementById("creditcnum").value;
		document.getElementById("expiarymon1").innerHTML="Email :"+document.getElementById("expiarymon").value;
		document.getElementById("expiaryyear1").innerHTML="Email :"+document.getElementById("expiaryyear").value;
		document.getElementById("cvv1").innerHTML="Email :"+document.getElementById("cvv").value;
      }	
	
	
	
	
}
}
	
	

	
	
	

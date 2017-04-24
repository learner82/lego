function validate ()

{
	
	var emailID = document.Contact_Form.Email.value;
	var atpos = emailID.indexOf ("@");
	var dotpos = emailID.lastindexOf (".");
	
	if(document.Contact_Form.first_name.value=="")
	{
	alert ("Please write your Name");
    document.Contact_Form.first_name.focus();
	
	}

if(document.Contact_Form.last_name.value=="")
	{
	alert ("Please write your Last Name");
    document.Contact_Form.last_name.focus();
	
	}

if(document.Contact_Form.Email.value=="")
	{
	alert ("Please write your Email");
    }

	if(atpos<1 || ( dotpos - atpos <2))
	{
	alert ("Please enter correct Email Adress");
    document.Contact_Form.Email.focus();
	return false;
	}
	return (true)
}
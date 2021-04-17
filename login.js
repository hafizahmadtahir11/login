$(function()
{

    $("#login").click(handleFormSubmit);
});

function handleFormSubmit()
{
  var name=$("#name").val();
  var password=$("#password").val();
  var x = document.getElementById("age1").value
  var letters=/^[A-Za-z]+$/;
  var phone= $("#phone").val();
  var phoneno = /^\d{12}$/;
  var cnic= $("#nic").val();
  var nicpatt= /\d{5}-\d{7}-\d/;
  var expression=/^(?=.\d{2,})(?=.[!@#$%^&]{2,})(?=.[a-z]{2,})(?=.*[A-Z]).{7,}$/

  if (!(name.match(letters))){
    

     alert(" Name must be upper case and lower case characters ");
   
         $("#name").addClass("favcolor");
  }

  if (x < 15 || x > 70)
     {
            alert("enter age between 15 to 70")
     }
 

  if (!(phone.match(phoneno))  ) {

    alert("Phone number must be 12 digits")
  }

if (!(cnic.match(nicpatt))  ) {

    alert("CNIC should be *****-*******-* format");
  }


 if (!(password.match(exp)))

    {
      
        alert("Password must be upper case and lower case letters");
        $("#password").addClass("error");
    }
   
      

       if((name.match(letters)) && (password.match(exp))  && ( x < 15 || x > 70 )  &&  (phone.match(phoneno))  &&  (cnic.match(nicpatt))  ) {

       console.log("Form is being submitted");

  e.preventDefault();
}
}
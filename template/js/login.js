

//Below function Executes on click of login button
function validate(){
	var username = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	if ( username == "tt" && password == "tttt"){
		
		window.location = "profile.html"; //redirecting to other page
		
		return false;
		}else if(username=="" || password==""){

			alert("Enter valid email or password")

		}else{
			alert("Wrong email or password");
		}
	}

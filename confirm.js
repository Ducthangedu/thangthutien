function loadData (){
	var name = document.getElementById("confirm_name")
	var email = document.getElementById("confirm_email")
	var phone = document.getElementById("confirm_number")
	var age = document.getElementById("confirm_age")
	var occupation = document.getElementById("occupation")


	name.textContent = sessionStorage.firstname + " " +sessionStorage.lastname;
	email.textContent = sessionStorage.Email;
	age.textContent = sessionStorage.age;
	phone.textContent = sessionStorage.phonenumber;
	occupation.textContent = sessionStorage.occupation;
	
}

function CancelButton() {
	window.location = "resign.html";
}



function init(){
	loadData();
	var cancel = document.getElementById("cancelButton")
	cancel.onclick = CancelButton;

} 


window.onload = init;
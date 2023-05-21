function saveData(){
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var Email = document.getElementById("Email").value;
	var phonenumber = document.getElementById("phonenumber").value;
	var age = document.getElementById("age").value;
	sessionStorage.firstname = firstname;
	sessionStorage.lastname = lastname;
	sessionStorage.Email = Email;
	sessionStorage.phonenumber = phonenumber;
	sessionStorage.age = age;
	
	var highschool = document.getElementById("highschool").checked;
	var University = document.getElementById("University").checked;
	var Working = document.getElementById("Working").checked;
	var Retired = document.getElementById("Retired").checked;

	if (highschool == true) {
		sessionStorage.occupation = document.getElementById("highschool").value;
	}
	if (University == true) {
		sessionStorage.occupation = document.getElementById("University").value;
	}
	if (Working == true) {
		sessionStorage.occupation = document.getElementById("Working").value;
	}
	if (Retired == true) {
		sessionStorage.occupation = document.getElementById("Retired").value;
	}
}

function prefillData() {
	if (sessionStorage != null) {
		document.getElementById("firstname").value = sessionStorage.firstname;
		document.getElementById("lastname").value = sessionStorage.lastname;
		document.getElementById("Email").value = sessionStorage.Email;
		document.getElementById("phonenumber").value = sessionStorage.phonenumber;
		document.getElementById("age").value = sessionStorage.age;
		switch (sessionStorage.occupation){
			case "highschool":
				document.getElementById("highschool").checked = true;
				break;
			case "University":
				document.getElementById("University").checked = true;
				break;
			case "Working":
				document.getElementById("Working").checked = true;
				break;
			case "Retired":
				document.getElementById("Retired").checked = true;
				break;
		}
	}
}


function  init(){
	var regForm = document.getElementById("resignform");
	regForm.onsubmit = saveData;
	prefillData()
}

window.onload = init;
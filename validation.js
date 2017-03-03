function validateDate(){
	var d = document.getElementById("date").value;
	if(d === ""){
		alert("Please enter a start date");
		return false;
	}
	return true;
}

function validateDays(){
	var d = document.getElementById("days").value;
	if(d.length === 0){
		alert("Please enter the number of days to increment");
		return false;
	}
	return true;
}

function validateCountry(){
	var d = document.getElementById("country").value;
	if(d.length === 0){
		alert("Please enter your country code");
		return false;
	}
	return true;
}

function validate(){
	if(validateDate() && validateDays() && validateCountry()){
		var g = new CalendarGenerator(document.getElementById("date").value,document.getElementById("days").value);
		g.printCalendar();
	}
}
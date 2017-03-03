function CalendarGenerator(actDate,g){
	var fd = actDate.split("-");
	this.actDate = new Date(fd[1] +","+ fd[2] +","+ fd[0]);
	this.goalDate = g;

	this.calendar = [
					["Su","M","Tu","W","Th","F","Sa"],
					["-","-","-","-","-","-","-"],
					["-","-","-","-","-","-","-"],
					["-","-","-","-","-","-","-"],
					["-","-","-","-","-","-","-"],
					["-","-","-","-","-","-","-"],
					];

	this.generate = function(){ //Main function of the program
		var goal = new Date();
        goal.setFullYear(this.actDate.getFullYear());
        goal.setMonth(this.actDate.getMonth());
       	goal.setDate(this.actDate.getDate() + parseInt(this.goalDate));
        goal.setMilliseconds(this.actDate.getMilliseconds());
        goal.setSeconds(this.actDate.getSeconds());
        goal.setMinutes(this.actDate.getMinutes());
        goal.setHours(this.actDate.getHours());
	}

	this.printCalendar = function(){

		var tablesDiv = document.getElementById("tablesDiv");
		var table = document.createElement('TABLE');
    	table.border='1';
    	var tableBody = document.createElement('TBODY');
    	table.appendChild(tableBody); 

		for(var i = 0; i < 6; i++){
			var tr = document.createElement('TR');
			tableBody.appendChild(tr);
			for(var j = 0; j < 7; j++){
				var td = document.createElement('TD');
           		td.width = td.height = '45';
           		td.appendChild(document.createTextNode(this.calendar[i][j]));
           		tr.appendChild(td);
			}
		}
		tablesDiv.appendChild(table);
	}
}
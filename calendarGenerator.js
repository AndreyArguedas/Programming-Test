function CalendarGenerator(actDate,g){
	this.actDate = actDate;
	this.goal = g;

	this.calendar = [
					["Su","M","Tu","W","Th","F","Sa"],
					["-","-","-","-","-","-","-"],
					["-","-","-","-","-","-","-"],
					["-","-","-","-","-","-","-"],
					["-","-","-","-","-","-","-"],
					["-","-","-","-","-","-","-"],
					];

	this.generate = function(){ //Main function of the program

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
			for(var j = 0; j < 5; j++){
				var td = document.createElement('TD');
           		td.width = td.height = '45';
           		td.appendChild(document.createTextNode(this.calendar[i][j]));
           		tr.appendChild(td);
			}
		}
		tablesDiv.appendChild(table);
	}
}
function CalendarGenerator(actDate,g){
	var fd = actDate.split("-");
	this.actDate = new Date(fd[1] +","+ fd[2] +","+ fd[0]); //Parsing date
	this.goalDate = g;

	this.calendar = [
					["Su","M","Tu","W","Th","F","Sa"],
					["-","-","-","-","-","-","-"],
					["-","-","-","-","-","-","-"],
					["-","-","-","-","-","-","-"],
					["-","-","-","-","-","-","-"],
					["-","-","-","-","-","-","-"],
					];

	this.actualRow = 1; //A var for controlling the graphic table

	this.generate = function(){ //Main function of the program
		var goal = new Date();
        goal.setFullYear(this.actDate.getFullYear());
        goal.setMonth(this.actDate.getMonth());
       	goal.setDate(this.actDate.getDate() + parseInt(this.goalDate));
        goal.setMilliseconds(this.actDate.getMilliseconds());
        goal.setSeconds(this.actDate.getSeconds());
        goal.setMinutes(this.actDate.getMinutes());
        goal.setHours(this.actDate.getHours());

        while(Date.parse(this.actDate) < Date.parse(goal)){
        	var actMonth = this.actDate.getMonth();
        	while(Date.parse(this.actDate) < Date.parse(goal) && this.actDate.getMonth() === actMonth){
        		switch(this.dayToString(this.actDate.getDay())){
        			case "Sunday":
        				for(var i = this.actualRow; i < 6; i++){
        					if(this.calendar[i][0] === "-"){
        						this.calendar[i][0] = this.actDate.getDate();
        						break;
        					}
        				}
        			break;

        			case "Monday":
        				for(var i = this.actualRow; i < 6; i++){
        					if(this.calendar[i][1] === "-"){
        						this.calendar[i][1] = this.actDate.getDate();
        						break;
        					}
        				}
        			break;

        			case "Tuesday":
        				for(var i = this.actualRow; i < 6; i++){
        					if(this.calendar[i][2] === "-"){
        						this.calendar[i][2] = this.actDate.getDate();
        						break;
        					}
        				}
        			break;

        			case "Wednesday":
        				for(var i = this.actualRow; i < 6; i++){
        					if(this.calendar[i][3] === "-"){
        						this.calendar[i][3] = this.actDate.getDate();
        						break;
        					}
        				}
        			break;

        			case "Thursday":
        				for(var i = this.actualRow; i < 6; i++){
        					if(this.calendar[i][4] === "-"){
        						this.calendar[i][4] = this.actDate.getDate();
        						break;
        					}
        				}
        			break;

        			case "Friday":
        				for(var i = this.actualRow; i < 6; i++){
        					if(this.calendar[i][5] === "-"){
        						this.calendar[i][5] = this.actDate.getDate();
        						break;
        					}
        				}
        			break;

        			case "Saturday":
        				for(var i = this.actualRow; i < 6; i++){
        					if(this.calendar[i][6] === "-"){
        						this.actualRow++;
        						this.calendar[i][6] = this.actDate.getDate();
        						break;
        					}
        				}
        			break;
        		}
        		this.actDate.setDate(this.actDate.getDate() + parseInt(1));
        	}
        	this.printCalendar();
        	this.restartCalendar();
        	this.actualRow = 1;
        }
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
           		if(i == 0)
           			td.appendChild(document.createTextNode(this.calendar[i][j].charAt(0)));
           		else{
           			if(this.calendar[i][j] === "-")
           				td.style = "background-color:gray";
           			else{
           				td.appendChild(document.createTextNode(this.calendar[i][j]));
           				if(j === 0 || j === 6)
           					td.style = "background-color:yellow";
           				else
           					td.style = "background-color:green";
           			}
           			
           		}
           		tr.appendChild(td);
			}
		}
		tablesDiv.appendChild(table);
	}

	this.restartCalendar = function(){
		this.calendar = [
					["Su","M","Tu","W","Th","F","Sa"],
					["-","-","-","-","-","-","-"],
					["-","-","-","-","-","-","-"],
					["-","-","-","-","-","-","-"],
					["-","-","-","-","-","-","-"],
					["-","-","-","-","-","-","-"],
					];
	}

	this.dayToString = function(index){
		return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][index];
	}
}
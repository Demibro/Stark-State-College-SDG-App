/*
*eventData is the driving funcion for EventInfo
*/
function eventData(){
	/*
	*calls the HTTP request for the jason file
	*sends a function as the callback argument
	*/
	loadJSON(function(response) {
  	/*
  	*parse JSON string into object
    */
    var actual_JSON = JSON.parse(response);

//used for debug ... outputs event data objects to the console log 
 	//actual_JSON.events.forEach(function(element)
	//{
	//	console.log(element);
	//});

	/*
	*for each loop to step through every object with in the first key value of "events"
	*in the json file "events" is an array housing multiple objects containing keys with values
	*item.x searches the current object within the elements arry for what ever key value x is
		if x was name it would search for the key name.
	*the key is found item.x returns the value of the key  
	*/
	actual_JSON.events.forEach(function(item)
	{
		var name = item.name;
		var month = item.month;
		var day = item.day;
		var year = item.year;
		var description = item.description;

		printEventData(name, month, day, year, description);
	});
	});
}

/*
*creates a new HTTP request for the json file to be parsed
*/
function loadJSON(callback) {   
var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
xobj.open('GET', 'json/eventInfo.json', true);
xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
};
xobj.send(null);  
}

/*
*creates a HTML table of 3 rows containing a name header, a smaller date header, and a description
*/
function printEventData(name, month, day, year, description){
	//create <table></table>
	var table = document.createElement('table');
	//create <tr></tr>
	var tr = document.createElement('tr');
	//create <td></td>
	var td = document.createElement('td');
	//.innerHTML sets the HTML within the tags
	td.innerHTML = "<h3>"+name+"</h3>";
	//defines that td is the last item within tr
	tr.appendChild(td);
	//defines that tr is the last child element of table
	table.appendChild(tr); 

	//similar to above
	var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.innerHTML = "<h6>"+month+" "+day+" "+year+"</h6>";
	tr.appendChild(td);
	table.appendChild(tr);
	var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.innerHTML = description;
	tr.appendChild(td);
	table.appendChild(tr);

	/*
	*searches the HTML for the first tag with the id = "container-events"
	*then sets the last child element of the element to the table HTML object
	*/	
	document.getElementById("container-events").appendChild(table);
}
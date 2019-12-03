elem1.onclick = function(){
	var aOne = document.createElement("input");
	aOne.type = "text";
	aOne.className = "form-control";
	aOne.placeholder = "Name: ";
	var aTwo = document.createElement("input");
	aTwo.type = "range";
	aTwo.className = "form-control";
	var aThree = document.createElement("input");
	aThree.type = "color";
	aThree.className = "form-control";
	var new_div = document.createElement("div");
	new_div.id = "element";
	new_div.appendChild(aOne);
	new_div.appendChild(aTwo);
	new_div.appendChild(aThree);
	document.getElementById("inputs").appendChild(new_div);
}

elem2.onclick = function(){
	var node = document.getElementById("inputs");
  	node.removeChild(node.childNodes[0]);
}
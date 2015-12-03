var getElementsByClassName = function(className){

	// [] CREATE / SET ITERATOR 
  
   // Set i to zero during first pass of function.
	if(arguments[1] === undefined){
		var i = 0;
	}

 	// Set i to passed in i+1 in recursive function calls.
 	// 
 	
	  if(arguments[1] !== undefined){
	    var i = arguments[1];
	  }



	// [] CREATE /SET HOLDER ARRAY

	if(arguments[2] === undefined){
    // Set array to empty array on first pass.
		var array = [];
	}
  if(arguments[2]){
    // Set array to passed-in array which will travel through the recursion.
    var array = arguments[2];
  }

  // [] SET ARRAY TO EXAMINE 

  // On first pass, set childNode variable to doc.body.childNodes
  if(arguments[3] === undefined){
  	var childNodes = document.body.childNodes;
  }
  // If third argument is passed, set childNodes to that argument
  if(arguments[3]){
  	var childNodes = arguments[3];
  }

  console.log("i: "+i);

  console.log("childNodes.length "+childNodes.length);

  console.log(childNodes[i]);

  console.log("arguments[1]");
  console.log(arguments[1]);

	// [] base case

	if(arguments[1] === childNodes.length){
		return; // PROBLEM?
	}
	
	// [] recursive case

	else{
    // If childNodes has an HTML element child --
		if(childNodes[i].children){ 
			// If the child's classList contains targetClass --
			if(childNodes[i].classList.contains(className) === true){
				// Put the node in the array.
				array.push(childNodes[i]);
				console.log(array);
			} // End test for existence of targetClass in element

			// If node contains subnodes --
	        
	        /*if(childNodes[i].childElementCount > 0){

	        	console.log(childNodes[i]);

	        	var j = -1;

	          // Call function on the subnodes -- 
	         return getElementsByClassName(className, j+1, array, childNodes[i].childNodes);
	        }*/
		}
		// Call function on first-level nodes --
		return getElementsByClassName(className, i+1, array);
	}


};

/* PRE CHANGE OVER TO CHILDNODES VARIABLE

var getElementsByClassName = function(className){

	// [] create iterator
  
	if(arguments[1] === undefined){
    // Set i to zero during first pass of function.
		var i = 0;
	}
  if(arguments[1]){
    // Set i to passed in i+1 in recursive function calls
    i = arguments[1];
  }

	// [] create holder array

	if(arguments[2] === undefined){
    // Set array to empty array on first pass.
		var array = [];
	}
  if(arguments[2]){
    // Set array to passed-in array which will travel through the recursion.
    array = arguments[2];
  }

	// [] base case

	if(i === document.body.childNodes.length){
		return array;
	}
	
	// [] recursive case

	else{
    // If childNodes has an HTML element child --
		if(document.body.childNodes[i].classList){ 
			// If the child's classList contains targetClass --
			if(document.body.childNodes[i].classList.contains(className) === true){
				// Put the node in the array.
				array.push(document.body.childNodes[i]);
        
        // If node contains subnodes --
        
        if(document.body.childNodes[i].childNodes.length > 0){
          // call function on the subnodes
          //getElementsByClassName(className);
        }
        
        
			}
		}
		getElementsByClassName(className, i+1, array);
	}


};*/
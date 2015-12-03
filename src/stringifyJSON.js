// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if(typeof obj === 'number'){
  	return obj.toString();
  }

  if(obj === null){
  	return 'null';
  }

  if(obj === undefined || typeof obj === 'function'){
  	return;
  }

  if(typeof obj === 'boolean'){
  	return obj.toString();
  }

  if(typeof obj === 'string'){ // Strings get double quotes added as characters to their string.
  	return '"'+obj+'"';
  }

  if(Array.isArray(obj)){ // Arrays get stringified.

  	 // Add double quotes to strings in arrays.
  	 for(var i = 0; i < obj.length; i++){

  	 	if(obj[i] === undefined || typeof obj[i] === 'function' ){
  	 		obj[i] = null; // Replace undefined and functions with null in arrays;
  	 	}

  	 	obj[i] = stringifyJSON(obj[i]) // Recursion! Gets into nested arrays and also ""-ifies strings
  	 	if(obj[i] === undefined || typeof obj[i] === 'function' ){
  	 		//obj[i] = null; // Replace undefined and functions with null in arrays;
  	 	}
  	 }

  	// Stringify the array, then add brackets as strings.

  	var arrayStringified = obj.toString();
  	return '['+arrayStringified+']';
  }
  
  if(typeof obj === 'object'){
  	// Whole thing needs to be a string.
  	// Properties need "" added.
  	// Build string from scratch

  	var newStr = '{';

  	for(var key in obj){
  		if(obj[key] !== undefined && typeof obj[key] !== 'function'){ // Skip undefined and funcs
  			
  			var stringifiedValue = stringifyJSON(obj[key]);

  			newStr = newStr+'"'+key+'":'+stringifiedValue+",";
  		}
  	}

  	// Remove trailing comma
  	if(newStr[newStr.length-1] === ','){
  		newStr = newStr.slice(0, -1);
  	}

  	newStr = newStr + '}'; // Add last bracket

  	return newStr;
  }


};

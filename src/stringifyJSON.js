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

  	 
  	 for(var i = 0; i < obj.length; i++){
       // Replace undefined and functions with null in arrays;
  	 	if(obj[i] === undefined || typeof obj[i] === 'function' ){
  	 		obj[i] = null;
  	 	}
      // Recursion! Gets into nested arrays and also ""-ifies strings
  	 	obj[i] = stringifyJSON(obj[i])
  	 
  	 }

  	// Join/stringify the array, then add brackets to each end.

  	var arrayStringified = obj.join(','); 

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

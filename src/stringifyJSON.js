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

  if(typeof obj === 'boolean'){
  	return obj.toString();
  }

  if(typeof obj === 'string'){ // Strings get double quotes added as characters to their string.
  	return '"'+obj+'"';
  }

  if(Array.isArray(obj)){ // Arrays get stringified.

  	 // Add double quotes to strings in arrays.
  	 for(var i = 0; i < obj.length; i++){
  	 	obj[i] = stringifyJSON(obj[i])
  	 }

  	// Stringify the array, then add brackets as strings.

  	var arrayStringified = obj.toString();
  	return '['+arrayStringified+']';
  }
  
};

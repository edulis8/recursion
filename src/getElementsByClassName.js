var getElementsByClassName = function(className){
  //console.log(children);
  
  // Set array to empty array on first pass.
  if(arguments[1] === undefined){
		var array = [];
	}
  // Set array to passed-in array which will travel through the recursion.
  if(arguments[1]){
    var array = arguments[1];
  }
  
  // Set children object to examine
  
  // On first pass, set object to be document.body.children
  if(arguments[2] === undefined){
    var children = document.body.children
  }else{
  	// On recursive passes, set object to be the argument passed in -- children of a div
    var children = arguments[2]
  }

  // If the body element itself contains target class, add it, but only on the first pass
  // Can this be done within recursion somehow? Difficult because it is a slightly different problem
  // .body is not the same as .children which we are generally checking into
  if(document.body.classList.contains(className) === true && array.indexOf(document.body) === -1){
  	array.push(document.body);
  }

  for(var i = 0; i < children.length; i++){
  	if(children[i].classList.contains(className) === true){
      array.push(children[i]);
    }
    if(children[i].localName === "div"){
      getElementsByClassName(className, array, children[i].children)
    }
  }
  
 
 	return array;

}
// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, node){
  
  var nodes = arguments[2] || []; // Set nodes to an empty array, or to be a reference to itself, passed in as an argument on recursive calls.
  var node = node || document.body; // Set node to second argument (passed in recursively), or document.body to start.

      // Check if a node contains the target class name

      if(node.classList.contains(className) === true){
        nodes.push(node);
      }

      // Now, iterate over its child array, and check if any of those elements have the target class name. 
      // If they do, they'll be pushed into node.
      // Either way, their children will also be checked, if they have any children.


      _.each(node.children, function(element){
        getElementsByClassName(className, element, nodes);
      })

  
  return nodes;

};


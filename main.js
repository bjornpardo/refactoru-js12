// $(document).on('ready', function() {
  
// });

// var pluralize = function (word, number) {
//  if(number === 1) {
//   return word;
//  }
//  else {
//   return word + "s";
//  }
// };

var pluralize = function (word, number) {
	return number ===1? word : word + "s";
};

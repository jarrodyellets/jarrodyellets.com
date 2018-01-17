// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.





function pairElement(str) {
  var arr1 = ["A", "T"];
  var arr2 = ["C", "G"];
  var arrStr = str.split('');
  var result = [];
  
  while (arrStr.length){
    result.push(arrStr.splice(0, 1));
  }
  
  result.forEach(function(arr){
    if(arr1.indexOf(arr[0]) > -1){
      arr.push(arr1[1 - (arr1.indexOf(arr[0]))]);
    }
    else{
      arr.push(arr2[1 - (arr2.indexOf(arr[0]))]);
    }
  });
  
  return result;
}
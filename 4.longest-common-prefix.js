// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */

// const strs = ["flower", "flow", "flight"];

// var longestCommonPrefix = function(strs) {
//   if(!strs[0]){
//   return '';
//   }
//   var preprefix = '', prefix = '';
//   for(var index = 0; index < strs[0].length; index++){
//   prefix += strs[0][index];
//   for(var i = 0; i < strs.length; i++){
//   if(!strs[i].startsWith(prefix)){
//   return preprefix;
//   }
//   }
//   preprefix = prefix;
//   }
//   return prefix;
//   };
// longestCommonPrefix(strs);

//1등 코드
const strs = ["flower", "flow", "flight"];

var longestCommonPrefix = function(strs) {
  let prefix = strs[0];
  for ( let i = 1; i < strs.length; i++ ){
      while ( strs[i].indexOf(prefix) !== 0 ) {
          prefix = prefix.substring(0, prefix.length - 1)
      }
  }
  return prefix;
};

longestCommonPrefix(strs);


const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw 'Not implemented';
  let res = 0;
  if((typeof matrix ==='undefined')||(matrix.length === 0)) return 0
        else 
          for (let el of matrix) 
            for (i = 0; i < el.length; i++) 
              if ( el[i] == '^^') res++ ;  
  return res;
};

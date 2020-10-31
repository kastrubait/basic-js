const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 
  if ( ! (members != null && typeof members[Symbol.iterator] === 'function')) {
    return false;
  }
  let team = [];
  for (let el of members) {
      if (typeof el === 'string') {
         el = el.replace(/^\s*/,'');
         team = team.concat(el[0]);
        } 
  }
  team = team.map(item => item.toUpperCase());
  return  team.sort().join('');

};

module.exports = function createDreamTeam(/* members */) {
  //throw 'Not implemented';
  // remove line with error and write your code here
  let team = [];
  for (let el of members) {
      if (typeof el == 'string') {
         el = el.replace(/^\s*/,'');
         team = team.concat(el[0]);
        }
  }
  team = team.map(item => item.toUpperCase());
  return  team.sort().join('');
};

module.exports = function getSeason(date) {
 let datErr = 'Unable to determine the time of year!';
  if (!date) return datErr;
  if (Object.prototype.toString.call(date) !== "[object Date]") throw Error;
  let mon = date.getMonth();
  let season = '';
  if ( mon == 11 || mon == 0 || mon == 1) season = 'winter';
  if ( mon == 2 || mon == 3 || mon == 4) season = 'spring';
  if ( mon == 5 || mon == 6 || mon == 7) season = 'summer';
  if ( mon == 8 || mon == 9 || mon == 10) season = 'autumn';
  return season;
};

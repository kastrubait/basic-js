module.exports = function getSeason(/* date */) {
  // throw 'Not implemented';
  // remove line with error and write your code here
  let datErr = 'Unable to determine the time of year!';
  let season = '';
  if (arguments.length == 0 ) return datErr
    else {
      //let regex = /^\[object (\S+?)\]$/;
      //let p = Object.prototype.toString.call(date).match(regex) || [];
      //if (p !== '[object Date]') throw new Error();
      if (isNaN(date.getMonth()) || date.getMonth() == undefined) throw new Error();
      let mon = date.getMonth();
      if ( mon == 11 || mon == 0 || mon == 1) season = 'winter';
      if ( mon == 2 || mon == 3 || mon == 4) season = 'spring';
      if ( mon == 5 || mon == 6 || mon == 7) season = 'summer';
      if ( mon == 8 || mon == 9 || mon == 10) season = 'autumn';
           
      return season;

    }
};

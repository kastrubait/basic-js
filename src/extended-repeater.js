module.exports = function repeater(str, options) {
   
    if (typeof str !== String) str = String(str);
    if (options.hasOwnProperty('addition')) {
        if (typeof options.addition !== String) options.addition = String(options.addition)
    } else {
        options.addition = '';
    }
    if ( !options.hasOwnProperty('separator')) {
        options.separator = '+';
    } 
    if ( !options.hasOwnProperty('additionSeparator')) {
        options.additionSeparator = '|';
    } 
    if ( !options.hasOwnProperty('repeatTimes') || options.repeatTimes == undefined) {
        options.repeatTimes = 1;
    }
    if ( !options.hasOwnProperty('additionRepeatTimes') || options.additionRepeatTimes == undefined) {
        options.additionRepeatTimes = 1;
    }  
    
    let additionRepeat = [];
    for (let i = 1; i <= options.additionRepeatTimes; i++ ) {
        additionRepeat.push(options.addition);
    }
    const additionRepeatStr = additionRepeat.join(options.additionSeparator);
    
    let resRepeat = [];
    const repeatStr = str + additionRepeatStr;
    for (let i = 1; i <= options.repeatTimes; i++ ) {
        resRepeat.push(repeatStr);
    }
    return resRepeat.join(options.separator);
};
  

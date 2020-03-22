module.exports = function transform(/* arr */) {
    //throw 'Not implemented';
    // remove line with error and write your code here
    let note = Object.prototype.toString.call(arr);
    
    if ( note !== [Object]) {
    let res = arr.slice();
    for (let i = res.length-1; i >= 0; i--) {
        note = res[i];
        switch (note) {
            case '--discard-next':
                (i+1 <= res.length-1) ? res = res.splice(i, 2): res = res.splice(i, 0);
                break;
            case '--discard-prev':
                (i-1 >= 0) ? res = res.splice(i-1, 2): res = res.splice(i, 0);
                res = res.splice(i-1, 2);
                break;
            case '--double-next':
                (i+1 <= res.length-1) ? res = res.splice(i,1,res[i]): res = res.splice(i, 0);
                break;
            case '--double-prev':
                (i-1 >= 0) ? res = res.splice(i,1, res[i-1]): res = res.splice(i, 0);
                break;
        }
    }
    return res;
    } else throw new RangeError('Error');
};

};

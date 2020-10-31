const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
   if (!(arr instanceof Array)) throw new Error();
    if (arr.length == 0) return arr;
    let length = arr.length;
    let transformArray = [];
    for (let i = 0; i < length; i++) {
         switch (arr[i]) {
            case '--discard-next':
                i++;
                break;
            case '--discard-prev':
                if (i > 0 && arr[i - 2] !== '--discard-next') {
                    transformArray.pop();
                }
                i;
                break;
            case '--double-next':
                if (i < arr.length - 1) {
                    transformArray.push(arr[i + 1]);
                }
                i;
                break;
            case '--double-prev':
                if (i > 0 && arr[i - 2] !== '--discard-next') {
                    transformArray.push(arr[i - 1]);
                }
                i;
                break;
            default:
                transformArray.push(arr[i]);
        };
    };
    return transformArray;
};

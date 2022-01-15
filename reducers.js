'use strict';
// Don't add or change anything above this comment.

/*
* Don't change the declaration of this function.
*/
const reducer1 = (previousValue, currentValue) => {
    //  Write your code here
    if (typeof(previousValue) === 'number') {
        if (typeof(currentValue) === 'number') {
            return previousValue + currentValue
        }
        else {
            return previousValue
        }
    }
    else {
        if (typeof(currentValue) === 'number') {
            return currentValue
        }
        else {
            return 0
        }
    }
};

/*
* Don't change the declaration of this function.
*/
const reducer2 = (previousValue, currentValue) => {
    //  Write your code here
    if (typeof(previousValue) !== 'number' || typeof(currentValue) !== 'number') {
        throw new TypeError('The array contains non-numeric value.')
    }
    return previousValue + currentValue
};


// Don't add or change anything below this comment.
module.exports = { reducer1, reducer2 };
'use strict';
// Don't add or change anything above this comment.

/*
* Don't change the declaration of this function.
*/
function deepEqual(val1, val2) {
    // check the simple case for numbsers, boolean, string, and undefined
    if (val1 === val2) {return true} 
    // since typeof(null) is object, check null type separately
    else if(val1 === null || val2 === null) {return false}
    // check if the type varies
    else if (typeof(val1) !== 'object' || typeof(val2) !== 'object') {return false}
    // now both parameters are objects that are not null 
    else{
        // case: both parameters are array
        if (Array.isArray(val1) && Array.isArray(val2)){
            if (val1.length === val2.length){
                for (const i in Object.keys(val1)){
                    if (deepEqual(val1[i], val2[i]) === false) {return false}
                }
                return true
            }
            else {return false}
        } 
        // case: one is array, one is other object
        else if (Array.isArray(val1) !== Array.isArray(val2)) {return false}
        // case: both are objects
        else if (Object.keys(val1).length === Object.keys(val2).length){
            /*
            // This part is for the objects to be in the same order.
            for (let i = 0; i < Object.keys(val1).length; i++){
                if (Object.keys(val1)[i] !== Object.keys(val2)[i]){
                    return false
                }
            }
            */
            for (const key in val1){
                if (deepEqual(val1[key], val2[key]) === false) {return false} 
            }
            return true
        }
        // all other cases that I did not find about
        else {return false}
    }
}

// Don't add or change anything below this comment.
module.exports = deepEqual;
const repeatString = function(string, num) {
    let resultString = "";

    if(validateNumber(num)) {
        for (let index = 0; index < num; index++) {
            resultString += string;
        }
    } else {
        resultString = 'ERROR'; 
    }

    return resultString;
};

function validateNumber(number) {
    if(number < 0) {
        return false;
    }
    return true;
}

// Do not edit below this line
module.exports = repeatString;

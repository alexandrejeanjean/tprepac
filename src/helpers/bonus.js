const getClosestToZero = () => {
    let res = 0;
    let positiveArr = [];
    let negativeArr = [];

    // Separate negative numbers from positive numbers
    arr.forEach((num) => {
        if (num < 0) {
            negativeArr.push(num);
        } else {
            positiveArr.push(num);
        }
    });

    // Sort each array from the smallest to the biggest
    let pos = positiveArr.sort((a, b) => a - b);
    let neg = negativeArr.sort((a, b) => a - b);

    // Compare the smallest of each and return the positive one if there is equality
    if (Math.abs(pos[0]) > Math.abs(neg[neg.length - 1])) {
        res = neg[neg.length - 1];
    } else {
        res = pos[0];
    }

    return res;
};

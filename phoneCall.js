function phoneCall(min1, min2_10, min11, s) {
    let remainingMinutes = s;

    remainingMinutes = (s - min1);

    remainingMinutes = s - (min2_10 * 9);

    remainingMinutes = min11 / remainingMinutes;

    return remainingMinutes;
}

console.log(min1 = 3, min2_10 = 1, min11 = 2, s = 20);
// subtract min1 from s and set equal to minutes remaining
// take min_2 multiply by 9 and subtract from minutes reamining
// for min11 divide minutes remaining by 2
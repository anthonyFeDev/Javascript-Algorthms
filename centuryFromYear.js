function centuryFromYear(year) {
    
    let century = year / 100;

    let centuryYear = Math.floor(year/100);

    
    // console.log(century);
    // console.log(centuryYear);
    
    if (century > centuryYear){
        // console.log(centuryYear + 1);
        return centuryYear + 1;
    } else {
        // console.log(centuryYear);
        return centuryYear;
    }
        
}

centuryFromYear(1994);
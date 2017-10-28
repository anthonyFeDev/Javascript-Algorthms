function centuryFromYear(year) {
    
    let century = year / 100;

    let centuryYear = Math.floor(year/100);
    
    if (century > centuryYear){
        return centuryYear + 1;
    } else {
        return centuryYear;
    }
        
}

centuryFromYear(1994);
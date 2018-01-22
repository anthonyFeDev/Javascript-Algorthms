function lateRide(n) {
    let time = [];
    let hours = Math.floor(n / 60);
    let minutes = Math.floor(n - (hours * 60));
    //split minutes into individual strings
    hours = hours.toString().split('');
    minutes = minutes.toString().split('');
    
    for (let i = 0; i < hours.length; i++) {
        time.push(parseInt(hours[i]));
    }

    for (let i = 0; i < minutes.length; i++) {
        time.push(parseInt(minutes[i]));
    }

    return time.reduce((a, b) => a + b);

}
console.log(lateRide(808));
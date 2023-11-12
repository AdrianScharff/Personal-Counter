const getCurrentStreak = (units, startDate) => {
    const startTime = startDate.getTime();
    const currentTime = new Date().getTime();

    const currentStreak = currentTime - startTime;

    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMin = 60*1000;
    const oneSec = 1000;

    let days = Math.floor(currentStreak / oneDay);
    let hours = Math.floor((currentStreak % oneDay) / oneHour);
    let minutes = Math.floor((currentStreak % oneHour) / oneMin);
    let seconds = Math.floor((currentStreak % oneMin) / oneSec);

    const values = [days, hours, minutes, seconds];

    const setValue = (value) => {
        if (value < 10) {
            return `0${value}`
        }
        return value;
    }

    units.forEach((item, index) => {
        item.innerHTML = setValue(values[index]);
    });
}


// NoFap
const itemsNf = document.querySelectorAll('p .num-nf');
console.log(itemsNf);
const startDateNf = new Date(2023, 10, 12, 0, 12, 23);

setInterval(() => {
    getCurrentStreak(itemsNf, startDateNf)
}, 1000);


// Semen Retention
const itemsSr = document.querySelectorAll('p .num-sr');
const startDateSr = new Date(2023, 10, 12, 0, 12, 23);

setInterval(() => {
    getCurrentStreak(itemsSr, startDateSr)
}, 1000);
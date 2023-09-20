const items = document.querySelectorAll('p span');
console.log(items);
const startDate = new Date(2023, 7, 5, 18, 33, 33);

function getCurrentStreak() {
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

    items.forEach(function(item, index) {
        item.innerHTML = values[index];
    });
}

setInterval(getCurrentStreak, 1000);
const timer = (id, deadline) => {
    const getZero = num => {
        if(num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };

    const getTime = endTime => {
        const t = Date.parse(endTime) - Date.parse(new Date()),
              seconds = Math.floor( (t/1000) % 60),
              minutes = Math.floor( (t/1000/60) % 60),
              hours = Math.floor( (t/(1000 * 60 * 60)) % 24),
              days = Math.floor( (t/(1000 * 60 * 60 * 24)));
        return {
            t: t,
            seconds: seconds,
            minutes: minutes,
            hours: hours,
            days: days
        };
    };

    const setClock = (selector, endTime) => {
        const timer = document.querySelector(selector),
              seconds =  timer.querySelector('#seconds'),
              minutes = timer.querySelector('#minutes'),
              hours = timer.querySelector('#hours'),
              days = timer.querySelector('#days'),
              timerInterval = setInterval(updateClock, 1000);
        
        updateClock();

        function updateClock() {
            const totalTime = getTime(endTime);

            seconds.textContent = getZero(totalTime.seconds);
            minutes.textContent = getZero(totalTime.minutes);
            hours.textContent = getZero(totalTime.hours);
            days.textContent = getZero(totalTime.days);

            if (endTime <= 0) {

                seconds.textContent = '00';
                minutes.textContent = '00';
                hours.textContent = '00';
                days.textContent = '00';

                clearInterval(timerInterval);
            }
        }
    };

    setClock(id, deadline);
};

export default timer;
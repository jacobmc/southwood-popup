(function () {
    const now = new Date();

    // Sunday morning from 9:25am until 11:00am
    if (now.getUTCDay() === 0 && ((now.getUTCHours() === 14 && now.getUTCMinutes() >= 25) || (now.getUTCHours() >= 15 && now.getUTCHours() < 16))) {
        const body = document.body,
            sundayPopupClose = document.getElementById('sunday-popup-close');
    
        setTimeout(() => {
            body.classList.add('sunday-popup-open');
        }, 2000);

        sundayPopupClose.addEventListener('click', () => {
            body.classList.remove('sunday-popup-open');
        });
    }
 })();
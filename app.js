import { generateBoard } from "./board.service.js";

const $main = document.querySelector('main');
const $footer = document.querySelector('footer');


function start() {
    let firstTime = true;
    $main.innerHTML = '';
    const hours = Math.round(Math.random() * 24);
    const minutes = Math.round((Math.random() * 60) / 5) * 5;

    $footer.innerHTML = `<h2> You have to eat ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} </h2>`;
    const slices = generateBoard();
    slices.forEach(slice => {
        $main.appendChild(slice);
        slice.addEventListener('click', _checkHours)
    });

    function _checkHours({ target }) {
        const clickedHours = target.getAttribute('data-hours');
        const clickedMinutes = target.getAttribute('data-minutes');

        if (firstTime) {
            if (clickedHours == hours || (hours - 12 == clickedHours)) {
                target.style.opacity = 0.3;
                firstTime = false;

            } else {
                _setError(target);
                console.warn('wops, try again', clickedHours, hours);
            }
        }
        else {
            if (clickedMinutes == minutes) {
                target.style.opacity = 0.3;
                $footer.innerHTML = '<h2> Good job! </h2>';
                setTimeout(start, 1000);
            } else {
                _setError(target);
                console.warn('wops, try again', clickedMinutes, minutes);
            }
        }
    }
    /**
     * 
     * @param {HTMLElement} element 
     */
    function _setError(element) {
        element.classList.add('error');
        setTimeout(() => {
            element.classList.remove('error')
        }, 1000);
    }
};




start();
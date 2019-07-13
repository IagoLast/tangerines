/**
 * 
 * @param {HTMLElement} element 
 */
export function generateBoard() {
    const slices = [];
    for (let i = 0; i < 12; i++) {
        const slice = _generateSlice(i);
        slices.push(slice);
    }
    return slices;
}

/**
 * 
 * @param {Number} index 
 */
function _generateSlice(index) {
    const $img = document.createElement('img');
    const deg = (Math.random() * 360);
    $img.src = './img/slice.svg';
    $img.className = 'slice';
    $img.style.transform = `rotate(${deg}deg)`;
    $img.alt = index;
    $img.setAttribute('data-hours', index);
    $img.setAttribute('data-minutes', index * 5);
    return $img;
}


export default { generateBoard };
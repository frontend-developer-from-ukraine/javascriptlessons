const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');


const logTarget = (text, color) => {
    const eventListElem = document.querySelector('.events-list');
    eventListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`
}

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

divElem.addEventListener("click", logGreyDiv, true);
pElem.addEventListener("click", logGreyP, true);
spanElem.addEventListener("click", logGreySpan, true);

divElem.addEventListener("click", logGreenDiv);
pElem.addEventListener("click", logGreenP);
spanElem.addEventListener("click", logGreenSpan);

const clearBtn = document.querySelector('.clear-btn');
const removeBtn = document.querySelector('.remove-handles-btn');
const attachBtn = document.querySelector('.attach-handles-btn');

const getClickBtn = () => {
    const eventsListElem = document.querySelector('.events-list');
    eventsListElem.innerHTML = '';
};

const getRemove = () => {
    divElem.removeEventListener('click', showGreyDiv, true);
    divElem.removeEventListener('click', showGreenDiv);

    pElem.removeEventListener('click', showGreyP, true);
    pElem.removeEventListener('click', showGreenP);

    spanElem.removeEventListener('click', showGreySpan, true);
    spanElem.removeEventListener('click', showGreenSpan);

};

const getAttach = () => {
    divElem.addEventListener('click', showGreyDiv, true);
    divElem.addEventListener('click', showGreenDiv);

    pElem.addEventListener('click', showGreyP, true);
    pElem.addEventListener('click', showGreenP);

    spanElem.addEventListener('click', showGreySpan, true);
    spanElem.addEventListener('click', showGreenSpan);
};

clearBtn.addEventListener('click', getClickBtn);
removeBtn.addEventListener('click', getRemove);
attachBtn.addEventListener('click', getAttach);
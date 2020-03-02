const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const clearBtn = document.querySelector('.clear-btn');
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');
const attachHandlersBtn = document.querySelector('.attach-handlers-btn');

const logTarget = (text, color) => {

    let eventsList = document.querySelector('.events-list');
    eventsList.innerHTML += `<span style="color:${color}; margin-left:8px">${text}</span>`;

};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');

const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreyP = logTarget.bind(null, 'P', 'grey');

const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

divElem.addEventListener('click', logGreyDiv, true);
divElem.addEventListener('click', logGreenDiv);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);

spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan);


clearBtn.addEventListener('click', function() {

    const eventsList = document.querySelector('.events-list');
    eventsList.innerHTML = '';

});

removeHandlersBtn.addEventListener('click', function() {

    divElem.removeEventListener('click', logGreyDiv, true);
    divElem.removeEventListener('click', logGreenDiv);

    pElem.removeEventListener('click', logGreyP, true);
    pElem.removeEventListener('click', logGreenP);

    spanElem.removeEventListener('click', logGreySpan, true);
    spanElem.removeEventListener('click', logGreenSpan);

});

attachHandlersBtn.addEventListener('click', function() {

    divElem.addEventListener('click', logGreyDiv, true);
    divElem.addEventListener('click', logGreenDiv);

    pElem.addEventListener('click', logGreyP, true);
    pElem.addEventListener('click', logGreenP);

    spanElem.addEventListener('click', logGreySpan, true);
    spanElem.addEventListener('click', logGreenSpan);

});

// SET TEXT FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text: text
});

// SORT BY DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

// SORT BY AMOUNT
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

// SET START DATE
export const setStartDate = (day = undefined) => ({
    type: 'SET_START_DATE',
    date: day
});

// SET END DATE
export const setEndDate = (day = undefined) => ({
    type: 'SET_END_DATE',
    date: day
});
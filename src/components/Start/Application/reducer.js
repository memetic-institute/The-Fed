// The overuse of constants for strings here is for minification

const firstName = 'firstName';
const lastName = 'lastName';
const insiderTrading = 'insiderTrading';
const embezzlement = 'embezzlement';
const bribery = 'bribery';
const taxEvasion = 'taxEvasion';

export const initialState = {
    [firstName]: '',
    [lastName]: '',
    [insiderTrading]: '',
    [embezzlement]: '',
    [bribery]: '',
    [taxEvasion]: ''
};

const applicationReducer = (state, action) => {
    const reduction = key => ({ ...state, [key]: action.value });
    switch (action.type) {
        case firstName:
            return reduction(firstName);
        case lastName:
            return reduction(lastName);
        case insiderTrading:
            return reduction(insiderTrading);
        case embezzlement:
            return reduction(embezzlement);
        case bribery:
            return reduction(bribery);
        case taxEvasion:
            return reduction(taxEvasion);
        default:
            throw new Error('Invalid application field');
    }
};

export default applicationReducer;

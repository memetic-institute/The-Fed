// Action Types
// const CLOSE_MODAL = 'thefed/modal/CLOSE_MODAL';
const CLEAR_MODAL = 'thefed/modal/CLEAR_MODAL';
const RENDER_MODAL = 'thefed/modal/RENDER_MODAL';

// Reducer
export default (state = {}, action = {}) => {
    switch (action.type) {
        // case CLOSE_MODAL:
        //     return {
        //         show: false,
        //         ...action.props
        //     };
        case CLEAR_MODAL:
            return {
                show: false
            };
        case RENDER_MODAL:
            return {
                show: true,
                ...action.props
            };
        default:
            return state;
    }
};

// Action Creators
// export const closeModal = () => ({
//     type: CLOSE_MODAL
// });

export const clearModal = () => ({
    type: CLEAR_MODAL
});

export const renderModal = props => ({
    type: RENDER_MODAL,
    props
});

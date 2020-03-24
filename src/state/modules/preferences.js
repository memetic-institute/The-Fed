// Action Types
const TOGGLE_VOLUME = 'thefed/preferences/TOGGLE_VOLUME';
const TOGGLE_TUTORIAL = 'thefed/preferences/TOGGLE_TUTORIAL';

// Reducer
export default (
    state = {
        mute: false,
        tutorial: true
    },
    action = {}
) => {
    switch (action.type) {
        case TOGGLE_VOLUME:
            return {
                ...state,
                mute: !state.mute
            };
        case TOGGLE_TUTORIAL:
            return {
                ...state,
                tutorial: !state.tutorial
            };
        default:
            return state;
    }
};

// Action Creators
export const toggleVolume = () => ({
    type: TOGGLE_VOLUME
});

export const toggleTutorial = () => ({
    type: TOGGLE_TUTORIAL
});

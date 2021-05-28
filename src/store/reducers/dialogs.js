import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
	dialogOpen: ["dialog", "data"],
	dialogClose: ["dialog", "data"],
});

/**
 * Handlers
 */
const INITIAL_STATE = {
	music: {isOpen: false, data: {}},
	vignette: {isOpen: false, data: {}},
	recorded: {isOpen: false, data: {}},
	break: {isOpen: false, data: {}},
};

const dialogOpen = (state = INITIAL_STATE, action) => ({
	...state,
	[action.dialog]: {isOpen: true, data: action.data},
});

const dialogClose = (state = INITIAL_STATE, action) => ({
	...state,
	[action.dialog]: {isOpen: false, data: action.data},
});

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
	[Types.DIALOG_OPEN]: dialogOpen,
	[Types.DIALOG_CLOSE]: dialogClose,
});

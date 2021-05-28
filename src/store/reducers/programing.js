import { createActions, createReducer } from "reduxsauce";
import { applyDrag } from "../../utils";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
	insertItemBefore: ["item", "position"],
	insertItemAfter: ["item", "position"],
	insertItemEnd: ["item"],
	removeItem: ["item"],
	dragItem: ["dropResult"],
	selectItem: ["item"],
	loadItems: ["items"],
	selectDate: ["date"],
	selectHour: ["hour"],
});

/**
 * Handlers
 */
const INITIAL_STATE = {
	date_selected: new Date(),
	hour_selected: "00",
	item_selected: {},
	items: {
		"00": [],
		"01": [],
		"02": [],
		"03": [],
		"04": [],
		"05": [],
		"06": [],
		"07": [],
		"08": [],
		"09": [],
		"10": [],
		"11": [],
		"12": [],
		"13": [],
		"14": [],
		"15": [],
		"16": [],
		"17": [],
		"18": [],
		"19": [],
		"20": [],
		"21": [],
		"22": [],
		"23": [],
	},
};

const dragItem = (state = INITIAL_STATE, action) => {
	return {
		...state,
		items: {...state.items, [state.hour_selected]: applyDrag(
			state.items[state.hour_selected],
			action.dropResult
		)}
	}
};

const selectHour = (state = INITIAL_STATE, action) => ({
	...state,
	hour_selected: action.hour,
});

const selectDate = (state = INITIAL_STATE, action) => ({
	...state,
	date_selected: action.date,
});

const loadItems = (state = INITIAL_STATE, action) => ({
	...state,
	items: action.items,
});

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
	[Types.DRAG_ITEM]: dragItem,
	[Types.SELECT_HOUR]: selectHour,
	[Types.SELECT_DATE]: selectDate,
	[Types.LOAD_ITEMS]: loadItems,
});

import { GET_GAMES_DAY } from '../actions/actions-games';

const initialState = {
	gamesDay: [],
	gamesDayLoaded: false,
};

export default function(state = initialState, action) {
	const { type, data } = action;
	switch (type) {
		case GET_GAMES_DAY:
			return {
				...state,
				gamesDay: data,
				gamesDayLoaded: true,
			};
		default:
			return state;
	}
}

import { GET_NEWS_ALL } from '../actions/actions-news';

const initialState = {
	newsAll: [],
	newsAllLoaded: false,
};

export default function(state = initialState, action) {
	const { type, data } = action;
	switch (type) {
		case GET_NEWS_ALL:
			return {
				...state,
				newsAll: data,
				newsAllLoaded: true,
			};
		default:
			return state;
	}
}

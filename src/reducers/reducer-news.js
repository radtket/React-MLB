import { GET_NEWS_ALL } from '../actions/actions-news';

const initialState = {
	newsAll: [],
	newsAllLoaded: false,
	newsAllLoadedAt: null,
};

export default function(state = initialState, action) {
	const { type, data } = action;
	switch (type) {
		case GET_NEWS_ALL:
			return {
				...state,
				newsAll: data,
				newsAllLoaded: true,
				newsAllLoadedAt: new Date(),
			};
		default:
			return state;
	}
}

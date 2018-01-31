import { GET_TEAMS_ALL, SORT_TEAMS } from '../actions/actions-teams-all';

const initialState = {
	teamsAll: [],
	teamsAllLoaded: false,
	teamsLoadedAt: null,
	teamsSorted: [],
	teamsSortedLoaded: false,
};

export default function(state = initialState, action) {
	const { type, data } = action;
	switch (type) {
		case GET_TEAMS_ALL:
			return {
				...state,
				teamsAll: data,
				teamsAllLoaded: true,
				teamsLoadedAt: new Date(),
			};
		case SORT_TEAMS:
			return {
				...state,
				teamsSorted: data,
				teamsSortedLoaded: true,
			};
		default:
			return state;
	}
}

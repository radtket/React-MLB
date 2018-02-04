import { GET_TEAMS_ALL, SORT_TEAMS, GET_TEAMS_STANDINGS } from '../actions/actions-teams-all';

const initialState = {
	teamsAll: [],
	teamsAllLoaded: false,
	teamsAllLoadedAt: null,
	teamsSorted: [],
	teamsSortedLoaded: false,
	teamsStandings: [],
	teamsStandingsLoaded: false,
};

export default function(state = initialState, action) {
	const { type, data } = action;
	switch (type) {
		case GET_TEAMS_ALL:
			return {
				...state,
				teamsAll: data,
				teamsAllLoaded: true,
				teamsAllLoadedAt: new Date(),
			};
		case SORT_TEAMS:
			return {
				...state,
				teamsSorted: data,
				teamsSortedLoaded: true,
			};
		case GET_TEAMS_STANDINGS:
			return {
				...state,
				teamsStandings: data,
				teamsStandingsLoaded: true,
			};
		default:
			return state;
	}
}

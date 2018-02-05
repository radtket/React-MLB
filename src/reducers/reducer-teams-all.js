import { GET_TEAMS_ALL, SORT_TEAMS, GET_TEAMS_STANDINGS, GET_TEAM_LOGOS } from '../actions/actions-teams-all';

const initialState = {
	teamsAll: [],
	teamsAllLoaded: false,
	teamsAllLoadedAt: null,
	teamsSorted: [],
	teamsSortedLoaded: false,
	teamsStandings: [],
	teamsStandingsLoaded: false,
	teamsStandingsLoadedAt: null,
	teamsLogos: [],
	teamsLogosLoaded: false,
	teamsLogosLoadedAt: null,
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
				teamsStandingsLoadedAt: new Date(),
			};
		case GET_TEAM_LOGOS:
			return {
				...state,
				teamsLogos: data,
				teamsLogosLoaded: true,
				teamsLogosLoadedAt: new Date(),
			};
		default:
			return state;
	}
}

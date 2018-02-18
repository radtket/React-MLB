import { GET_PLAYERS_ON_TEAM, GET_SINGLE_BOXSCORE } from '../actions/actions-team';

const initialState = {
	playersOnTeam: [],
	playersOnTeamLoaded: false,
	playersOnTeamLoadedAt: null,
	teamBoxScore: [],
	teamBoxScoreLoaded: false,
};

export default function(state = initialState, action) {
	const { type, data } = action;
	switch (type) {
		case GET_PLAYERS_ON_TEAM:
			return {
				...state,
				playersOnTeam: data,
				playersOnTeamLoaded: true,
				playersOnTeamLoadedAt: new Date(),
			};
		case GET_SINGLE_BOXSCORE:
			return {
				...state,
				teamBoxScore: data,
				teamBoxScoreLoaded: true,
			};
		default:
			return state;
	}
}

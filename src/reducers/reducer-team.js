import { GET_PLAYERS_ON_TEAM } from '../actions/actions-team';

const initialState = {
	playersOnTeam: [],
	playersOnTeamLoaded: false,
	playersOnTeamLoadedAt: null,
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
		default:
			return state;
	}
}

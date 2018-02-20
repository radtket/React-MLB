import moment from 'moment';
import { GET_GAMES_DAY, GET_GAMES_TEAM_DAY } from '../actions/actions-games';

const initialState = {
	gamesDay: [],
	gamesDayDate: {},
	gamesDayLoaded: false,
	gamesDayLoadedAt: null,
	gamesTeam: {},
	gamesTeamLoaded: false,
};

export default function(state = initialState, action) {
	const { type, data } = action;
	switch (type) {
		case GET_GAMES_DAY:
			return {
				...state,
				gamesDay: data,
				gamesDayDate: moment('2017-JUL-31')
					.utc()
					.format('DD-MMM-YYYY')
					.toUpperCase(),
				gamesDayLoaded: true,
				gamesDayLoadedAt: new Date(),
			};
		case GET_GAMES_TEAM_DAY:
			return {
				...state,
				gamesTeam: data,
				gamesTeamLoaded: true,
			};
		default:
			return state;
	}
}

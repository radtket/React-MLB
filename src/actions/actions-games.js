import apiHeaders from '../utils/api';

export const GET_GAMES_DAY = 'GET_GAMES_DAY';

export function getGamesDay(date) {
	return async function(dispatch) {
		const res = await fetch(`https://api.fantasydata.net/v3/mlb/stats/JSON/GamesByDate/${date}`, apiHeaders);
		const games = await res.json();
		return dispatch({
			type: GET_GAMES_DAY,
			data: games,
		});
	};
}

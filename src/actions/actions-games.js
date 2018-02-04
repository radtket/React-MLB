import apiHeaders from '../utils/api';

export const GET_GAMES_DAY = 'GET_GAMES_DAY';

export function getGamesDay() {
	return async function(dispatch) {
		const res = await fetch(`https://api.fantasydata.net/v3/mlb/stats/JSON/GamesByDate/2017-JUL-31`, apiHeaders);
		const games = await res.json();
		console.log(games);
		return dispatch({
			type: GET_GAMES_DAY,
			data: games,
		});
	};
}

import apiHeaders from '../utils/api';

export const GET_PLAYERS_ON_TEAM = 'GET_PLAYERS_ON_TEAM';
export const GET_SINGLE_BOXSCORE = 'GET_SINGLE_BOXSCORE';

export function getTeamRoster(teamArg) {
	return async function(dispatch) {
		const res = await fetch(`https://api.fantasydata.net/v3/mlb/scores/JSON/Players/${teamArg}`, apiHeaders);
		const players = await res.json();
		console.log(players);
		return dispatch({
			type: GET_PLAYERS_ON_TEAM,
			data: players,
		});
	};
}

export function getSingleBoxScore(gameId) {
	return async function(dispatch) {
		const res = await fetch(`https://api.fantasydata.net/v3/mlb/stats/JSON/BoxScore/${gameId}`, apiHeaders);
		const boxscore = await res.json();
		console.log(boxscore);
		return dispatch({
			type: GET_SINGLE_BOXSCORE,
			data: boxscore,
		});
	};
}

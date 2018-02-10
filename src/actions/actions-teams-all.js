import apiHeaders from '../utils/api';
import { createGroupedArray, propComparator } from '../utils/helpers';

export const GET_TEAMS_ALL = 'GET_TEAMS_ALL';
export const SORT_TEAMS = 'SORT_TEAMS';
export const GET_TEAMS_STANDINGS = 'GET_TEAMS_STANDINGS';
export const GET_TEAM_LOGOS = 'GET_TEAM_LOGOS';

export function getTeams() {
	return async function(dispatch) {
		const res = await fetch(`https://api.fantasydata.net/v3/mlb/scores/JSON/teams`, apiHeaders);
		const teamsAll = await res.json();
		return dispatch({
			type: GET_TEAMS_ALL,
			data: teamsAll,
		});
	};
}

export function sortTeams(arg) {
	return async function(dispatch) {
		const orderedLeague = await arg.sort(propComparator('League'));

		const combined = [
			...orderedLeague.slice(0, 15).sort(propComparator('Division')),
			...orderedLeague.slice(15).sort(propComparator('Division')),
		];
		const divisions = createGroupedArray(combined, 5);
		return dispatch({
			type: SORT_TEAMS,
			data: divisions,
		});
	};
}

export function getTeamLogos() {
	return async function(dispatch, getState) {
		const { teamsAll } = await getState().teams;
		const logos = await teamsAll.reduce((obj, i) => {
			obj[i.Key] = i.WikipediaLogoUrl;
			return obj;
		}, {});
		return dispatch({
			type: GET_TEAM_LOGOS,
			data: logos,
		});
	};
}

export function getTeamsStandings(year) {
	return async function(dispatch) {
		const res = await fetch(`https://api.fantasydata.net/v3/mlb/stats/JSON/Standings/${year}`, apiHeaders);
		const teamsStandings = await res.json();
		return dispatch({
			type: GET_TEAMS_STANDINGS,
			data: teamsStandings,
		});
	};
}

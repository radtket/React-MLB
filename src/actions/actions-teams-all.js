import apiHeaders from '../utils/api';
import { createGroupedArray, propComparator } from '../utils/helpers';

export const GET_TEAMS_ALL = 'GET_TEAMS_ALL';
export const SORT_TEAMS = 'SORT_TEAMS';
export const GET_TEAMS_STANDINGS = 'GET_TEAMS_STANDINGS';
export const GET_TEAM_LOGOS = 'GET_TEAM_LOGOS';
export const GET_SINGLE_TEAM = 'GET_SINGLE_TEAM';
export const RESET_SINGLE_TEAM = 'RESET_SINGLE_TEAM';

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

export function sortTeams() {
	return async function(dispatch, getState) {
		const { teamsAll } = await getState().teams;
		const orderedLeague = await teamsAll.sort(propComparator('League'));

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

export function getSingleTeam(teamArg) {
	return async function(dispatch, getState) {
		const { teamsAll } = await getState().teams;
		const singleTeam = await teamsAll.find(team => team.Key === teamArg);
		return dispatch({
			type: GET_SINGLE_TEAM,
			data: singleTeam,
		});
	};
}

export function resetSingleTeam() {
	return {
		type: RESET_SINGLE_TEAM,
	};
}

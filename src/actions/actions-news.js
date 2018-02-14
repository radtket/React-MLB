import apiHeaders from '../utils/api';

export const GET_NEWS_ALL = 'GET_NEWS_ALL';

export function getNewsAll() {
	return async function(dispatch) {
		const res = await fetch(`https://api.fantasydata.net/v3/mlb/stats/JSON/News`, apiHeaders);
		const news = await res.json();
		return dispatch({
			type: GET_NEWS_ALL,
			data: news,
		});
	};
}

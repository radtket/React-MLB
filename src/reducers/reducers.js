import { combineReducers } from 'redux';

import GamesAllReducer from './reducer-games';
import TeamsAllReducer from './reducer-teams-all';
import NewsAllReducer from './reducer-news';
import SingleTeamAllReducer from './reducer-team';

// We combine all reducers into a single object before updated data is dispatched
// (sent) to store Your entire applications state (store) is just whatever gets
// returned from all your reducers

const rootReducer = combineReducers({
	teams: TeamsAllReducer,
	news: NewsAllReducer,
	games: GamesAllReducer,
	team: SingleTeamAllReducer,
});

export default rootReducer;

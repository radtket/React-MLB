import { combineReducers } from 'redux';

import TeamsAllReducer from './reducer-teams-all';

// We combine all reducers into a single object before updated data is dispatched
// (sent) to store Your entire applications state (store) is just whatever gets
// returned from all your reducers

const rootReducer = combineReducers({
	teams: TeamsAllReducer,
});

export default rootReducer;

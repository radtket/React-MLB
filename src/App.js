import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getTeams } from './actions/actions-teams-all';
import Header from './components/Header/Header';
import Home from './app/home/HomeContainer.js';
import Standings from './app/standings/StandingsContainer';
import GameScore from './app/scores/ScoresContainer';
import Team from './app/team/TeamContainer';
import News from './app/news/NewsContainer';

import { oneHour } from './utils/helpers';

class App extends Component {
	async componentDidMount() {
		const { teamsAllLoaded, teamsAllLoadedAt } = this.props;
		if (!teamsAllLoaded || new Date() - teamsAllLoadedAt > oneHour) {
			this.props.getTeams();
		}
	}

	render() {
		const { teamsAllLoaded } = this.props;
		if (!teamsAllLoaded) {
			return <h1>Loading</h1>;
		}
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/scores" component={GameScore} />
					<Route path="/teams/:teamAbrv" component={Team} />
					<Route path="/standings" component={Standings} />
					<Route path="/news" component={News} />
				</Switch>
			</div>
		);
	}
}

App.propTypes = {
	teamsAllLoaded: PropTypes.bool.isRequired,
	getTeams: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	teamsAll: state.teams.teamsAll,
	teamsAllLoaded: state.teams.teamsAllLoaded,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getTeams,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getTeams } from '../actions/actions-teams-all';
import Header from '../components/Header/Header';
import News from './News/News';
import GameScore from './GameScore/GameScore';

class App extends Component {
	async componentDidMount() {
		const { teamsAllLoaded, teamsAllLoadedAt } = this.props;
		const oneHour = 60 * 60 * 1000;
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
				<div className="container">
					<div className="col-md-4">
						<GameScore />
					</div>
					<div className="col-md-8">
						<News />
					</div>
				</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

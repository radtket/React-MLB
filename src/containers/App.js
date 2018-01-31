import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getTeams } from '../actions/actions-teams-all';
import Header from '../components/Header/Header';
// import News from '../components/News/News';

class App extends Component {
	async componentDidMount() {
		const { teamsAllLoaded, teamsLoadedAt } = this.props;
		const oneHour = 60 * 60 * 1000;
		if (!teamsAllLoaded || new Date() - teamsLoadedAt > oneHour) {
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
				{/* <News /> */}
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

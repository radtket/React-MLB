import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSingleTeam, resetSingleTeam } from '../../actions/actions-teams-all';
import Header from './components/HeaderComponent';
import TeamNav from './components/TeamNavComponent';

// Inidividual Sub Pages
import Home from './home/HomeContainer';
import Roster from './roster/RosterContainer';
import Stats from './stats/StatsContainer';
import Schedule from './schedule/ScheduleContainer';

class Team extends Component {
	async componentWillMount() {
		const { teamAbrv } = this.props.match.params;
		this.props.getSingleTeam(teamAbrv);
	}
	componentWillUpdate(nextProps) {
		if (nextProps.singleTeam.Key !== nextProps.match.params.teamAbrv) {
			const { teamAbrv } = nextProps.match.params;
			this.props.getSingleTeam(teamAbrv);
		}
	}
	componentWillUnmount() {
		this.props.resetSingleTeam();
	}
	render() {
		const { url } = this.props.match;
		const {
			City,
			Name,
			WikipediaLogoUrl,
			WikipediaWordMarkUrl,
			PrimaryColor,
			SecondaryColor,
			League,
			Division,
			Key,
		} = this.props.singleTeam;
		return (
			<div>
				<Header
					teamCity={City}
					teamName={Name}
					logoPrimary={WikipediaLogoUrl}
					logoSecondary={WikipediaWordMarkUrl}
					colorPrimary={PrimaryColor}
					colorSecondary={SecondaryColor}
				/>
				<TeamNav teamPath={url} />
				<div className="container">
					<Route
						exact
						path={`${url}`}
						render={() => <Home num="2" teamID={Key} currentTeamLeague={League} currentTeamDivision={Division} />}
					/>
					<Route exact path={`${url}/stats`} component={Stats} />
					<Route exact path={`${url}/schedule`} component={Schedule} />
					<Route
						exact
						path={`${url}/roster`}
						render={() => <Roster currentTeam={this.props.match.params.teamAbrv} />}
					/>
				</div>
			</div>
		);
	}
}

Team.propTypes = {
	match: PropTypes.shape({
		url: PropTypes.string.isRequired,
		params: PropTypes.shape({
			teamAbrv: PropTypes.string.isRequired,
		}).isRequired,
	}).isRequired,
	getSingleTeam: PropTypes.func.isRequired,
	singleTeam: PropTypes.shape({
		City: PropTypes.string,
		Name: PropTypes.string,
		WikipediaLogoUrl: PropTypes.string,
		WikipediaWordMarkUrl: PropTypes.string,
		PrimaryColor: PropTypes.string,
		SecondaryColor: PropTypes.string,
		League: PropTypes.string,
		Division: PropTypes.string,
		Key: PropTypes.string,
	}).isRequired,
	resetSingleTeam: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	singleTeam: state.teams.singleTeam,
	singleTeamLoaded: state.teams.singleTeamLoaded,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getSingleTeam,
			resetSingleTeam,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Team);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import StandingsSingleTeam from './Standings_SingleTeam';
import StandingsDivision from './Standings_Division';
import { getTeamsStandings, getTeamLogos } from '../../actions/actions-teams-all';
import './Standings.css';

class Standings extends Component {
	async componentWillMount() {
		const { teamsStandingsLoaded } = this.props;
		if (!teamsStandingsLoaded) {
			const currentYear = new Date().getFullYear();
			this.props.getTeamsStandings(currentYear - 1);
		}
		this.props.getTeamLogos();
	}
	render() {
		const { teamsStandings, teamsLogos, teamsLogosLoaded } = this.props;
		if (!teamsLogosLoaded) {
			return <p>loading</p>;
		}
		const groupSize = 5;
		const teamRows = teamsStandings
			.map(item => (
				// map item to html elements
				<StandingsSingleTeam
					key={item.Key}
					logo={teamsLogos[`${item.Key}`]}
					division={`${item.League} ${item.Division}`}
					team={item}
				/>
			))
			.reduce((r, element, index) => {
				// create element groups with size 5, result looks like:
				// [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
				index % groupSize === 0 && r.push([]);
				r[r.length - 1].push(element);
				return r;
			}, [])
			.map(rowContent => (
				// surround every group with 'row'
				<StandingsDivision
					className="table"
					key={rowContent[0].props.division}
					division={rowContent[0].props.division}
					divisionTeams={rowContent}
				/>
			));
		return <div className="container">{teamRows}</div>;
	}
}

Standings.propTypes = {
	teamsStandings: PropTypes.arrayOf(PropTypes.object).isRequired,
	getTeamsStandings: PropTypes.func.isRequired,
	getTeamLogos: PropTypes.func.isRequired,
	teamsLogos: PropTypes.objectOf(PropTypes.string).isRequired,
	teamsLogosLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	teamsStandings: state.teams.teamsStandings,
	teamsStandingsLoaded: state.teams.teamsStandingsLoaded,
	teamsLogos: state.teams.teamsLogos,
	teamsLogosLoaded: state.teams.teamsLogosLoaded,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getTeamsStandings,
			getTeamLogos,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Standings);

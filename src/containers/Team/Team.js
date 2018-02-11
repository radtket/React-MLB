import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSingleTeam } from '../../actions/actions-teams-all';
import Header from '../../components/Team/Header/Header';

class Team extends Component {
	componentWillMount() {
		const { teamAbrv } = this.props.match.params;
		this.props.getSingleTeam(teamAbrv);

		// if (!this.props.singleTeamLoaded) {
		// 	this.props.getSingleTeam(teamAbrv);
		// }
	}
	render() {
		const { City, Name, WikipediaLogoUrl, WikipediaWordMarkUrl, PrimaryColor, SecondaryColor } = this.props.singleTeam;
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
				<div className="container">
					<h1>{this.props.match.params.teamAbrv}</h1>
				</div>
			</div>
		);
	}
}

Team.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			teamAbrv: PropTypes.string.isRequired,
		}).isRequired,
	}).isRequired,
	singleTeam: PropTypes.shape({
		City: PropTypes.string.isRequired,
		Name: PropTypes.string.isRequired,
		WikipediaLogoUrl: PropTypes.string.isRequired,
		WikipediaWordMarkUrl: PropTypes.string,
		PrimaryColor: PropTypes.string.isRequired,
		SecondaryColor: PropTypes.string,
	}).isRequired,
	getSingleTeam: PropTypes.func.isRequired,
	// singleTeamLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	singleTeam: state.teams.singleTeam,
	singleTeamLoaded: state.teams.singleTeamLoaded,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getSingleTeam,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Team);

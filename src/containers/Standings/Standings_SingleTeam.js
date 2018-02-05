import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTeams, getTeamLogos } from '../../actions/actions-teams-all';

class StandingsSingleTeam extends Component {
	// async componentWillMount() {
	// 	const { teamsAllLoaded, teamsAll } = this.props;
	// 	if (!teamsAllLoaded) {
	// 		this.props.getTeams();
	// 	}
	// 	this.props.getTeamLogos(teamsAll);
	// }
	render() {
		const { City, Wins, Losses, GamesBehind, HomeWins, HomeLosses, AwayWins, AwayLosses, TeamID } = this.props.team;
		return (
			<tr key={TeamID}>
				<td>{City}</td>
				<td>{Wins}</td>
				<td>{Losses}</td>
				<td>{(Number(`${Wins}`) / 162).toFixed(3).replace(/^0+/, '')}</td>
				<td>{GamesBehind ? (Math.round(`${GamesBehind}` * 2) / 2).toFixed(1) : '-'}</td>
				<td>{`${HomeWins} - ${HomeLosses}`}</td>
				<td>{`${AwayWins} - ${AwayLosses}`}</td>
			</tr>
		);
	}
}

StandingsSingleTeam.propTypes = {
	team: PropTypes.shape({
		City: PropTypes.string.isRequired,
		Wins: PropTypes.number.isRequired,
		Losses: PropTypes.number.isRequired,
		GamesBehind: PropTypes.number,
		HomeWins: PropTypes.number.isRequired,
		HomeLosses: PropTypes.number.isRequired,
		AwayWins: PropTypes.number.isRequired,
		AwayLosses: PropTypes.number.isRequired,
		TeamID: PropTypes.number.isRequired,
	}),
};

StandingsSingleTeam.defaultProps = {
	team: PropTypes.shape({
		GamesBehind: '-',
	}).isRequired,
};
// const mapStateToProps = state => ({
// 	teamsAll: state.teams.teamsAll,
// 	teamsAllLoaded: state.teams.teamsAllLoaded,
// 	teamsLogos: state.teams.teamsLogos,
// 	teamsLogosLoaded: state.teams.teamsLogosLoaded,
// });

// const mapDispatchToProps = dispatch =>
// 	bindActionCreators(
// 		{
// 			getTeams,
// 			getTeamLogos,
// 		},
// 		dispatch
// 	);

// export default connect(mapStateToProps, mapDispatchToProps)(StandingsSingleTeam);

export default StandingsSingleTeam;

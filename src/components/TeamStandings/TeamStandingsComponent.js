import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import './TeamStandings.css';
import { getTeamsStandings, getTeamLogos } from '../../actions/actions-teams-all';

class TeamStandings extends Component {
	async componentWillMount() {
		const { teamsStandingsLoaded, teamsLogosLoaded } = this.props;
		if (!teamsStandingsLoaded || !teamsLogosLoaded) {
			const currentYear = new Date().getFullYear();
			this.props.getTeamsStandings(currentYear - 1);
			this.props.getTeamLogos();
		}
	}
	render() {
		const { currentTeamDivision, currentTeamLeague, teamsStandings, teamsLogos } = this.props;
		const divisionTeams = teamsStandings.filter(
			item => item.Division === currentTeamDivision && item.League === currentTeamLeague
		);

		return (
			<div className="aside-component">
				<div className="table-custom-responsive">
					<table className="table-custom table-standings table-classic">
						<thead>
							<tr>
								<th>Team</th>
								<th>W</th>
								<th>L</th>
								<th>PCT</th>
								<th>GB</th>
							</tr>
						</thead>
						<tbody>
							{divisionTeams.map(item => (
								<tr key={item.Key}>
									<td className="team-inline">
										<div className="team-figure">
											<span className="standings--team__logo">
												<img src={teamsLogos[`${item.Key}`]} alt={`${item.City} Logo`} />
											</span>
										</div>
										<div className="team-title">
											<div className="team-name">{item.City}</div>
											<div className="team-country">{item.Name}</div>
										</div>
									</td>
									<td>{item.Wins}</td>
									<td>{item.Losses}</td>
									<td>{(Number(`${item.Wins}`) / 162).toFixed(3).replace(/^0+/, '')}</td>
									<td>{item.GamesBehind ? (Math.round(`${item.GamesBehind}` * 2) / 2).toFixed(1) : '-'}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

TeamStandings.propTypes = {
	currentTeamDivision: PropTypes.string,
	currentTeamLeague: PropTypes.string,
	teamsStandings: PropTypes.arrayOf(PropTypes.object).isRequired,
	getTeamsStandings: PropTypes.func.isRequired,
	getTeamLogos: PropTypes.func.isRequired,
	teamsLogos: PropTypes.objectOf(PropTypes.string).isRequired,
	teamsLogosLoaded: PropTypes.bool.isRequired,
};

TeamStandings.defaultProps = {
	currentTeamDivision: '',
	currentTeamLeague: '',
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

export default connect(mapStateToProps, mapDispatchToProps)(TeamStandings);

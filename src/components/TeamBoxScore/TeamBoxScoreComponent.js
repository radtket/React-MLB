import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getSingleBoxScore } from '../../actions/actions-team';
import { getTeamLogos } from '../../actions/actions-teams-all';
import './TeamBoxScore.css';

class TeamBoxScore extends Component {
	async componentWillMount() {
		const { teamBoxScoreLoaded } = this.props;
		if (!teamBoxScoreLoaded) {
			this.props.getSingleBoxScore(14625);
		}
	}
	render() {
		const { Innings, Game, TeamGames } = this.props.teamBoxScore;
		const { teamsLogos } = this.props;
		if (!this.props.teamBoxScoreLoaded) {
			return <p>1</p>;
		}
		return (
			<table className="table table-responsive table-bs">
				<thead>
					<tr>
						<td className="table-bs__teamName" />
						<td>1</td>
						<td>2</td>
						<td>3</td>
						<td>4</td>
						<td>5</td>
						<td>6</td>
						<td>7</td>
						<td>8</td>
						<td>9</td>
						<td className="table-bs__total">R</td>
						<td className="table-bs__total">H</td>
						<td className="table-bs__total">E</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="table-bs__teamName">
							<Link to={`/teams/${Game.AwayTeam}`}>
								<div className="logo">
									<img src={teamsLogos[`${Game.AwayTeam}`]} alt={`${TeamGames[0].Name} Logo`} />
								</div>
								<span>{Game.AwayTeam}</span>
							</Link>
						</td>
						{Innings.map(key => <td key={`${key.GameID} + ${key.InningID}`}>{key.AwayTeamRuns}</td>)}
						<td className="table-bs__total">{Game.AwayTeamRuns}</td>
						<td className="table-bs__total">{Game.AwayTeamHits}</td>
						<td className="table-bs__total">{Game.AwayTeamErrors}</td>
					</tr>
					<tr>
						<td className="table-bs__teamName">
							<Link to={`/teams/${Game.HomeTeam}`}>
								<div className="logo">
									<img src={teamsLogos[`${Game.HomeTeam}`]} alt={`${TeamGames[1].Name} Logo`} />
								</div>
								<span>{Game.HomeTeam}</span>
							</Link>
						</td>
						{Innings.map(key => <td key={`${key.GameID} - ${key.InningID}`}>{key.HomeTeamRuns}</td>)}
						<td className="table-bs__total">{Game.HomeTeamRuns}</td>
						<td className="table-bs__total">{Game.HomeTeamHits}</td>
						<td className="table-bs__total">{Game.HomeTeamErrors}</td>
					</tr>
				</tbody>
			</table>
		);
	}
}

TeamBoxScore.propTypes = {
	getSingleBoxScore: PropTypes.func.isRequired,
	teamBoxScore: PropTypes.shape({
		Game: PropTypes.object,
		Innings: PropTypes.arrayOf(PropTypes.object),
		TeamGames: PropTypes.arrayOf(PropTypes.object),
	}).isRequired,
	teamBoxScoreLoaded: PropTypes.bool.isRequired,
	teamsLogos: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
	teamBoxScore: state.team.teamBoxScore,
	teamBoxScoreLoaded: state.team.teamBoxScoreLoaded,
	teamsLogos: state.teams.teamsLogos,
	teamsLogosLoaded: state.teams.teamsLogosLoaded,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getSingleBoxScore,
			getTeamLogos,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(TeamBoxScore);

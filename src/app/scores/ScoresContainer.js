import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { getGamesDay } from '../../actions/actions-games';
import './GameScore.css';
import { oneHour } from '../../utils/helpers';

class GameScore extends Component {
	async componentWillMount() {
		const { gamesDayLoaded, gamesDayLoadedAt } = this.props;
		if (!gamesDayLoaded || new Date() - gamesDayLoadedAt > oneHour) {
			this.props.getGamesDay('2017-JUL-31');
		}
	}
	render() {
		const { gamesDay, teamsAll } = this.props;
		return (
			<div className="fixtures-container">
				<ul>
					{gamesDay.map(key => (
						<li key={key.GameID}>
							<div className="row">
								<div className="col-xs-10 v-wrapper">
									<span className="team-logo">
										{teamsAll.map(
											item =>
												item.Key === `${key.AwayTeam}` ? (
													<img
														src={`${item.WikipediaLogoUrl}`}
														key={item.TeamID}
														alt={`${item.City} ${item.Name} Logo`}
													/>
												) : (
													false
												)
										)}
									</span>
									{teamsAll.map(
										item =>
											item.Key === `${key.AwayTeam}` ? (
												<span className="v-center team-name" key={item.TeamID}>{`${item.City} ${item.Name}`}</span>
											) : (
												false
											)
									)}
								</div>
								<div className="col-xs-2 v-wrapper team-score">
									<span className="v-center">{key.AwayTeamRuns}</span>
								</div>
							</div>
							<div className="row">
								<div className="col-xs-10 v-wrapper">
									<span className="team-logo">
										{teamsAll.map(
											item =>
												item.Key === `${key.HomeTeam}` ? (
													<img
														src={`${item.WikipediaLogoUrl}`}
														key={item.TeamID}
														alt={`${item.City} ${item.Name} Logo`}
													/>
												) : (
													false
												)
										)}
									</span>
									{teamsAll.map(
										item =>
											item.Key === `${key.HomeTeam}` ? (
												<span className="v-center team-name" key={item.TeamID}>{`${item.City} ${item.Name}`}</span>
											) : (
												false
											)
									)}
								</div>
								<div className="col-xs-2 v-wrapper team-score">
									<span className="v-center">{key.HomeTeamRuns}</span>
								</div>
							</div>
							<div className="row">
								<div className="col-xs-push-10 col-xs-2">
									<span className="match-time">{key.Status === 'Final' ? key.Status : key.Inning}</span>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

GameScore.propTypes = {
	teamsAll: PropTypes.arrayOf(PropTypes.object).isRequired,
	gamesDay: PropTypes.arrayOf(PropTypes.object).isRequired,
	gamesDayLoaded: PropTypes.bool.isRequired,
	getGamesDay: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	gamesDay: state.games.gamesDay,
	gamesDayLoaded: state.games.gamesDayLoaded,
	teamsAll: state.teams.teamsAll,
	teamsAllLoaded: state.teams.teamsAllLoaded,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getGamesDay,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(GameScore);

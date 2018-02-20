import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { getGamesDay } from '../../../../actions/actions-games';

import './Games.css';

class Games extends Component {
	state = {
		currentDayDisplayed: moment('2017-JUL-31')
			.utc()
			.format('DD-MMM-YYYY')
			.toUpperCase(),
	};

	async componentWillMount() {
		const { currentDayDisplayed } = this.state;
		this.props.getGamesDay(currentDayDisplayed);
	}

	async componentDidUpdate(prevState, nextState) {
		if (nextState.currentDayDisplayed !== this.state.currentDayDisplayed) {
			this.props.getGamesDay(this.state.currentDayDisplayed);
		}
	}

	IncrementItem = () => {
		this.setState({
			currentDayDisplayed: moment(this.state.currentDayDisplayed)
				.add(1, 'd')
				.format('DD-MMM-YYYY')
				.toUpperCase(),
		});
	};

	DecreaseItem = () => {
		this.setState({
			currentDayDisplayed: moment(this.state.currentDayDisplayed)
				.subtract(1, 'd')
				.format('DD-MMM-YYYY')
				.toUpperCase(),
		});
	};

	render() {
		const { gamesDay, teamsAll } = this.props;
		return (
			<div className="widget">
				<div className="widget-title">
					<h3>{moment(this.state.currentDayDisplayed).format('MMMM Do YYYY')}</h3>
					<div className="recent-navigation arrow-style">
						<button className="recent-re-next">
							<i className="fa fa-chevron-left" aria-hidden="true" onClick={this.DecreaseItem} />
						</button>
						<button className="recent-re-prev">
							<i className="fa fa-chevron-right" aria-hidden="true" onClick={this.IncrementItem} />
						</button>
					</div>
				</div>
				<div className="widget-container">
					<div className="item">
						{gamesDay.map(key => (
							<div className="recent-items" key={key.GameID}>
								<Link to={`/scores/${key.GameID}`}>
									<div className="result-coutry-area">
										<div className="result-item">
											<p>{key.AwayTeam}</p>
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
										</div>
										<div className="result-item">
											<p>{`${key.AwayTeamRuns} - ${key.HomeTeamRuns}`}</p>
										</div>
										<div className="result-item">
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
											<p>{key.HomeTeam}</p>
										</div>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

Games.propTypes = {
	teamsAll: PropTypes.arrayOf(PropTypes.object).isRequired,
	gamesDay: PropTypes.arrayOf(PropTypes.object).isRequired,
	getGamesDay: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	gamesDay: state.games.gamesDay,
	gamesDayDate: state.games.gamesDayDate,
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

export default connect(mapStateToProps, mapDispatchToProps)(Games);

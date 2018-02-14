import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getTeamRoster } from '../../../actions/actions-team';
import { getAge, inchesToFeet } from '../../../utils/helpers';

class Roster extends Component {
	async componentWillMount() {
		const { currentTeam } = this.props;
		this.props.getTeamRoster(currentTeam);
	}
	render() {
		const { playersOnTeam } = this.props;
		return (
			<div>
				<h1>Roster</h1>
				<div className="table-responsive">
					<table className="table">
						<thead>
							<tr>
								<th>NBR</th>
								<th>Player Name</th>
								<th>Position</th>
								<th>Age</th>
								<th>Height</th>
								<th>Weight</th>
							</tr>
						</thead>
						<tbody>
							{playersOnTeam.filter(item => item.Status === 'Active').map(key => (
								<tr key={key.PlayerID}>
									<td>{key.Jersey}</td>
									<td>{`${key.FirstName} ${key.LastName}`}</td>
									<td>{key.Position}</td>
									<td>{getAge(new Date(`${key.BirthDate}`))}</td>
									<td>{inchesToFeet(`${key.Height}`)}</td>
									<td>{key.Weight}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

Roster.propTypes = {
	getTeamRoster: PropTypes.func.isRequired,
	playersOnTeam: PropTypes.shape({
		FirstName: PropTypes.string.isRequired,
	}).isRequired,
};

const mapStateToProps = state => ({
	playersOnTeam: state.team.playersOnTeam,
	playersOnTeamLoaded: state.team.playersOnTeamLoaded,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getTeamRoster,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Roster);

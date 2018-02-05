import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTeams, getTeamLogos } from '../../actions/actions-teams-all';

class StandingsDivision extends React.Component {
	async componentWillMount() {
		const { teamsAllLoaded, teamsAll } = this.props;
		if (!teamsAllLoaded) {
			this.props.getTeams();
		}
		this.props.getTeamLogos(teamsAll);
	}
	render() {
		return (
			<table className="table">
				<thead>
					<tr>
						<th>{this.props.division}</th>
						<th>W</th>
						<th>L</th>
						<th>PCT</th>
						<th>GB</th>
						<th>Home</th>
						<th>Road</th>
					</tr>
				</thead>
				<tbody logos={this.props.teamsLogos}>{this.props.divisionTeams}</tbody>
			</table>
		);
	}
}

StandingsDivision.propTypes = {
	division: PropTypes.string.isRequired,
	divisionTeams: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
	teamsAll: state.teams.teamsAll,
	teamsAllLoaded: state.teams.teamsAllLoaded,
	teamsLogos: state.teams.teamsLogos,
	teamsLogosLoaded: state.teams.teamsLogosLoaded,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getTeams,
			getTeamLogos,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(StandingsDivision);

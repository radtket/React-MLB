import React, { Component } from 'react';
import { MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import './MegaMenu.css';
import { sortTeams } from '../../actions/actions-teams-all';

class MegaMenu extends Component {
	async componentWillMount() {
		const { teamsAll, teamsAllLoaded, teamsSortedLoaded } = this.props;
		if (teamsAllLoaded && !teamsSortedLoaded) {
			this.props.sortTeams(teamsAll);
		}
	}
	render() {
		const { teamsSortedLoaded, teamsSorted } = this.props;
		const [AlCentral, AlEast, AlWest, NlCentral, NlEast, NlWest] = teamsSorted;
		return (
			<div className="yamm-content">
				<div className="row">
					<ul className="col-sm-4 list-unstyled mb-12">
						<li>
							<strong>{`${AlWest[0].League} ${AlWest[0].Division}`}</strong>
						</li>
						{teamsSortedLoaded &&
							AlWest.map(key => (
								<LinkContainer to={`/teams/${key.Key}`} key={key.TeamID}>
									<MenuItem eventKey={`3.${key.TeamID}`} href={`/teams/${key.Key}`}>
										{`${key.City} ${key.Name}`}
									</MenuItem>
								</LinkContainer>
							))}
					</ul>
					<ul className="col-sm-4 list-unstyled mb-12">
						<li>
							<strong>{`${AlCentral[0].League} ${AlCentral[0].Division}`}</strong>
						</li>
						{teamsSortedLoaded &&
							AlCentral.map(key => (
								<LinkContainer to={`/teams/${key.Key}`} key={key.TeamID}>
									<MenuItem eventKey={`3.${key.TeamID}`} href={`/teams/${key.Key}`}>
										{`${key.City} ${key.Name}`}
									</MenuItem>
								</LinkContainer>
							))}
					</ul>
					<ul className="col-sm-4 list-unstyled mb-12">
						<li>
							<strong>{`${AlEast[0].League} ${AlEast[0].Division}`}</strong>
						</li>
						{teamsSortedLoaded &&
							AlEast.map(key => (
								<LinkContainer to={`/teams/${key.Key}`} key={key.TeamID}>
									<MenuItem eventKey={`3.${key.TeamID}`} href={`/teams/${key.Key}`}>
										{`${key.City} ${key.Name}`}
									</MenuItem>
								</LinkContainer>
							))}
					</ul>
				</div>
				<div className="row">
					<ul className="col-sm-4 list-unstyled mb-12">
						<li>
							<strong>{`${NlWest[0].League} ${NlWest[0].Division}`}</strong>
						</li>
						{teamsSortedLoaded &&
							NlWest.map(key => (
								<LinkContainer to={`/teams/${key.Key}`} key={key.TeamID}>
									<MenuItem eventKey={`3.${key.TeamID}`} href={`/teams/${key.Key}`}>
										{`${key.City} ${key.Name}`}
									</MenuItem>
								</LinkContainer>
							))}
					</ul>
					<ul className="col-sm-4 list-unstyled mb-12">
						<li>
							<strong>{`${NlCentral[0].League} ${NlCentral[0].Division}`}</strong>
						</li>
						{teamsSortedLoaded &&
							NlCentral.map(key => (
								<LinkContainer to={`/teams/${key.Key}`} key={key.TeamID}>
									<MenuItem eventKey={`3.${key.TeamID}`} href={`/teams/${key.Key}`}>
										{`${key.City} ${key.Name}`}
									</MenuItem>
								</LinkContainer>
							))}
					</ul>
					<ul className="col-sm-4 list-unstyled mb-12">
						<li>
							<strong>{`${NlEast[0].League} ${NlEast[0].Division}`}</strong>
						</li>
						{teamsSortedLoaded &&
							NlEast.map(key => (
								<LinkContainer to={`/teams/${key.Key}`} key={key.TeamID}>
									<MenuItem eventKey={`3.${key.TeamID}`} href={`/teams/${key.Key}`}>
										{`${key.City} ${key.Name}`}
									</MenuItem>
								</LinkContainer>
							))}
					</ul>
				</div>
			</div>
		);
	}
}

MegaMenu.propTypes = {
	teamsSortedLoaded: PropTypes.bool.isRequired,
	teamsSorted: PropTypes.arrayOf(PropTypes.array).isRequired,
	sortTeams: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	teamsAll: state.teams.teamsAll,
	teamsAllLoaded: state.teams.teamsAllLoaded,
	teamsSorted: state.teams.teamsSorted,
	teamsSortedLoaded: state.teams.teamsSortedLoaded,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			sortTeams,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(MegaMenu);

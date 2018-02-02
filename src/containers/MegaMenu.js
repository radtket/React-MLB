import React, { Component } from 'react';
import { MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import './MegaMenu.css';
import { sortTeams } from '../actions/actions-teams-all';

class MegaMenu extends Component {
	async componentWillMount() {
		const { teamsAll, teamsAllLoaded, sortTeamsLoaded } = this.props;
		if (teamsAllLoaded && !sortTeamsLoaded) {
			this.props.sortTeams(teamsAll);
		}
	}
	render() {
		const { teamsSortedLoaded, teamsSorted } = this.props;
		return (
			<div className="yamm-content">
				<div className="row">
					<ul className="col-sm-4 list-unstyled mb-12">
						<li>
							<strong>AL West</strong>
						</li>
						{teamsSortedLoaded &&
							teamsSorted[2].map(key => (
								<LinkContainer to={`/${key.TeamID}`} key={key.TeamID}>
									<MenuItem eventKey={`3.${key.TeamID}`} href="#">
										{`${key.City} ${key.Name}`}
									</MenuItem>
								</LinkContainer>
							))}
					</ul>
					<ul className="col-sm-4 list-unstyled mb-12">
						<li>
							<strong>AL Central</strong>
						</li>
						{teamsSortedLoaded &&
							teamsSorted[0].map(key => (
								<LinkContainer to={`/${key.TeamID}`} key={key.TeamID}>
									<MenuItem eventKey={`3.${key.TeamID}`} href="#">
										{`${key.City} ${key.Name}`}
									</MenuItem>
								</LinkContainer>
							))}
					</ul>
					<ul className="col-sm-4 list-unstyled mb-12">
						<li>
							<strong>AL East</strong>
						</li>
						{teamsSortedLoaded &&
							teamsSorted[1].map(key => (
								<LinkContainer to={`/${key.TeamID}`} key={key.TeamID}>
									<MenuItem eventKey={`3.${key.TeamID}`} href="#">
										{`${key.City} ${key.Name}`}
									</MenuItem>
								</LinkContainer>
							))}
					</ul>
				</div>
				<div className="row">
					<ul className="col-sm-4 list-unstyled mb-12">
						<li>
							<strong>NL West</strong>
						</li>
						{teamsSortedLoaded &&
							teamsSorted[5].map(key => (
								<LinkContainer to={`/${key.TeamID}`} key={key.TeamID}>
									<MenuItem eventKey={`3.${key.TeamID}`} href="#">
										{`${key.City} ${key.Name}`}
									</MenuItem>
								</LinkContainer>
							))}
					</ul>
					<ul className="col-sm-4 list-unstyled mb-12">
						<li>
							<strong>NL Central</strong>
						</li>
						{teamsSortedLoaded &&
							teamsSorted[3].map(key => (
								<LinkContainer to={`/${key.TeamID}`} key={key.TeamID}>
									<MenuItem eventKey={`3.${key.TeamID}`} href="#">
										{`${key.City} ${key.Name}`}
									</MenuItem>
								</LinkContainer>
							))}
					</ul>
					<ul className="col-sm-4 list-unstyled mb-12">
						<li>
							<strong>NL East</strong>
						</li>
						{teamsSortedLoaded &&
							teamsSorted[4].map(key => (
								<LinkContainer to={`/${key.TeamID}`} key={key.TeamID}>
									<MenuItem eventKey={`3.${key.TeamID}`} href="#">
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

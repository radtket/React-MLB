import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';

const TeamNav = props => {
	const { teamPath } = props;
	return (
		<Nav bsStyle="pills" justified activeKey={1}>
			<IndexLinkContainer to={`${teamPath}`}>
				<NavItem eventKey={1} title="Home" href="/home">
					Home
				</NavItem>
			</IndexLinkContainer>
			<IndexLinkContainer to={`${teamPath}/stats`}>
				<NavItem eventKey={2} title="Stats">
					Stats
				</NavItem>
			</IndexLinkContainer>
			<IndexLinkContainer to={`${teamPath}/schedule`}>
				<NavItem eventKey={3} title="Schedule">
					Schedule
				</NavItem>
			</IndexLinkContainer>
			<IndexLinkContainer to={`${teamPath}/roster`}>
				<NavItem eventKey={4} title="Roster">
					Roster
				</NavItem>
			</IndexLinkContainer>
		</Nav>
	);
};

TeamNav.propTypes = {
	teamPath: PropTypes.string.isRequired,
};

export default TeamNav;

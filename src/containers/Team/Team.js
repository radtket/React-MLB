import React from 'react';
import PropTypes from 'prop-types';

const Team = props => (
	<div>
		<h1>{props.match.params.teamAbrv}</h1>
	</div>
);

Team.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			teamAbrv: PropTypes.string.isRequired,
		}).isRequired,
	}).isRequired,
};

export default Team;

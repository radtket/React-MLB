import React from 'react';
import PropTypes from 'prop-types';

const StandingsDivision = props => (
	<table className="table">
		<thead>
			<tr>
				<th>{props.division}</th>
				<th>W</th>
				<th>L</th>
				<th>PCT</th>
				<th>GB</th>
				<th>Home</th>
				<th>Road</th>
			</tr>
		</thead>
		<tbody>{props.divisionTeams}</tbody>
	</table>
);

StandingsDivision.propTypes = {
	division: PropTypes.string.isRequired,
	divisionTeams: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StandingsDivision;

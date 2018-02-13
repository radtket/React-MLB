import React from 'react';
import PropTypes from 'prop-types';
import TeamStandingsComponent from '../../../components/TeamStandings/TeamStandingsComponent';

const Home = props => (
	<div className="container">
		<div className="row">
			<div className="col-lg-8">
				<h1>Team Home</h1>
			</div>
			<aside className="col-lg-4">
				<TeamStandingsComponent
					currentTeamLeague={props.currentTeamLeague}
					currentTeamDivision={props.currentTeamDivision}
				/>
			</aside>
		</div>
	</div>
);

Home.propTypes = {
	currentTeamDivision: PropTypes.string.isRequired,
	currentTeamLeague: PropTypes.string.isRequired,
};

export default Home;

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = props => (
	<TeamHeader
		className="team-heading"
		colorPrimary={props.colorPrimary}
		colorSecondary={props.colorSecondary}
		backdrop={props.logoPrimary}
	>
		<div className="container">
			<div className="row">
				<div className="team-heading__logo">
					<img src={props.logoSecondary} alt="" />
				</div>
				<div className="team-heading__info">
					<h3 className="team-heading__info--city">{props.teamCity}</h3>
					<h1 className="team-heading__info--name">{props.teamName}</h1>
				</div>
			</div>
		</div>
	</TeamHeader>
);

export default Header;

Header.propTypes = {
	colorPrimary: PropTypes.string,
	colorSecondary: PropTypes.string,
	logoPrimary: PropTypes.string,
	logoSecondary: PropTypes.string,
	teamCity: PropTypes.string,
	teamName: PropTypes.string,
};

const TeamHeader = styled.header`
	position: relative;
	overflow: hidden;
	color: #fff;
	padding-top: 48px;
	padding-bottom: 48px;
	background-color: #${props => props.colorPrimary};
	background: -webkit-gradient(
				linear,
				left top,
				left bottom,
				from(#${props => props.colorPrimary}),
				color-stop(38%, #${props => props.colorPrimary}),
				to(transparent)
			)
			no-repeat,
		#${props => props.colorSecondary};
	background: linear-gradient(
				to bottom,
				#${props => props.colorPrimary} 0%,
				#${props => props.colorPrimary} 38%,
				transparent 100%
			)
			no-repeat,
		#${props => props.colorSecondary};
	&:after {
		content: '';
		background: url(${props => props.backdrop}) center center/75% no-repeat;
		opacity: 0.2;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		position: absolute;
		z-index: 0;
	}
	> .container {
		position: relative;
		z-index: 1;
	}
	.team-heading__logo {
		display: inline-block;
		img {
			height: 125px;
		}
	}
	.team-heading__info {
		display: inline-block;
		vertical-align: middle;
		margin-left: 1rem;
	}
	.team-heading__info--city {
		font-size: 35px;
		line-height: 1;
		margin: 0;
	}
	.team-heading__info--name {
		font-size: 55px;
		line-height: 1;
		margin: 0;
	}
`;

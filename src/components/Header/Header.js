import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import MegaMenu from './components/MegaMenuComponent';
import logo from './mlb-logo.svg';

const Header = () => (
	<Navbar className="yamm" inverse collapseOnSelect>
		<Navbar.Header>
			<Navbar.Brand>
				<LinkContainer exact to="/">
					<a href="/">
						<img src={logo} alt="" />
					</a>
				</LinkContainer>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
				<NavItem eventKey={1} href="/scores">
					Scores
				</NavItem>
				<NavItem eventKey={2} href="#">
					Schedule
				</NavItem>
				<NavDropdown eventKey={3} title="Teams" id="basic-nav-dropdown">
					<MegaMenu />
				</NavDropdown>
				<NavItem eventKey={4} href="/standings">
					Standings
				</NavItem>
				<NavItem eventKey={5} href="#">
					Stats
				</NavItem>
				<NavItem eventKey={6} href="/news">
					News
				</NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default Header;

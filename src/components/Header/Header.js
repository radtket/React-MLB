import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import MegaMenu from '../../containers/MegaMenu/MegaMenu';
import logo from './mlb-logo.svg';

const Header = () => (
	<Navbar className="yamm" inverse collapseOnSelect>
		<Navbar.Header>
			<Navbar.Brand>
				<LinkContainer to="/">
					<a href="/">
						<img src={logo} alt="" />
					</a>
				</LinkContainer>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
				<NavItem eventKey={1} href="#">
					Scores
				</NavItem>
				<NavItem eventKey={2} href="#">
					Schedule
				</NavItem>
				<NavDropdown eventKey={3} title="Teams" id="basic-nav-dropdown">
					<MegaMenu />
				</NavDropdown>
				<NavItem eventKey={4} href="#">
					Standings
				</NavItem>
				<NavItem eventKey={5} href="#">
					Stats
				</NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default Header;

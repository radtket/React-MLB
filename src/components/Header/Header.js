import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './MegaMenu.css';
import { createGroupedArray, propComparator } from '../../utils/helpers';
import logo from './mlb-logo.svg';
import { apiHeaders } from '../../utils/api';

class Header extends Component {
	state = {
		requestFailed: false,
	};

	componentDidMount() {
		console.log('componentDidMount');
		fetch(`https://api.fantasydata.net/v3/mlb/scores/JSON/teams`, apiHeaders)
			.then(res => {
				if (!res.ok) {
					throw Error('Network Request Failed');
				}
				return res;
			})
			.then(data => data.json())
			.then(
				data => {
					const orderedLeague = data.sort(propComparator('League'));

					const combined = [
						...orderedLeague.slice(0, 15).sort(propComparator('Division')),
						...orderedLeague.slice(15).sort(propComparator('Division')),
					];
					const divisions = createGroupedArray(combined, 5);

					this.setState({
						AlCentral: divisions[0],
						AlEast: divisions[1],
						AlWest: divisions[2],
						NlCentral: divisions[3],
						NlEast: divisions[4],
						NlWest: divisions[5],
					});
				},
				() => {
					this.setState({
						requestFailed: true,
					});
				}
			);
	}

	render() {
		if (this.state.requestFailed) {
			return <p>Failed</p>;
		}
		if (!this.state.AlWest) {
			return <p>...Loading</p>;
		}
		return (
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
							<div className="yamm-content">
								<div className="row">
									<ul className="col-sm-4 list-unstyled mb-12">
										<li>
											<strong>AL West</strong>
										</li>
										{this.state.AlWest.map(key => (
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
										{this.state.AlCentral.map(key => (
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
										{this.state.AlEast.map(key => (
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
										{this.state.NlWest.map(key => (
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
										{this.state.NlCentral.map(key => (
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
										{this.state.NlEast.map(key => (
											<LinkContainer to={`/${key.TeamID}`} key={key.TeamID}>
												<MenuItem eventKey={`3.${key.TeamID}`} href="#">
													{`${key.City} ${key.Name}`}
												</MenuItem>
											</LinkContainer>
										))}
									</ul>
								</div>
							</div>
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
	}
}

export default Header;

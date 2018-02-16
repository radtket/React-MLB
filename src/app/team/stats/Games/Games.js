import React, { Component } from 'react';
import Moment from 'react-moment';
import './Games.css';

class componentName extends Component {
	state = {
		clicks: 0,
		show: true,
	};

	IncrementItem = () => {
		this.setState({
			clicks: this.state.clicks + 1,
		});
	};

	DecreaseItem = () => {
		this.setState({ clicks: this.state.clicks - 1 });
	};

	ToggleClick = () => {
		this.setState({ show: !this.state.show });
	};

	render() {
		return (
			<div className="widget">
				<div className="widget-title">
					<h3>Recent Result</h3>
					<div className="recent-navigation arrow-style">
						<button className="recent-re-next">
							<i className="fa fa-chevron-left" aria-hidden="true" onClick={this.DecreaseItem} />
						</button>
						<button className="recent-re-prev">
							<i className="fa fa-chevron-right" aria-hidden="true" onClick={this.IncrementItem} />
						</button>
					</div>
				</div>
				<div className="widget-container">
					<div className="item">
						<div className="recent-items">
							<a href="#">
								<h4>06 Aug, 2016</h4>
								<div className="result-coutry-area">
									<div className="result-item">
										<button onClick={this.ToggleClick}>{this.state.show ? 'Hide number' : 'Show number'}</button>
										{this.state.show ? <h2>{this.state.clicks}</h2> : ''}
									</div>
									<div className="result-item">
										<p>1-0</p>
									</div>
									<div className="result-item">
										<Moment
											onChange={val => {
												console.log(val);
											}}
										>
											1976-04-19T12:59-0500
										</Moment>
									</div>
								</div>
							</a>
						</div>
						<div className="recent-items">
							<a href="#">
								<h4>06 Aug, 2016</h4>
								<div className="result-coutry-area">
									<div className="result-item">
										<p>Portogal</p>
										<img src="http://via.placeholder.com/36x36" alt="" />
									</div>
									<div className="result-item">
										<p>1-0</p>
									</div>
									<div className="result-item">
										<img src="http://via.placeholder.com/36x36" alt="" />
										<p>France</p>
									</div>
								</div>
							</a>
						</div>
						<div className="recent-items">
							<a href="#">
								<h4>06 Aug, 2016</h4>
								<div className="result-coutry-area">
									<div className="result-item">
										<p>Portogal</p>
										<img src="http://via.placeholder.com/36x36" alt="" />
									</div>
									<div className="result-item">
										<p>1-0</p>
									</div>
									<div className="result-item">
										<img src="http://via.placeholder.com/36x36" alt="" />
										<p>France</p>
									</div>
								</div>
							</a>
						</div>
						<div className="recent-items">
							<a href="#">
								<h4>06 Aug, 2016</h4>
								<div className="result-coutry-area">
									<div className="result-item">
										<p>Portogal</p>
										<img src="http://via.placeholder.com/36x36" alt="" />
									</div>
									<div className="result-item">
										<p>1-0</p>
									</div>
									<div className="result-item">
										<img src="http://via.placeholder.com/36x36" alt="" />
										<p>France</p>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default componentName;

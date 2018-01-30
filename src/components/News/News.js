import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { apiHeaders } from '../../utils/api';
import './News.css';

class News extends Component {
	state = {
		requestFailed: false,
	};

	componentDidMount() {
		console.log('componentDidMount');
		fetch(`https://api.fantasydata.net/v3/mlb/stats/JSON/News`, apiHeaders)
			.then(res => {
				if (!res.ok) {
					throw Error('Network Request Failed');
				}
				return res;
			})
			.then(data => data.json())
			.then(
				data => {
					this.setState({
						news: data,
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
		if (!this.state.news) {
			return <p>...Loading</p>;
		}
		return (
			<div className="container flex-container">
				{this.state.news.map(key => (
					<div key={key.NewsID} className="col-sm-6 col-md-4 mb-24">
						<div className="card">
							<LinkContainer to={`/news/${key.NewsID}`}>
								<img className="img-responsive" src="http://placehold.it/700x400" alt={key.TeamID} />
							</LinkContainer>
							<div className="card-body">
								<h4 className="card-title">
									<LinkContainer to={`/news/${key.NewsID}`}>
										<a href="">{key.Title}</a>
									</LinkContainer>
								</h4>
								<p className="card-text">{key.Content}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default News;

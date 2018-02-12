import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { getNewsAll } from '../../actions/actions-news';
import './News.css';
import { Like, Comment, View } from './icons';
import { randoNumber } from '../../utils/helpers';

class News extends Component {
	async componentWillMount() {
		const { newsAllLoaded } = this.props;
		if (!newsAllLoaded) {
			this.props.getNewsAll();
		}
		// const { newsAllLoaded, newsAllLoadedAt } = this.props;
		// if (!newsAllLoaded || new Date() - newsAllLoadedAt > oneHour) {
		// 	this.props.getNewsAll();
		// }
	}
	render() {
		if (!this.props.newsAllLoaded) {
			return <h1>Loading</h1>;
		}
		return (
			<section className="flex-container">
				{this.props.newsAll.map(key => (
					<div key={key.NewsID} className="col-sm-6">
						<article key={key.NewsID} className="card">
							<figure className="card__thumb">
								<div className="card__cat">
									<span className="card__cat--label">
										{key.Categories !== '' ? key.Categories.split(',')[0] : 'MLB'}
									</span>
								</div>
								<Link to={`/news/${key.NewsID}`}>
									<img className="img-responsive" src="http://placehold.it/700x400" alt={key.TeamID} />
								</Link>
							</figure>
							<div className="card__content">
								<Link to={`/news/${key.NewsID}`} className="card__team">
									<span>{key.Team ? key.Team : 'MLB'}</span>
									{/* <img className="card__team--logo" src="" alt={key.Team} /> */}
								</Link>
								<time dateTime={key.Updated} className="posts__date">
									{key.TimeAgo}
								</time>
								<h6 className="card__title">
									<Link to={`/news/${key.NewsID}`}>{key.Title}</Link>
								</h6>
								<p className="card__excerpt">{key.Content}</p>
							</div>
							<footer className="card__footer">
								<div className="card__author">
									<figure className="card__author--avatar">
										<img
											src={`/images/reporters/${`${key.Author}`.replace(/\s/g, '')}.jpg`}
											alt={`${key.Author} Avatar`}
										/>
									</figure>
									<div className="card__author--info">
										<h4 className="card__author--name">{key.Author}</h4>
									</div>
								</div>
								<ul className="card__meta">
									<li className="card__meta--item meta__item--views">
										<View />
										<span>{randoNumber(2369)}</span>
									</li>
									<li className="card__meta--item meta__item--likes">
										<Link to="/like">
											<Like className="meta-like" />
											<span>{randoNumber(500)}</span>
										</Link>
									</li>
									<li className="card__meta--item meta__item--comments">
										<Link to="/comments">
											<Comment />
											<span>{randoNumber(40)}</span>
										</Link>
									</li>
								</ul>
							</footer>
						</article>
					</div>
				))}
			</section>
		);
	}
}

News.propTypes = {
	newsAllLoaded: PropTypes.bool.isRequired,
	newsAll: PropTypes.arrayOf(PropTypes.object).isRequired,
	getNewsAll: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	newsAll: state.news.newsAll,
	newsAllLoaded: state.news.newsAllLoaded,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getNewsAll,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(News);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { getNewsAll } from '../../actions/actions-news';
import './Marquee.css';

class Marquee extends Component {
	async componentWillMount() {
		const { newsAllLoaded } = this.props;
		if (!newsAllLoaded) {
			this.props.getNewsAll();
		}
	}
	render() {
		if (!this.props.newsAllLoaded) {
			return <h1>Loading</h1>;
		}
		const { newsAll } = this.props;
		return (
			<div className="ticker-wrap">
				<div className="news-ticker-title">
					<h4>BREAKING NEWS</h4>
				</div>
				<div className="ticker">
					{newsAll.slice(0, 5).map(key => (
						<Link key={key.NewsID} className="ticker__item" to={`/news/${key.NewsID}`}>
							{key.Title}
						</Link>
					))}
					<div className="ticker__item ticker__item--offset">&nbsp;</div>
				</div>
			</div>
		);
	}
}

Marquee.propTypes = {
	getNewsAll: PropTypes.func.isRequired,
	newsAll: PropTypes.arrayOf(
		PropTypes.shape({
			NewsID: PropTypes.number.isRequired,
			Title: PropTypes.string.isRequired,
		})
	).isRequired,
	newsAllLoaded: PropTypes.bool.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(Marquee);

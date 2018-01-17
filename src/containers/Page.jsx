import React from "react";
import PropTypes from 'prop-types'

class Page extends React.Component {
    render() {
        const { selectedCategory} = this.props;
        return (
            <section className="section">
                <h1 className="title">Posts in the category "{selectedCategory && selectedCategory.title}"</h1>
                <div className="box">
                    <article className="media">
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                                    <br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                        </p>
                            </div>
                            <nav className="level is-mobile">
                                <div className="level-left">
                                    <a className="level-item">
                                        <span className="icon is-small"><i className="fa fa-reply"></i></span>
                                    </a>
                                    <a className="level-item">
                                        <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                                    </a>
                                    <a className="level-item">
                                        <span className="icon is-small"><i className="fa fa-heart"></i></span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </article>
                </div>
            </section>
        );
    }
}

Page.propTypes = {
    selectedCategory: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
    }),
};

export default Page;

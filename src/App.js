import React, { Component } from 'react';

export default class extends Component {
    render() {
        return (
            <div className="columns">
                <div className="column is-one-third">
                    <section className="section">
                        <nav className="panel">
                            <p className="panel-heading">Categories</p>
                            <a className="panel-block is-active">
                                <span className="panel-icon">
                                    <i className="fa fa-book"></i>
                                </span>
                                bulma
                            </a>
                            <a className="panel-block">
                                <span className="panel-icon">
                                    <i className="fa fa-book"></i>
                                </span>
                                marksheet
                            </a>
                            <a className="panel-block">
                                <span className="panel-icon">
                                    <i className="fa fa-book"></i>
                                </span>
                                minireset.css
                            </a>
                            <a className="panel-block">
                                <span className="panel-icon">
                                    <i className="fa fa-book"></i>
                                </span>
                                jgthms.github.io
                            </a>
                            <div className="panel-block">
                                <button className="button is-link is-outlined is-fullwidth">
                                    Add new
                            </button>
                            </div>
                        </nav>
                    </section>
                </div>
                <div className="column">
                    <section className="section">
                        <h1 className="title">Posts in the category</h1>
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
                </div>
            </div>
        );
    }
}

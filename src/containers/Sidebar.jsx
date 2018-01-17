import React from "react";
import _ from "lodash";

export default class extends React.Component {
    render() {
        return (
            <section className="section">
                <nav className="panel">
                    <p className="panel-heading">Categories</p>
                    {this.getCategories()}
                    <div className="panel-block">
                        <button className="button is-link is-outlined is-fullwidth">
                            Add new
                        </button>
                    </div>
                </nav>
            </section>
        );
    }

    getCategories() {
        const categories = [{
            id: 1,
            title: "Category 1",
        }, {
            id: 2,
            title: "Category 2",
        }];

        return _.map(categories, c => (
            <a key={c.id} className="panel-block is-active">
                <span className="panel-icon"><i className="fa fa-book"></i></span>
                {c.title}
            </a>
        ));
    }
}

import React from "react";
import _ from "lodash";
import PropTypes from 'prop-types'

class Sidebar extends React.Component {
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
        return _.map(this.props.categories, c => (
            <a key={c.id} onClick={this.setCategory.bind(this, c.id)} className="panel-block is-active">
                <span className="panel-icon"><i className="fa fa-book"></i></span>
                {c.title}
            </a>
        ));
    }

    setCategory(categoryId, e) {
        this.props.onSelectCategory(categoryId);
    }
}

Sidebar.propTypes = {
    onSelectCategory: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string
    })).isRequired,
};

export default Sidebar;

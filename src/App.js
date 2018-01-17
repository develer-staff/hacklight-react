import React, { Component } from 'react';
import _ from "lodash";

import Page from "./containers/Page";
import Sidebar from "./containers/Sidebar";

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedCategory: null, categories: []};
        this.updateSelectedCategory = this.updateSelectedCategory.bind(this);
    }

    componentDidMount() {
        fetch("http://0.0.0.0:4000/api/v1/categories").then(
            response => response.json()
        ).then(
            response => this.setState({...this.state, categories: response.data})
        )
    }

    render() {
        return (
            <div className="columns">
                <div className="column is-one-third">
                    <Sidebar
                        categories={this.state.categories}
                        onSelectCategory={this.updateSelectedCategory}
                    />
                </div>
                <div className="column">
                    <Page selectedCategory={this.state.selectedCategory} />
                </div>
            </div>
        );
    }

    updateSelectedCategory(categoryId) {
        let foundCategory = null;
        _.forEach(this.state.categories, cat => {
            if (cat.id === categoryId) {
                foundCategory = cat;
                return;
            }
        });
        if (!_.isNull(foundCategory)) {
            this.setState({selectedCategory: foundCategory});
        } else {
            alert("Wrong category");
        }
    }
}

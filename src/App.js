import React, { Component } from 'react';

import Page from "./containers/Page";
import Sidebar from "./containers/Sidebar";

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedCategory: null};
        this.updateSelectedCategory = this.updateSelectedCategory.bind(this);
    }

    render() {
        return (
            <div className="columns">
                <div className="column is-one-third">
                    <Sidebar onSelectCategory={this.updateSelectedCategory}/>
                </div>
                <div className="column">
                    <Page selectedCategory={this.state.selectedCategory} />
                </div>
            </div>
        );
    }

    updateSelectedCategory(category) {
        this.setState({selectedCategory: category});
    }
}

import React, { Component } from 'react';

import Page from "./containers/Page";
import Sidebar from "./containers/Sidebar";

export default class extends Component {
    render() {
        return (
            <div className="columns">
                <div className="column is-one-third">
                    <Sidebar />
                </div>
                <div className="column">
                    <Page />
                </div>
            </div>
        );
    }
}

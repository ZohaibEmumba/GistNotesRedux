import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrivateGists from './privategists/PrivateGists'

class NewsFeedPage extends Component {
    render() {
        return (
            <div>
                <PrivateGists />
            </div>
        )
    }
}
export default connect(null)(NewsFeedPage)

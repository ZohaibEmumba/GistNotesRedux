import React, { Component } from 'react';
import PrivateGists from './privategists/PrivateGists'

export default class NewsFeedPage extends Component {
    render() {
        return (
            <div>
                <PrivateGists />
            </div>
        )
    }
}

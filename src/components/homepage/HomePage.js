import React, { Component } from 'react'
import PublicGists from './publicgists/PublicGists';

class HomePage extends Component {
    render() {
        return (
            <div>
                <PublicGists />
            </div>
        )
    }
}

export default HomePage;

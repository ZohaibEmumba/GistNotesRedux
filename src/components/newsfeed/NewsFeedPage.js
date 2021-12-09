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
    const mapStateToProps = (state) =>{
        // console.log(state)
        return {
            user : state.userName
             }
    }

export default connect(mapStateToProps , null)(NewsFeedPage)

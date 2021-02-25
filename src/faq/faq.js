import React, { Component } from 'react';
import { connect } from 'react-redux'

class getStarted extends Component {
    render() {
        return (
            <h1>How to get Started?</h1> 
        );
    }
}

const mapStateToProps = (state) => ({
    // state to props matching for data access
})

const mapDispatchToProps = {
    // dispatch action goes here
}

export default connect(mapStateToProps, mapDispatchToProps)(getStarted);

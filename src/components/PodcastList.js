import React, { Component } from 'react';
import NavBar from './NavBar';

class PodcastList extends Component {


    render() {
        return(
            <div>
                <NavBar />
                <div className="row">
                    <h2>All Podcasts</h2>
                </div>
            </div>
        );
    }
}


export default PodcastList;
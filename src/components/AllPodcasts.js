import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import PodcastList from './PodcastList';
import Footer from './Footer';

class AllPodcasts extends Component {

    fetchPodcasts() {
        axios({
            url: '/api/fetch-podcasts',
            method: 'GET'
        }).then((resp) => {
            this.setState({
                podcastData: resp.data
            });
        });
    }

    constructor(props) {
        super(props);

        this.state = {
            podcastData: undefined
        }

        this.fetchPodcasts = this.fetchPodcasts.bind(this);
    }


    componentDidMount() {
        this.fetchPodcasts();
    }

    render() {
        console.log(this.state.allPodcasts);
        return(
            <div>
                <NavBar />
                <div className="container-fluid all-podcasts">
                    <div className="row justify-content-center">
                        <h2>All episodes</h2>
                    </div>
                    <div className="row justify-content-center">
                        <PodcastList episodes={this.state.podcastData} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}


export default AllPodcasts;
import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Footer from './Footer';

class AllPodcasts extends Component {

    fetchPodcasts() {
        axios({
            url: '/api/fetch-podcasts',
            method: 'GET'
        }).then((resp) => {
            this.setState({
                allPodcasts: resp.data
            });
        });
    }

    constructor(props) {
        super(props);

        this.state = {
            allPodcasts: undefined
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
                        <h2>All Podcasts</h2>
                    </div>
                    <div className="row justify-content-center">
                        
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}


export default AllPodcasts;
import React, { Component } from 'react';
import axios from 'axios';

class TrendingNews extends Component {

    constructor(props) {
        super(props);

        this.state = { news: [] }

        this.fetchNews = this.fetchNews.bind(this);
    }

    fetchNews() {
        axios({
            url: "/fetch-news",
            method: "GET"
        }).then((resp) => {
            console.log(resp);
        });
    }

    componentDidMount() {
        // fetchNews();
    }

    render() {
        return(
            <div>
                <h1>nj.com news articles</h1>
            </div>
        );
    }
}

export default TrendingNews;
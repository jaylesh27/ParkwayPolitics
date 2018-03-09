import React, { Component } from 'react';
import ArticleDetails from './ArticleDetails';
import axios from 'axios';

class TrendingNews extends Component {

    // fetchNjNews gets news articles from nj.com/politics, makes a get request to server.js file that processes the request
    fetchNjNews() {
        axios({
            url: '/api/fetch-nj-news',
            method: "GET"
        }).then((resp) => {
            // console.log("data from axios request");
            // console.log(resp.data);
            this.setState({
                newsNJ: resp.data
            });
        });
    }

    // gets New Jersey focused news via NYT API
    fetchNewsNYT() {
        axios({
            url: '/api/fetch-nyt-news',
            method: 'GET'
        }).then((resp) => {
            console.log(resp);
            
            // this.setState({
            //     newsNYT: resp.data
            // });
        });
    }

    constructor(props) {
        super(props);

        this.state = {
            newsNJ: undefined,
            newsNYT: undefined
        }

        this.fetchNjNews = this.fetchNjNews.bind(this);
        this.fetchNewsNYT = this.fetchNewsNYT.bind(this);
    }


    componentDidMount() {
        this.fetchNjNews();
        // this.fetchNewsNYT();
    }

    render() {
        // console.log("data from TrendingNews component state");
        // console.log(this.state.newsNJ);
        return(
            <div className="container">
                <h4 className="center-align">Check out stories from <a href="https://www.nj.com/politics" target="_blank">nj.com</a>. Support local journalism!</h4>
                <div className="row nj-news-articles">
                    <ArticleDetails newsNJ={this.state.newsNJ} />
                </div>
            </div>
        );
    }
}

export default TrendingNews;
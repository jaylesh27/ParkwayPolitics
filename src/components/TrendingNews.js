import React, { Component } from 'react';
import ArticleDetails from './ArticleDetails';
import axios from 'axios';

class TrendingNews extends Component {

    fetchNews() {
        axios({
            url: "/fetch-news",
            method: "GET"
        }).then((resp) => {
            console.log("data from axios request");
            console.log(resp.data);
            this.setState({
                newsNJ: resp.data
            });
        });
    }

    constructor(props) {
        super(props);

        this.state = {
            newsNJ: undefined,
            newsNYT: undefined
        }

        this.fetchNews = this.fetchNews.bind(this);
    }


    componentDidMount() {
        this.fetchNews();
    }

    render() {
        console.log("data from TrendingNews component state");
        console.log(this.state.newsNJ);
        return(
            <div>
                <h1>nj.com news articles</h1>
                <div className="row nj-news-articles">
                    <ArticleDetails newsNJ={this.state.newsNJ} />
                </div>
            </div>
        );
    }
}

export default TrendingNews;
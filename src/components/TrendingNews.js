import React, { Component } from 'react';
import ArticleDetails from './ArticleDetails';
import axios from 'axios';

class TrendingNews extends Component {

    // fetchNjNews gets news articles from nj.com/politics, makes a get request to server.js file that processes the request
    fetchNjNews() {
        axios({
            url: '/api/fetch-nj-news',
            method: 'GET'
        }).then((resp) => {
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
            
            this.setState({
                newsNYT: resp.data
            });
        });
    }

    constructor(props) {
        super(props);

        this.state = {
            newsNJ: undefined,
            newsNYT: undefined
        }

        this.fetchNjNews = this.fetchNjNews.bind(this);
        // this.fetchNewsNYT = this.fetchNewsNYT.bind(this);
    }


    componentDidMount() {
        this.fetchNjNews();
        // this.fetchNewsNYT();
    }

    render() {
        return(
            <div className="container-fluid articles-section">
                <div className="row justify-content-center">
                    <h2>Check out these articles from nj.com</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12">
					<p className="text">Our podcast is built upon the work that local journalists do in New Jersey.  Check out the good work done by publications like nj.com</p>
                    </div>
				</div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-6 col-sm-10">
                        <ArticleDetails newsNJ={this.state.newsNJ} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TrendingNews;
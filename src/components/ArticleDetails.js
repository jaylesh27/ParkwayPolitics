import React from 'react';

const ArticleDetails = (props) => {
    
    if (props.newsNJ === undefined) {
        console.log("loading");
        return <div className="loading-div">Loading articles from https://www.nj.com/politics...</div>
    } else {
        // console.log(props.newsNJ);
        const articleList = props.newsNJ.map(article => {
            return (
                <li key={article.id} className = "article-cards-list">
                    <a className = "article-card-link" href={article.link} target="_blank">
                    <div className="col s6 m3">
                        <div className="card z-depth-3">
                            <div className = "card-image">
                                <img className="article-image" src={article.image}></img>
                            </div>
                            <div className = "card-content">
                                <p>{article.headline}</p>
                            </div>
                        </div>
                    </div>
                    </a>
                </li>
            );
        });
        return <ul className="articles-list">{articleList}</ul>;
    }


}

export default ArticleDetails;
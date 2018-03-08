import React from 'react';

const ArticleDetails = (props) => {
    
    if(props.newsNJ === undefined) {
        console.log("loading");
        return <div>Loading...</div>
    } else {
        // console.log(props.newsNJ);
        const articleList = props.newsNJ.map(article => {
            return (
                // <div className="col s12 m6">
                    <div className="card small">
                        <div className = "card-image">
                            <img src={article.image}></img>
                        </div>
                        <div className = "card-content">
                            <a href={article.link}><p>{article.headline}</p></a>
                        </div>
                    </div>
                // </div>
            );
        });
        return <ul className="horizontal-view">{articleList}</ul>;
    }


}

export default ArticleDetails;
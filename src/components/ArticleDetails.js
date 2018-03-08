import React from 'react';

const ArticleDetails = (props) => {
    
    if(!props) {
        console.log("loading");
        return <div>Loading...</div>
    } else {
        const articleList = props.newsNJ.map(article => {
            return (
                <div className = "row">
                    <div className="card small">
                        <div className = "card-image">
                            <img src={props.newsNJ.image}></img>
                        </div>
                    </div>
                </div>
            );
        });
    }

    return <ul>{articleList}</ul>
}

export default ArticleDetails;
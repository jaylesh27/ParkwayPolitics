import React from "react";

// article.id article.link, article.image, article.headline

const ArticleDetails = props => {
  if (props.newsNJ === undefined) {
    return (
      <div className="loading-div">
        Loading articles from http://www.nj.com/politics...
      </div>
    );
  } else {
    const articleList = props.newsNJ.map(article => {
      return (
        <li key={article.id}>
          <a href={article.link} target="_blank">
            <div>
              <div>
                <div>
                  <img className="article-image" src={article.image} />
                </div>
                <div>
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
};

export default ArticleDetails;

import React from "react";

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
        <a href={article.link} target="_blank" key={article.id}>
          <li className="article-list-item">
            <div className="row justify-content-center">
              <img src={article.image} />
              <p>{article.headline}</p>
            </div>
          </li>
        </a>
      );
    });
    return <ul className="article-list">{articleList}</ul>;
  }
};

export default ArticleDetails;

import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';



const ArticleList = ({ articles }) => {
  const articleElements = articles.map(article => (
    <Article 
      title={article.title}
      description={article.description}
      author={article.author}
      publishedAt={article.publishedAt}
      key={article.title}
    />
  ));

  return (
    <div>
      <h1>Articles:</h1>
      {articleElements}
    </div>
  );
};

ArticleList.propTypes = {
  articleList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })
  ),
};

export default ArticleList;

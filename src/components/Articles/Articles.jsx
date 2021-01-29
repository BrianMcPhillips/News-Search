import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';



const Articles = ({ articles }) => {
  const articleElements = articles.map(article => (
    <Article 
      title={article.title}
      description={article.description}
      author={article.author}
      publishedAt={article.publishedAt}
      url={article.url}
      imageUrl={article.imageUrl}
      content={article.content}
      key={article.title}
    />
  ));

  return (
    <ul data-testid="articles">
      {articleElements}
    </ul>
  );
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
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

export default Articles;

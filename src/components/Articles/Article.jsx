import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ 
  title, description, author, publishedAt, 
  url, imageUrl, content 
}) => (
  <>
    <h2>{title}</h2>
    <h3>{description}</h3>
    <h4>{author}</h4>
    <p>{publishedAt}</p>
    <p>{url}</p>
    <img src={imageUrl} alt={title} />
    <p>{content}</p>
  </>
);

Article.propTypes = {
  
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
  
  
};

export default Article;

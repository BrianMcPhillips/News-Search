export const fetchArticles = (input) => {
  // eslint-disable-next-line max-len
  return fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${process.env.NEWS_KEY}`)
    .then(res => res.json())
    .then(json => json.articles.map(article => ({
      title: article.title,
      description: article.description,
      author: article.author,
      publishedAt: article.publishedAt,
      url: article.url,
      imageUrl: article.imageUrl,
      content: article.content
    })));
};

import React, { Component } from 'react';
import Loading from '../components/Loading/Loading';
import Search from '../components/Search/Search';
import Articles from '../components/Articles/Articles';
import { fetchArticles } from '../Services/fetchArticles';


export default class NewsSearch extends Component {
  state = {
    input: '',
    articles: [],
    loading: false
  }

  handleChange = ({ target }) => {
    this.setState({ input: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    fetchArticles(this.state.input)
      .then(articles => {
        this.setState({ articles });
      })
      .then(setTimeout(() => {
        this.setState({ loading: false });
      }, 3000));
  }

  render() {
    const { input, loading, articles } = this.state;
    return (
      <div>
        <Search
          input={input}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit} />
        {loading ? <Loading /> : <Articles articles={articles} />}
      </div>
    );
  }
}

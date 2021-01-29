import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ input, onChange, onSubmit }) => (
  <div>
    <form onSubmit={onSubmit}>
      <label htmlFor="search">Search For News Articles</label>
      <input
        id="input"
        type="text"
        name="input"
        value={input}
        onChange={onChange}
      />
      <button data-testid="search-button">Submit</button>
    </form>
  </div>
);

Search.propTypes = {
  input: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Search;



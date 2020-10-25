import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './Article';

describe('Article component', () => {
  afterEach(() => cleanup());
  it('renders Article', () => {
    const { asFragment } = render(<Article 
      title="Test Article"
      description="This is a test description"
      author="Test Testerson"
      publishedAt="12/12/2020"
      url="testurl.com/test/test"
      imageUrl="http://placeholder.com/article"
      content="This is the best test article ever written"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Articles from './Articles';

describe('Articles component', () => {
  afterEach(() => cleanup());
  it('renders all Articles', () => {
    const { asFragment } = render(<Articles
      articles={[
        {
          title: 'Test Article',
          description: 'This is a test description',
          author: 'Test Testerson',
          publishedAt: '12/12/2020',
          url: 'testurl.com/test/test',
          imageUrl: 'http://placeholder.com/article',
          content: `This is the best test article ever written, voted best
            articleby the New York Times and associated who may or may not 
            exist`
        },
        {
          title: 'Test Article 2',
          description: 'This is the second test description',
          author: 'Test Testerson Jr.',
          publishedAt: '12/14/2020',
          url: 'testurl.com/test/test2',
          imageUrl: 'http://placeholder.com/article2',
          content: `This is the second best test article ever written, voted 
          second best articleby the New York Times and associated who may or 
          may not exist`
        }
      ]}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});

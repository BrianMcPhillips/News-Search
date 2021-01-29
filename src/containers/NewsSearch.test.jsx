import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewsSearch from './NewsSearch';
import { fetchArticles } from '../Services/fetchArticles';

jest.mock('../Services/fetchArticles.js');

describe('NewsSearch container', () => {
  it('displays a list of articles', async() => {
    fetchArticles.mockResolvedValue([
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
    ]);

    render(<NewsSearch />);
    const submitButton = screen.getByTestId('search-button');
    await fireEvent.click(submitButton);

    setTimeout(() => {
      const articles = screen.findByTestId('articles');
      expect(articles).not.toBeEmptyDOMElement();
    });

  });
});


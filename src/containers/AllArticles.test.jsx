import React from 'react';
import { render, screen } from '@testing-library/react';
import AllArticles from './AllArticles';

describe('AllArticles container', () => {
  it('displays a loading screen at the start', () => {
    render(<AllArticles />);

    const loading = screen.getByAltText('newspaper loading screen');
  });
});

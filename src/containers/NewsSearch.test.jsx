import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch';


describe('NewsSearch container', () => {
  it('displays a loading screen at the start', () => {
    render(<NewsSearch />);

    screen.getByAltText('newspaper loading screen');
  });
});

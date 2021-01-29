import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Loading from './Loading';

describe('Loading screen component', () => {
  afterEach(() => cleanup());
  it('displays the loading image', () => {
    const { asFragment } = render(<Loading />);
    
    expect(asFragment()).toMatchSnapshot();
  });
});

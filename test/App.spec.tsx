import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  it('renders a message', () => {
    const { container } = render(<App />);
    expect(container.textContent).toContain('Rendered');
  });
});

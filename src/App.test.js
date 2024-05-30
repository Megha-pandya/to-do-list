// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { render, screen } from '@testing-library/react';
import { act } from 'react';
import App from './App';

test('renders get things done heading', () => {
  act(() => {
    render(<App />);
  });
  const headingElement = screen.getByText(/get things done/i);
  expect(headingElement).toBeInTheDocument();
});

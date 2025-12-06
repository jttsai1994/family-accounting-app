import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
    render(<App />);
    // Adjust this expectation based on your actual App component content
    // For now, checks if the component renders without crashing
    expect(document.body).toBeInTheDocument();
});

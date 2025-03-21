import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mocking framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('App Component', () => {
  test('renders the main banner with default title and description', () => {
    render(<App />);

    // Check if the default title is rendered
    expect(screen.getByText('Photography Adventures')).toBeInTheDocument();

    // Check if the default description is rendered
    expect(screen.getByText(/Exploring the world through my lens/i)).toBeInTheDocument();
  });

  test('updates the banner title when the input changes', () => {
    render(<App />);

    // Find the title input
    const titleInput = screen.getByLabelText(/Banner Title/i);

    // Change the input value
    fireEvent.change(titleInput, { target: { value: 'New Title' } });

    // Check if the banner title is updated
    expect(screen.getByText('New Title')).toBeInTheDocument();
  });

  test('updates the banner description when the textarea changes', () => {
    render(<App />);

    // Find the description textarea
    const descriptionTextarea = screen.getByLabelText(/Banner Description/i);

    // Change the textarea value
    fireEvent.change(descriptionTextarea, {
      target: { value: 'This is a new description' },
    });

    // Check if the banner description is updated
    expect(screen.getByText('This is a new description')).toBeInTheDocument();
  });

  test('changes the image when an image option is clicked', () => {
    render(<App />);

    // Find the image options
    const urbanOption = screen.getByText(/urban/i);

    // Click on the urban option
    fireEvent.click(urbanOption);

    // Note: i can't directly check the src attribute in this test setup  but we can verify that the urban option is now selected/highlighted
    const urbanContainer = urbanOption.closest('div');
    expect(urbanContainer).toHaveClass('border-indigo-500');
  });

  test('changes the background color when a color option is clicked', () => {
    render(<App />);

    // Find the color options
    const purpleOption = screen.getByText(/Purple-Pink/i);

    // Click on the purple option
    fireEvent.click(purpleOption);

    // Check if the button is highlighted as selected
    expect(purpleOption).toHaveClass('bg-indigo-600');
    expect(purpleOption).toHaveClass('text-white');
  });

  test('form submission does not reload the page', () => {
    render(<App />);

    // Mock the preventDefault function
    const preventDefaultMock = jest.fn();

    // Find the form and submit button
    const form = screen.getByRole('button', { name: /Apply Changes/i }).closest('form');

    // Trigger form submission
    if (form) {
      fireEvent.submit(form, { preventDefault: preventDefaultMock });
    }

    // Check if preventDefault was called
    expect(preventDefaultMock).toHaveBeenCalled();
  });
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  test('updates ownerAddress state correctly when user types in a valid Ethereum address', () => {
    render(<App />);

    const input = screen.getByLabelText('Address');
    userEvent.type(input, '0x1234567890123456789012345678901234567890');

    expect(input).toHaveValue('0x1234567890123456789012345678901234567890');
  });
});

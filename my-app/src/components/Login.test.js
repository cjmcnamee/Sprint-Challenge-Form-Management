import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Login from './Login';

describe('<Login />', () => {
  it('displays login', () => {
    const { getByTestId, getByText } = render(<Login />);
    fireEvent.click(getByText("Login"));
    expect(getByTestId('login')).toHaveTextContent('Login');
  })
});

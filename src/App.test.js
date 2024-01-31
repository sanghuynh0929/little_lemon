import * as React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import AlertContext from './context/alertContext'

it("User is able to submit the form", async () => {
  const name = "Tom";
  const email = "tom@outlook.com";
  const comment = "Hello, no message."
  const handleSubmit = jest.fn();

  const alertContext = {
    isOpen: false,
    type: 'success',
    message: '',
    onOpen: jest.fn().mockImplementation((type, message) => {
      alertContext.isOpen = true;
      alertContext.type = type;
      alertContext.message = message;
    })
  };

  render(
    <AlertContext.Provider value={alertContext}>
      <App />
    </AlertContext.Provider>
  );


  const nameInput = screen.getByTestId("firstName");
  const emailInput = screen.getByTestId("email");
  const textArea = screen.getByTestId("comment");
  const submitButton = screen.getByTestId("button");

  fireEvent.change(nameInput, { target: { value: name } });
  fireEvent.change(emailInput, { target: { value: email } });
  fireEvent.change(textArea, { target: { value: comment } });
  fireEvent.click(submitButton);
  console.log(screen.queryAllByTestId('alertPopup'));

  expect(alertContext.onOpen).toHaveBeenCalledTimes(1);
});
import * as React from "react";
import { fireEvent, render, screen, waitFor, act } from '@testing-library/react';

import { AlertProvider } from "./contexts/alertContext";
import Alert from "./components/Alert";
import ReservationPage from "./pages/ReservationPage";

it("User is able to submit the form", async () => {
  const name = "Tom";
  const email = "tom@outlook.com";
  const guests = "3";
  const date = new Date(new Date() + 1);
  const time = "21:00";

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
  const { container, rerender } = render(
    <AlertProvider>
      <ReservationPage/>
      <Alert/>
    </AlertProvider>
  )
  const nameInput = screen.getByTestId("name");
  const emailInput = screen.getByTestId("email");
  const guestsInput = screen.getByTestId("guests");
  const dateInput = screen.getByTestId("date");
  const timeInput = screen.getByTestId("time");

  const submitButton = screen.getByRole("button");

  fireEvent.change(nameInput, { target: { value: name } });
  fireEvent.change(emailInput, { target: { value: email } });
  fireEvent.change(guestsInput, { target: { value: guests } });
  fireEvent.change(dateInput, { target: { value: date } });
  fireEvent.change(timeInput, { target: { value: time } });
  fireEvent.click(submitButton);
  await new Promise(r => setTimeout(r, 2000));
  expect(await screen.queryByRole('alertdialog')).toBeNull()
})
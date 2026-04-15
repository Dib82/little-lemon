
import {initializeTimes, updateTimes } from "./App.js"


test('tests initializeTimes', () => {
    expect(initializeTimes().length).toBeGreaterThan(0);
});

test('tests reducer updateTimes', () => {

    const state = []

    const action = {
       type: "UPDATE_TIMES",
       payload: "11-04-26"
    }

    const result = updateTimes(state, action)

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);

});



import { render, screen } from "@testing-library/react";
import Bookingform from "./Bookingform";
import "@testing-library/jest-dom";


// 1 - HTML Validation
test( 'Inputs to have correct HTML validation', () => {

    render (<Bookingform
                availableTimes={[]} />);

    const dateInput = screen.getByLabelText(/Choose date/i)
    const guestsInput = screen.getByLabelText(/Number of guests/i)
    const emailInput = screen.getByLabelText(/E-mail/i)
    const telInput = screen.getByLabelText(/Phone Number/i)

    expect(dateInput).toBeRequired();
    expect(emailInput).toBeRequired();
    expect(telInput).toBeRequired();
    expect(guestsInput).toHaveAttribute('min', '1')
    expect(guestsInput).toHaveAttribute('max', '10');
});


// 2 - Javascript VALID data
test('Submit button Javascript validation with correct data', () => {
 render(<Bookingform
                availableTimes={[]}
                tel="1234567890"
                email="email@email.com"
                />);

    const sumbitButton = screen.getByDisplayValue(/Make Your reservation/i)

    expect(sumbitButton).toBeEnabled()
});

// 3 - Javascript INVALID data
test('Submit button Javascript validation with correct data', () => {
     render(<Bookingform
                availableTimes={[]}
                tel="123"
                email="emailemail.com"
                />);

    const submitButton = screen.getByDisplayValue(/Make Your reservation/i)

    expect(submitButton).toBeDisabled()
})



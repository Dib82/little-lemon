
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
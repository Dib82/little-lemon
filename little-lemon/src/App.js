// import logo from './logo.svg';

import './App.css';
import Nav from './Nav.js';
import Footer from'./Footer.js';
import Bookingpage from './Bookingpage.js';
import ConfirmedBooking from './ConfirmedBooking.js';
import { Routes, Route,  } from 'react-router-dom';
import Homepage from './Homepage.js';
import { useState, useReducer } from 'react';
import { fetchAPI, submitAPI } from "./Api.js";
import { useNavigate } from 'react-router-dom';


// 2 INTIALIZE
export const initializeTimes = () => {
  return fetchAPI(new Date());
};

// 3 REDUCER (logic)
export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(new Date(action.payload));
  }
  return state;
};

function App() {
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [selectedTime, setSelectedTime] = useState("");


  // 4 reducer function
  const [availableTimes, dispatch] = useReducer( updateTimes, [], initializeTimes);

const navigate = useNavigate()
const submitForm = (formData) => {
  const success = submitAPI(formData)
    if (success) {
      navigate("/confirmed")
    }
}

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={
            <Bookingpage
              comment={comment} setComment={setComment}
              date={date} setDate={setDate}
              guests={guests} setGuests={setGuests}
              occasion={occasion} setOccasion={setOccasion}
              selectedTime={selectedTime} setSelectedTime={setSelectedTime}
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

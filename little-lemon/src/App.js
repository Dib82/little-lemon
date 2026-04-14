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

const getToday = () =>
  new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];

function App() {
  const [comment, setComment] = useState("");
  const [date, setDate] = useState(getToday());
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")
  // const [phoneLabel, setPhoneLabel] = useState("Phone Number");

    const resetForm = () => {
      setDate(getToday())
      setGuests(1)
      setOccasion([0])
      setEmail("")
      setTel("")
      setComment("")
    }

  // 4 reducer function
  const [availableTimes, dispatch] = useReducer( updateTimes, [], initializeTimes);

const navigate = useNavigate()
const submitForm = (formData) => {
  const success = submitAPI(formData)
    if (success) {
      navigate("/confirmed")
      resetForm()
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
              email={email} setEmail={setEmail}
              tel={tel} setTel={setTel}
              // phoneLabel={phoneLabel} setPhoneLabel={setPhoneLabel}
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

import { useState } from "react";
import { submitAPI } from "./Api";


function Bookingform(props) {
const handleSubmit = (e) => {
e.preventDefault();
console.log("Form submitted")

const formData = {
    date: props.date,
    selectedTime: props.selectedTime,
    guests: props.guests,
    occasion: props.occasion,
    email: props.email,
    tel: props.tel,
    comment: props.comment
}

props.submitForm(formData)
console.log(formData)
}

const handleDateChange = (e) => {
  const newDate = e.target.value
  props.setDate (newDate)
  props.dispatch ({type: "UPDATE_TIMES", payload: newDate});
  props.setSelectedTime("");
}

const [phoneLabel, setPhoneLabel] = useState("Phone Number");



// Valid Phone Number Check
const telHandler = (e) => {
    const value = e.target.value
    props.setTel(value)

    if (value.trim() === "")
    {
        setPhoneLabel("Phone Number")
    }
    else if (isNaN(value) || (value.length != 10))
    {
        setPhoneLabel("Not a valid number")
    }
    else
    {
        setPhoneLabel("Phone Number")
    }
}

    return (
                <>
                    <div className="flexH bookingpage">
                        <form onSubmit={ handleSubmit } style={{display: "grid", maxWidth: "200px", gap: "20px", background: "rgb(211, 211, 211)", padding:"2%", borderRadius: "16px"}}>
                        <label htmlFor="res-date">Choose date</label>
                        <input
                              required
                              type="date"
                              id="res-date"
                              value={ props.date }
                              onChange={handleDateChange}
                              min={new Date().toISOString().split("T")[0]}
                        />

                        <label htmlFor="res-time">Choose time</label>
                        <select
                        id="res-time"
                        value={props.selectedTime}
                        onChange={e => props.setSelectedTime(e.target.value)}
                        >
                        {props.availableTimes.map((time, index) => (
                            <option key={index} value={time}>
                            {time}
                            </option>
                        ))}
                        </select>
                        <label htmlFor="guests">Number of guests</label>
                        <input type="number" placeholder="1" min="1" max="10" id="guests" value={ props.guests } onChange={ e => props.setGuests (e.target.value)} />
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" value={ props.occasion } onChange={ e => props.setOccasion (e.target.value)} aria-expanded="true/false">
                            <option>No Occasion</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>

                        <label htmlFor="email">E-mail</label>
                        <input
                            required
                            type="email"
                            placeholder="E-mail"
                            id="email"
                            value={props.email}
                            onChange={ (e) => { props.setEmail(e.target.value) }}
                        ></input>
                        <label
                            htmlFor="tel"
                                style={{
                                    color: phoneLabel.includes("Not") ? "red" : "black",
                                    fontWeight: phoneLabel.includes("Not") ? "bold" : "normal"
                                }}


                            >{phoneLabel}
                        </label>
                        <input
                            required
                            type="tel"
                            placeholder="Phone Number"
                            id="tel"
                            value={props.tel}
                            // onChange={ (e) => { setTel(e.target.value) }}
                            onChange={telHandler}
                        ></input>
                       <label htmlFor="comment">Comments</label>
                        <textarea
                            id="comment"
                            value={ props.comment }
                            onChange={ e => props.setComment (e.target.value)}/>
                       <input
                            type="submit"
                            value="Make Your reservation"
                            // disabled={ !flag  || !props.tel || !props.email}
                            disabled={
                                isNaN(props.tel) ||
                                props.tel.length !== 10 ||
                                !props.email 
}
                            />
                        </form>
                    </div>
                </>
    );
}

export default Bookingform

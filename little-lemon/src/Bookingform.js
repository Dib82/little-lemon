import { submitAPI } from "./Api";


function Bookingform(props) {
const handleSubmit = (e) => {
e.preventDefault();
console.log("Form submitted")

const formData = {
    date: props.date
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


    return (
                <>
                    <div className="flexH bookingpage">
                        <form onSubmit={ handleSubmit } style={{display: "grid", maxWidth: "200px", gap: "20px", background: "rgb(211, 211, 211)", padding:"2%", borderRadius: "16px"}}>
                        <label htmlFor="res-date">Choose date</label>
                        <input
                              type="date"
                              id="res-date"
                              value={ props.date }
                              onChange={handleDateChange}
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
                       <label htmlFor="comment">Comments</label>
                        <textarea value={ props.comment } onChange={ e => props.setComment (e.target.value)}/>
                       <input type="submit" value="Make Your reservation" />
                        </form>
                    </div>
                </>
    );
}

export default Bookingform

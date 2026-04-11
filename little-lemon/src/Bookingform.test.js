import { render, screen } from "@testing-library/react";
import BookingForm from './Bookingform';

test('Renders the BookingForm heading', () => {
    render(<BookingForm
              comment={""} setComment={()=>{}}
              date={""} setDate={()=>{}}
              guests={""} setGuests={()=>{}}
              occasion={""} setOccasion={()=>{}}
              selectedTime={""} setSelectedTime={()=>{}}
              availableTimes={["17:00", "18:00", "19:00", "20:00", "21:00"]}
              dispatch={()=>{}}
        />);
    const headingElement = screen.getByText("Occasion");
    expect(headingElement).toBeInTheDocument();
})
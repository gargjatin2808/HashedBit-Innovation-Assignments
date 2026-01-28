import { useLocation } from "react-router-dom";

function BookingSuccess() {
  const location = useLocation();
  const state = location.state;

  if (!state) {
    return <h2>No booking data found</h2>;
  }

  const bookingId = Math.floor(Math.random() * 1000000);

  return (
    <div>
      <h2>Seat Booked Successfully 🎉</h2>
      <p><b>Booking ID:</b> {bookingId}</p>
      <p><b>Name:</b> {state.name}</p>
      <p><b>Email:</b> {state.email}</p>
      <p><b>Mobile:</b> {state.mobile}</p>
    </div>
  );
}

export default BookingSuccess;

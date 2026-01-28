import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    navigate("/success", {
      state: { name, email, mobile }
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Book Seat</h2>

      <input placeholder="Name" onChange={e => setName(e.target.value)} required />
      <br />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} required />
      <br />
      <input placeholder="Mobile" onChange={e => setMobile(e.target.value)} required />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingForm;

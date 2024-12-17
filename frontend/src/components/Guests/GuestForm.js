import React, { useState } from "react";
import API from "../../api/axios";

const GuestForm = () => {
    const [guest, setGuest] = useState({ name: "", email: "", phone: "", rsvp: "Pending" });

    const handleChange = (e) => setGuest({ ...guest, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        API.post("/guests12345", guest)
            .then(() => alert("Guest added successfully!"))
            .catch((error) => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
            <select name="rsvp" onChange={handleChange}>
                <option value="Pending">Pending</option>
                <option value="Accepted">Accepted</option>
                <option value="Declined">Declined</option>
            </select>
            <button type="submit">Add Guest</button>
        </form>
    );
};

export default GuestForm;

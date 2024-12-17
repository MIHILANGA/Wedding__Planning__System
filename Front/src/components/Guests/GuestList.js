import React, { useState, useEffect } from "react";
import API from "../../api/axios";

const GuestList = () => {
    const [guests, setGuests] = useState([]);

    useEffect(() => {
        API.get("/guests12345")
            .then((response) => setGuests(response.data))
            .catch((error) => console.error(error));
    }, []);

    const deleteGuest = (id) => {
        API.delete(`/guests12345/${id}`)
            .then(() => setGuests(guests.filter((guest) => guest._id !== id)))
            .catch((error) => console.error(error));
    };

    const updateGuest = (id, updatedGuest) => {
        API.put(`/guests12345/${id}`, updatedGuest)
            .then((response) => {
                setGuests(guests.map((guest) => (guest._id === id ? response.data : guest)));
            })
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <h1>Guest List</h1>
            <ul>
                {guests.map((guest) => (
                    <li key={guest._id}>
                        {guest.name} ({guest.rsvp})
                        <button onClick={() => deleteGuest(guest._id)}>Delete</button>
                        <button
                            onClick={() =>
                                updateGuest(guest._id, { ...guest, rsvp: guest.rsvp === "Pending" ? "Accepted" : "Pending" })
                            }
                        >
                            Update RSVP
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GuestList;

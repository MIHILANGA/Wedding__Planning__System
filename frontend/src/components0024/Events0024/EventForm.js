import React, { useState } from "react";
import API from "../../api/axios"; // Ensure the axios configuration is correct

const EventForm = () => {
    const [event, setEvent] = useState({
        name: "",
        date: "",
        venue: "",
        type: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent({
            ...event,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        API.post("/events0024", event)
            .then(() => {
                alert("Event created successfully!");
                setEvent({
                    name: "",
                    date: "",
                    venue: "",
                    type: "",
                });
            })
            .catch((error) => console.error("There was an error creating the event:", error));
    };

    return (
        <div>
            <h1>Create New Event</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={event.name}
                    placeholder="Event Name"
                    onChange={handleChange}
                />
                <input
                    type="date"
                    name="date"
                    value={event.date}
                    placeholder="Event Date"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="venue"
                    value={event.venue}
                    placeholder="Event Venue"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="type"
                    value={event.type}
                    placeholder="Event Type"
                    onChange={handleChange}
                />
                <button type="submit">Create Event</button>
            </form>
        </div>
    );
};

export default EventForm;

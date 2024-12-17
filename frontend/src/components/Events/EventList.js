import React, { useState, useEffect } from "react";
import API from "../../api/axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom to handle navigation

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        API.get("/events")
            .then((response) => setEvents(response.data))
            .catch((error) => console.error(error));
    }, []);

    const deleteEvent = (id) => {
        API.delete(`/event/${id}`)
            .then(() => setEvents(events.filter((event) => event._id !== id)))
            .catch((error) => console.error(error));
    };

    const updateEvent = (id, updatedEvent) => {
        API.put(`/events/${id}`, updatedEvent)
            .then((response) => {
                setEvents(events.map((event) => (event._id === id ? response.data : event)));
            })
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <h1>Event List</h1>
            <Link to="/eventform">
                <button>Create New Event</button>
            </Link>
            <ul>
                {events.map((event) => (
                    <li key={event._id}>
                        {event.name} - {new Date(event.date).toLocaleDateString()} ({event.type})
                        <button onClick={() => deleteEvent(event._id)}>Delete</button>
                        <button
                            onClick={() =>
                                updateEvent(event._id, { name: "Updated Event", date: event.date, type: event.type })
                            }
                        >
                            Update
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;

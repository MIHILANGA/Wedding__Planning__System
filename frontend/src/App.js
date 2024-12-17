import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventList from "./components/Events/EventList";
import GuestList from "./components/Guests/GuestList";
import VendorList from "./components/Vendors/VendorList";
import TaskList from "./components/Tasks/TaskList";
import EventForm from "./components/Events/EventForm";
import { Button } from "@aws-amplify/ui-react";

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><a href="/events">Events</a></li>
                        <li><a href="/guests">Guests</a></li>
                        <li><a href="/vendors">Vendors</a></li>
                        <li><a href="/tasks">Tasks</a></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/events" element={<EventList />} />
                    <Route path="/" element={<EventList />} />
                <Route path="/eventform" element={<EventForm />} />
                    <Route path="/guests" element={<GuestList />} />
                     <Route path="/vendors" element={<VendorList />} />
                    <Route path="/tasks" element={<TaskList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

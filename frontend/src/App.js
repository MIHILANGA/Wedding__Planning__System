import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventList from "./components0024/Events0024/EventList";
import EventForm from "./components0024/Events0024/EventForm";
import GuestList from "./components0024/Guests0024/GuestList";
import GuestForm from "./components0024/Guests0024/GuestForm";
import VendorList from "./components0024/Vendors0024/VendorList";
import VendorForm from "./components0024/Vendors0024/VendorForm";
import TaskList from "./components0024/Tasks0024/TaskList";
import TaskForm from "./components0024/Tasks0024/TaskForm";
import BudgetList from "./components0024/Budgets0024/BudgetList";
import BudgetForm from "./components0024/Budgets0024/BudgetForm";
import Notifications from "./components0024/Notifications0024/NotificationForm";
import { Button } from "@aws-amplify/ui-react";

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><a href="/events0024">Events</a></li>
                        <li><a href="/guests0024">Guests</a></li>
                        <li><a href="/vendors0024">Vendors</a></li>
                        <li><a href="/tasks0024">Tasks</a></li>
                        <li><a href="/budget0024">Budget</a></li>
                        <li><a href="/notifications0024">Notifications</a></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/events0024" element={<EventList />} />
                    <Route path="/" element={<EventList />} />
                    <Route path="/eventform0024" element={<EventForm />} />
                    <Route path="/guests0024" element={<GuestList />} />
                    <Route path="/guestform0024" element={<GuestForm />} />
                    <Route path="/vendors0024" element={<VendorList />} />
                    <Route path="/vendorform0024" element={<VendorForm />} />
                    <Route path="/tasks0024" element={<TaskList />} />
                    <Route path="/taskform0024" element={<TaskForm />} />
                    <Route path="/budget0024" element={<BudgetList/>} />
                    <Route path="/budgetform0024" element={<BudgetForm />} />
                    <Route path="/notifications0024" element={<Notifications />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

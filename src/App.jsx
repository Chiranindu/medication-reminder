import React, { useState, useEffect } from 'react'
import MedicationForm from './components/MedicationForm'
import RemindersList from './components/RemainderList'
import './App.css';

function App() {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const savedReminders = JSON.parse(localStorage.getItem('reminders')) || [];
    setReminders(savedReminders);
  }, []);

  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders));
  }, [reminders]);

  const addReminder = (reminder) => {
    setReminders([...reminders, reminder]);
  };

  const markAsTaken = (id) => {
    setReminders(reminders.filter(reminder => reminder.id !== id));
  };

  return (
    <div className="App">
      <h1>Medication Reminder</h1>
      <MedicationForm addReminder={addReminder} />
      <RemindersList reminders={reminders} markAsTaken={markAsTaken} />
    </div>
  );
}

export default App;

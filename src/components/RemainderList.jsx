import React from 'react';

function RemindersList({ reminders, markAsTaken }) {
  return (
    <div className="reminders-section">
      <h2>Upcoming Reminders</h2>
      <ul>
        {reminders.length === 0 ? (
          <li>No reminders set</li>
        ) : (
          reminders.map((reminder) => (
            <li key={reminder.id}>
              {reminder.name} - {reminder.dosage} at {reminder.time}
              <button onClick={() => markAsTaken(reminder.id)}>Mark as Taken</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default RemindersList;

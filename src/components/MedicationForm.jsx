import React, { useState } from 'react';

function MedicationForm({ addReminder }) {
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReminder = {
      id: Date.now(),
      name,
      dosage,
      time,
    };
    addReminder(newReminder);
    setName('');
    setDosage('');
    setTime('');
  };

  return (
    <div className="form-section">
    <p>Keep track of your medications easily and never miss a dose!</p>
      
      <form onSubmit={handleSubmit}>
        <label>
          Medication Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <h2>Add Medication</h2>
        <label>
          Dosage:
          <input type="text" value={dosage} onChange={(e) => setDosage(e.target.value)} required />
        </label>
        <label>
          Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </label>
        <button type="submit">Add Medication</button>
      </form>
    </div>
  );
}

export default MedicationForm;

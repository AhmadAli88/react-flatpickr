import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css'; // Import Material Blue Theme

const MaterialBlueDatePicker = () => {
  const [date, setDate] = useState(null); // State to store the selected date

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', backgroundColor: '#f7f7f7' }}>
      <h2 style={{ color: '#333' }}>Select a Date (Material Blue Theme)</h2>
      <Flatpickr
        value={date}
        onChange={(selectedDates) => setDate(selectedDates[0])}
        options={{
          dateFormat: 'Y-m-d', // Format the date as YYYY-MM-DD
        }}
        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {date && (
        <div style={{ marginTop: '20px' }}>
          <p>
            <strong>Selected Date:</strong> {date.toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default MaterialBlueDatePicker;

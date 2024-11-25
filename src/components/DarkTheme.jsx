import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/dark.css'; // Import Flatpickr dark theme

const DarkThemeDatePicker = () => {
  const [date, setDate] = useState(null); // State to store the selected date

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', backgroundColor: '#333', color: 'white' }}>
      <h2 style={{ color: 'white' }}>Select a Date (Dark Theme)</h2>
      <Flatpickr
        value={date}
        onChange={(selectedDates) => setDate(selectedDates[0])}
        options={{
          dateFormat: 'Y-m-d', // Format the date as YYYY-MM-DD
        }}
        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      {date && (
        <div style={{ marginTop: '20px', color: 'white' }}>
          <p>
            <strong>Selected Date:</strong> {date.toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default DarkThemeDatePicker;

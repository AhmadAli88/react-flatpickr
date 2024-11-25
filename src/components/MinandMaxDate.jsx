import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css'; // Import Flatpickr theme

const MinAndMaxDate = () => {
  const [date, setDate] = useState(null); // State to store the selected date

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Select a Date (Limited Range)</h2>
      <Flatpickr
        value={date}
        onChange={(selectedDates) => setDate(selectedDates[0])}
        options={{
          minDate: '2024-01-01',  // Set minimum selectable date
          maxDate: '2024-12-31',  // Set maximum selectable date
          dateFormat: 'Y-m-d',    // Format the date as YYYY-MM-DD
        }}
        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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

export default MinAndMaxDate;

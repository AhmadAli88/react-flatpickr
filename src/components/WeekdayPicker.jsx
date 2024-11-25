import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css'; // Import desired Flatpickr theme

const WeekdayPicker = () => {
  const [date, setDate] = useState(null); // State to store the selected date

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Weekday Picker</h2>
      <Flatpickr
        value={date}
        onChange={(selectedDates) => setDate(selectedDates[0])}
        options={{
          disable: [
            function (date) {
              // Disable weekends (Sunday = 0, Saturday = 6)
              return date.getDay() === 0 || date.getDay() === 6;
            },
          ],
          dateFormat: 'Y-m-d', // Format dates as YYYY-MM-DD
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

export default WeekdayPicker;

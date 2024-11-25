import  { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css'; // Import the desired Flatpickr theme

const TimePicker = () => {
  const [time, setTime] = useState(null); // State to store the selected time

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Time Picker</h2>
      <Flatpickr
        value={time}
        onChange={(selectedDates) => setTime(selectedDates[0])}
        options={{
          enableTime: true,
          noCalendar: true,
          dateFormat: 'H:i', // 24-hour format
        }}
        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {time && <p>Selected Time: {time.toLocaleTimeString()}</p>}
    </div>
  );
};

export default TimePicker;

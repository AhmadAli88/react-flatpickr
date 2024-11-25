import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css'; // Include a Flatpickr theme

const BasicFlatpickr = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Pick a Date</h2>
      <Flatpickr
        data-enable-time
        value={date}
        onChange={(selectedDates) => setDate(selectedDates[0])}
        options={{
          dateFormat: 'Y-m-d H:i', // Date and time format
        }}
      />
      <p>Selected Date: {date.toString()}</p>
    </div>
  );
};

export default BasicFlatpickr;

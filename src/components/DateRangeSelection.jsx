import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css'; // Import desired Flatpickr theme

const DateRangePicker = () => {
  const [dateRange, setDateRange] = useState([]); // State to store the selected date range

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Date Range Picker</h2>
      <Flatpickr
        value={dateRange}
        onChange={(selectedDates) => setDateRange(selectedDates)}
        options={{
          mode: 'range', // Enables range selection
          dateFormat: 'Y-m-d', // Formats dates as YYYY-MM-DD
        }}
        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      {dateRange.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <p><strong>Start Date:</strong> {dateRange[0]?.toLocaleDateString() || 'Not selected'}</p>
          <p><strong>End Date:</strong> {dateRange[1]?.toLocaleDateString() || 'Not selected'}</p>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;

import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/dark.css'; // Optional: Use dark theme

const DatePickerWithTailwind = () => {
  const [date, setDate] = useState(null); // State to store selected date

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Pick a Date</h2>

        {/* Flatpickr component with Tailwind classes */}
        <Flatpickr
          value={date}
          onChange={(selectedDates) => setDate(selectedDates[0])}
          options={{
            dateFormat: 'Y-m-d', // Date format
          }}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Display the selected date */}
        {date && (
          <div className="mt-4">
            <p className="text-gray-700">
              <strong>Selected Date:</strong> {date.toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DatePickerWithTailwind;

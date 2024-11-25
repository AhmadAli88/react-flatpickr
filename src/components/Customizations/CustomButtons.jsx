import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/dark.css'; // Optional: Use dark theme

const ClearableDatePicker = () => {
  const [date, setDate] = useState(null); // State to store selected date

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', backgroundColor: '#f0f0f0' }}>
      <h2 style={{ color: '#333' }}>Date Picker with Clear Button</h2>

      <Flatpickr
        value={date}
        onChange={(selectedDates) => setDate(selectedDates[0])}
        options={{
          dateFormat: 'Y-m-d', // Set the date format to year-month-day
          onReady: function (selectedDates, dateStr, instance) {
            // Create the custom "Clear" button
            const clearButton = document.createElement('button');
            clearButton.textContent = 'Clear';
            clearButton.style.marginTop = '10px';
            clearButton.style.padding = '5px 10px';
            clearButton.style.backgroundColor = '#FF4747'; // Red background color
            clearButton.style.color = 'white';
            clearButton.style.border = 'none';
            clearButton.style.borderRadius = '4px';
            clearButton.style.cursor = 'pointer';

            // Add event listener for clearing the date
            clearButton.addEventListener('click', () => {
              instance.clear(); // Clear the selected date
              setDate(null); // Update the state to reset the input
            });

            // Append the Clear button to the calendar container
            instance.calendarContainer.appendChild(clearButton);
          },
        }}
        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      {/* Display the selected date */}
      {date && (
        <div style={{ marginTop: '20px', color: '#333' }}>
          <p>
            <strong>Selected Date:</strong> {date.toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default ClearableDatePicker;

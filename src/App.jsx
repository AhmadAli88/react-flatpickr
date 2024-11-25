import './App.css';
import BasicFlatpickr from './components/BasicFlatpickr';
import DarkThemeDatePicker from './components/DarkTheme';
import DateRangePicker from './components/DateRangeSelection';
import FormWithFlatpickr from './components/FormWithFlatpickr';
import MinAndMaxDate from './components/MinandMaxDate';
import TimePicker from './components/TimePicker';
import WeekdayPicker from './components/WeekdayPicker';

function App() {
  return (
    <div>
      <BasicFlatpickr />
      <TimePicker/>
      <DateRangePicker/>
      <WeekdayPicker/>
      <MinAndMaxDate/>
      <DarkThemeDatePicker/>
      <FormWithFlatpickr/>
    </div>
  );
}

export default App;

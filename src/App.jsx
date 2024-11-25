import './App.css';
import BasicFlatpickr from './components/BasicFlatpickr';
import ClearableDatePicker from './components/Customizations/CustomButtons';
import DatePickerWithTailwind from './components/Customizations/DatePickerWithTailwind';
import DarkThemeDatePicker from './components/themes/DarkTheme';
import DateRangePicker from './components/DateRangeSelection';
import FormWithFlatpickr from './components/FormWithFlatpickr';
import MinAndMaxDate from './components/MinandMaxDate';
import TimePicker from './components/TimePicker';
import WeekdayPicker from './components/WeekdayPicker';
import LightThemeDatePicker from './components/themes/LightThemeDatePicker';
import MaterialBlueDatePicker from './components/themes/MaterialBlueDatePicker';

function App() {
  return (
    <div>
      <BasicFlatpickr />
      <TimePicker />
      <DateRangePicker />
      <WeekdayPicker />
      <MinAndMaxDate />
      <DarkThemeDatePicker />
      <FormWithFlatpickr />
      <ClearableDatePicker />
      <DatePickerWithTailwind />
      <MaterialBlueDatePicker />
      <LightThemeDatePicker />
    </div>
  );
}

export default App;

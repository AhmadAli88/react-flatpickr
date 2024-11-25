import { useForm, Controller } from 'react-hook-form';
import Flatpickr from 'react-flatpickr';

const FormWithFlatpickr = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="date"
        control={control}
        defaultValue={new Date()}
        render={({ field }) => (
          <Flatpickr {...field} options={{ dateFormat: 'Y-m-d' }} />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormWithFlatpickr;

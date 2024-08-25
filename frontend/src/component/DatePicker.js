import React from 'react';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const DateComponent = ({ label, value, onChange, name, ...props }) => {
  const handleChange = (newValue) => {
    const formattedDate = newValue ? dayjs(newValue).format('YYYY-MM-DD') : '';
    onChange({
      target: {
        name: name,
        value: formattedDate,
      },
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
        {...props}
      />
    </LocalizationProvider>
  );
};

export default DateComponent;

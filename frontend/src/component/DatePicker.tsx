import React from "react";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

// Updated interface
interface DateComponentProps {
  label: string;
  value: string | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  [key: string]: any; // This allows other props
}

const DateComponent: React.FC<DateComponentProps> = ({
  label,
  value,
  onChange,
  name,
  ...props
}) => {
  const handleChange = (newValue: dayjs.Dayjs | null) => {
    const formattedDate = newValue ? newValue.format("YYYY-MM-DD") : "";
    onChange({
      target: {
        name: name,
        value: formattedDate,
      },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const dayjsValue = value ? dayjs(value, "YYYY-MM-DD") : null;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={dayjsValue}
        onChange={handleChange}
        slots={{
          textField: (textFieldProps) => <TextField {...textFieldProps} />,
        }}
        {...props}
      />
    </LocalizationProvider>
  );
};

export default DateComponent;

import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import { useField } from "formik";
import React from "react";
interface RadionOptions {
  value: string;
  label: string;
}
interface RadioProps {
  values: RadionOptions[];
  name: string;
}

const Index: React.FC<RadioProps> = ({ values, name }) => {
  const [field, meta] = useField({ name, type: "radio" });

  return (
    <>
      <RadioGroup role="group">
        {values.map((val, i) => (
          <FormControlLabel
            key={i}
            value={val.value}
            control={<Radio {...field} checked={meta.value === val.value} />}
            label={val.label}
          />
        ))}
      </RadioGroup>
      <Typography variant="h6"> {meta.error ? meta.error : ""}</Typography>
    </>
  );
};

export default Index;

import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import { useField } from "formik";
import React from "react";
interface CheckboxProps {
  name: string;

  label: string;
}

const Index: React.FC<CheckboxProps> = ({ name, label }) => {
  const [field, meta] = useField({ name, type: "checkbox" });
  console.log(meta.error, field.checked);

  return (
    <>
      <FormControlLabel
        control={<Checkbox {...field} />}
        label={label}
        value={field.checked}
      />
      <Typography variant="h6"> {meta.error ? meta.error : ""}</Typography>
    </>
  );
};

export default Index;

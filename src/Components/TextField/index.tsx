import { TextField } from "@material-ui/core";
import React from "react";
import { useField } from "formik";

interface TextFieldProps {
  placeholder: string;
  name: string;
}
const Index: React.FC<TextFieldProps> = ({ name, placeholder }) => {
  const [field, meta] = useField({ name, type: "text" });

  return (
    <>
      <TextField
        {...field}
        placeholder={placeholder}
        helperText={meta.error ? meta.error : ""}
      />
    </>
  );
};

export default Index;

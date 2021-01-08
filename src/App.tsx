import React from "react";
import { Formik, Form } from "formik";
import TextField from "./Components/TextField/index";
import { yupValidationSchema } from "./Validation/index";
import Stepper from "./Components/Stepper/index";
import Terms from "./Components/Terms/index";
import RadioButtons from "./Components/RadioButtons";
interface FormikValues {
  firstName: string;
  lastName: string;
  email: string;
  packages: string;
  termsChecked: boolean;
}
function App() {
  const initialValues: FormikValues = {
    firstName: "",
    lastName: "",
    email: "",
    packages: "",
    termsChecked: false,
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={yupValidationSchema}
        initialErrors={{
          firstName: "First Name Is Required",
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(formik) => (
          <Form>
            <Stepper errors={formik.errors} formik={formik}>
              <TextField placeholder="First Name" name="firstName" />
              <TextField placeholder="Last Name" name="lastName" />
              <TextField placeholder="Email" name="email" />
              <RadioButtons
                name="packages"
                values={[
                  { value: "500", label: "Weekly At 500" },
                  { value: "1000", label: "Monthly At 1000" },
                  { value: "10000", label: "Yearly At 10000" },
                ]}
              />
              <Terms
                name="termsChecked"
                label="Agree to Terms And Conditions"
              />
            </Stepper>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default App;

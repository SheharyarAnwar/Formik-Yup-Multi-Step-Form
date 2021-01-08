import * as Yup from "yup";
export const yupValidationSchema = Yup.object({
  firstName: Yup.string()
    .min(5, "Must be Atleast 5 characters")
    .required("Required"),
  lastName: Yup.string()
    .min(5, "Must be Atleast 5 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  packages: Yup.string()
    .oneOf(["1000", "500", "10000"])
    .required("Package is Required"),
  termsChecked: Yup.boolean().isTrue("Must Agree To Terms To Finish"),
});

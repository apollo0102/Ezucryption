import { Grid } from "@mui/material";
import FormInput from "../../../Partials/Form/FormInput";

interface IProps {
  label?: string;
  name?: string;
  formik?: any;
}

function LicenseInput(props: IProps) {
  const { label, name, formik } = props;

  return (
    <Grid container item alignItems={["center"]}>
      <Grid sm={5} sx={{ fontSize: 14 }}>
        {label}
      </Grid>

      <Grid sm={7}>
        <FormInput placeHolder="Text" name={name} formik={formik} />
      </Grid>
    </Grid>
  );
}

export default LicenseInput;

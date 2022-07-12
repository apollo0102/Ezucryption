import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

import FormInput from "../../../Partials/Form/FormInput";

function DetailedBioTab() {
  const loginSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, "Too Short!")
      .max(14, "Too Long!")
      .required("Field is Required"),
    email: Yup.string().email("Invalid email").required("Field is Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {},
    validationSchema: loginSchema,
  });

  return (
    <Box pt={6}>
      <Box mb={9}>
        <Typography className="g-font-family-kern g-font-medium">
          Detailed Bio
        </Typography>

        <Box sx={{ width: 280 }}>
          <FormInput
            placeHolder="Detailed Bio"
            name="detailedBio"
            formik={formik}
          />
        </Box>
      </Box>

      <Grid container mb={9}>
        <Grid sm={6}>
          <Typography className="g-font-family-kern g-font-medium">
            Exhibitions
          </Typography>

          <Box sx={{ width: 280 }}>
            <FormInput
              placeHolder="Exhibition Title"
              name="exhibitionTitle"
              formik={formik}
            />
          </Box>

          <Box sx={{ width: 280 }}>
            <FormInput placeHolder="Gallery" name="gallery" formik={formik} />
          </Box>

          <Box sx={{ width: 280 }}>
            <FormInput placeHolder="URL Link" name="urlLink" formik={formik} />
          </Box>

          <Box sx={{ width: 280 }}>
            <FormInput placeHolder="Month, Year" name="date" formik={formik} />
          </Box>
        </Grid>

        <Grid sm={6}>Exhibition #1, Gallery XYX, May 2018</Grid>
      </Grid>

      <Grid container mb={9}>
        <Grid sm={6}>
          <Typography className="g-font-family-kern g-font-medium">
            Press
          </Typography>

          <Box sx={{ width: 280 }}>
            <FormInput
              placeHolder="Article Title"
              name="articleTitle"
              formik={formik}
            />
          </Box>

          <Box sx={{ width: 280 }}>
            <FormInput
              placeHolder="Publication"
              name="publication"
              formik={formik}
            />
          </Box>

          <Box sx={{ width: 280 }}>
            <FormInput placeHolder="Date" name="date" formik={formik} />
          </Box>

          <Box sx={{ width: 280 }}>
            <FormInput placeHolder="URL Link" name="urlLink" formik={formik} />
          </Box>
        </Grid>

        <Grid sm={6}>Title of Article, Publication, May 2018, URL</Grid>
      </Grid>

      <Grid container mb={9}>
        <Grid sm={6}>
          <Typography className="g-font-family-kern g-font-medium">
            Awards
          </Typography>

          <Box sx={{ width: 280 }}>
            <FormInput
              placeHolder="Name Of Award"
              name="nameOfAward"
              formik={formik}
            />
          </Box>

          <Box sx={{ width: 280 }}>
            <FormInput
              placeHolder="Organization"
              name="organization"
              formik={formik}
            />
          </Box>

          <Box sx={{ width: 280 }}>
            <FormInput placeHolder="Date" name="date" formik={formik} />
          </Box>

          <Box sx={{ width: 280 }}>
            <FormInput placeHolder="URL Link" name="urlLink" formik={formik} />
          </Box>
        </Grid>

        <Grid sm={6}>Title of Award, Organization, May 2018, URL</Grid>
      </Grid>

      <Grid container>
        <Grid sm={6}>
          <Typography className="g-font-family-kern g-font-medium">
            Links
          </Typography>

          <Box sx={{ width: 280 }}>
            <FormInput placeHolder="Link 1" name="link1" formik={formik} />
          </Box>

          <Box sx={{ width: 280 }}>
            <FormInput placeHolder="Link 2" name="link2" formik={formik} />
          </Box>

          <Box sx={{ width: 280 }}>
            <FormInput placeHolder="Link 3" name="link3" formik={formik} />
          </Box>
        </Grid>

        <Grid sm={6}>URL link</Grid>
      </Grid>
    </Box>
  );
}

export default DetailedBioTab;

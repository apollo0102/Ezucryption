import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid, Box, Typography } from "@mui/material";
import { CloudUpload, Add } from "@mui/icons-material";
import styled from "@emotion/styled";

import StatusSymbol from "../../../Partials/StatusSymbol";
import FormInput from "../../../Partials/Form/FormInput";
import ProfileInput from "./ProfileInput";
import ProfileCard from "./ProfileCard";

function ProfileTab() {
  const additionalRoles = [
    { name: "Creator", color: "#BAE5F8" },
    { name: "Curators", color: "#E3D4EA" },
    { name: "Collections", color: "#BAF8CF" },
    { name: "Other", color: "#F8BABA" },
  ];

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
    <Grid container>
      <Grid sm={6} pt={6}>
        <Typography mb={2} className="g-font-family-kern g-font-medium">
          Name/Organization
        </Typography>

        <Box mb={0.5}>
          <ProfileInput label="First Name" formik={formik} />
        </Box>

        <Box mb={0.5}>
          <ProfileInput label="Last Name" formik={formik} />
        </Box>

        <Box mb={0.5}>
          <ProfileInput label="Organization" formik={formik} />
        </Box>

        <Box mb={0.5}>
          <ProfileInput label="Pseudonym" formik={formik} />
        </Box>

        <Box mb={0.5}>
          <ProfileInput label="Email" formik={formik} />
        </Box>

        <Box mb={0.5}>
          <ProfileInput label="Password" formik={formik} />
        </Box>

        <Box mb={0.5}>
          <ProfileInput label="Address" formik={formik} />
        </Box>

        <Box mb={0.5}>
          <ProfileInput label="City" formik={formik} />
        </Box>

        <Box mb={0.5}>
          <ProfileInput label="Country" formik={formik} />
        </Box>

        <Box mb={10}>
          <ProfileInput label="Postal Code" formik={formik} />
        </Box>

        <Typography mb={2} className="g-font-family-kern g-font-medium">
          Social Information
        </Typography>

        <Box mb={0.5}>
          <ProfileInput label="Address" formik={formik} />
        </Box>

        <Box mb={0.5}>
          <ProfileInput label="Facebook" formik={formik} />
        </Box>

        <Box mb={0.5}>
          <ProfileInput label="Instagram" formik={formik} />
        </Box>

        <Box mb={0.5}>
          <ProfileInput label="Twitter" formik={formik} />
        </Box>
      </Grid>

      <Grid sm={6}>
        <Box mb={4}>
          <ProfileCard height={300}>
            <Typography className="g-font-family-kern g-font-bold">
              Roles
            </Typography>

            <FormInput placeHolder="Text" name={"roles"} formik={formik} />

            <Typography
              mt={6}
              mb={3.5}
              sx={{ fontSize: 14 }}
              className="g-font-family-kern g-font-medium"
            >
              Additional Roles
            </Typography>

            <Box display="flex" flexWrap="wrap" gap={1}>
              {additionalRoles.map((item, i) => (
                <Box
                  className="g-font-medium"
                  px={2}
                  py={0.3}
                  sx={{
                    background: item.color,
                    fontSize: 12,
                    borderRadius: 24,
                  }}
                >
                  {item.name}
                </Box>
              ))}
            </Box>
          </ProfileCard>
        </Box>

        <Box mb={4}>
          <ProfileCard height={255}>
            <Box display="flex" justifyContent="end" mb={1}>
              <StatusSymbol />
            </Box>

            <Typography mb={3.5} className="g-font-family-kern g-font-bold">
              Digital Identity
            </Typography>

            <Typography
              className="g-font-family-kern g-font-medium"
              mb={1.5}
              sx={{ fontSize: 14 }}
            >
              Upload Document
            </Typography>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{
                border: "0.72px dashed rgba(0, 0, 0, 0.12)",
                backgroundColor: "#F8F9FC",
                borderRadius: 2,
                width: 191,
                height: "81.86px",
                margin: "0 auto",
              }}
            >
              <CloudUpload />
              <Typography align="center" mt={1} sx={{ fontSize: 8 }}>
                Drag-and-drop file, or browse computer
              </Typography>
            </Box>
          </ProfileCard>
        </Box>

        <Box mb={4}>
          <ProfileCard height={223}>
            <Typography className="g-font-family-kern g-font-bold" mb={4.5}>
              Profile Photo
            </Typography>

            <Box display="flex" justifyContent="center">
              <AddPhoto
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
              >
                <Add />
              </AddPhoto>
            </Box>
          </ProfileCard>
        </Box>

        <ProfileCard height={223}>
          <Typography className="g-font-family-kern g-font-bold" mb={4.5}>
            Team Members
          </Typography>

          <Box display="flex" gap={4}>
            <AddPhoto
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="white"
            >
              <Add />
            </AddPhoto>

            <AddPhoto
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="white"
            >
              <Add />
            </AddPhoto>
          </Box>
        </ProfileCard>
      </Grid>
    </Grid>
  );
}

const AddPhoto = styled(Box)`
  background: linear-gradient(0deg, #0085ff, #0085ff), url(.png), url(.png);
  box-shadow: 3px 9px 18px -10px rgba(0, 0, 0, 0.5);
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;

export default ProfileTab;

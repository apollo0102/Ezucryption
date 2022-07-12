import React from "react";
import { Typography, Box } from "@mui/material";
import styled from "@emotion/styled";

function CertificatesOfOwnershipTab() {
  const certificates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Box pt={6}>
      <Typography className="g-font-family-kern" sx={{ fontSize: 20 }} mb={3}>
        Certificates of Ownership
      </Typography>

      <CustomGrid>
        {certificates.map((certificate, i) => (
          <Box key={i}>
            <svg
              width="57"
              height="79"
              viewBox="0 0 57 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.398393 27.5242C0.144947 27.7774 0 28.1238 0 28.4818V71.8828C0 75.628 3.03826 78.6634 6.78118 78.6634H50.2191C53.9646 78.6634 57 75.628 57 71.8828V6.78343C57 4.98502 56.2843 3.25916 55.0145 1.9877C53.7419 0.715948 52.0181 0 50.2191 0H28.5193C28.1599 0 27.8146 0.142691 27.5612 0.398676L0.398393 27.5242ZM2.71246 29.0463L29.0792 2.7158H50.2191C51.2967 2.7158 52.3329 3.14387 53.0958 3.90618C53.8589 4.66849 54.2878 5.70459 54.2878 6.78422V71.8836C54.2878 74.1302 52.4665 75.952 50.2191 75.952H6.78117C4.5338 75.952 2.71246 74.1301 2.71246 71.8836V29.0463Z"
                fill="#9B9B9B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.8557 1.35717C29.8557 0.807043 29.5248 0.314856 29.0205 0.105453C28.513 -0.107589 27.9299 0.00854146 27.5422 0.396194L0.397883 27.5209C0.0102235 27.9123 -0.10647 28.4934 0.10234 29.0012C0.313971 29.5087 0.807582 29.8381 1.35543 29.8381H23.074C26.8201 29.8381 29.8552 26.8001 29.8552 23.0569V1.35713L29.8557 1.35717ZM27.1432 4.63167V23.057C27.1432 25.3043 25.3233 27.1257 23.0745 27.1257H4.6326L27.1432 4.63167Z"
                fill="#9B9B9B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.49686 40.689H47.4715C48.2203 40.689 48.8277 40.0816 48.8277 39.3328C48.8277 38.584 48.2203 37.9766 47.4715 37.9766H9.49686C8.74807 37.9766 8.14062 38.584 8.14062 39.3328C8.14062 40.0816 8.7481 40.689 9.49686 40.689Z"
                fill="#9B9B9B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.49686 48.8218H47.4715C48.2203 48.8218 48.8277 48.2144 48.8277 47.4656C48.8277 46.7169 48.2203 46.1094 47.4715 46.1094H9.49686C8.74807 46.1094 8.14062 46.7169 8.14062 47.4656C8.14062 48.2144 8.7481 48.8218 9.49686 48.8218Z"
                fill="#9B9B9B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.49686 56.9625H28.4842C29.233 56.9625 29.8404 56.355 29.8404 55.6062C29.8404 54.8575 29.2329 54.25 28.4842 54.25H9.49686C8.74807 54.25 8.14062 54.8575 8.14062 55.6062C8.14062 56.355 8.7481 56.9625 9.49686 56.9625Z"
                fill="#9B9B9B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M36.6219 56.9625H47.4718C48.2205 56.9625 48.828 56.355 48.828 55.6062C48.828 54.8575 48.2205 54.25 47.4718 54.25H36.6219C35.8734 54.25 35.2656 54.8575 35.2656 55.6062C35.2656 56.355 35.8734 56.9625 36.6219 56.9625Z"
                fill="#9B9B9B"
              />
            </svg>

            <Typography
              className="g-font-family-kern"
              sx={{ fontSize: 12 }}
              mt={1.2}
            >
              VITAMIN D
            </Typography>
          </Box>
        ))}
      </CustomGrid>
    </Box>
  );
}

export default CertificatesOfOwnershipTab;

const CustomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, minmax(0, 1fr));
  row-gap: 3.5rem;
`;

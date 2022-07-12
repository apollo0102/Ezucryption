import { Typography, Box } from "@mui/material";
import { faqs } from "./faqs";
import CustomAccordion from "./CustomAccordion";
import styles from "./works.module.scss";

export default function FrequentlyAskedQuestions() {
  return (
    <Box pt={12} pb={20}>
      <Typography
        className="g-font-family-kern g-font-bold"
        sx={{ fontSize: 32 }}
        mb={5}
      >
        Frequently Asked Questions
      </Typography>

      {faqs.map((item, index) => (
        <CustomAccordion item={item} key={index} />
      ))}
    </Box>
  );
}

import {
  AccordionSummary,
  Accordion,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import styled from "@emotion/styled";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./works.module.scss";

interface IProps {
  item: {
    question: string;
    answer: {
      isList: boolean;
      listTitle?: string;
      listContent?: string[];
      content?: string;
    };
  };
}

export default function CustomAccordion(props: IProps) {
  const { item } = props;

  return (
    <Accordion className={styles.accordion} elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className={styles.expandMoreIcon} />}
        aria-controls="panel2a-content"
        id="panel2a-header"
        className="something"
        sx={{
          "& .MuiAccordionSummary-content": {
            margin: 0,
          },
          "& .something.MuiButtonBase-root-MuiAccordionSummary-root": {
            padding: 0,
          },
        }}
      >
        <Box py={2}>
          <Typography
            className="g-font-family-kern g-font-medium"
            sx={{ fontSize: 16 }}
          >
            {item.question}
          </Typography>
        </Box>
      </AccordionSummary>

      <AccordionDetails
        style={{
          paddingTop: "1rem",
          lineHeight: "1.8rem",
        }}
      >
        <div className={styles["descriptionOFFAo"]}>
          {item.answer.isList && item.answer.listTitle}

          {!item.answer.isList && item.answer.content}

          {item.answer.isList && (
            <ul className={styles["descriptionOFFAo"]}>
              {item.answer.listContent &&
                item.answer.listContent.map((ans, index) => (
                  <li className={styles["descriptionOFFAo"]}>{ans}</li>
                ))}
            </ul>
          )}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

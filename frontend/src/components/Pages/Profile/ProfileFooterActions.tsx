import React from "react";
import { Typography } from "@mui/material";

import Wrapper from "../../UI/Wrapper";
import GreyButton from "../../UI/Buttons/GreyButton";

function ProfileFooterActions() {
  return (
    <Wrapper display="flex" justifyContent="space-between" pt={30} pb={20}>
      <Typography className="g-font-family-kern g-font-bold">
        Help & Support
      </Typography>

      <GreyButton
        loading={false}
        title="delete account"
        customTitleClass={""}
        onClick={() => {
          console.log("I was clicked");
        }}
      />
    </Wrapper>
  );
}

export default ProfileFooterActions;

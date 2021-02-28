import React from "react";
import { Button } from "@material-ui/core";

const CreateButton = (props) => {
  return (
    <Button
      variant="contained"
      size="small"
      color={props.color}
      startIcon={props.startIcon}
    >
      {props.label}
    </Button>
  );
};

export default CreateButton;

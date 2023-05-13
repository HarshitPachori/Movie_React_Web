import { TextareaAutosize } from "@mui/material";
import React from "react";
import { Button, Form } from "react-bootstrap";

function ReviewForm({ handleSubmit, revText, labelText, defaultValue }) {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>{labelText}</Form.Label>
          <Form.Control
            ref={revText}
            as={TextareaAutosize}
            defaultValue={defaultValue}
          ></Form.Control>
        </Form.Group>
        <Button variant="outline-info" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ReviewForm;

import React from "react";
import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handlerInput = ({ target: { value } }) => {
    setText(value);

    if (value === "") {
      setMessage(null);
      setBtnDisabled(true);
    } else if (value.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={(e) => handlerInput(e)}
          />
          <Button type={"submit"} isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>
        <p className="message">{message}</p>
      </form>
    </Card>
  );
}

export default FeedbackForm;

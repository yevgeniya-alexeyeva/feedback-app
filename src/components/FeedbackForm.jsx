import React from "react";
import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";
import RaringSelect from "./RaringSelect";
import { v4 as uuidv4 } from "uuid";

function FeedbackForm({ addFeedback }) {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);

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

  const handleFeedback = (e) => {
    e.preventDefault();

    if (text.trim().length > 10) {
      addFeedback({ id: uuidv4(), rating, text });
    }
  };

  return (
    <Card>
      <RaringSelect select={(rating) => setRating(rating)} selected={rating} />
      <form onSubmit={handleFeedback}>
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

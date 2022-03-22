import React from "react";
import Card from "./shared/Card";
import { useState, useContext, useEffect } from "react";
import Button from "./shared/Button";
import RaringSelect from "./RaringSelect";
import { v4 as uuidv4 } from "uuid";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);

      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

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
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, { rating, text });

        setText("");
        setRating(10);
        setBtnDisabled(true);
      } else addFeedback({ id: uuidv4(), rating, text });
    }
  };

  return (
    <Card>
      <RaringSelect select={setRating} selected={rating} />
      <form onSubmit={handleFeedback}>
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={(e) => handlerInput(e)}
            value={text}
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

import React from "react";
import Card from "./shared/Card";
import { useState } from "react";
import Button from './shared/Button';

function FeedbackForm() {
  const [text, setText] = useState("");

  const handlerInput = (e) => {
    setText(e.target.value);
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
          <Button type={"submit"}>Submit</Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;

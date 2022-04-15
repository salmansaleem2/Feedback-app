import React, { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import SelectRating from "./SelectRating";

const FeebackForm = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleText = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text Must be atleast 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = { text, rating };
      handleAdd(newFeedback);

      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How Would you rate your services with us?</h2>
        <SelectRating select={(rating) => rating} />
        <div className="input-group">
          <input
            onChange={handleText}
            placeholder="write a review"
            type="text"
            value={text}
          />
          <Button type="submit" version={"primary"} isDisabled={btnDisabled}>
            send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeebackForm;

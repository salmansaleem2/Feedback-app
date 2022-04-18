import React, { useContext } from "react";
import FeedbackContext from "./FeedbackContext/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);

  //Calculate Rating Average
  let avarage = feedback.reduce((acc, item) => {
    return acc + item.rating;
  }, 0);
  avarage = (avarage / feedback.length).toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(avarage) ? 0 : avarage}</h4>
    </div>
  );
};

export default FeedbackStats;

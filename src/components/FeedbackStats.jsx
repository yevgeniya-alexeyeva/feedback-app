import FeedbackContext from "./context/FeedbackContext";
import { useContext } from "react";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  const avg =
    feedback.reduce((acc, item) => acc + item.rating, 0) / feedback.length;

  return (
    <div className="feedbackStats">
      <h4>{feedback.length} Reviews</h4>
      <h4>
        Average rating: {isNaN(avg) ? 0 : avg % 1 === 0 ? avg : avg.toFixed(1)}
      </h4>
    </div>
  );
}

export default FeedbackStats;

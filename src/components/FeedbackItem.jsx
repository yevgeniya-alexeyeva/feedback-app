import { useContext } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, setFeedbackEdit } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="pink" />
      </button>
      <button
        className="edit"
        onClick={() => setFeedbackEdit({ item, edit: true })}
      >
        <FaEdit color="pink" />
      </button>
    </Card>
  );
}

FeedbackItem.prototypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;

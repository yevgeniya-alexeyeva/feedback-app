import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackList({ feedback, handleFeedback }) {
  return (
    <ul>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleFeedback={handleFeedback}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </ul>
  );
}

FeedbackList.prototypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;

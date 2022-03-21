import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types';


function FeedbackList({feedback, handleFeedback}) {
  return (
    <ul>{feedback.map((item) => (<FeedbackItem key={item.id} item={item}  handleFeedback={handleFeedback}/>))}</ul>
  )
}

FeedbackList.prototypes = {
    feedback: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    }))
}

export default FeedbackList;
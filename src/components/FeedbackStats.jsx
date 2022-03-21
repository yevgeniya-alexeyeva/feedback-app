import PropTypes from 'prop-types';

function FeedbackStats({feedback}) {

    const avg = feedback.reduce(((acc, item) => 
   acc + item.rating), 0) / feedback.length;
    
  return (
    <div className="feedbackStats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Avarage rating: {isNaN(avg) ? 0 : (avg % 1 === 0) ? avg : avg.toFixed(1)}</h4> 
    </div>
  )
}

FeedbackStats.prototypes = {
    feedback: PropTypes.array.isRequired,
}

export default FeedbackStats;
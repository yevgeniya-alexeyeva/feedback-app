import React from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import { FaTimes, FaEdit } from 'react-icons/fa';

function FeedbackItem({item,  handleFeedback}) {
  return (
    <Card >
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
        <button className='close' onClick={() => handleFeedback(item.id) }><FaTimes color='pink'/></button>
    </Card>
  )
}

FeedbackItem.prototypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem;